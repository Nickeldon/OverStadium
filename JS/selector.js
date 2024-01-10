var urlParams = new URLSearchParams(window.location.search);
var options = urlParams.get('options');
var selectedbg;

var loader = new PxLoader()
const directory = {
    CH1: loader.addImage(`./Addons/Sprites/PL1/Idle.png`),
    CH2: loader.addImage(`./Addons/Sprites/PL2/Idle.png`),
    CH3: loader.addImage(`./Addons/Sprites/PL3/Idle.png`),
    CH4: loader.addImage(`./Addons/Sprites/PL4/Idle.png`),
    CH5: loader.addImage(`./Addons/Sprites/PL5/Idle.png`)
}

loader.addCompletionListener(() => {
animate()
})

function hoverBG(selected){
    var selectarray = document.getElementsByClassName('selbg')

    for(i = 0; i<selectarray.length; i++){
        selectarray[i].style.borderColor = 'white'
    }

    document.getElementById(selected).style.borderColor = 'orange'
    selectedbg = selected

    
}

const canv = document.querySelector('canvas')
const ctx = canv.getContext('2d')
let src = null
let choice1 = 'PL1'
let choice2 = 'PL1'
document.getElementById('label1').innerHTML = 'Erige'
document.getElementById('label2').innerHTML = 'Erige'

var bgimage = new Image()
bgimage.src = './Addons/Background/gradient.png' 

ctx.fillRect(0,0, canv.width, canv.height)

class choice {
    constructor({position, increm, FramesMax, width, height, jumps, iframe, factor}){
        this.position = position,
        this.image = new Image(),
        this.increm = increm,
        this.FramesMax = FramesMax,
        this.width = width,
        this.height = height,
        this.jumps = jumps,
        this.iframe = iframe,
        this.factor = factor
    }
    draw(){
        //INITIAL = 48; JUMP = 167
        ctx.drawImage(this.image,this.increm.x, this.increm.y, this.image.width / this.FramesMax, this.image.height, this.position.x - 20, this.position.y - 70, this.width * this.factor.x, this.height * this.factor.y)
    }
    draw2(){
        var deg = 360
        ctx.save()
        ctx.translate(this.position.x + this.width/2, this.position.y + this.height/2)
        var rad = 2 * Math.PI - deg * Math.PI / 180;    
        ctx.rotate(rad);

        ctx.scale(-1, 1);

        ctx.drawImage(this.image, this.increm.x, this.increm.y, this.image.width / this.FramesMax, this.image.height, -this.width/2 - 100, -this.height/2 - 70, this.width*10, this.height* 6)
        ctx.restore()

    }
    updatePL1(){
        this.draw()
    }
    updatePL2(){
        this.draw2()
    }
}

setInterval(() => {
        if(Player1.increm.x < (Player1.iframe + (Player1.jumps*(Player1.FramesMax - 1)))){
        Player1.increm.x += Player1.jumps}
        else Player1.increm.x = Player1.iframe;
    
        if(Player2.increm.x < (Player2.iframe + (Player2.jumps*(Player2.FramesMax - 1)))){
        Player2.increm.x += Player2.jumps
        }
        else Player2.increm.x = Player2.iframe
    
}, 120)

const Player1 = new choice({
    position:{
        x: 220,
        y: 230
    },
    width: 65,
    height: 130,
    FramesMax: 4,
    jumps: 200,
    increm:{
        x:70,
        y:70
    },
    iframe: 70,
    factor: {
        x: 11,
        y: 6
    }
})

const Player2 = new choice({
    position:{
        x: 650,
        y: 230
    },
    width: 65,
    height: 130,
    FramesMax: 4,
    jumps: 200,
    increm:{
        x:70,
        y:70
    },
    iframe: 70,
    factor: {
        x: 11,
        y: 6
    }
})

