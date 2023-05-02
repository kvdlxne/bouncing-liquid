import ApplicationView from "./appearance/Window.svelte"

// View of the rendered application.
export const view = new ApplicationView({
    target: document.body,
    props: {}
});
