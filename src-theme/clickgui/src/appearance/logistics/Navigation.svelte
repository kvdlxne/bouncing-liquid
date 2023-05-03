<script>
    import Client from "../../core/Client.svelte";

    let categories = [];

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

</script>

<!-- Comment the line below for testing in browser. -->
<Client bind:categories/>

<div class="navigation">
    <div class="navigation-container">
        {#each categories as category}
            <div class="navigation-container-item">
                {!category.readableName ? category : category.readableName}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">

    .navigation {


        &-container {
            display: flex;
            align-items: center;
            justify-content: center;

            &-item {

            }
        }
    }

</style>
