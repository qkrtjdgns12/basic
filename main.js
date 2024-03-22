
//gnb
$('.gnb').hover(function(){
    // 마우스가 진입했을떄 할 일
    // $('.subnav').show()
    // $('.subnav').fadeIn()
    $('.subnav').stop().slideDown()
},function(){
    // 마우스가 벗어나면 할일
    // $('.subnav').hide()
    // $('.subnav').fadeOut()
    $('.subnav').stop().slideUp()
})

//banner slide
let num=0;

/* setInterval(할일, 시간) ==> 시간마다 할일
setInterval(function(){}, 3000) ==> 3초마다 할일 */

/* if(조건문){조건문이 참일때 할일}

if(조건문){
    조건문이 참일때 할일
}eles{
    조건문이 거짓일때 할일
}
 */

/* if(조건문A){
    조건문이 참일때 할일
}eles if(조건문B){
    조건문A이 거짓이고 조건문B가 참일때 할일
}eles{
    모든 조건문에 만족하지 않을때 할일 
}
 */

setInterval(function(){
    if(num<2){
        num++;//1씩 증가
    }else{
        num=0
    }
    let slidePosition=num*(-300)+"px";
    
    // console.log(slidePosition)
    // $('.main ul').animate({실행문},1000)
    $('.main ul').animate({
        top:slidePosition
    },1000)
}, 3000)

// 탭메뉴
/* $('.btn li').click(function(){실행문}) // .btn li중 어떤 li라도 클릭하면 어떤 실행문이 실행됨 */

$('.btn li').click(function(){
    console.log("토요이이당~~")
})
