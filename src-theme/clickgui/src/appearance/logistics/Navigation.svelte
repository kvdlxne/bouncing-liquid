<script>
    import { createEventDispatcher } from "svelte";
    import { getCategoryArray } from "../../core/unsafe-client";

    //
    const dispatch = createEventDispatcher();

    const onClick = (category) => {
        dispatch("selectCategory", {
            selectedCategory: category
        });
        console.debug(`Selected ${category.name} category.`);
    };
</script>

<div class="navigation">
    {#each getCategoryArray() as category}
        <div class="navigation-item" on:click={() => onClick(category)}>
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
