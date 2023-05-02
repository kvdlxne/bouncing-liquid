<script>
    import { createEventDispatcher } from "svelte";

    // The height of the rendered window.
    export let height = 0;

    // The width of the rendered window.
    export let width = 0;

    // The space between the end of the available screen space of the window.
    const SPACE_SIZE = 3;

    // The last possible upper value of the Y-axis.
    const TOP_Y = SPACE_SIZE * 2;

    // The last possible lower value of the Y-axis.
    const BOTTOM_Y = (window.innerHeight - height) - SPACE_SIZE;

    // The last possible left value of the X-axis.
    const LEFT_X = SPACE_SIZE;

    // The last possible right value of the X-axis.
    const RIGHT_X = (window.innerWidth - width) - SPACE_SIZE;

    //
    const dispatch = createEventDispatcher();

    //
    let isMoving = false;

    //
    let initialX = 0;

    //
    let initialY = 0;

    //
    let currentY = 0;

    //
    let currentX = 0;

    const onMouseDown = (event) => {
        // Sets the initial coordinates (X, Y) at the mouse down location.
        initialY = event.screenY;
        initialX = event.screenX;

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

        //
        const x = event.screenX;
        const y = event.screenY;

        //
        currentY += y - initialY;
        currentX += x - initialX;

        // the window cannot go beyond the visible edge on the left side
        if (TOP_Y > currentY) {
            currentY = TOP_Y;
        }

        //
        if (BOTTOM_Y < currentY) {
            currentY = BOTTOM_Y;
        }

        // the window cannot go beyond the visible edge on the right side
        if (LEFT_X > currentX) {
            currentX = LEFT_X;
        }

        //
        if (RIGHT_X < currentX) {
            currentX = RIGHT_X;
        }

        //
        dispatch(
            "moveWindow", {
                x: currentX,
                y: currentY
            }
        );

        //
        initialX = x;
        initialY = y;
    };

    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", event => onMouseMove(event));
</script>

<div class="header" on:mousedown={onMouseDown}>
    <div class="header-container">

    </div>
</div>

<style lang="scss">

    .header {
        height: 60px;
        background-color: rgb(24, 24, 24);
        border-radius: 5px 5px 0 0;

        display: flex;
        align-items: center;
        padding: 0 5px 0 5px;
        color: white;

        &-container {

        }
    }


</style>
