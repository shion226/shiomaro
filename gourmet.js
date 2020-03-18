$(function(){
   $(".thumbnail1").on('mouseover touchend',function(){
     var dataUrl = $(this).attr('data-url');
     $("#main-image").attr('src',dataUrl);
   });
   $(".thumbnail2").on('mouseover touchend',function(){
     var dataUrl = $(this).attr('data-url');
     $("#main-image2").attr('src',dataUrl);
   });
   $(".thumbnail3").on('mouseover touchend',function(){
     var dataUrl = $(this).attr('data-url');
     $("#main-image3").attr('src',dataUrl);
   });
   $(".thumbnail4").on('mouseover touchend',function(){
     var dataUrl = $(this).attr('data-url');
     $("#main-image4").attr('src',dataUrl);
   });
   $(".thumbnail5").on('mouseover touchend',function(){
     var dataUrl = $(this).attr('data-url');
     $("#main-image5").attr('src',dataUrl);
   });
   $(".thumbnail6").on('mouseover touchend',function(){
     var dataUrl = $(this).attr('data-url');
     $("#main-image6").attr('src',dataUrl);
   });
   $(".thumbnail7").on('mouseover touchend',function(){
     var dataUrl = $(this).attr('data-url');
     $("#main-image7").attr('src',dataUrl);
   });
});
