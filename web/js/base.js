//时间表
setInterval(function () {
    var date = new Date();
    var years = document.querySelector('.year');
    var months = document.querySelector('.month');
    var dates = document.querySelector('.date');
    var hours = document.querySelector('.hour');
    var minutes = document.querySelector('.minute');
    var seconds = document.querySelector('.second');
    years.innerHTML = date.getFullYear();
    months.innerHTML = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    dates.innerHTML = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    hours.innerHTML = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    minutes.innerHTML = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    seconds.innerHTML = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
}, 1000);
//roll
var center = document.querySelector('.center');
var ctact = document.querySelector('.ctact');
var flag1 = 0;
ctact.querySelectorAll('li').style = "cursor: pointer;";
center.addEventListener('click', function () {
    if (flag1 == 0) {
        ctact.style = "transform: rotateZ(360deg) scale(0);";
        flag1 = 1;
    } else {
        ctact.style = "transform: rotateZ(-360deg) scale(1);";
        flag1 = 0;
    }
});