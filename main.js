$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(2)').addClass('right')
$('.images>img:nth-child(3)').addClass('right')
$('.images>img:nth-child(4)').addClass('right')
$('.images>img:nth-child(5)').addClass('right')
$('.images>img:nth-child(6)').addClass('right')
setTimeout(function (){
    $('.images>img:nth-child(1)').addClass('left').removeClass('current')
    $('.images img:nth-child(2)').addClass('current').removeClass('right')
},1000)
setTimeout(function (){
    $('.images>img:nth-child(2)').addClass('left').removeClass('current')
    $('.images img:nth-child(3)').addClass('current').removeClass('right')
},2000)
setTimeout(function (){
    $('.images>img:nth-child(3)').addClass('left').removeClass('current')
    $('.images img:nth-child(4)').addClass('current').removeClass('right')
},3000)
setTimeout(function (){
    $('.images>img:nth-child(4)').addClass('left').removeClass('current')
    $('.images img:nth-child(5)').addClass('current').removeClass('right')
},4000)
setTimeout(function (){
    $('.images>img:nth-child(5)').addClass('left').removeClass('current')
    $('.images img:nth-child(6)').addClass('current').removeClass('right')
},5000)
