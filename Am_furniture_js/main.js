     jQuery(document).ready(function () {
           var slideWidth = $('.collection-images ul li').width();
           $('.collection-images ul li:last-child').prependTo('.collection-images ul');
      
           function moveLeft() {
               $('.collection-images ul').animate({left: + slideWidth}, 200, function () {
                   $('.collection-images ul li:last-child').prependTo('.collection-images ul');
                   $('.collection-images ul').css('left', '');
               });
           };
      
           function moveRight() {
               $('.collection-images ul').animate({left: - slideWidth}, 200, function () {
                   $('.collection-images ul li:first-child').appendTo('.collection-images ul');
                   $('.collection-images ul').css('left', '');
               });
           };
      
           $('.prev').click(function () {
               moveLeft();
           });
      
           $('.next').click(function () {
               moveRight();
           });

           $(".product-images ul").css("margin-left","-362px");
           function movePRight() {
             $('.product-images ul').animate({left:"-343px"}, 400, function () {
                 $('.product-images ul li:first-child').appendTo('.product-images ul');
                 $('.product-images ul').css('left', '');
             });
         };
           function movePLeft(){
               $(".product-images ul").animate({left:"343px"},400,function(){
                   $(".product-images ul li:last-child").prependTo(".product-images ul");
                   $(".product-images ul").css("left","");
               })
           }
          
         $('.product-next').click(function () {
             movePRight();
         });

        $(".product-prev").click(function(){
            movePLeft();
        })
       

      
       });    