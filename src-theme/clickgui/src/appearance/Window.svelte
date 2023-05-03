<script>
    import Header from "./logistics/Header.svelte";

    // The height of the rendered window.
    const WINDOW_HEIGHT = 540;

    // The width of the rendered window.
    const WINDOW_WIDTH = 760;

    let isDefaultPositioned = true;

    //
    let x;

    //
    let y;

    const handleMoveWindow = (event) => {
        const detail = event.detail;

        isDefaultPositioned = detail.inDefaultPosition;

        //
        x = detail.x;
        y = detail.y;
    };

</script>

<div class="window">
    <div class="window-container {isDefaultPositioned ? 'centered' : 'moveable'}"
         style="--height: {WINDOW_HEIGHT}px; --width: {WINDOW_WIDTH}px; --x: {x}px; --y: {y}px;">
        <Header height="{WINDOW_HEIGHT}" width="{WINDOW_WIDTH}" on:moveWindow={handleMoveWindow}/>
    </div>
</div>

<style lang="scss">
    // TODO simplify
    @import "../clickgui/src/styles/colors";
    @import "../clickgui/src/styles/variables";

    .window {
        height: 100vh;
        overflow: hidden;
        user-select: none;
        width: 100vw;

        &-container {
            background-color: $windowContentBackgroundColor;
            border-radius: $windowBorderRadius;
            height: var(--height);
            position: absolute;
            width: var(--width);
        }

        .centered {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .moveable {
            left: var(--x);
            top: var(--y);
        }
    }
</style>
