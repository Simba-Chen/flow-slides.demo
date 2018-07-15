let n
init()

let timer = setInterval(function (){
    $(`.images>img:nth-child(${num(n)})`).addClass('left').removeClass('current right')
    .one('transitionend',function (message){
        $(message.currentTarget).addClass('right').removeClass('left current')
    })
    $(`.images>img:nth-child(${num(n+1)})`).addClass('current').removeClass('right left')
    n = n+1
},1500)
function init(){
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('right')
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
document.addEventListener('visibilitychange',function (){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(function (){
            $(`.images>img:nth-child(${num(n)})`).addClass('left').removeClass('current right')
            .one('transitionend',function (message){
                $(message.currentTarget).addClass('right').removeClass('left current')
            })
            $(`.images>img:nth-child(${num(n+1)})`).addClass('current').removeClass('right left')
            n = n+1
        },1500)
    }
})

