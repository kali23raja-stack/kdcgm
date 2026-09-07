function toggleFullScreen(element) {
    let doc = document;
    let el = element instanceof HTMLElement ? element : doc.documentElement;
    
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement) {
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) { // Safari
            el.webkitRequestFullscreen();
        } else if (el.mozRequestFullScreen) { // Firefox
            el.mozRequestFullScreen();
        } else if (el.msRequestFullscreen) { // IE/Edge
            el.msRequestFullscreen();
        }
    } else {
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) { // Safari
            doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) { // Firefox
            doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) { // IE/Edge
            doc.msExitFullscreen();
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("dblclick", function() {
        toggleFullScreen(document.body);
    });
});
