if(!confirm("是否已有账号?")){
    window.location.href='../html/register.html';
}
var change = document.querySelector('.changeBack');
var imgs = document.querySelector('.Images').querySelectorAll('img');
var Images = document.querySelector('.Images');
var flag = 0,
    speed = 2,
    opacity = 1;
console.log(imgs);
change.onclick = function () {
    if (flag === 0) {
        Images.style = 'display: block;';
        flag = 1;
    } else {
        Images.style = 'display: none;';
        for (var i = 1; i >= 0; i -= 0.2) {
            Images.style.opacity = i;
        }
        flag = 0;
    }
}
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        var ID = document.querySelector('.ID');
        var psw = document.querySelector('.psw');
        var ul = Images.querySelector('ul');
        console.log(this.src);
        document.body.style.background = 'url(' + this.src + ')';
        if (this.src === ul.children[1].children[0].src) {
            ID.style = "color:#fff;";
            psw.style = "color:#fff;"
        } else {
            ID.style = "color:#000;";
            psw.style = "color:#000;"
        }
    }
}
function log() {
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    if(!localStorage.getItem('uname')){
        if(confirm("你还没有账号,是否前往注册?")){
            window.location.href='../html/register.html';
        }
    }
    if(username==''){
        alert('用户名不能为空！');
        return false;
    } 
    if(password==''){
        alert('密码不能为空！');
        return false;
    }
    if(localStorage.getItem('uname')){
        var uname = localStorage.getItem('uname').toString();
        var pwd = localStorage.getItem('pwd').toString();
        if(uname==username){
            if(pwd==password){
                sessionStorage.setItem('uname',username);
                alert('登录成功!');
                localStorage.setItem('logined',1);
                window.location.href='../index.html';
            }
            else {
                alert('输入的密码错误!');
                return false;
            }
        }
        else{
            alert('输入的用户名有误!');
            return false;
        }
    }
}