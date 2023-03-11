var Data=new Array();
//初始化位置陣列
var Pointlist=new Array();
var inputname;
var column=0;
function choserange(count){
    let rangelist=[11,15,19,22,27,31,49];
    let range;
    for(let i in rangelist)
        if(count<=rangelist[i])
            return rangelist[i];
}
function setpointlist(count)
{
    for(let j=0;j<Data.length;j++)
        Pointlist[j]={pointX:-1,pointY:-1,line:0};
    console.log('count',choserange(count));
    switch(choserange(count)){
        case 11:
            point11();
            break;
        case 15:
            point15();
            break;
        case 19:
            point19();
            break;
        case 22:
            point22();
            break;
        case 27:
            point27();//須改
            break;
        case 31:
            point31();
            break;
        case 49:
            point49();
            break;
    }
}
function point11()
{
    Pointlist[0]={pointX:360,pointY:680,mid:6};
    Pointlist[1]={pointX:280,pointY:590};
    Pointlist[2]={pointX:410,pointY:410};
    Pointlist[3]={pointX:555,pointY:520};
    Pointlist[4]={pointX:735,pointY:330};
    Pointlist[5]={pointX:990,pointY:240};
    Pointlist[6]={pointX:910,pointY:550};
    Pointlist[7]={pointX:1110,pointY:760};
    Pointlist[8]={pointX:1270,pointY:350};
    Pointlist[9]={pointX:1370,pointY:520};
    Pointlist[10]={pointX:1560,pointY:330};
}
function point15()
{
    Pointlist[0]={pointX:410,pointY:760,mid:5};
    Pointlist[1]={pointX:730,pointY:850};
    Pointlist[2]={pointX:1135,pointY:760};
    Pointlist[3]={pointX:1270,pointY:700};
    Pointlist[4]={pointX:1500,pointY:590};
    Pointlist[5]={pointX:910,pointY:550};
    Pointlist[6]={pointX:555,pointY:520};
    Pointlist[7]={pointX:410,pointY:410};
    Pointlist[8]={pointX:210,pointY:240};
    Pointlist[9]={pointX:620,pointY:330};
    Pointlist[10]={pointX:960,pointY:240};
    Pointlist[11]={pointX:1135,pointY:240};
    Pointlist[12]={pointX:1200,pointY:350};
    Pointlist[13]={pointX:1500,pointY:410};
    Pointlist[14]={pointX:1620,pointY:240};
}
function point19()
{
    Pointlist[0]={pointX:1600,pointY:180,mid:12};
    Pointlist[1]={pointX:1450,pointY:500};
    Pointlist[2]={pointX:1310,pointY:430};
    Pointlist[3]={pointX:1260,pointY:350};
    Pointlist[4]={pointX:1080,pointY:330};
    Pointlist[5]={pointX:950,pointY:240};
    Pointlist[6]={pointX:725,pointY:330};
    Pointlist[7]={pointX:605,pointY:430};
    Pointlist[8]={pointX:360,pointY:330};
    Pointlist[9]={pointX:210,pointY:600};
    Pointlist[10]={pointX:360,pointY:680};
    Pointlist[11]={pointX:565,pointY:520};
    Pointlist[12]={pointX:910,pointY:500};
    Pointlist[13]={pointX:770,pointY:760};
    Pointlist[14]={pointX:900,pointY:780};  
    Pointlist[15]={pointX:930,pointY:690};  
    Pointlist[16]={pointX:1090,pointY:680};  
    Pointlist[17]={pointX:1320,pointY:780};  
    Pointlist[18]={pointX:1320,pointY:610};  
}
function point22()
{
    Pointlist[0]={pointX:1320,pointY:430,mid:13};
    Pointlist[1]={pointX:950,pointY:300};
    Pointlist[2]={pointX:895,pointY:210};
    Pointlist[3]={pointX:605,pointY:260};
    Pointlist[4]={pointX:210,pointY:240};
    Pointlist[5]={pointX:180,pointY:330};
    Pointlist[6]={pointX:370,pointY:500};
    Pointlist[7]={pointX:360,pointY:680};
    Pointlist[10]={pointX:605,pointY:610};
    Pointlist[9]={pointX:605,pointY:780};
    Pointlist[8]={pointX:210,pointY:770};
    Pointlist[11]={pointX:730,pointY:680};
    Pointlist[12]={pointX:730,pointY:500};
    Pointlist[13]={pointX:910,pointY:500};
    Pointlist[14]={pointX:940,pointY:690};
    Pointlist[15]={pointX:1080,pointY:850};
    Pointlist[16]={pointX:1125,pointY:760};
    Pointlist[17]={pointX:1490,pointY:760};
    Pointlist[20]={pointX:1610,pointY:500};
    Pointlist[19]={pointX:1500,pointY:590};
    Pointlist[18]={pointX:1610,pointY:680};
    Pointlist[21]={pointX:1610,pointY:330};
}
function point27()
{
    Pointlist[0]={pointX:910,pointY:650,mid:1};
    Pointlist[1]={pointX:910,pointY:500};
    Pointlist[2]={pointX:1125,pointY:410};
    Pointlist[3]={pointX:950,pointY:240};
    Pointlist[4]={pointX:900,pointY:330};
    Pointlist[5]={pointX:725,pointY:330};
    Pointlist[6]={pointX:600,pointY:260};
    Pointlist[7]={pointX:605,pointY:430};
    Pointlist[8]={pointX:360,pointY:330};
    Pointlist[9]={pointX:410,pointY:240};
    Pointlist[10]={pointX:220,pointY:250};
    Pointlist[11]={pointX:170,pointY:510};
    Pointlist[12]={pointX:210,pointY:600};
    Pointlist[13]={pointX:410,pointY:760};
    Pointlist[14]={pointX:410,pointY:590};
    Pointlist[15]={pointX:555,pointY:690};
    Pointlist[16]={pointX:600,pointY:610};
    Pointlist[17]={pointX:900,pointY:780};
    Pointlist[18]={pointX:1085,pointY:670};
    Pointlist[19]={pointX:1320,pointY:780};
    Pointlist[20]={pointX:1610,pointY:860};
    Pointlist[21]={pointX:1310,pointY:610};
    Pointlist[22]={pointX:1450,pointY:630};
    Pointlist[23]={pointX:1500,pointY:540};
    Pointlist[24]={pointX:1500,pointY:430};
    Pointlist[25]={pointX:1450,pointY:330};
    Pointlist[26]={pointX:1495,pointY:240};
}
function point31(){
    Pointlist[0]={pointX:410,pointY:240,mid:16};
    Pointlist[1]={pointX:170,pointY:180};
    Pointlist[2]={pointX:170,pointY:340};
    Pointlist[3]={pointX:370,pointY:335};
    Pointlist[4]={pointX:360,pointY:500};
    Pointlist[5]={pointX:210,pointY:600};
    Pointlist[6]={pointX:410,pointY:590};
    Pointlist[7]={pointX:410,pointY:760};
    Pointlist[8]={pointX:730,pointY:850};
    Pointlist[9]={pointX:780,pointY:760};
    Pointlist[10]={pointX:605,pointY:610};
    Pointlist[11]={pointX:785,pointY:410};
    Pointlist[12]={pointX:605,pointY:260};
    Pointlist[13]={pointX:550,pointY:170};
    Pointlist[14]={pointX:725,pointY:175};
    Pointlist[15]={pointX:900,pointY:330};
    Pointlist[16]={pointX:910,pointY:500};
    Pointlist[17]={pointX:940,pointY:690};
    Pointlist[18]={pointX:1080,pointY:850};
    Pointlist[19]={pointX:1125,pointY:760};
    Pointlist[20]={pointX:1310,pointY:610};
    Pointlist[21]={pointX:1450,pointY:680};
    Pointlist[23]={pointX:1610,pointY:510};
    Pointlist[22]={pointX:1500,pointY:600};
    Pointlist[25]={pointX:1610,pointY:330};
    Pointlist[24]={pointX:1650,pointY:250};
    Pointlist[26]={pointX:1310,pointY:430};
    Pointlist[27]={pointX:1260,pointY:350};
    Pointlist[28]={pointX:1125,pointY:240};
    Pointlist[29]={pointX:1080,pointY:330};
    Pointlist[30]={pointX:1125,pointY:410};
}
function point49(){
    Pointlist[0]={pointX:910,pointY:500,mid:0};
    Pointlist[1]={pointX:775,pointY:420};
    Pointlist[2]={pointX:600,pointY:440};
    Pointlist[3]={pointX:725,pointY:500};
    Pointlist[4]={pointX:775,pointY:590};
    Pointlist[5]={pointX:940,pointY:700};
    Pointlist[6]={pointX:1130,pointY:760};
    Pointlist[7]={pointX:1265,pointY:700};
    Pointlist[8]={pointX:1130,pointY:590};
    Pointlist[9]={pointX:1265,pointY:520};
    Pointlist[10]={pointX:1310,pointY:610};
    Pointlist[11]={pointX:1500,pointY:600};
    Pointlist[12]={pointX:1615,pointY:510};
    Pointlist[13]={pointX:1640,pointY:720};
    Pointlist[14]={pointX:1610,pointY:180};
    Pointlist[15]={pointX:1450,pointY:200};
    Pointlist[16]={pointX:1455,pointY:330};
    Pointlist[17]={pointX:1500,pointY:410};
    Pointlist[18]={pointX:1260,pointY:350};
    Pointlist[19]={pointX:1310,pointY:260};
    Pointlist[20]={pointX:1130,pointY:240};
    Pointlist[22]={pointX:1075,pointY:330};
    Pointlist[21]={pointX:1125,pointY:410};
    Pointlist[23]={pointX:950,pointY:280};
    Pointlist[24]={pointX:895,pointY:185};
    Pointlist[25]={pointX:720,pointY:180};
    Pointlist[26]={pointX:700,pointY:320};
    Pointlist[27]={pointX:555,pointY:170};
    Pointlist[28]={pointX:360,pointY:180};
    Pointlist[29]={pointX:215,pointY:250};
    Pointlist[30]={pointX:169,pointY:340};
    Pointlist[31]={pointX:215,pointY:420};
    Pointlist[32]={pointX:360,pointY:330};
    Pointlist[33]={pointX:410,pointY:410};
    Pointlist[34]={pointX:360,pointY:500};
    Pointlist[35]={pointX:220,pointY:600};
    Pointlist[36]={pointX:170,pointY:680};
    Pointlist[37]={pointX:220,pointY:770};
    Pointlist[38]={pointX:360,pointY:680};
    Pointlist[39]={pointX:356,pointY:850};
    Pointlist[40]={pointX:555,pointY:870};
    Pointlist[41]={pointX:605,pointY:780};
    Pointlist[42]={pointX:555,pointY:650};
    Pointlist[43]={pointX:775,pointY:765};
    Pointlist[44]={pointX:910,pointY:780};
    Pointlist[45]={pointX:936,pointY:860};
    Pointlist[46]={pointX:1262,pointY:870};
    Pointlist[47]={pointX:1320,pointY:780};
}
function ranData()//隨機給資料
{
    let ranNum;
    let Max=1;//有多少資料
    for(let i=0;i<Max;i++)
    {
        ranNum=Math.random()*100;
        ranNum=Math.round(ranNum);
        Data.push(ranNum);
    }
}
function showResult(i,elementLeft,elementTop,context){//創建div
	

    let treeElement=document.createElement("div");	
    treeElement.setAttribute("id","tree"+i);
    treeElement.setAttribute('class','random animation -delay');
    treeElement.style.animationDelay=Math.random()*1.5+'s';
    treeElement.style.margin='5px';	
    treeElement.style.left=elementLeft-30+"px";
    treeElement.style.top=elementTop-50+"px";	
    if(context===inputname){
        treeElement.style.paddingLeft ='20px';
        treeElement.style.paddingRight='20px';
        treeElement.style.fontSize="35px";
    }
  //  treeElement.style.width ='150px';

    treeElement.style.textAlign="center";
    document.querySelector('span').appendChild(treeElement);	
    creatcolumn(i,context);
    let table=document.createElement('label');
    table.textContent=context;
    document.querySelector('#tree'+i).appendChild(table);
}
function setRandomPosOnClass2_0()//給予隨機位置
{
    let count=0;
    for(let i=0;i<Data.length;i++){
        if(Data[i]==='-1')
            continue;
        count+=1;
    }   
    console.log('da count',count);
    setpointlist(count);
    let num=0;
    for(let i=0;i<Data.length;i++){
    if(Data[i]==='-1')
    {
        console.log(Data[i]);
        continue;
    }	
    if(Pointlist[num].pointX==='-1')
        continue;
    if(num===Pointlist[0].mid)
        num+=1;
    elementLeft=Pointlist[num].pointX;
    elementTop=Pointlist[num].pointY;
    if(Data[i]===inputname){
        console.log('mid',Pointlist[0].mid);
        elementLeft=Pointlist[Pointlist[0].mid].pointX;
        elementTop=Pointlist[Pointlist[0].mid].pointY;
        showResult(i,elementLeft+0,elementTop+0,Data[i]);	
        //creatcolumn(i);
        Pointlist[Pointlist[0].mid].pointY+=0;
        Pointlist[Pointlist[0].mid].pointX+=0;       
        continue;
    }
    Pointlist[num].pointY+=0;
    Pointlist[num].pointX+=0;
    showResult(i,elementLeft,elementTop,Data[i]);	
    num++;
    }
    for(let i=num+1;i<Pointlist.length;i++)
        Pointlist[i]={pointX:-1,pointY:-1,line:0};
   //尋找適合的點並畫線
 //  findline();
}
function CheckHaveSame(position,treeX,treeY)//判斷是否有重疊
{
    //設定半徑
    let treeRadius=50;
    //初始設定為可以種植			
    position[treeX][treeY].radius=0;	
    position[treeX][treeY].isPlanted=1;

    //設定檢測範圍    
    for(let i=0;i<Pointlist.length;i++){

  		let x=Pointlist[i].pointX;
        let y=Pointlist[i].pointY;

        //比較兩點的距離判斷是否重疊		
        let xdistance=Math.sqrt(Math.pow(treeX-x,2));						
        let ydistance=Math.sqrt(Math.pow(treeY-y,2));
        let PointDistance=Math.sqrt(Math.pow(treeX-x,2),Math.pow(treeY,2));
        if(PointDistance<treeRadius){
            //有重疊到則設定為不能選此位置		
            position[treeX][treeY].radius=0;
            position[treeX][treeY].isPlanted=0;
            return true;
        }													
    }
    //回傳是否有重疊
    if(position[treeX][treeY].isPlanted===0)
    {
        return true;
    }
    else
    {
       // console.log('treeRadius',treeRadius);

        return false;
    }
}
function createLine(x1, y1, x2, y2) //創建連線
{
    //抓取canvas
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    let maxdistance=100;
    let distance=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    let ranNum=(Math.random()*(1.2-0.8)+0.8);
    //let ranNum=1;
    let controlpointX=((x1+x2)/2)*ranNum;
    let controlpointY=((y1+y2)/2)*ranNum;
    //假如控制點超過螢幕範圍則重新取
    while(controlpointX>window.innerWidth||controlpointY>window.innerHeight)
    {
        ranNum=(Math.random()*(1.2-0.8)+0.8);
        controlpointX=((x1+x2)/2)*ranNum;
        controlpointY=((y1+y2)/2)*ranNum;
    }
    if(distance<maxdistance)
    {
        ranNum=1.02;
        controlpointX=((x1+x2)/2)*ranNum;
        controlpointY=((y1+y2)/2)*ranNum;
    }
    ctx.quadraticCurveTo(controlpointX,controlpointY,x2,y2);
    ctx.stroke();
}
function creatcanva()//初始化canvas
{
    let setcanvas = document.createElement("canvas");
    //設定canvas畫布大小
    setcanvas.width=3000+800;
    setcanvas.height=3000;
    //加上動畫效果
    setcanvas.setAttribute('class','line animation -delay');
    //新增在body裡面
    document.querySelector('span').appendChild(setcanvas);
}
function HaveSameLine(linelist,p1,p2)//判斷是否重新連線
{
    if(linelist[p1].point1==p2)
        return true;
    if(linelist[p1].point2==p2)
        return true;
    else
    {
        return false;
    }
}
function Updateslinelist(linelist,p1,p2)//更新連線的資料
{
    if(linelist[p1].point1==-1)
        linelist[p1].point1=p2;
    else
    {
        linelist[p1].point2=p2;
    }
    if(linelist[p2].point1==-1)
        linelist[p2].point1=p1;
    else
    {
        linelist[p2].point2=p1;
    }

}
function GetName()//創建文字輸入框
{
    let container=document.createElement('div');	
    container.setAttribute('class','container input-container');
    document.querySelector('body').appendChild(container);

    let input=document.createElement('input');
    input.type='text';
    input.setAttribute('id','nameInput');
    input.style.display='block';
    input.style.textAlign="center";
    input.style.border='2px solid';
    input.style.borderRadius = "50px";
    input.style.border="6px #fff100   solid";
    input.style.outline = 'none'; // 移除聚焦時的外框
    input.style.width = '200px'; // 設置 input 元素的寬度
    input.style.height = '90px'; // 設置 input 元素的高度
    input.style.fontSize = '40px'; // 設置輸入框中文字的大小
    document.querySelector('div').appendChild(input);

    let button=document.createElement('button');
    button.setAttribute('id','confirmButton');
    button.textContent="ENTER";
    button.style.color="#41b3c0";
    button.style.fontSize="30px";
    button.style.fontWeight="bold";
    button.style.border="4px #fff100    solid";
    button.style.borderRadius = "50px";
    button.style.width = '130px'; // 設置 input 元素的寬度
    button.style.height = '60px'; // 設置 input 元素的高度
    button.onclick= function(){ //按鈕function
        onConfirm();
    };
    document.querySelector('div').appendChild(button);
}
function onConfirm() //輸入文字後輸出資料
{
    let nameInput = document.getElementById("nameInput");
    let confirmButton = document.getElementById("confirmButton");
    let nameDisplay = document.createElement("div");
    nameDisplay.innerText = nameInput.value;//抓取輸入的名稱
    inputname=nameInput.value;
    if(!findData())
    {
        alert("查無資料");
        return;
    }
    nameInput.style.display = "none";
    confirmButton.style.display = "none";
    confirmButton.innerHTML="";
    let parentObj =confirmButton.parentNode;
    parentObj.removeChild(confirmButton);
    parentObj.removeChild(nameInput);
    let temp=parentObj.parentNode;
    temp.removeChild(parentObj);
    //初始化canva畫布
   // creatoverbord();
    creatcanva();
    //設定文字框
    setRandomPosOnClass2_0();
}
function findleftpoint2_1(point)//尋找連接點
{   
    let MinPoint=new Array();//儲存要連接的點
    let linelist=new Array();
    //初始化陣列
    for(let i in Pointlist)
        linelist[i]={point1:-1,point2:-1};//第i個點 連接到哪兩個點

    let i=point;

    //儲存點i的x y
    let treeX=Pointlist[i].pointX;
    let treeY=Pointlist[i].pointY;

    MinPoint[0]={pointX:0,pointY:0,PointDistance:1000};//此點的x y 跟點i的距離
    let temp;//儲存連接哪個點
    
    if(Pointlist[i].line===2)//假如此節點連線數超過2則不執行
    {
        return;
    }    
    for(let j=0;j<Pointlist.length;j++)
    {
        if(i==j)continue;

        if(Pointlist[j].line<2){//假如連線數大於2則不選此點

            let x=Pointlist[j].pointX;
            let y=Pointlist[j].pointY;
          //let distance=Math.sqrt(Math.pow(treeX-x,2)+Math.pow(treeY-y,2));
            let  distance=Math.sqrt(Math.pow(treeX-x,2));
            if(MinPoint[0].PointDistance>distance&&x<treeX)
            {
                if(HaveSameLine(linelist,i,j))continue;//判斷是否有重複連線
                temp=j;//紀錄連接到哪個點
                MinPoint.shift();
                MinPoint.push({pointX:x,pointY:y,PointDistance:distance});
            }
        }
    }
    console.log(MinPoint[0]);
    if(MinPoint[0].pointX==0&&MinPoint[0].pointY==0)
    {
        return;
    }
    connectDots(treeX,treeY,MinPoint[0].pointX,MinPoint[0].pointY);//畫線連接兩個點
    Updateslinelist(linelist,i,temp);//更新linelist(儲存i點連接到哪個點)
    Pointlist[i].line+=1;//i點的連線數+1
    Pointlist[temp].line+=1;//i點連接到的點連線數+1
    findleftpoint2_1(temp);
}
function findrightpoint2_1(point)//尋找連接點
{   
    let MinPoint=new Array();//儲存要連接的點
    let linelist=new Array();
    //初始化陣列
    for(let i in Pointlist)
        linelist[i]={point1:-1,point2:-1};//第i個點 連接到哪兩個點

    let i=point;
    //儲存點i的x y
    let treeX=Pointlist[i].pointX;
    let treeY=Pointlist[i].pointY;

    MinPoint[0]={pointX:0,pointY:0,PointDistance:1000};//此點的x y 跟點i的距離
    let temp;//儲存連接哪個點
    
    if(Pointlist[i].line===2)//假如此節點連線數超過2則不執行
    {
        return;
    }    
    for(let j=0;j<Pointlist.length;j++)
    {
        if(i==j)continue;

        if(Pointlist[j].line<2){//假如連線數大於2則不選此點

            let x=Pointlist[j].pointX;
            let y=Pointlist[j].pointY;
          //let distance=Math.sqrt(Math.pow(treeX-x,2)+Math.pow(treeY-y,2));
            let  distance=Math.sqrt(Math.pow(x-treeX,2));
            if(MinPoint[0].PointDistance>distance&&x>treeX)
            {
                if(HaveSameLine(linelist,i,j))continue;//判斷是否有重複連線
                temp=j;//紀錄連接到哪個點
                MinPoint.shift();
                MinPoint.push({pointX:x,pointY:y,PointDistance:distance});
            }
        }
    }
        
    if(MinPoint[0].pointX==0&&MinPoint[0].pointY==0)
    {
        return;
    }
    connectDots(treeX,treeY,MinPoint[0].pointX,MinPoint[0].pointY);//畫線連接兩個點
    Updateslinelist(linelist,i,temp);//更新linelist(儲存i點連接到哪個點)
    Pointlist[i].line+=1;//i點的連線數+1
    Pointlist[temp].line+=1;//i點連接到的點連線數+1
   // findrightpoint2_1(temp);
   // for(let i in Pointlist)
        //console.log("第i點 :",i,"連線數",Pointlist[i].line);
}
function findline()
{

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.lineCap = "butt";
    ctx.strokeStyle='#fff100';
      // 從第一個點開始繪製曲線
    ctx.beginPath();
    ctx.moveTo(Pointlist[0].pointX, Pointlist[0].pointY);

    for (let i = 1; i < Pointlist.length; i++) {
        if(Pointlist[i+1].pointX===-1){
            console.log('i',i);
            ctx.lineTo(Pointlist[i].pointX, Pointlist[i].pointY);
            break;
        }
        // 計算兩個點之間的控制點坐標
        const x1 = (Pointlist[i].pointX)-(Pointlist[i+1].pointX-Pointlist[i].pointX)*0.4;
        const y1 = (Pointlist[i].pointY)-(Pointlist[i+1].pointY-Pointlist[i].pointY)*0.4;
        const x2 = Pointlist[i + 1].pointX-(Pointlist[i+1].pointX-Pointlist[i].pointX)*0.4;
        const y2 = Pointlist[i + 1].pointY-(Pointlist[i+1].pointY-Pointlist[i].pointY)*0.4;
        const midx = (x1 + x2) / 2;
        const midy = (y1 + y2) / 2;
        ctx.quadraticCurveTo(x1, y1, midx, midy);

    }
    // 畫出線條
    ctx.stroke();
    
}
function creatbord()
{
    let container=document.createElement('div');	
    container.setAttribute('class','img-container');
    document.querySelector('body').appendChild(container);
}
function findData()
{
    let sw=0;
    console.log(mainlist.length);
    for(let  i=0;i<mainlist.length;i++)
        for(let j=0;j<mainlist[i].length;j++)
            if(mainlist[i][j].includes(inputname))
            {
                console.log(mainlist[i][j]);
                sw=1;
                Data=nodelist[i];
                column=29-j;
            }
    if(inputname==="")
        return false;
    if(sw===1)
        return true;
    else{
        return false;
    }
}
function findcolum(name){
    for(let  i=0;i<mainlist.length;i++)
        for(let j=0;j<mainlist[i].length;j++)
            if(mainlist[i][j].includes(name))
            {
                console.log(mainlist[i][j]);
                column=29-j;
            }
    return column;
}
function creatcolumn(num,name)
{
    let columnbox=document.createElement('div');
    columnbox.textContent="第"+findcolum(name)+"屆";
    columnbox.setAttribute('class','columnbox');
    columnbox.style.bottom='0px';
    document.querySelector('#tree'+num).appendChild(columnbox);	
}
function connectDots(x1,y1,x2,y2)//創建連線
 {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.lineCap = "butt";
    ctx.strokeStyle='#fff100';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    let factor=0.6;
    let numx=0;
    let numy=0;
    let distance=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));

    if(distance>150){

    if(Math.sqrt(Math.pow(x1-x2,2))<50){
    factor=2;
        numx=30;
    }
    if(Math.sqrt(Math.pow(y1-y2,2))<50)
        numy=20;
    }
    if(distance<150)
        factor=100;
    const cpx1 = x1 + (x2 - x1+numx) / 2;
    const cpy1 = y1-numy;
    const cpx2 = x1 + (x2 - x1+numx) / 2;
    const cpy2 = y2+numy;
    const cp1x = cpx1 + (cpx2 - cpx1) / factor;
    const cp1y = cpy1 + (cpy2 - cpy1) / factor;
    const cp2x = cpx2 - (cpx2 - cpx1) / factor;
    const cp2y = cpy2 - (cpy2 - cpy1) / factor;
    if(distance<50)
        ctx.quadraticCurveTo(cp1x,cp1y,x2,y2);
    else
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
   // ctx.quadraticCurveTo(cp1x,cp1y,x2,y2);
    ctx.stroke();
}
function creatoverbord()
{
    let over=document.createElement('div');
    over.setAttribute('class','overbord');
    document.querySelector('.img-container').appendChild(over);
    let bord=document.querySelector('.overbord');
    bord.style.position = 'fixed';
    bord.style.width = '80%'; // set the width to 400 pixels
    bord.style.height = '60%'; // set the height to 300 pixels
    bord.style.transform = 'translate(-50%, -50%)';
}
function findtemppoint(treeX,treeY)
{
    //設定半徑
    let treeRadius=60;
    //設定檢測範圍    
    for(let i=0;i<Pointlist.length;i++){

  		let x=Pointlist[i].pointX;
        let y=Pointlist[i].pointY;
        console.log()
        //比較兩點的距離判斷是否重疊		
        let PointDistance=Math.sqrt(Math.pow(treeX-x,2),Math.pow(treeY,2));
        let xdistance=Math.sqrt(Math.pow(treeX-x,2));						
        let ydistance=Math.sqrt(Math.pow(treeY-y,2));
        //if(x===treeX||y===treeY)
           // return false;
        if(ydistance<treeRadius){
            //有重疊到則設定為不能選此位置		
            return false;
        }													
    }
     return true;
    
}

