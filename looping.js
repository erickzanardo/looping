function Looping(canvas, game) {

    var ctx = document.getElementById(canvas).getContext("2d");
    var lastUpdate;

    var loop = function() {
        var t = new Date().getTime();
        var delta = t - lastUpdate;

        game.update(delta);
        game.render(ctx);

        lastUpdate = new Date().getTime();
        window.requestAnimationFrame(loop);
    };

    lastUpdate = new Date().getTime();
    window.requestAnimationFrame(loop);
}