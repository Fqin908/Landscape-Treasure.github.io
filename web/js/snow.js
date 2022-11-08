var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var x = 0,
    y = 0;
var arr = [];
var num = 600;
function resizeCanvas() {
    x = canvas.width = window.innerWidth;
    y = canvas.height = window.innerHeight;
}
window.addEventListener('resize',resizeCanvas());
resizeCanvas();
for (var i = 0; i < num; i++) {
    arr.push({
        x: x * Math.random(),
        y: 0,
        r: 5 * Math.random(),
        color: 'rgba(255,255,255,' + Math.random() + ')'
    });
}

function draw() {
    for (var i = 0; i < num; i++) {
        var yuan = arr[i];
        ctx.beginPath();
        ctx.fillStyle = yuan.color;
        ctx.arc(yuan.x, yuan.y, yuan.r, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}

function updated() {
    for (var i = 0; i < num; i++) {
        var yuan = arr[i];
        yuan.x = yuan.x + 0.1;
        yuan.y = yuan.y + yuan.r / 2;
        if (yuan.y > y) {
            arr[i] = {
                x: x * Math.random(),
                y: -10,
                r: 5 * Math.random(),
                color: 'rgba(255,255,255,' + Math.random() + ')'
            }
        }
    }
}
setInterval(function () {
    ctx.clearRect(0, 0, x, y);
    draw();
    updated();
}, 10);