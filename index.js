var Data=new Array();
//初始化位置陣列
var Pointlist=new Array();
var inputname;
var column=0;
function setpointlist()
{
    for(let j=0;j<Data.length;j++){
        Pointlist[j]={pointX:0,pointY:0,line:0};
    }
}
function ranData()//隨機給資料
{
    var ranNum;
    var Max=10;//有多少資料
    for(var i=0;i<Max;i++)
    {
        ranNum=Math.random()*100;
        ranNum=Math.round(ranNum);
        Data.push(ranNum);
    }
}
function showResult(i,elementLeft,elementTop,context){//創建div
	
    var treeElement=document.createElement("div");	
    treeElement.setAttribute("id","tree"+i);
    treeElement.setAttribute('class','random animation -delay');
    treeElement.style.animationDelay=Math.random()*1.5+'s';
    treeElement.textContent=context;			
    treeElement.style.left=elementLeft-16+"px";
    treeElement.style.top=elementTop-16+"px";	
    document.querySelector('.img-container').appendChild(treeElement);	
}
/*function setRandomPosOnClass2_0()//給予隨機位置
{
    ranData();
    let temp;
    let count=0;
    let bor=0.15;
    //初始化位置陣列
    var position=new Array();
    for(var i=0;i<window.innerWidth;i++){
        position[i]=new Array();
        for(var j=0;j<window.innerHeight;j++){
            position[i][j]={radius:0,isPlanted:0,line:0};//周圍距離 是否種植 連線數
        }
    }
    for(let i in Data)
        if(Data[i]===inputname){
            Pointlist[i]={pointX:window.innerWidth/2,pointY:window.innerHeight/2,line:0}; 
        }
    let sw=0;
    for(let i in Data){
    let MinHeight=(window.innerHeight/2);
    let MaxHeight=(window.innerHeight/2)+128;

    let MinWidth=window.innerWidth*bor;
    let MaxWidth=window.innerWidth-10;

    if(sw===1)//右邊的資料
    {
        MinWidth=(window.innerWidth/2);
        MaxWidth=window.innerWidth-(window.innerWidth*bor);
    }
    if(sw==0)//左邊的資料
    {
        MinWidth=window.innerWidth*bor;
        MaxWidth=window.innerWidth/2;
    }
    if(Data[i]===inputname){
        let treeX=Math.floor(window.innerWidth/2);
        let treeY=Math.floor(window.innerHeight/2);
        let elementLeft=Math.max(treeX-position[treeX][treeY].radius,5);
        let elementTop=Math.max(treeY-position[treeX][treeY].radius,5);				
        showResult(i,elementLeft,elementTop,Data[i]);	
        creatcolumn(i);
        temp=i;
        sw=1;
        count++;
        continue;
    }
    //隨機選擇位置
    let treeX=Math.floor(Math.random()*(MaxWidth-MinWidth)+MinWidth);
    let treeY=Math.floor(Math.random()*(MaxHeight-MinHeight)+MinHeight);	
    //假如選擇的位址已經有了，則重選 假如選擇位置有重疊到，則重選
    while(position[treeX][treeY].isPlanted==1||CheckHaveSame(position,treeX,treeY))
    {
        treeX=Math.floor(Math.random()*(MaxWidth-MinWidth)+MinWidth);
        treeY=Math.floor(Math.random()*(MaxHeight-MinHeight)+MinHeight);	
    }
    //假如種植成功則創建div
    if(position[treeX][treeY].isPlanted==1){	

        //顯示資料
        let elementLeft=Math.max(treeX-position[treeX][treeY].radius,16);
        let elementTop=Math.max(treeY-position[treeX][treeY].radius,16);				
        showResult(i,elementLeft,elementTop,Data[i]);	
        //紀錄有哪些點			
        Pointlist[count++]={pointX:elementLeft,pointY:elementTop,line:0};     
    }

    }
   //尋找適合的點並畫線
   findleftpoint2_1(temp);
   findrightpoint2_1(temp);
}*/
function setRandomPosOnClass2_0()//給予隨機位置
{
    //ranData();
    let temp;
    let count=0;
    let bor=0.15;
    //初始化位置陣列
    var position=new Array();
    for(var i=0;i<window.innerWidth;i++){
        position[i]=new Array();
        for(var j=0;j<window.innerHeight;j++){
            position[i][j]={radius:0,isPlanted:0,line:0};//周圍距離 是否種植 連線數
        }
    }
    for(let i in Data)
        if(Data[i]===inputname){
            Pointlist[i]={pointX:window.innerWidth/2,pointY:window.innerHeight/2,line:0}; 
        }
    let sw=0;
    for(let i in Data){
    let MinHeight=(window.innerHeight/2)-100;
    let MaxHeight=(window.innerHeight/2)+200;

    let MinWidth=0;
    let MaxWidth=0;

    if(sw===1)//右邊的資料
    {
        MinWidth=(window.innerWidth/2)+256;
        MaxWidth=window.innerWidth-(window.innerWidth*bor);
    }
    if(sw==0)//左邊的資料
    {
        MinWidth=window.innerWidth*bor;
        MaxWidth=(window.innerWidth/2)-256;
    }
    if(Data[i]===inputname){
        let treeX=Math.floor(window.innerWidth/2);
        let treeY=Math.floor(window.innerHeight/2);
        let elementLeft=Math.max(treeX-position[treeX][treeY].radius,16);
        let elementTop=Math.max(treeY-position[treeX][treeY].radius,16);				
        showResult(i,elementLeft,elementTop,Data[i]);	
        creatcolumn(i);
        temp=i;
        sw=1;
        count++;
        continue;
    }
    //隨機選擇位置
    let treeX=Math.floor(Math.random()*(MaxWidth-MinWidth)+MinWidth);
    let treeY=Math.floor(Math.random()*(MaxHeight-MinHeight)+MinHeight);	
    //假如選擇的位址已經有了，則重選 假如選擇位置有重疊到，則重選
    while(position[treeX][treeY].isPlanted==1||CheckHaveSame(position,treeX,treeY))
    {
        treeX=Math.floor(Math.random()*(MaxWidth-MinWidth)+MinWidth);
        treeY=Math.floor(Math.random()*(MaxHeight-MinHeight)+MinHeight);	
    }
    //假如種植成功則創建div
    if(position[treeX][treeY].isPlanted==1){	

        //顯示資料
        let elementLeft=Math.max(treeX-position[treeX][treeY].radius,16);
        let elementTop=Math.max(treeY-position[treeX][treeY].radius,16);				
        showResult(i,elementLeft,elementTop,Data[i]);	
        //紀錄有哪些點			
        Pointlist[count++]={pointX:elementLeft,pointY:elementTop,line:0};     
    }

    }
   //尋找適合的點並畫線
   findleftpoint2_1(temp);
   findrightpoint2_1(temp);
}
/*function CheckHaveSame(position,treeX,treeY)//判斷是否有重疊
{
    //設定半徑
    var treeRadius=36;
    
    //初始設定為可以種植			
    position[treeX][treeY].radius=treeRadius;	
    position[treeX][treeY].isPlanted=1;
    
    //設定檢測範圍    
    for(let i in Pointlist){

  		let x=Pointlist[i].pointX;
        let y=Pointlist[i].pointY;
        //比較兩點的距離判斷是否重疊		
        var treeDistanceSquared=Math.sqrt((treeX-x)*(treeX-x)+(treeY-y)*(treeY-y));						
        var radiusSumSquared=Math.sqrt((treeRadius+treeRadius)*(treeRadius+treeRadius));

        if(treeDistanceSquared<radiusSumSquared){
            //有重疊到則設定為不能選此位置						
            position[treeX][treeY].radius=0;
            position[treeX][treeY].isPlanted=0;
        }													
    }
    //回傳是否有重疊
    if(position[treeX][treeY].isPlanted===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}*/
