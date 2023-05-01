<script>
    // The available screen height of the window.
    const SCREEN_HEIGHT = window.screen.height;

    // The available screen width of the window.
    const SCREEN_WIDTH = window.screen.width;

    //
    const WINDOW_HEIGHT = 700;

    //
    const WINDOW_WIDTH = 600;

    // The space between the end of the available screen space of the window.
    const SPACE_SIZE = 3;

    // The last possible upper value of the Y-axis.
    const TOP_Y = SPACE_SIZE;

    // The last possible lower value of the Y-axis.
    const BOTTOM_Y = (SCREEN_HEIGHT - WINDOW_HEIGHT) - SPACE_SIZE;

    // The last possible left value of the X-axis.
    const LEFT_X = SPACE_SIZE;

    // The last possible right value of the X-axis.
    const RIGHT_X = (SCREEN_WIDTH - WINDOW_WIDTH) - SPACE_SIZE;

    //
    let moving = false;

    //
    let x = 0;

    //
    let y = 0;

    //
    let previousX = 0;

    //
    let previousY = 0;

    const onMouseDown = (event) => {
      //
      previousX = event.screenX;
      previousY = event.screenY;

      //
      moving = true;
    }

    const onMouseUp = () => {
        //
        moving = false;
    }

    const onMouseMove = (event) => {
        if (moving === false) {
            return;
        }

        x += event.screenX - previousX;
        y += event.screenY - previousY;

        // the window cannot go beyond the visible edge on the left side
        if (y < TOP_Y) {
          y = TOP_Y;
        }

        //
        if (y > BOTTOM_Y) {
            y = BOTTOM_Y;
        }

        // the window cannot go beyond the visible edge on the right side
        if (x < LEFT_X) {
          x = LEFT_X;
        }

        //
        if (x > RIGHT_X) {
            x = RIGHT_X;
        }

        //
        previousX = event.screenX;
        previousY = event.screenY;
    };

    let fs = `--window-height: ${WINDOW_HEIGHT}px; --window-width: ${WINDOW_WIDTH}px; --x: ${x}px; --y: ${y}px;`

    // Registration of window events.
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", event => onMouseMove(event));
</script>

<!-- -->
<!-- -->
<div class="window-container">
    <div class="window" style="--window-height:{WINDOW_HEIGHT}px;--window-width:{WINDOW_WIDTH}px;--x:{x}px;--y:{y}px;">
        <div class="header" on:mousedown={onMouseDown}>

        </div>
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
        height: var(--window-height, 700px);
        width: var(--window-width, 600px);
        left: var(--x);
        top: var(--y);
        $rounded: 10px;
        border-radius: $rounded;

        //$x: var(--x, 0px);
        // TODO How to use CSS variables in SCSS?
        // https://sass-lang.com/documentation/breaking-changes/css-vars
        //@if 0px == $x {
        //    background-color: red;
        //}

        .header {
            height: 84px;
            background-color: $headerBackgroundColor;
            border-radius: $rounded $rounded 0 0;
        }
    }
</style>