function Bridge(path){
            switch(path){
                case 1: {

                    document.getElementById('bg-sel').style.display = 'block'
                    var ival = 100;

                    setInterval(() => {
                        if(ival > 1){
                        ival-=5
                        
                        document.getElementById('bg-sel').style.left = `${ival}%`
                            
                        if(ival === 0){
                            document.getElementById('bg-sel').style.left = `-0.5%`     
                        }
                    }
                    }, 0.01)
                    

                }break;

                case 2: {
                    document.getElementById('transition').style.display = 'block'
                    document.getElementById('transition').style.backgroundColor = 'black'
                    var json = {
                        "data": {
                        "P1": choice1 || 'PL1',
                        "P2": choice2 || 'PL1',
                        "BG": selectedbg || null
                        }}
                        json = JSON.stringify(json)
                            setTimeout(() => {
                                window.location.href = 'index.html?choice=' + json + '&options=' + options
                            }, 1000)
                            // Handle the response as needed
                }break;

            }
    
}

function selector1(action){
    if(action === 'Arrow-Right'){
        switch(choice1){
            case 'PL1':{
                choice1 = 'PL2';
                }
                break;
            case 'PL2':{
                choice1 = 'PL3';
                }
                break;
            case 'PL3':{
                choice1 = 'PL4'}
                break;
            case 'PL4':{
                choice1 = 'PL5'
            }
                break;
            case 'PL5': {
                choice1 = 'PL1'
            }break;

        }
    }
    else{
        switch(choice1){
            case 'PL5':{
                choice1 = 'PL4'}
                break;
            case 'PL4':{
                choice1 = 'PL3';
                }
                break;
            case 'PL3':{
                choice1 = 'PL2';
                    }
                break;
            case 'PL2':{
                choice1 = 'PL1'}
                break;
            case 'PL1': {
                choice1 = 'PL5'
            }break;

        }
    }
    switch(choice1){
        case 'PL1': {
                Player1.increm.x = 70
                Player1.increm.y = 70;
                Player1.iframe = 70;
                Player1.jumps = 200;
                Player1.factor.x = 11;

                document.getElementById('label1').innerHTML = 'Erige'
        }break;
        case 'PL2': {
                Player1.increm.x = 70
                Player1.increm.y = 63;
                Player1.iframe = 70;
                Player1.jumps = 200;
                Player1.factor.x = 11;
                document.getElementById('label1').innerHTML = 'Kazuya'
        }break;
        case 'PL3': {
                /*Player1.increm.x = 54;
                Player1.increm.y = 54;
                Player1.iframe = 54;
                Player1.jumps = 162;
                Player1.factor.x = 11;*/
                Player1.increm.x = 54;
                Player1.increm.y = 54;
                Player1.iframe = 54;
                Player1.jumps = 162;
                Player1.factor.x = 11;
                document.getElementById('label1').innerHTML = 'Kirei'
        }break;
        case 'PL4': {
                Player1.factor.x = 10;
                Player1.increm.x = 48;
                Player1.increm.y = 54;
                Player1.iframe = 48;
                Player1.jumps = 150;
                document.getElementById('label1').innerHTML = 'Aisha'
        }break;
        case 'PL5': {
            Player1.factor.x = 10;
            Player1.increm.x = 48;
            Player1.increm.y = 54;
            Player1.iframe = 48;
            Player1.jumps = 180;
            document.getElementById('label1').innerHTML = 'Gregory'
        }break;
    }
}

