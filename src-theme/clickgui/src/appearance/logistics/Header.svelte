<script>
    import { createEventDispatcher } from "svelte";
    import Navigation from "./Navigation.svelte";

    //
    const dispatch = createEventDispatcher();

    // Determines whether the window is in the default position.
    let isDefaultPositioned = true;

    // Determines whether the window is currently moving.
    let isMoving = false;

    // The initial position of the window on the X-axis.
    let initialX = 0;

    // The initial position of the window on the Y-axis.
    let initialY = 0;

    // The current position of the window on the X-axis.
    let currentX = 0;

    // The current position of the window on the Y-axis.
    let currentY = 0;

    /**
     * Updates the initial position of the mouse cursor.
     *
     * @param event MouseEvent
     */
    const updateInitialPosition = (event) => {
        initialX = event.x;
        initialY = event.y;
    };

    /**
     * Updates the current position of the mouse cursor.
     *
     * @param event MouseEvent.
     */
    const updateCurrentPosition = (event) => {
        //
        if (isDefaultPositioned) {
            //
            currentX = initialX - event.offsetX;
            currentY = initialY - event.offsetY;

            //
            isDefaultPositioned = false;
            return;
        }

        //
        currentX += event.x - initialX;
        currentY += event.y - initialY;
    }

    const onMouseDown = (event) => {
        // Sets the initial coordinates (X, Y) at the mouse down position.
        updateInitialPosition(event);

        // Enables the possibility to move window.
        isMoving = true;
    };

    const onMouseUp = () => {
        // Disables the possibility to move window.
        isMoving = false;
    };

    const onMouseMove = (event) => {
        if (!isMoving) {
            return;
        }

        updateCurrentPosition(event);

        dispatch(
            "moveWindow", {
                inDefaultPosition: isDefaultPositioned,
                x: currentX,
                y: currentY
            }
        );

        // Sets the initial position as the current cursor position.
        updateInitialPosition(event);
    };

    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", event => onMouseMove(event));
</script>

<div class="header" on:mousedown={onMouseDown}>
    <div class="header-container">
        <h4>LiquidBounce</h4>
        <Navigation on:selectCategory/>
    </div>
</div>

<style lang="scss">
    // TODO simplify
    @import "../clickgui/src/styles/colors";
    @import "../clickgui/src/styles/variables";

    .header {
        align-items: center;
        background-color: $windowHeaderBackgroundColor;
        border-bottom: 2px solid #0a0a0a;
        border-radius: $windowBorderRadius $windowBorderRadius 0 0;
        color: white;
        display: flex;
        min-height: 60px;

        &-container {
            padding: 0 10px 0 10px;
            display: flex;
            align-items: center;
            width: 100%;

            h4 {
                margin-right: auto;
            }
        }
    }
</style>
