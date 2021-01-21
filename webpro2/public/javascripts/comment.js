window.onload = function(){
    var screenW = window.innerWidth;
    var screenH = document.body.clientHeight;
    var colorArr = ['#fff','skyblue','orange'];
    console.log(screenW);
    for( var i=0; i<1000; i++ ){
        var span = document.createElement('span');
        var width = Math.random() * 3;
        var colorIndex = parseInt(Math.random() * 3);
        var x = parseInt(Math.random() * screenW);
        var y = parseInt(Math.random() * screenH);
        span.style.width = parseInt(width) + 'px';
        span.style.height = parseInt(width) + 'px';
        span.style.background = colorArr[colorIndex];
        span.style.left = x + 'px';
        span.style.top = y + 'px';

        document.body.appendChild(span);
    }
}

$(function () {
    $("#content").load("house_comment.txt .guest");
  });

$("#p2").click(function () {
    $("#content").load("house_comment.txt .guest2");
});

$("#p1").click(function () {
        $("#content").load("house_comment.txt .guest2");
});