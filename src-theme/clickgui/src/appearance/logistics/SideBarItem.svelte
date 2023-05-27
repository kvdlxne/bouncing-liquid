<script>
    import {createEventDispatcher} from "svelte";

    export let module;

    export let isActive;

    // Hook to create an custom event.
    const dispatch = createEventDispatcher();

    const onClick = () => {

    };
</script>

<div class="side-bar-item" class:active={isActive} on:click={onClick}>
    {module.readableName}
</div>

<style lang="scss">
    @import "../clickgui/src/styles/colors";
    @import "../clickgui/src/styles/variables";

    .side-bar-item {
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
</style>
