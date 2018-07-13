
let n = 1
init()
 

setInterval(function (){
    $(`.images>img:nth-child(${num(n)})`).addClass('left').removeClass('current').removeClass('right')
    .one('transitionend',function (message){
        $(message.currentTarget).removeClass('left').addClass('right').removeClass('current')
    })
    $(`.images>img:nth-child(${num(n+1)})`).addClass('current').removeClass('right').removeClass('left')
    n++
    console.log('n的值'+ num(n))
    console.log('n+1的值'+ num(n+1))
},3000)
function init(){
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}
function num(n){
    if(n>6){
        n = n%6
        if(n === 0){
            n = 6
        }
    }//n = 1,2,3,4,5,6
    return n 
}

