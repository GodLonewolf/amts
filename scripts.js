
const btn = document.getElementById('fullscreen-btn');

btn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen(document.documentElement);
    }
});

function enterFullscreen(element) {
    element.requestFullscreen?.();
}

function exitFullscreen() {
    document.exitFullscreen?.();
}