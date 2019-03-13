
function checkIntersect(obj1,obj2,distance){//检测碰撞,distance为吸附的范围
    var left1 = obj1.offsetLeft;
    var top1 = obj1.offsetTop;
    var left2 = obj2.offsetLeft;
    var top2 = obj2.offsetTop;
    var width1 = obj1.offsetWidth;
    var height1 = obj1.offsetHeight;
    var width2 = obj2.offsetWidth;
    var height2 = obj2.offsetHeight;
    return (
        ((left1-left2>=0&&left1-left2<width2+distance)||(left2-left1>=0&&left2-left1<width1+distance))&&((top1-top2>=0&&top1-top2<height2+distance)||
            (top2-top1>=0&&top2-top1<height1+distance))
    );
}

let imgList=[
    {
        id:1,
        src:'./img/王家河.png',
        style:[17,20,46.8,46] 
    },
    {
        id:2,
        src:'./img/蔡甸街.png',
        style:[18.5,25,23.6,11.3]
    },
    {
        id:3,
        src:'./img/木兰乡.png',
        style:[20.5,24,45.2,30.6]  // 高 宽 左 上
    },
    {
        id:4,
        src:'./img/六指店街.png',
        style:[22,24,55.7,57.1]  // 高 宽 左 上

    },
    {
        id:5,
        src:'./img/蔡榨街.png',
        style:[14.5,16,62.6,49]  // 高 宽 左 上
    },
    {
        id:6,
        src:'./img/姚集街.png',
        style:[18.5,20,41.4,16.3]   // 高 宽 左 
    },
    {
        id:7,
        src:'./img/长岭街.png',
        style:[20,22.5,29.9,26.8]  // 高 宽 左 上
    },
    {
        id:8,
        src:'./img/李集街.png',
        style:[22.5,18.5,20.7,34.2]  // 高 宽 左 上
    },
    {
        id:9,
        src:'./img/罗汉寺.png',
        style:[16,18,32.9,45.4]  // 高 宽 左  上
    },
    {
        id:10,
        src:'./img/三里桥.png',
        style:[8,14,49,73.8]  // 高 宽 左 上
    },
    {
        id:11,
        src:'./img/五湖街.png',
        style:[11,20.5,48.6,75.7]   // 高 宽 左 上
    },
    {
        id:12,
        src:'./img/滠口街.png',
        style:[13.5,16.3,34.2,74.2]   // 高 宽 左 上
    },
    {
        id:13,
        src:'./img/盘龙城.png',
        style:[11,24,19.9,77.7]  // 高 宽 左 上
    },
    {
        id:14,
        src:'./img/天河街.png',
        style:[12,14.8,20.5,68.6]  // 高 宽 左 上
    },
    {
        id:15,
        src:'./img/祁家湾街.png',
        style:[18,20,20.5,54.1]  // 高 宽 左 
    },
    {
        id:16,
        src:'./img/前川街.png',
        style:[16,20,38.1,58.1]  // 高 宽 左 上
    },
    {
        id:17,
        src:'./img/横店街.png',
        style:[15,20,30.3,65.8]  // 高 宽 左
    },
    {
        id:18,
        src:'./img/大潭办事处.png',
        style:[5,8,48.1,71.7]  // 高 宽 左
    },
]
function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

let initList = imgList.sort(randomsort)
// console.log(imgList)


