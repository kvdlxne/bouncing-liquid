<script>
    import { createEventDispatcher } from "svelte";

    //
    export let selectedCategory = null;

    //
    const dispatch = createEventDispatcher();

    // An array of all registered modules.
    const moduleArray = [];

    try {
        const iterator = client.getModuleManager().iterator();
        while (iterator.hasNext()) {
            const next = iterator.next();
            const name = next.getName();
            const category = next.getCategory().getReadableName();
            moduleArray.push({
                name: name.toLowerCase(),
                readableName: name,
                category: {
                    name: category.toLowerCase(),
                    readableName: category
                },
                isEnabled: next.getEnabled(),
                native: next
            });
        }
    } catch (error) {
        console.debug(error);

        // Uncomment lines below for browser testing.
        for (let i = 0; i < 150; i++) {
            const category = Math.floor(Math.random() * 8);
            moduleArray.push({
                name: `test-${i}`,
                readableName: `Test ${i}`,
                category: {
                    name: `test-${category}`,
                    readableName: `Test ${category}`
                },
                isEnabled: false,
                native: null
            });
        }
    }

    // Filtered array of all registered modules by selected category.
    $: filteredModuleArray = selectedCategory
        ? moduleArray.filter(module => module.category.name === selectedCategory.name)
        : [];

    const onClick = () => {

        dispatch("selectModule", {

        });
    };
</script>

<div class="side-bar">
    <div class="side-bar-container">
        {#each filteredModuleArray as {name, readableName}, name}
            <div class="side-bar-container-item" on:click={() => onClick()}>
                {readableName}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../clickgui/src/styles/colors";
    @import "../clickgui/src/styles/variables";

    .side-bar {
        width: 215px;
        height: 100%;
        background-color: $windowSideBarBackgroundColor;
        color: white;
        border-right: 1px solid darkgray;
        border-bottom-left-radius: $windowBorderRadius;
        overflow-y: auto;
        overflow-x: hidden;

        &-container {
            padding: 6px;

            &-item {
                padding: 6px;
                margin: 1px;
                font-size: 14px;
                transition: all 80ms ease-in;
                cursor: pointer;

                &:hover {
                    color: $liquidBounceRepresentativeColor;
                }
            }
        }
    }
</style>
