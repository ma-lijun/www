
$(function(){
   $(".font-reduce").click(function(){
             var  size= parseInt($(".con-txt p").css("fontSize")) ;
              size--;
              $(".con-txt p").css("fontSize",size+"px");
      });
      $(".font-add").click(function(){
             var  size= parseInt($(".con-txt p").css("fontSize")) ;
              size++;
              $(".con-txt p").css("fontSize",size+"px");
      });
    
});
//新闻tab切换
$(function(){
    $(".ul-titlist li").click(function(){
      var tab=$(this).parent(".ul-titlist");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });


$(".single-list li").click(function(){
  var tab=$(this).parent(".single-list");
  var con=tab.attr("id");
  var on=tab.find("li").index(this);
  $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
  $(con).eq(on).show().siblings(con).hide();
});

});
//左侧的菜单切换
$(document).ready(function(){
    $('.nav li').hover(function () {
        $('.nav-bg').show();
        $('.nav li dl').hide();
        $(this).find("dl").slideDown('slow/400/fast');
    }, function () {
        
        $(this).find("dl").slideUp('slow/400/fast');
        $('.nav li dl').hide();
        $('.nav-bg').hide();
    });
});
// 返回顶部
$(document).ready(function(){
    $(function () {
        $(window).scroll(function(){
        if ($(window).scrollTop()>100){
        $("#back-to-top").fadeIn(1500);
    } else{
        $("#back-to-top").fadeOut(1500);
    }
        });
        $("#back-to-top").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
        });
    });
});