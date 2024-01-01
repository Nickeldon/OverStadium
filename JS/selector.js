console.log('HELLO')
const canv = document.querySelector('canvas')
const ctx = canv.getContext('2d')
let src = null
let choice1 = 'PY1'
let choice2 = 'PY1'
document.getElementById('label1').innerHTML = 'Erige'
document.getElementById('label2').innerHTML = 'Erige'

var bgimage = new Image()
bgimage.src = '../Addons/Background/gradient.png' 

ctx.fillRect(0,0, canv.width, canv.height)

class choice {
    constructor({position, imageSRC, increm, FramesMax, width, height, jumps, iframe, factor}){
        this.position = position,
        this.image = new Image(),
        this.image.src = imageSRC,
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
    imageSRC: src,
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
    imageSRC: src,
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

function Bridge(){
    document.getElementById('transition').style.display = 'block'
    document.getElementById('transition').style.backgroundColor = 'black'
    if(!choice1) choice1 = 'PL1'
    if(!choice2) choice2 = 'PL2'
    var json = {
        "data": {
          "P1": choice2,
          "P2": choice2
        }}
        json = JSON.stringify(json)
        fetch(`http://localhost:8000/request?METADATA=${json}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(res => {
            res.json();
            if(res.status === 404){
                console.log('COULD NOT FETCH DATA')
            }
        })
        .then(message => {
            console.log(message);
            setTimeout(() => {
                window.location.href = '../index.html'
            }, 1000)
            // Handle the response as needed
          })
          .catch(error => console.error('Error:', error));
      
    
    
    
}

function selector1(action){
    if(action === 'Arrow-Right'){
        switch(choice1){
            case 'PY1':{
                choice1 = 'PY2';
                }
                break;
            case 'PY2':{
                choice1 = 'PY3';
                }
                break;
            case 'PY3':{
                choice1 = 'PY4'}
                break;
            case 'PY4':{
                choice1 = 'PY1'
                //choice1 = 'PY5'
            }
                break;

        }
    }
    else{
        switch(choice1){
            /*case 'PY5':{
                choice1 = 'PY4'}
                break;*/
            case 'PY4':{
                choice1 = 'PY3';
                }
                break;
            case 'PY3':{
                choice1 = 'PY2';
                    }
                break;
            case 'PY2':{
                choice1 = 'PY1'}
                break;
            case 'PY1': {
                choice1 = 'PY4'
                //choice2 = 'PY5'
            }break;

        }
    }
    switch(choice1){
        case 'PY1': {
                Player1.increm.x = 70
                Player1.increm.y = 70;
                Player1.iframe = 70;
                Player1.jumps = 200;
                Player1.factor.x = 11;

                document.getElementById('label1').innerHTML = 'Erige'
        }break;
        case 'PY2': {
                Player1.increm.x = 70
                Player1.increm.y = 63;
                Player1.iframe = 70;
                Player1.jumps = 200;
                Player1.factor.x = 11;
                document.getElementById('label1').innerHTML = 'Kazuya'
        }break;
        case 'PY3': {
                Player1.increm.x = 54;
                Player1.increm.y = 54;
                Player1.iframe = 54;
                Player1.jumps = 162;
                Player1.factor.x = 11;
                document.getElementById('label1').innerHTML = 'Kirei'
        }break;
        case 'PY4': {
                Player1.factor.x = 10;
                Player1.increm.x = 48;
                Player1.increm.y = 54;
                Player1.iframe = 48;
                Player1.jumps = 150;
                document.getElementById('label1').innerHTML = 'Aisha'
        }break;
        case 'PY5': {

        }break;
    }
}

function selector2(action){
    if(action === 'Arrow-Right'){
        switch(choice2){
            case 'PY1':{
                choice2 = 'PY2';
                Player2.increm.x = 70
                Player2.increm.y = 70}
                break;
            case 'PY2':{
                choice2 = 'PY3';
                Player2.increm.x = 70
                Player2.increm.y = 70}
                break;
            case 'PY3':{
                choice2 = 'PY4';
                Player2.increm.x = 53
                Player2.increm.y = 50;
                }
                break;
            case 'PY4':{
                //choice2 = 'PY5'
                choice2 = 'PY1'}
                break;

        }
    }
    else{
        switch(choice2){
            /*case 'PY5':{
                choice2 = 'PY4'}
                break;*/
            case 'PY4':{
                choice2 = 'PY3'}
                break;
            case 'PY3':{
                choice2 = 'PY2'}
                break;
            case 'PY2':{
                choice2 = 'PY1'}
                break;
            case 'PY1': {
                choice2 = 'PY4'
                //choice2 = 'PY5'
            }break;

        }
    }
    switch(choice2){
        case 'PY1': {
                Player2.increm.x = 70
                Player2.increm.y = 70;
                Player2.iframe = 70;
                Player2.jumps = 200
                Player2.factor.x = 11;
                document.getElementById('label2').innerHTML = 'Erige'
        }break;
        case 'PY2': {
                Player2.increm.x = 70
                Player2.increm.y = 63;
                Player2.iframe = 70;
                Player2.jumps = 200
                Player2.factor.x = 11;
                document.getElementById('label2').innerHTML = 'Kazuya'
        }break;
        case 'PY3': {
                Player2.increm.x = 54;
                Player2.increm.y = 54;
                Player2.iframe = 54;
                Player2.jumps = 162;
                Player2.factor.x = 11;
                document.getElementById('label2').innerHTML = 'Kirei'
        }break;
        case 'PY4': {
                Player2.factor.x = 10;
                Player2.increm.x = 48
                Player2.increm.y = 54;
                Player2.iframe = 48;
                Player2.jumps =  150;
                document.getElementById('label2').innerHTML = 'Aisha'
        }break;
        case 'PY5': {

        }break;
    }
}



function animate(){
    window.requestAnimationFrame(animate)


    ctx.drawImage(bgimage, 0, 0)

    switch(choice1){
        case 'PY1': {
            Player1.image.src  = '../Addons/Sprites/PL1/Idle.png'
            Player1.FramesMax = 4;
            Player1.position.x = 210,
            Player1.position.y = 218
        }break;
        case 'PY2': {
            Player1.image.src = '../Addons/Sprites/PL2/Idle.png'
            Player1.FramesMax = 8
        }break;
        case 'PY3': {
            Player1.image.src = '../Addons/Sprites/PL3/Run.png'
            Player1.FramesMax = 8
        }break;
        case 'PY4': {
            Player1.image.src = '../Addons/Sprites/PL4/Idle.png'
            Player1.FramesMax = 8
        }break;
        default:{
            console.log('none selected')
        }
    } 
    switch(choice2){
        case 'PY1': {
            Player2.image.src  = '../Addons/Sprites/PL1/Idle.png'
            Player2.FramesMax = 4
            Player2.position.x = 645,
            Player2.position.y = 218
        }break;
        case 'PY2': {
            Player2.image.src = '../Addons/Sprites/PL2/Idle.png'
            Player2.FramesMax = 8
        }break;
        case 'PY3': {
            Player2.image.src = '../Addons/Sprites/PL3/Idle.png'
            Player2.FramesMax = 10
        }break;
        case 'PY4': {
            Player2.image.src = '../Addons/Sprites/PL4/Idle.png'
            Player2.FramesMax = 8
        }break;
        default:{
            console.log('none selected')
        }
    } 

    Player1.updatePL1()
    Player2.updatePL2()
}
animate()