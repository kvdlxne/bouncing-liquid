<script>
    import {createEventDispatcher} from "svelte";
    import {getModuleArray} from "../../core/unsafe-client";

    // Identifier name of the selected category.
    export let name;

    // Hook to create an custom event.
    const dispatch = createEventDispatcher();

    // An array of all registered modules.
    const moduleArray = getModuleArray();

    //
    let activeModuleName = "";

    // Filtered array of all registered modules by selected category.
    $: filteredModuleArray = name
        ? moduleArray.filter(module => module.category.name === name)
        : [];

    const onClick = module => {
        activeModuleName = module.name;
        dispatch("selectModule", {selectedModule: module});
    };
</script>

<div class="side-bar">
    {#each filteredModuleArray as module}
        <div class="side-bar-item" class:active={activeModuleName === module.name} on:click={() => onClick(module)}>
            {module.readableName}
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../clickgui/src/styles/colors";
    @import "../clickgui/src/styles/variables";

    .side-bar {
        width: 215px;
        height: 100%;
        background-color: $windowSideBarBackgroundColor;
        color: white;
        border-right: 2px solid #0a0a0a;
        border-bottom-left-radius: $windowBorderRadius;
        overflow-y: auto;
        overflow-x: hidden;

        &-item {
            padding: 8px 0 8px 12px;
            margin: 2px 0 4px 0;
            font-size: 14px;
            transition: all 80ms ease-in;
            cursor: pointer;

            &:first-child {
                margin-top: 0;
            }

            &:hover:not(.active) {
                background-color: #2d2d2d;
            }
        }

        .active {
            border-left: 2px red solid;
            background-color: #323232;
        }
    }
</style>
