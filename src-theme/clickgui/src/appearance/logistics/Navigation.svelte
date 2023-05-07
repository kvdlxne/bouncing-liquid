<script>
    import Client from "../../core/Client.svelte";

    let categories = [];

    export let currentCategory = null;

    // ONLY FOR TESTING IN BROWSER
    // categories = [
    //     "Combat",
    //     "Player",
    //     "Movement",
    //     "Render",
    //     "World",
    //     "Misc",
    //     "Exploit",
    //     "Fun"
    // ];

    const onMouseDown = (category) => {
        currentCategory = category;
    };
</script>

<!-- Comment the line below for testing in browser. -->
<Client bind:categories/>

<div class="navigation">
    {#each categories as category}
        <div class="navigation-item" on:mousedown={() => onMouseDown(category)}>
            {!category.readableName ? category : category.readableName}
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../clickgui/src/styles/colors";

    .navigation {
        display: flex;

        &-item {
            padding: 8px;
            margin: 2px;
            font-size: 15px;
            transition: all 200ms ease-in-out;
            cursor: pointer;

            &:hover {
                color: $liquidBounceRepresentativeColor;
            }
        }
    }
</style>