let Vm = new Vue({
    el:'#app',
    data:{
        ruleInfoShow:false,
        playing:true,
        outputTime:'00:00:00',
        timeFlag:false,
        timer:null,
        rangking:false,
        cityInfoShow:false,
        cityInfo,  //街道信息 目标位置
        imgList,  // 图片 对应街道id
        cityItem:'',
        canDrag: false,
        moveX:0,
        moveY:0,
        x1:0,
        y1:0,
        beginPos:{
            x:0,
            y:0
        },
        doneList:[],
        initList,
        alignFlag:false,
        listIndex:0
    },
    methods:{
        showDialog(){
           
        },
        showDetail(i){
           
            this.cityInfoShow=true
            this.cityInfo.forEach(item=>{
                if(item.id==i){this.cityItem=item}
            })
        },
        handleBgm(){
            // 不允许自动播放 需要初始弹窗诱导用户点击
            console.log(this.$refs.audio.pause)

            if(this.playing){
                console.log('pause')
                this.$refs.audio.pause()
                this.$refs.bgmBtn.classList.add('stop')
                this.playing=false
            }else{
                console.log('play')
                this.$refs.audio.play()
                this.$refs.bgmBtn.classList.remove('stop')
                this.playing=true
            }
        },
        statrGame(){
            if(this.timeFlag){
                console.log('aredly run')
                return false
            }
            let m=s=ms=0;
            this.timer =setInterval(()=>{
                this.timeFlag=true
                ms++
                ms=ms>9?ms:`0${ms}`
                if(ms>99){
                    s=s+1
                    ms=0
                    if(s>60){
                        m = m+1
                        s=0
                    }
                }
            this.outputTime=`${m>9?m:`0${m}`}:${s>9?s:`0${s}`}:${ms}`
            },10)
            
        },
        endGame(){
            clearInterval(this.timer)
            this.timeFlag=false
            console.log(this.outputTime)
        },
        toggleRanking(){
            this.rangking?this.rangking=false:this.rangking=true
        },
        start:function(e,id){
        //鼠标左键点击
            let img=this.$refs[`img${id}`][0]
            this.canDrag=true;
            //记录鼠标指针位置
            this.beginPos.x=img.offsetLeft
            this.beginPos.y=img.offsetTop
            this.moveX=e.changedTouches[0].clientX-img.offsetLeft;
            this.moveY=e.changedTouches[0].clientY-img.offsetTop;
        },
        stop:function(e,id){
            let img=this.$refs[`img${id}`][0]
            if(!this.alignFlag){
                console.log('没对齐')
                img.style.left =this.beginPos.x+'px'
                img.style.top =this.beginPos.y+'px'
                this.canDrag=false;
            }else{
                console.log('对齐了')
            }
            
        },
        move:function(e,now){
            let img=this.$refs[`img${now.id}`][0]
            let target=this.$refs[`target${now.id}`][0]
           
        if(this.canDrag==true){
            this.x1=e.changedTouches[0].clientX;
            this.y1=e.changedTouches[0].clientY;
            let x=this.x1-this.moveX;
            let y=this.y1-this.moveY;
           
            img.style.left =x+'px'
            img.style.top =y+'px'
            // console.log('l:'+x/this.$refs[`main`].offsetWidth)
            // console.log('t:'+y/this.$refs[`main`].offsetHeight)
            let dis=this.$refs[`target${now.id}`][0].offsetWidth<=20||this.$refs[`target${now.id}`][0].offsetHeight<=20?10:40
            // console.log(dis)
                if(checkIntersect(img,target,-dis)){

                    this.alignFlag=true
                    this.initList.forEach(item=>{
                        if(item.id==now.id){
                            img.style.left=item.style[2]+'%'; 
                            img.style.top=item.style[3]+'%'; 
                            this.doneList.push(item)
                            console.log(this.doneList)
                        }
                    })
                    switch (this.doneList.length){
                        case 3:
                            this.listIndex=1
                            break
                        case 6:
                            this.listIndex=2
                            break
                        case 9:
                            this.listIndex=3
                            break
                        case 12:
                            this.listIndex=4
                            break
                        case 15:
                            this.listIndex=5
                            break
                        case 18:
                            this.listIndex=6
                            break
                    }
                    console.log(now)
                    console.log(this.doneList.includes(now))
                    this.canDrag=false;
                }else{
                    this.alignFlag=false
                }

            }
        }
       
    },
    mounted(){
        // this.$refs.audio.play()
        //TODO: 初始化3个随机图片列表

    },
    
    

})