function CheckHaveSame(position,treeX,treeY)//判斷是否有重疊
{
    //設定半徑
    var treeRadius=40;
    //初始設定為可以種植			
    position[treeX][treeY].radius=0;	
    position[treeX][treeY].isPlanted=1;
    console.log("xtreeX",treeX);
    console.log('treeY',treeY);
    //設定檢測範圍    
    for(let i=0;i<Pointlist.length;i++){

  		let x=Pointlist[i].pointX;
        let y=Pointlist[i].pointY;
        console.log("x",x);
        console.log('y',y);
        //比較兩點的距離判斷是否重疊		
        var xdistance=Math.sqrt(Math.pow(treeX-x,2));						
        var ydistance=Math.sqrt(Math.pow(treeY-y,2));
        console.log("xd",xdistance);
        console.log('yd',ydistance);
        if(xdistance<treeRadius||ydistance<treeRadius){
            //有重疊到則設定為不能選此位置		
            console.log("我今來了");
            position[treeX][treeY].radius=0;
            position[treeX][treeY].isPlanted=0;
            return true;
        }													
    }
    console.log("---------------------------");
    //回傳是否有重疊
    if(position[treeX][treeY].isPlanted===0)
    {
        return true;
    }
    else
    {
        console.log('treeRadius',treeRadius);

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
    var setcanvas = document.createElement("canvas");
    //設定canvas畫布大小
    setcanvas.width=window.innerWidth-1;
    setcanvas.height=window.innerHeight-1;
    //加上動畫效果
    setcanvas.setAttribute('class','line animation -delay');
    //新增在body裡面
    document.querySelector('.img-container').appendChild(setcanvas);
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
    var container=document.createElement('div');	
    container.setAttribute('class','container input-container');
    document.querySelector('body').appendChild(container);

    var input=document.createElement('input');
    input.type='text';
    input.setAttribute('id','nameInput');
    input.style.display='block';
    input.style.border='2px solid';
    input.style.marginBottom='10px';
    document.querySelector('div').appendChild(input);

    var button=document.createElement('button');
    button.setAttribute('id','confirmButton');
    button.textContent="enter";
    button.onclick= function(){ //按鈕function
        onConfirm();
    };
    document.querySelector('div').appendChild(button);
}
function onConfirm() //輸入文字後輸出資料
{
    var nameInput = document.getElementById("nameInput");
    var confirmButton = document.getElementById("confirmButton");
    var nameDisplay = document.createElement("div");
    nameDisplay.innerText = nameInput.value;//抓取輸入的名稱
    inputname=nameInput.value;
    if(!findData(inputname))
    {
        alert("查無資料");
        return;
    }
    nameInput.style.display = "none";
    confirmButton.style.display = "none";
    confirmButton.innerHTML="";
    var parentObj =confirmButton.parentNode;
    parentObj.removeChild(confirmButton);
    parentObj.removeChild(nameInput);
    let temp=parentObj.parentNode;
    temp.removeChild(parentObj);
    //初始化canva畫布
    creatcanva();
    //設定文字框
    setpointlist();
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
    console.log(point);
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
        
    if(MinPoint[0].pointX==0&&MinPoint[0].pointY==0)
    {
        return;
    }
    connectDots(treeX,treeY,MinPoint[0].pointX,MinPoint[0].pointY);//畫線連接兩個點
    Updateslinelist(linelist,i,temp);//更新linelist(儲存i點連接到哪個點)
    Pointlist[i].line+=1;//i點的連線數+1
    Pointlist[temp].line+=1;//i點連接到的點連線數+1
    findleftpoint2_1(temp);

    for(let i in Pointlist)
        console.log("第i點 :",i,"連線數",Pointlist[i].line);
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
    findrightpoint2_1(temp);
    for(let i in Pointlist)
        console.log("第i點 :",i,"連線數",Pointlist[i].line);
}
function creatbord()
{
    var container=document.createElement('div');	
    container.setAttribute('class','img-container');
    document.querySelector('body').appendChild(container);
}
function findData(context)
{
    let sw=0;
    console.log(firebase_data.length);
    for(let  i=0;i<firebase_data.length;i++)
        for(let j=0;j<firebase_data[i].length;j++)
            if(firebase_data[i][j]===context)
            {
                sw=1;
                Data=firebase_data[i];
                column=j;
            }
    if(sw===1)
        return true;
    else{
        return false;
    }
}
function creatcolumn(num)
{
    console.log("我有近來");
    var columnbox=document.createElement('div');
    columnbox.textContent="第"+column+"行";
    columnbox.setAttribute('class','columnbox');
    document.querySelector('#tree'+num).appendChild(columnbox);	
}
function connectDots(x1,y1,x2,y2)//創建連線
 {
  
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x1 + (x2 - x1) / 2, y1, x1 + (x2 - x1) / 2, y2, x2, y2);
    ctx.stroke();

  }


