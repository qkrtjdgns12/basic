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


//탭메뉴
//.parent() 부모요소
//.removeClass("class명" )--> class 이름 지우기
// $('.btn li').click("어떤일")     --> 클래스명 btn의 자손중 li태그를 클릭하면 "어떤일"이 일어난다
//"어떤일"은 함수 --> function(){}
//function(){
//   실행문("어떤일")
// }
//$(this) --> 사용자가 클릭한 li
//.index() --> 태어날떄부터 가지고 있는 번호를 추출(index 번호)


$('.btn li').click(function(){
    $('.btn li').removeClass('active');
    $(this).addClass('active')

    //console.log($(this).index())

    //let index= 3; // = 은 같다는 의미가 아니다
    //우항을 좌항에 대입하라 (오른쪽의 내용을 왼쪽에 넣어라)
    //let --> 변수를 선언하는 방법 (index라는 변수가 생겼다)

    //console.log(index + 4)//7
    //index = index + 10
    //console.log(index)

    let index = $(this).index()
    console.log(index)


    //.hide() --> disply:none
    //.show() --> disply:block
    //.eq(index번호)
    $('.bwrap>div').hide();
    $('.bwrap>div').eq(index).show();


})

