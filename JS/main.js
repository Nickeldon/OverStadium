//VARIABLES
const canvas = document.querySelector('canvas')
var gravityaccy = 0.3;
var gravityaccx = 0.3;
let atk = false
let counter = 0
let counteralt = 0
let Player2pres;
let Player1pres;
let key
let isfinishedT = false
let ispaused = false
let isfinishedP = false
let alertcounter = 0
let alrtcount2 = 0
let jumpcount1 = 0
let jumpcount2 = 0
const c = canvas.getContext('2d')
var SRCPl1 = '../Addons/Sprites/PL1/Idle.png'
var SRCPl2 = '../Addons/Sprites/PL1/Idle.png'
var FRPL1;
var FRPL2;
var bglink
let atkcount1 = 0
var bool = {
    a:{
        press:false
    },
    d:{
        press:false
    },
    l:{
        press:false
    },
    r:{
        press:false
    },
    e:{
        press:false
    },
    ENTER: {
        press:false
    },
    w:{
        press:false
    },
    sp:{
        press:false
    }
}


//SPRITES / FIGHTERS

c.fillRect(0, 0, canvas.width, canvas.height)
var background = new Sprite({
    position:{
        x:0,
        y:0
    },
    width: canvas.width,
    height: canvas.height,
    scale:{
        x: 1.5,
        y: 1.5,

    },
    imageSRC: '../Addons/Background/BACKG1.gif',
    CurrentFrame: 0,
    choosen: null
})
 
var Player1 = new Fighter({
    position:{
    x:20,
    y:150
},
velocity: {
    x:0,
    y:0
},
lastpress: '',
width: 50,
height: 150,
HP: 100,
imageSRC: SRCPl1,
FramesMax:1,
isattack: false,
increm: null,
canattack:true,
lastattack: null,
iscombo:false,
Framescount: 0,
Char: 'PL1',
ivalue: null,
jump: null,
hit: false,
fall: {
    x: 0,
    y: 0,
},
rotate: false,
directories: null
}
)

//Let Player2 have higher mass than player1
var Player2 = new Fighter({
    position: {
    x:950,
    y:150
},
velocity: {
    x:0,
    y:1
},
width: 50,
height: 150,
lastpress: '',
HP: 100,
imageSRC: SRCPl2,
FramesMax:1,
isattack: false,
increm: null,
Framescount: 0,
Char: 'PL1',
ivalue: null,
jump: null,
hit: false,
fall: {
    x: 0,
    y: 0,
},
rotate: false,
directories: null
})


        /*Player1.increm = Skin(Player1.Char)[2] || 70
        Player2.increm = Skin(Player2.Char)[2] || 70

        Player1.jump = Skin(Player1.Char)[4] || 200;
        Player1.ivalue = Skin(Player1.Char)[3] || 70

        Player2.jump = Skin(Player2.Char)[4] || 200;
        Player2.ivalue = Skin(Player2.Char)[3] || 70*/

        
        
