(function($) {
  "use strict";

  var $navbar = $(".nav"),
      y_pos = $navbar.offset().top,
      height = $navbar.height();

  //scroll top 0 sticky
  $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > 0) {
        $navbar.addClass("sticky");
      } else {
        $navbar.removeClass("sticky");  
      }
  });

})(jQuery, undefined);

$(".menu").click(function(){
$("#nav").toggleClass("open");
});