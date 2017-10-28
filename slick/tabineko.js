$(function() {
    $('.slide-li').slick({
          infinite: true,
          slidesToShow: 2,
          centerMode: true, //要素を中央寄せ
          centerPadding:'100px', //両サイドの見えている部分のサイズ
          autoplay:true, //自動再生
          accessibility: true,
          adaptiveHeight: true,
          variableWidth: true,
          responsive: [{
               breakpoint: 480,
                    settings: {
                         centerMode: true,
                         adaptiveHeight: true,
               }
          }]
     });
});
$(document).ready(function(){
  $(".slide-btn").click(function(){
    $(".slide-show").slideToggle();
  });
});