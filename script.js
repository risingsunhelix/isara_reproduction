


$(function(){
     alert('本ページはデザインのみを実装したサイトです。\n記載されているサービスは本ページでは行っておりません');

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
    $answer.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $answer.slideUp();
    $(this).find('span').html('<i class="fas fa-chevron-down"></i>');
    // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
    } else {
    $answer.addClass('open');
    // slideDownメソッドを用いて、$answerを表示してください
    $answer.slideDown();
    $(this).find('span').html('<i class="fas fa-chevron-up"></i>');
    // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
    }
  });

$('.flow-list-item').click(function() {
var $detail = $(this).find('.flow-list-detail');
if($detail.hasClass('open')) {
$detail.removeClass('open');
// slideUpメソッドを用いて、$answerを隠してください
$detail.slideUp();
$(this).find('span').html('<i class="fas fa-chevron-down"></i>');
// 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
} else {
$detail.addClass('open');
// slideDownメソッドを用いて、$answerを表示してください
$detail.slideDown();
$(this).find('span').html('<i class="fas fa-chevron-up"></i>');
// 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
}
});



$('#scroll').click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');

});


$(window).scroll(function(){
  if($(this).scrollTop()>300){
    $('#scroll').fadeIn();
  }else{
    $('#scroll').fadeOut();
  }
});

$('#request-btn').click(function(){
  var form =$('.form').offset().top;
  $('html, body').animate({scrollTop:form-60}, 'slow');
  return false;
});
$('#request-btn2').click(function(){
  var form =$('.form').offset().top;
  $('html, body').animate({scrollTop:form-60}, 'slow');
  return false;
});

$('#request-btn3').click(function(){
  var form =$('.form').offset().top;
  $('html, body').animate({scrollTop:form-60}, 'slow');
  return false;
});

});
