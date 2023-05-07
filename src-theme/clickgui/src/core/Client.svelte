<script>
    const ModuleCategory = class {

        constructor(readableName) {
            this.name = readableName.toLowerCase();
            this.readableName = readableName;
        }
    }

    const Module = class {

        constructor(readableName, category, isEnabled, native) {
            this.name = readableName.toLowerCase();
            this.readableName = readableName;
            this.category = category;
            this.isEnabled = isEnabled;
            this.native = native;
        }
    }

    //
    export let categories = [];

    // An array of all registered modules.
    export let modules = [];

    try {
        client.getModuleManager().getCategories().forEach(it => categories.push({
            name: it.toLowerCase(),
            readableName: it
        }));

        const iterator = client.getModuleManager().iterator();
        while (iterator.hasNext()) {
            const next = iterator.next();
            const name = next.getName();
            const category = next.getCategory().getReadableName();
            modules.push({
                name: name.toLowerCase(),
                readableName: name,
                category: {
                    name: category.toLowerCase(),
                    readableName: category
                },
                isEnabled: next.getEnabled(),
                native: next
            });
        }
    } catch (error) {
        for (let i = 0; i < 8; i++) {
            categories.push(new ModuleCategory(
                `Test ${i}`
            ));
        }
        for (let i = 0; i < 150; i++) {
            modules.push(new Module(
                `Test ${i}`,
                categories[Math.floor(Math.random() * 8)],
                false,
                null
            ));
        }
    }
</script>