function selector2(action){
    if(action === 'Arrow-Right'){
        switch(choice2){
            case 'PL1':{
                choice2 = 'PL2';
                Player2.increm.x = 70
                Player2.increm.y = 70}
                break;
            case 'PL2':{
                choice2 = 'PL3';
                Player2.increm.x = 70
                Player2.increm.y = 70}
                break;
            case 'PL3':{
                choice2 = 'PL4';
                Player2.increm.x = 53
                Player2.increm.y = 50;
                }
                break;
            case 'PL4':{
                choice2 = 'PL5'
                }
                break;
            case 'PL5': {
                choice2 = 'PL1'
            }break;

        }
    }
    else{
        switch(choice2){
            case 'PL5':{
                choice2 = 'PL4'}
                break;
            case 'PL4':{
                choice2 = 'PL3'}
                break;
            case 'PL3':{
                choice2 = 'PL2'}
                break;
            case 'PL2':{
                choice2 = 'PL1'}
                break;
            case 'PL1': {
                choice2 = 'PL5'
            }break;

        }
    }
    switch(choice2){
        case 'PL1': {
                Player2.increm.x = 70
                Player2.increm.y = 70;
                Player2.iframe = 70;
                Player2.jumps = 200
                Player2.factor.x = 11;
                document.getElementById('label2').innerHTML = 'Erige'
        }break;
        case 'PL2': {
                Player2.increm.x = 70
                Player2.increm.y = 63;
                Player2.iframe = 70;
                Player2.jumps = 200
                Player2.factor.x = 11;
                document.getElementById('label2').innerHTML = 'Kazuya'
        }break;
        case 'PL3': {
                Player2.increm.x = 54;
                Player2.increm.y = 54;
                Player2.iframe = 54;
                Player2.jumps = 162;
                Player2.factor.x = 11;
                document.getElementById('label2').innerHTML = 'Kirei'
        }break;
        case 'PL4': {
                Player2.factor.x = 10;
                Player2.increm.x = 48
                Player2.increm.y = 54;
                Player2.iframe = 48;
                Player2.jumps =  150;
                document.getElementById('label2').innerHTML = 'Aisha'
        }break;
        case 'PL5': {
            Player2.factor.x = 10;
            Player2.increm.x = 48;
            Player2.increm.y = 54;
            Player2.iframe = 48;
            Player2.jumps = 180;
            document.getElementById('label2').innerHTML = 'Gregory'
        }break;
    }
}



function animate(){
    window.requestAnimationFrame(animate)


    ctx.drawImage(bgimage, 0, 0)

    switch(choice1){
        case 'PL1': {
            Player1.image  = directory.CH1
            Player1.FramesMax = 4;
            Player1.position.x = 210,
            Player1.position.y = 218
        }break;
        case 'PL2': {
            Player1.image = directory.CH2
            Player1.FramesMax = 8
            Player1.position.x = 210,
            Player1.position.y = 218
        }break;
        case 'PL3': {
            Player1.image = directory.CH3
            Player1.FramesMax = 10
            Player1.position.x = 210,
            Player1.position.y = 218
        }break;
        case 'PL4': {
            Player1.image = directory.CH4
            Player1.FramesMax = 8
            Player1.position.x = 210,
            Player1.position.y = 218
        }break;
        case 'PL5': {
            Player1.image = directory.CH5
            Player1.FramesMax = 11
            Player1.position.x = 150,
            Player1.position.y = 192
        }break;
        default:{
            console.log('none selected')
        }
    } 
    switch(choice2){
        case 'PL1': {
            Player2.image  = directory.CH1
            Player2.FramesMax = 4
            Player2.position.x = 645,
            Player2.position.y = 218
        }break;
        case 'PL2': {
            Player2.image = directory.CH2
            Player2.FramesMax = 8
            Player2.position.x = 645,
            Player2.position.y = 218
        }break;
        case 'PL3': {
            Player2.image = directory.CH3
            Player2.FramesMax = 10
            Player2.position.x = 645,
            Player2.position.y = 218
        }break;
        case 'PL4': {
            Player2.image = directory.CH4
            Player2.FramesMax = 8
            Player2.position.x = 645,
            Player2.position.y = 218
        }break;
        case 'PL5': {
            Player2.image = directory.CH5
            Player2.FramesMax = 11
            Player2.position.x = 725,
            Player2.position.y = 192
        }break;
        default:{
            console.log('none selected')
        }
    } 

    Player1.updatePL1()
    Player2.updatePL2()
}

loader.start()