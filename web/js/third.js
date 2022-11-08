//ico-heart
var heart = document.querySelectorAll('.heart');
var info = document.querySelectorAll('.info');
var img = document.querySelectorAll('img');
let flag2 = new Array(16).fill(0);
let pic_url=[];
let div_text=[];
// localStorage.setItem('sum',0);
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function () {
        if (flag2[i] == 0) {
            this.style = "color: red;";
            this.cancelBubble = true;
            pic_url[i] = img[i].src;
            div_text[i]= info[i].innerText;
            console.log(pic_url[i]);
            // localStorage.setItem('url',pic_url[i]);
            localStorage.setItem('third_url'+i,pic_url[i]);
            localStorage.setItem('third_text'+i,div_text[i]);
            localStorage.setItem('sum',parseInt(localStorage.getItem('sum'))+1);
            flag2[i] = 1;
        } else {
            this.style = "color: #fff;";
            this.cancelBubble = true;
            localStorage.removeItem('third_url'+i);
            localStorage.setItem('sum',parseInt(localStorage.getItem('sum'))-1);
            flag2[i] = 0;
        }
    });
}