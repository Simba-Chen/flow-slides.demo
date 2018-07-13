$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(2)').addClass('right')
$('.images>img:nth-child(3)').addClass('right')
$('.images>img:nth-child(4)').addClass('right')
$('.images>img:nth-child(5)').addClass('right')
$('.images>img:nth-child(6)').addClass('right')
let n = 1

function num(n){
    if(n>6){
        n = n%6
        if(n === 0){
            n = 6
        }
    }//n = 1,2,3,4,5,6
    return n 
}
setInterval(function (){
    $(`.images>img:nth-child(${num(n)})`).addClass('left').removeClass('current')
    .one('transitionend',function (message){
        $(message.currentTarget).removeClass('left').addClass('right')
    })
    $(`.images>img:nth-child(${num(n+1)})`).addClass('current').removeClass('right')
    n++
    console.log(num(n))
},1000)

