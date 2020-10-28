var pageEngine = {
    init : function(selector,colorArray){
        this.$e = $(selector);
        this.$sliderpage = false;
        this.colorArray = colorArray;
        return this;
    },
    addSection : function(className){
        this.$page = $('<div class="section"><div>').addClass(className);
        this.$sliderpage = false;
        this.$page.appendTo(this.$e);
        console.log('aa');
        return this;
    },
    addSlider : function(className){
        this.$slider = $('<div class="slider"/>').addClass(className).css({position:'relative'});
        this.$sliderpage = true;
        this.$slider.appendTo(this.$page);
        return this;
    },
    addComponent : function(config){
        var ocp = null;
        switch(config.type){
            case "base":
                ocp = ComponentFactory(config);
                break;
            case "sup":
                ocp = ComponentSup(config);
                break;
            case "fir":
                ocp = ComponerntFir(config);
                break;
        }
        this.$sliderpage ? this.$slider.append(ocp) : this.$page.append(ocp);
        return this;
    },
    bindEvent : function(){
        this.$e.find('.section').on({
            _leave : function(){
                $(this).find('.component').trigger('cpleave');
            },
            _load : function(){
                $(this).find('.component').trigger('cpload');
            }
        })
    },
    load : function(){
        var self = this;
        this.bindEvent();
        this.$e.myFullPage({
            colorArray : this.colorArray,
            onLeave : function(index){
                self.$e.find('.section').eq(index).trigger('_leave');
            },
            afterLoad : function(index){
                self.$e.find('.section').eq(index).trigger('_load');
            }
        })
        this.$e.find('.section').eq(0).trigger('_load');
    }

}
