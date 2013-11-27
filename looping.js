function Looping(canvas) {

    var _update,
        _render,
        lastUpdate,
        ctx = document.getElementById(canvas).getContext("2d"),
        animFrame = window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    null;
    
    var loop = function() {
        var t = new Date().getTime();
        var delta = t - lastUpdate;

        _update(delta);
        _render(ctx);

        lastUpdate = new Date().getTime();
        animFrame(loop);
    };

    this.onupdate = function(update) {
        _update = update;
        return this;
    }

    this.onrender = function(render) {
        _render = render;
        return this;
    }
    
    this.start = function() {
        lastUpdate = new Date().getTime();
        animFrame(loop);
        return this;
    }
}