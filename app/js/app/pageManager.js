define(function (require) {
    let loader = require('app/loader');

    let previous = null;
    let current = null;

    function change_page(page) {
        console.log("Changing page to " + page);

        if (page === null)
            return;

        if (previous !== current)
            previous = current;

        if (current === page)
            return; // If we're already in the page, bail.

        current = page;
        loader.load_page(page);
    }

    function hasPrevious() {
        return previous !== null;
    }

    function change_to_previous() {
        change_page(previous);
    }

    function open_dialog(page) {
        loader.load_dialog(page);
    }

    function close_dialog() {
        loader.close_dialog();
    }

    return {
        // Override lock and back to define specific behaviour
        back: () => {},
        lock: () => {},
        unlock: () => {},
        change_page: change_page,
        open_dialog: open_dialog,
        change_to_previous: change_to_previous,
        close_dialog: close_dialog,
        hasPrevious: hasPrevious
    }
});

console.log("Loaded page manager!");
