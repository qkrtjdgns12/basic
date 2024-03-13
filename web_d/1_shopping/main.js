//find() --> css에서 (.aa .bb)띄워쓰기와 비슷
$('.gnb>ul>li').hover(
function(){
//마우스를 올렸을때 할 일

//console.log($(this))
$(this).find('.submenu').stop().slideDown(); 
},function(){
//마우스가 떠나면 할 일
$(this).find('.submenu').stop().slideUp(); 
}
)