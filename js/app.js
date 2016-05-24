var app = function(){

    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var img3 = document.querySelector('.img3');
    
    var bindWindowOnResize = function(){
        window.onresize = function() {
            setTimeout(function(){ 
                clearAllDivHeights();
                setAllDivHeights();
            }, 500);
        };
    }

    var setAllDivHeights = function(){
        setDivHeight(".portfolio-website-title");
        setDivHeight(".portfolio-website-image");
        setDivHeight(".portfolio-website-caption");
    }

    var clearAllDivHeights = function(){
        clearDivHeight(".portfolio-website-title");
        clearDivHeight(".portfolio-website-image");
        clearDivHeight(".portfolio-website-caption");
    }

    var setDivHeight = function(elementClass){
        var maxHeight = 0;
        var divs = $(elementClass);
        $.each(divs, function () {
            var height = $(this).height();
            if (maxHeight < height){ maxHeight = height };        
        });
        divs.css('height', maxHeight + 'px');
    }

    var clearDivHeight = function(elementClass){
        var divs = $(elementClass);
        divs.css('height', 'auto');
    }       

    var bindWindowLoad = function(){
        $(window).load(function() {
            setAllDivHeights();
        });
    }

    var init = function(){
        bindWindowLoad();
        bindWindowOnResize();
    }
    
    init();
    
    return {        
    }
}