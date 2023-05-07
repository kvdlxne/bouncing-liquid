<script>
    import Client from "../../core/Client.svelte";

    // An array of all registered modules.
    let modules = [];

    export let category = null;

    const getFilteredModules = (category) => {
        if (!category) {
            return [];
        }
        return modules.filter(it => it.category.name === category.name);
    }
</script>

<!-- Comment the line below for testing in browser. -->
<Client bind:modules/>

<div class="side-bar">
    <div class="side-bar-container">
        {#each getFilteredModules(category) as module}
            <div class="side-bar-container-item">
                {!module.readableName ? module : module.readableName}
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
                transition: all 120ms ease-in-out;
                cursor: pointer;

                &:hover {
                    color: $liquidBounceRepresentativeColor;
                }
            }
        }
    }
</style>
