export const getCategoryArray = () => {
    const categoryArray = [];
    try {
        client.getModuleManager().getCategories().forEach(category => {
            categoryArray.push({
                name: category.toLowerCase(),
                readableName: category
            })
        });
    } catch (error) {
        console.debug(error);

        // Uncomment lines below for browser testing.
        for (let i = 0; i < 8; i++) {
            categoryArray.push({
                name: `test-${i}`,
                readableName: `Test ${i}`
            });
        }
    }
    return categoryArray;
};

export const getModuleArray =() => {
    const moduleArray = [];
    try {
        const iterator = client.getModuleManager().iterator();
        while (iterator.hasNext()) {
            const next = iterator.next();
            const name = next.getName();
            const category = next.getCategory().getReadableName();
            moduleArray.push({
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
        console.debug(error);

        // Uncomment lines below for browser testing.
        for (let i = 0; i < 150; i++) {
            const category = Math.floor(Math.random() * 8);
            moduleArray.push({
                name: `test-${i}`,
                readableName: `Test ${i}`,
                category: {
                    name: `test-${category}`,
                    readableName: `Test ${category}`
                },
                isEnabled: false,
                native: null
            });
        }
    }
    return moduleArray;
};
