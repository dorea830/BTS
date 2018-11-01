$(document).ready(function() {
    $(window).scroll( function(){
        $('.fade').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    });
});


 $(window).scroll( function(){
     $('.fadeinleft').each( function(i){
            
         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
         if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},500);
         }
            
     }); 
 });

  $(window).scroll( function(){
     $('.acro').each( function(i){
            
         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
         if( bottom_of_window > bottom_of_element ){
                $(this).animate({'font-size':'30px'},3000);
         }
            
     }); 
 });


$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});
