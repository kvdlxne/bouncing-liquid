import ApplicationView from "./application/Window.svelte"

// View of the rendered application.
export const view = new ApplicationView({
    target: document.body,
    props: {}
});
