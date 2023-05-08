<script>
    import Header from "./logistics/Header.svelte";
    import SideBar from "./logistics/SideBar.svelte";

    // The height of the rendered window.
    const WINDOW_HEIGHT = 540;

    // The width of the rendered window.
    const WINDOW_WIDTH = 760;

    // The space between the end of the available screen space of the window.
    const SPACE_SIZE = 3;

    // The last possible upper value of the Y-axis.
    const TOP_Y = SPACE_SIZE * 2;

    // The last possible lower value of the Y-axis.
    const BOTTOM_Y = (window.innerHeight - WINDOW_HEIGHT) - SPACE_SIZE;

    // The last possible left value of the X-axis.
    const LEFT_X = SPACE_SIZE;

    // The last possible right value of the X-axis.
    const RIGHT_X = (window.innerWidth - WINDOW_WIDTH) - SPACE_SIZE;

    //
    let isDefaultPositioned = true;

    //
    let x = 0;

    //
    let y = 0;

    //
    let selectedCategory;

    let selectedModule;

    //
    $: isCentered = isDefaultPositioned ? "centered" : "movable";

    const handleMoveWindow = (event) => {
        const detail = event.detail;

        //
        isDefaultPositioned = detail.inDefaultPosition;

        //
        x = detail.x;
        y = detail.y;

        // The current position cannot go beyond the top of the screen.
        if (TOP_Y > y) {
            y = TOP_Y;
        }

        // The current position cannot go beyond the bottom of the screen.
        if (BOTTOM_Y < y) {
            y = BOTTOM_Y;
        }

        // the current position cannot go beyond the lef of the screen.
        if (LEFT_X > x) {
            x = LEFT_X;
        }

        // the current position cannot go beyond the right of the screen.
        if (RIGHT_X < x) {
            x = RIGHT_X;
        }
    };

    const handleSelectCategory = (event) => {
        const detail = event.detail;

        //
        selectedCategory = detail.selectedCategory
        console.log(selectedCategory, detail.selectedCategory)
    };

    const handleSelectModule = (event) => {

    };
</script>

<div class="window">
    <div class="window-container {isCentered}"
         style="--height: {WINDOW_HEIGHT}px; --width: {WINDOW_WIDTH}px; --x: {x}px; --y: {y}px;">

        <Header on:moveWindow={handleMoveWindow} on:selectCategory={handleSelectCategory}/>

        {#if selectedCategory}
            <SideBar {selectedCategory} on:selectModule={handleSelectModule}/>
        {:else}
            <div class="welcome-information">

            </div>
        {/if}


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
            display: flex;
            flex-direction: column;
        }

        .centered {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .movable {
            left: var(--x);
            top: var(--y);
        }
    }
</style>