//KEY HANDLERS 
var Lastrelease = 0
window.addEventListener('keydown', (event) => {
    if(!isfinishedT && !isfinishedP && !ispaused && isstarted){
    if(event.key.length === 1){
        key = event.key.toLowerCase()}
        else{
            key = event.key
        }
        
    switch(key){
        case 'w': {
            //jump
            if(jumpcount1 >= 2 && Player1.velocity.y === 0) jumpcount1 = 0
            if(jumpcount1 < 2 || Player1.velocity.y === 0){
                jumpcount1++
            if(Player1.position.y >= 0){
            if(Player1.velocity.y !== 0){
                Player1.velocity.y = -15
            }else Player1.velocity.y = -20
            console.log('true')
            if(!Player1.isattack){
                Player1.increm = Skin(Player1.Char)[3]
            }
            gravityaccy = 0.9
            bool.w.press = true
            Player1.lastpress = 'w'
            }}
        }break;
        case 'a': {
            bool.a.press = true
            Player1.lastpress = 'a'
            
        }break;

        case 's': {
            gravityaccy += 1
        }break;

        case 'd': {
            //Player1.increm = 48
            bool.d.press = true
            Player1.lastpress = 'd'
        }break;

        case 'e': {
            //Up Attack
            if(!Player1.isattack){
                bool.e.press = true
                Player1.isattack = true;
                Player1.Framescount = 0
                Player1.increm = Skin(Player1.Char)[3]
            }
                Player1.lastpress = 'e'

                /*
                 //Up Attack
            if(!Player1.isattack && Date.now() - Lastrelease >= 700 && Player1.canattack){
            bool.e.press = true
            Player1.isattack = true;
            Player1.Framescount = 0
            Player1.increm = Skin(Player1.Char)[3]
            Player1.lastpress = 'e'
            Player1.iscombo = false;
            Player1.canattack = false
            Lastrelease = Date.now()}
            else if(Player1.canattack && !Player1.iscombo && Date.now() - Lastrelease >= 500){
                Player1.iscombo = true
                console.log('combo')
            Player1.lastpress = 'e'
                */
            
        }break;
        
        case 'Enter': {
            if(!Player2.isattack){
                bool.ENTER.press = true
                Player2.isattack = true;
                Player2.Framescount = 0
                Player2.increm = Skin(Player2.Char)[3]
            }
                Player2.lastpress = 'ENTER'
        }break;

        case 'ArrowLeft': {
            bool.l.press = true
            Player2.lastpress = 'l'
        }break;
        
        case 'ArrowRight': {
            bool.r.press = true
            Player2.lastpress = 'r'
        }break;
        case 'ArrowDown': {
            gravityaccy += 1
        }break;
        case ' ' :{
            if(jumpcount2 >= 2 && Player2.velocity.y === 0) jumpcount2 = 0
            if(jumpcount2 < 2 || Player2.velocity.y === 0){
                jumpcount2++
            if(Player2.position.y >= 0){
                if(Player2.velocity.y !== 0){
                    Player2.velocity.y = -15
                }else Player2.velocity.y = -20
                console.log('true')
                Player2.increm = Skin(Player2.Char)[3]
                gravityaccy = 0.9
                bool.sp.press = true
                Player2.lastpress = '_'
                }}
            
        }break;

        case 'ArrowUp' :{
            if(jumpcount2 >= 2 && Player2.velocity.y === 0) jumpcount2 = 0
            if(jumpcount2 < 2 || Player2.velocity.y === 0){
                jumpcount2++
            if(Player2.position.y >= 0){
                if(Player2.velocity.y !== 0){
                    Player2.velocity.y = -15
                }else Player2.velocity.y = -20
                console.log('true')
                Player2.increm = Skin(Player2.Char)[3]
                gravityaccy = 0.9
                bool.sp.press = true
                Player2.lastpress = '_'
                }}
            
        }break;

        case 'Escape': {
            if(document.getElementById('pause').style.display !== 'block'){
            document.getElementById('pause').style.display = 'block';
            ispaused = true}
        }break;
        /*case 'F11': {
            var iscale = window.innerWidth
            console.log(iscale)
            if(iscale <= 1142){
                document.body.style.transform = 'scale(1.5)'
                window.innerHeight *= 2
                window.innerWidth *= 2
            }
            else{
                //document.body.style.transform = 'scale(1)'
                window.innerHeight /= 2
                window.innerWidth /= 2
            }
        }*/

        default: {
            console.log('incorrect event')
        }break
    }}
    else{
        if(event.key === 'Escape' || event.key.toLowerCase() === 'p'){
            document.getElementById('pause').style.display = 'none';
                ispaused = false
        }
    }
})

window.addEventListener('keyup', (event) => {

    if(!isfinishedT && !isfinishedP){
    if(event.key.length === 1){
    key = event.key.toLowerCase()}
    else{
        key = event.key
    }
    switch(key){
        case 'w': {
            //jump
            if(!Player1.isattack){
            Player1.increm = Skin(Player1.Char)[3]
        }
            bool.w.press = false
        }break;

        case 'a': {
            if(!Player1.isattack){
            Player1.increm = Skin(Player1.Char)[3]
        }
            bool.a.press = false
            Player1.velocity.x = 0
            
        }break;

        case 's': {
            //USELESS... UNLESS!! (COMBOS)
        }break;

        case 'd': {
            if(!Player1.isattack){
            Player1.increm = Skin(Player1.Char)[3]
        }
            bool.d.press = false
            Player1.velocity.x = 0
            Player1.FramesMax = 8;
        }break;

        case 'e': {
            /*if(Player1.canattack){
            console.log(Date.now() - Lastrelease)
            bool.e.press = false
            counter = 0
            Player1.canattack = false
            }
            else{
                Player1.canattack = true
            }*/

            if(Player1.canattack){
                bool.e.press = false
                counter = 0
                Player1.canattack = false
                }
                Lastrelease = Date.now()
            
            

        }break;

        case 'Enter': {
            if(Player2.canattack){
                bool.ENTER.press = false
                counteralt = 0
                Player2.canattack = false
                }
                Lastrelease = Date.now()
            
        }break;

        case 'ArrowLeft': {
            bool.l.press = false
            Player2.velocity.x = 0;
        }break;
        
        case 'ArrowRight': {
            bool.r.press = false
            Player2.velocity.x = 0;
        }break;
        case ' ': {
            bool.sp.press = false
        }break;
        case 'ArrowUp': {
            bool.sp.press = false
        }break;
        default: {
            console.log('incorrect event')
        }break
    }}
})

let directory
addEventListener("fullscreenchange", (event) => {console.log('yesyeysyesyeysyey')});
function igniter(meta, BGmetadata){
    Player1.directories = meta.P1
    Player2.directories = meta.P2
    BGinit(BGmetadata)
    setTimeout(() => {
        anim(meta)
    }, 500)
    setTimeout(() => {

        document.querySelector(".spinner").classList.add('spinner-hidden')
        setTimeout(() => {
            document.querySelector('.lodscr').classList.add('spinner-hidden')
            isstarted = true
            setTimeout(() => {
                document.getElementById('load-scr').style.display = 'none'
            }, 800)
        },1000)
    }, 2000)
}