<script>
    //
    export let categories = [];

    //
    export let modules = [];

    try {
        client.getModuleManager().getCategories().forEach(it => {
            categories.push({
                name: it.toLowerCase(),
                readableName: it
            });
        });

    } catch (error) {
        console.error(error);
    }
</script>


