var sum = parseInt(localStorage.getItem('sum'));
var j = 0;
let first = new Array(16).fill(1);
let second = new Array(16).fill(1);
let third = new Array(16).fill(1);
let fourth = new Array(16).fill(1);
let fifth = new Array(16).fill(1);
var second_url = localStorage.getItem('second_url' + j);
var third_url = localStorage.getItem('third_url' + j);
var fourth_url = localStorage.getItem('fourth_url' + j);
var fifth_url = localStorage.getItem('fifth_url' + j);
for (var i = 0; i < sum; i++) {
    //匹配first
    j=0;
    while (j < 16) {
        var footer = document.querySelector('.footer');
        var collect = document.querySelector('.collect');
        var ul = collect.querySelector('ul');
        var li = document.createElement('li');
        var img = document.createElement('img');
        var span = document.createElement('span');
        var div = document.createElement('div');
        // var url = localStorage.getItem('url');
        var first_url = localStorage.getItem('first_url' + j);
        var first_text = localStorage.getItem('first_text' + j);
        // var text = localStorage.getItem('text');
        if (first_url && first[j]) {
            ul.appendChild(li);
            li.appendChild(img);
            li.appendChild(span);
            span.appendChild(div);
            img.src = first_url;
            span.innerText = first_text;
            first[j] = 0;
            break;
        } else j = j + 1;
    }
    //匹配second
    j = 0;
    while (j < 16) {
        var footer = document.querySelector('.footer');
        var collect = document.querySelector('.collect');
        var ul = collect.querySelector('ul');
        var li = document.createElement('li');
        var img = document.createElement('img');
        var span = document.createElement('span');
        var div = document.createElement('div');
        // var url = localStorage.getItem('url');
        // var text = localStorage.getItem('text');
        var second_url = localStorage.getItem('second_url' + j);
        var second_text = localStorage.getItem('second_text' + j);
        if (second_url && second[j]) {
            ul.appendChild(li);
            li.appendChild(img);
            li.appendChild(span);
            span.appendChild(div);
            img.src = second_url;
            span.innerText = second_text;
            second[j] = 0;
            break;
        } else j = j + 1;
    }
    //匹配third
    j = 0;
    while (j < 16) {
        var footer = document.querySelector('.footer');
        var collect = document.querySelector('.collect');
        var ul = collect.querySelector('ul');
        var li = document.createElement('li');
        var img = document.createElement('img');
        var span = document.createElement('span');
        var div = document.createElement('div');
        // var url = localStorage.getItem('url');
        // var text = localStorage.getItem('text');
        var third_url = localStorage.getItem('third_url' + j);
        var third_text = localStorage.getItem('third_text' + j);
        if (third_url && third[j]) {
            ul.appendChild(li);
            li.appendChild(img);
            li.appendChild(span);
            span.appendChild(div);
            img.src = third_url;
            span.innerText = third_text;
            third[j] = 0;
            break;
        } else j = j + 1;
    }
    //匹配fourth
    j=0;
    while (j < 16) {
        var footer = document.querySelector('.footer');
        var collect = document.querySelector('.collect');
        var ul = collect.querySelector('ul');
        var li = document.createElement('li');
        var img = document.createElement('img');
        var span = document.createElement('span');
        var div = document.createElement('div');
        // var url = localStorage.getItem('url');
        // var text = localStorage.getItem('text');
        var fourth_url = localStorage.getItem('fourth_url' + j);
        var fourth_text = localStorage.getItem('fourth_text' + j);
        if (fourth_url && fourth[j]) {
            ul.appendChild(li);
            li.appendChild(img);
            li.appendChild(span);
            span.appendChild(div);
            img.src = fourth_url;
            span.innerText = fourth_text;
            fourth[j] = 0;
            break;
        } else j = j + 1;
    }
    //匹配fifth
    j=0;
    while (j < 16) {
        var footer = document.querySelector('.footer');
        var collect = document.querySelector('.collect');
        var ul = collect.querySelector('ul');
        var li = document.createElement('li');
        var img = document.createElement('img');
        var span = document.createElement('span');
        var div = document.createElement('div');
        // var url = localStorage.getItem('url');
        // var text = localStorage.getItem('text');
        var fifth_url = localStorage.getItem('fifth_url' + j);
        var fifth_text = localStorage.getItem('fifth_text' + j);
        if (fifth_url && fifth[j]) {
            ul.appendChild(li);
            li.appendChild(img);
            li.appendChild(span);
            span.appendChild(div);
            img.src = third_url;
            span.innerText = fifth_text;
            fifth[j] = 0;
            break;
        } else j = j + 1;
    }
}