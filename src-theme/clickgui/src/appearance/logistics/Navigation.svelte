<script>
    import { createEventDispatcher } from "svelte";

    //
    const dispatch = createEventDispatcher();

    // An array of all registered categories.
    const categoryArray = [];

    try {
        client.getModuleManager().getCategories().forEach(category => {
            categoryArray.push({
                name: category.toLowerCase(),
                readableName: category
            })
        });
    } catch (error) {
        console.debug(error);

        // Uncomment lines below for browser testing.
        for (let i = 0; i < 8; i++) {
            categoryArray.push({
                name: `test-${i}`,
                readableName: `Test ${i}`
            });
        }
    }

    const onMouseDown = (category) => {
        dispatch("selectCategory", {
            selectedCategory: category
        });
        console.debug(`Selected ${category.name} category.`);
    };
</script>

<div class="navigation">
    {#each categoryArray as category}
        <div class="navigation-item" on:click={() => onMouseDown(category)}>
            {category.readableName}
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../clickgui/src/styles/colors";

    .navigation {
        display: flex;

        &-item {
            padding: 8px;
            margin: 2px;
            font-size: 15px;
            transition: all 100ms ease-in;
            cursor: pointer;

            &:hover {
                color: $liquidBounceRepresentativeColor;
            }
        }
    }
</style>
