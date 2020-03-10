
// topに戻るボタン
$(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
  
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });





//opens
  $(function(){
    $(".open").click(function(){
      $("#slideBox").slideToggle("slow");
    });
});

$(function(){
    $(".open1").click(function(){
      $("#slideBox1").slideToggle("slow");
    });
});

$(function(){
    $(".open2").click(function(){
      $("#slideBox2").slideToggle("slow");
    });
});

$(function(){
  $(".open3").click(function(){
    $("#slideBox3").slideToggle("slow");
  });
});



  //スライドショー
  $(function(){
        $("img.ChangePhoto").click(function(){
            var ImgSrc = $(this).attr("src");
            var ImgAlt = $(this).attr("alt");
            $("img#MainPhoto").attr({src:ImgSrc,alt:ImgAlt});
            $("img#MainPhoto").hide();
            $("img#MainPhoto").fadeIn("slow");
            return false;
        }); 
    });
