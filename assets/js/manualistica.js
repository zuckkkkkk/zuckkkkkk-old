var globString = "#flipbook-" + 1;

function changeGlobString(val) {
    globString = "#flipbook-" + val;
}
$(document).keydown(function(e) {
    switch (e.keyCode) {
        case 37:
            $(globString).turn('previous');
            break;
        case 39:
            $(globString).turn('next');
            break;
    }

});