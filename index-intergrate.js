
let word=0;//暫存單一物件
let list1=[];//輔助串列
//let data;//接收input檔案
let mainlist=[];//主要串列
let nodelist=[];


function tidy(data,garbagelist)//資料整理成二維陣列
{
    var blank=13;// ' '=ACSII 13
    let count1=0;
    let count2=0;
    blank=String.fromCharCode(blank);
    for(let i = 1,word=data[0];i<data.length;i++)
    {
        if(data[i]===blank){
            list1[count1++]=word;
            i+=2;//跳過空格
            count1=0;//輔助陣列歸0
            garbagelist[count2++]=list1;
            if(i<data.length)
                word=data[i];
                list1=[];
         }
         else if(data[i]===','){
            list1[count1++]=word;
            word=data[++i];
         }
        else
            word+=data[i]; 
    }
}
console.log("成功載入index-intergrate.js");

