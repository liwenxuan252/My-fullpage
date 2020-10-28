var ComponentSup = function(config){
    var $p = $('<div class="component text"></div>');
    config.text && $p.text(config.text);
    config.css && $p.css(config.css);
    config.width && $p.css('width', config.width);
    $p.on('cpleave', function () {
        var self = this;
        setTimeout(function () {
            config.animateOut && $(self).animate(config.animateOut);
            console.log('leave')
        }, config.delay || 0)
    });

    $p.on('cpload', function () {
        var self = this
        setTimeout(function () {
            config.animateIn && $(self).animate(config.animateIn);
            console.log('load')
        }, config.delay || 0)
    });
    return $p;
}