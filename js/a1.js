$(document).ready(function(){
    
        animationHover('.a1', 'swing');
        animationHover('.a2', 'swing');
        animationHover('.a3', 'swing');
        animationHover('.a4', 'swing');
        animationHover('.sign2', 'flip');
        animationHover('.but1', 'flip');
        animationHover('.homebtn', 'rubberBand');

        function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 4000);         
        });
}
    
});