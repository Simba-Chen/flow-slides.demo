let n
init()

setInterval(function (){
    $(`.images>img:nth-child(${num(n)})`).addClass('left').removeClass('current')
    .one('transitionend',function (message){
        $(message.currentTarget).removeClass('left').addClass('right')
    })
    $(`.images>img:nth-child(${num(n+1)})`).addClass('current').removeClass('right')
    n = n+1
},3000)
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

