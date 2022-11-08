function fog() {
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var repassword = document.querySelector('#repassword').value;
    if(username==''){
        alert('用户名不能为空！');
        return false;
    } 
    if(password==''||repassword==''){
        alert('密码不能为空！');
        return false;
    }
    if(password!=repassword){
        alert('两次密码不一致');
        return false;
    }
    localStorage.setItem('pwd',password);
    localStorage.setItem('uname',username);
    alert('修改成功！');
    window.open('../html/login.html');
}