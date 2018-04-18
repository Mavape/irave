requirejs(['./common', 'app/pageManager'], function(_, pm) {
    let locked = true;

    $("#lock").click(function () {
        if (locked) {
            $("#lock-ico").removeClass("oi-lock-locked").addClass("oi-lock-unlocked");

            if (pm.hasPrevious()) {
                pm.change_to_previous();
            } else {
                pm.change_page("menu.html");
            }

            pm.unlock();
        } else {
            pm.change_page("home.html");
            $("#lock-ico").addClass("oi-lock-locked").removeClass("oi-lock-unlocked");
            pm.lock();
        }
        locked = !locked;
    });

    $("#back").click(function() {
        pm.back();
    });

    pm.change_page("home.html");
});