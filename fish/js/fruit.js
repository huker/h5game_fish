/**
 * Created by hu on 2015/10/23.
 */
var fruitObj= function () {
    this.alive=[];
    this.x=[];
    this.y=[];
    this.l=[];
    this.spd=[];
    this.orange=new Image();
    this.blue=new Image();
};

fruitObj.prototype.num=30;

fruitObj.prototype.init= function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=true;
        this.x[i]=0;
        this.y[i]=0;
        this.spd[i]=Math.random()*0.005+0.005; //0.005-0.01
        this.born(i);
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
};

fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        //找到定位 然后飘
        if(this.alive[i]){
            if(this.l[i]<=14){
                this.l[i]+=this.spd[i]*deltaTime;
            }else{
                this.y[i]-=this.spd[i]*7*deltaTime;
            }
            ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            if(this.y[i]<10){
                this.alive[i]=false;
            }
        }
    }
};

fruitObj.prototype.born=function(i){
    //出生在哪
    var aneID=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.x[aneID];
    this.y[i]=canHeight-ane.length[aneID];
    this.l[i]=0;
};

function fruitMonitor(){

}