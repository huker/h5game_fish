/**
 * Created by hu on 2015/10/16.
 */

//ȫ�ֱ�������
var can1,can2; //canvas
var ctx1,ctx2; //canvas context
var lastTime,deltaTime;//loop��time
var canWidth,canHeight;//��ȡcanvas�Ŀ��
var ane;//����
var fruit;//��ʵ
var bgPic=new Image();//����ͼ

//������Ϸ
document.body.onload=game;

//��Ϸ�����
function game(){
    init();
    lastTime= Date.now();
    deltaTime=0;
    gameloop();
}

//��ʼ��
function init(){
    //���canvas
    can1=document.getElementById('canvas1');//fish UI ȦȦ��Ч dust
    ctx1=can1.getContext('2d');
    can2=document.getElementById('canvas2');//bg ���� ��ʵ
    ctx2=can2.getContext('2d');

    bgPic.src='./src/background.jpg';

    canWidth=can1.width;
    canHeight=can1.height;

    ane=new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();
}


//��Ϸѭ��
function gameloop(){
    window.requestAnimFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //console.log(deltaTime);
    drawBackground();
    ane.draw();
    fruit.draw();
}
