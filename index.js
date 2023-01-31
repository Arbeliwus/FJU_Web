function readfile(path) {//Ajax
    const xhr = new XMLHttpRequest();
    xhr.open('GET',"https://arbeliwus.github.io/web_test/"+path, true);//連線設定
    xhr.onload=function(){//偵測連線狀態結束
    console.log(this.responseText);
    console.log(this.responseText[0]);
    console.log(this.responseText[1]);
    console.log(this.responseText[2]);
    console.log(this.responseText.length);
    };
    xhr.send(); //送出連線
}

