if(!localStorage.getItem('sum')) localStorage.setItem('sum',0);
function check() {
    if (sessionStorage.getItem('uname')) {
        alert('欢迎 ' + sessionStorage.getItem('uname').toString() + ' 访问!');
    } else {
        if(localStorage.getItem('logined')){
            alert('欢迎 ' + localStorage.getItem('uname').toString() + ' 访问!');
            return;
        }
        alert('请先登录!');
        window.location.href = 'html/login.html';
    }
}
var bot_text = document.querySelector('.bot_text');
var shortcut_ul = document.querySelector('.shortcut').querySelector('ul');
setInterval(function () {
    var doc_scrTop = Number(document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollTop);
    if (doc_scrTop >= shortcut_ul.clientHeight) {
        bot_text.style = 'opacity: 1;';
        bot_text.style.transition = 'all 1s';
        bot_text.style.transform = 'translateY(-80px)';
        outText("宇宙这么大，我想去看看！", ".bot_text");
        shortcut_ul.style.transform = "translateY(" + (window.innerHeight - 53) + "px)";
    } else {
        bot_text.style = 'opacity: 0;';
        showText("宇宙这么大，我想去看看！", ".bot_text");
        shortcut_ul.style.transform = "translateY(0px)";
    }
}, 15);
var t1;

function showText(text, Class) {
    clearInterval(t1);
    var i = 0;
    var len = text.length;
    t1 = setInterval(function () {
        document.querySelector(Class).innerHTML = text.substring(0, i);
        i++;
        if (i - 1 == len) {
            clearInterval(t1);
        }
    }, 100);
}
var t2;

function outText(text, Class) {
    clearInterval(t2);
    var len = text.length;
    var i = len;
    t2 = setInterval(function () {
        document.querySelector(Class).innerHTML = text.substring(0, i);
        i--;
        if (i == -1) {
            clearInterval(t2);
        }
    }, 45);
}
//轮播图
window.addEventListener('load', function () {
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            } else
                obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    }
    var show = document.querySelector('.show');
    var slideShow = show.querySelector('.slideShow');
    var circle = show.querySelector('.circle');
    var img = document.querySelector('.img');
    var focusWidth = img.offsetWidth;
    var cir = 0;
    var num = 0;
    for (var i = 0; i < slideShow.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        circle.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'change';
            var index = this.getAttribute('index');
            // console.log(index);
            num = index;
            cir = index;
            var img = document.querySelector('.img');
            var focusWidth = img.offsetWidth;
            console.log(focusWidth);
            animate(slideShow, -index * focusWidth);
        });
    }
    circle.children[0].className = 'change';
    var first = slideShow.children[0].cloneNode(true);
    slideShow.appendChild(first);
    var turn_right = document.querySelector('.turn_right');
    turn_right.addEventListener('click', function () {
        if (num == slideShow.children.length - 1) {
            slideShow.style.left = 0;
            num = 0;
        }
        num++;
        animate(slideShow, -num * focusWidth);
        cir++;
        if (cir == circle.children.length) {
            cir = 0;
        }
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[cir].className = 'change';
    });
    var turn_left = document.querySelector('.turn_left');
    turn_left.addEventListener('click', function () {
        if (num == 0) {
            slideShow.style.left = -(slideShow.children.length - 1) * focusWidth + 'px';
            num = slideShow.children.length - 1;
        }
        num--;
        animate(slideShow, -num * focusWidth);
        cir--;
        if (cir == -1) {
            cir = circle.children.length - 1;
        }
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[cir].className = 'change';
    });
    var timer = setInterval(function () {
        turn_right.click();
    }, 2000);
    show.addEventListener('mouseover', function () {
        clearInterval(timer);
        timer = null;
    });
    show.addEventListener('mouseout', function () {
        timer = setInterval(function () {
            turn_right.click();
        }, 2000);
    });
})
