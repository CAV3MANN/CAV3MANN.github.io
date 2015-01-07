document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded.");

    viewport = document.getElementById('viewport');
    context = viewport.getContext('2d');
    textArt = viewport.getContext('2d');

    resize();

    setInterval(game, 1000 / 50);
});

addEventListener('resize', resize, false);