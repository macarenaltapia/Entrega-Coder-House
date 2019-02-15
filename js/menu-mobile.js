$('.container-menu').hide();

$('.container-menu').css ({
   right:'-100%'
});

$('.icon-menu').on('click', function () {
   $('.container-menu').show();
   $('.container-menu').animate ({
       right: '0'
   }, 'swing');
   
   $('main').addclass("main2");
   
});

$('.close').on('click', function() {
   $('.container-menu').animate ({
       right:'100%'
   }, 'swing');
   $('main').removeclass("main2");
});