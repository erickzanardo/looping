function Looping(canvas) {

    var _update,
        _render,
        lastUpdate,
        ctx = document.getElementById(canvas).getContext("2d"),
        _keypressHandler,
        animFrame = window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    null;

    var handleInputBinds = function() {
        document.body.onkeypress = function(e) {
            var key = (e.keyCode || e.which);
            if (_keypressHandler) {
                _keypressHandler(key);
            }
        }
    }
    
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

    this.keypress = function(_c) {
        _keypressHandler = _c;
        return this;
    }

    this.start = function() {
        handleInputBinds();
        lastUpdate = new Date().getTime();
        animFrame(loop);
        return this;
    }

}