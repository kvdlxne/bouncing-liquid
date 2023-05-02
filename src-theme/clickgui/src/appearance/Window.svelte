<script>
    import Header from "./logistics/Header.svelte";

    // The height of the rendered window.
    const WINDOW_HEIGHT = 540;

    // The width of the rendered window.
    const WINDOW_WIDTH = 760;

    //
    let x = 0;

    //
    let y = 0;

    const handleMoveWindow = (event) => {
        const detail = event.detail;

        //
        x = detail.x;
        y = detail.y;
    };

</script>

<div class="window-container">
    <div class="window" style="--window-height:{WINDOW_HEIGHT}px;--window-width:{WINDOW_WIDTH}px;--x:{x}px;--y:{y}px;">
        <Header height="{WINDOW_HEIGHT}" width="{WINDOW_WIDTH}" on:moveWindow={handleMoveWindow}/>
    </div>
</div>

<style lang="scss">
    @import "../clickgui/src/styles/colors";

    .window-container {
        height: 100vh;
        width: 100vw;
        position: relative;
        overflow: hidden;
    }

    .window {
        position: absolute;
        background-color: $windowContentBackgroundColor;
        height: var(--window-height);
        width: var(--window-width);
        left: var(--x);
        top: var(--y);
        $rounded: 0px;
        border-radius: $rounded;

        //$x: var(--x, 0px);
        // TODO How to use CSS variables in SCSS?
        // https://sass-lang.com/documentation/breaking-changes/css-vars
        //@if 0px == $x {
        //    background-color: red;
        //}
    }
</style>
