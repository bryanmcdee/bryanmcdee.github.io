$(document).ready(function () {
    setAllDivHeights(); 
});

window.onresize = function() {
    setTimeout(function(){ 
        setAllDivHeights();
    }, 3000);
};

var setAllDivHeights = function(){
    setDivHeight(".portfolio-website-title");
    setDivHeight(".portfolio-website-image");
    setDivHeight(".portfolio-website-caption");
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