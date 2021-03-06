//config的值：

// {
//     type: 'base',
//     className: 'duyi',
//     width: 100,
//     height: 50,
//     text: '渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端编程教育公司大踏步的，渡一 Dream Factory',
//     center: true,
//     css: {
//         position: 'absolute',
//         opacity: 0,
//         bottom: 0,
//         backgroundImage: 'url(./src/img/dialog.jpg)',
//         backgroundSize: '100% 100%',                        
//         padding: '10px 15px 10px 15px',
//         textAlign: 'justify',
//         fontSize: '18px',
//         fontWeight: '900',
//         lineHeight: '25px'
//     },
//     animateIn: {
//         opacity: 1,
//         bottom: 140,
//     },
//     animateOut: {
//         opacity: 0,
//         bottom: 0
//     },
//     delay: 200,
//     event: {
//         click: function () {
//             alert($(this).text());
//         }
//     }
// }


//生成section里面的内容
// var componentFactory = function (config){
//     var $Div = $('<div class="component base"></div>');
//     config.className && $Div.addClass(config.className);
//     config.width && $Div.css('width',config.width);
//     config.height && $Div.css('height',config.height);
//     config.text && $Div.text(config.text);
//     config.center && $Div.css({positon:'absolute',left:'50%',marginLeft:-config.width / 2});
//     config.css && $Div.css(config.css);
//     if(config.event){
//         for(var prop in config.event){
//             $Div.on(prop,config.event[prop]);
//         }
//     }

//     $Div.on('cpleave',function(){
//         setTimeout(function(){
//             config.animateOut && $Div.animate(config.animateOut);
//             console.log('cpleave')
//         },config.delay || 0)
//     })

//     $Div.on('cpload',function(){
//         setTimeout(function(){
//             config.animateIn && $Div.animate(config.animateIn);
//             console.log('cpload')
//         },config.delay || 0)
//     })
//     return $Div;
// }$

//生成section里面的内容
var ComponentFactory = function (config) {
    var $Div = $('<div class="component base"><p></p></div>');
    // config 定制化 $Div
    config.className && $Div.addClass(config.className)
    config.width && $Div.css('width', config.width);
    config.height && $Div.css('height', config.height);
    config.text && $Div.text(config.text);
    config.center && $Div.css({position: 'absolute', left: '50%', marginLeft: -config.width / 2});
    config.css && $Div.css(config.css);
    if (config.event) {
        for (var prop in config.event) {
            $Div.on(prop, config.event[prop]);
        }
    }

    $Div.on('cpleave', function () {
        var self = this;
        setTimeout(function () {
            config.animateOut && $(self).animate(config.animateOut);
            console.log('leave')
        }, config.delay || 0)
    });

    $Div.on('cpload', function () {
        var self = this
        setTimeout(function () {
            config.animateIn && $(self).animate(config.animateIn);
            console.log('load')
        }, config.delay || 0)
    });

    return $Div;
}