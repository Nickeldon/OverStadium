//VARIABLES
const canvas = document.querySelector('canvas')
var gravityaccy = 0.3;
let atk = false
let counter = 0
let counteralt = 0
let Player2pres;
let Player1pres;
let key
let isfinishedT = false
let isfinishedP = false
let alertcounter = 0
let alrtcount2 = 0
const c = canvas.getContext('2d')
var SRCPl1 = '../Addons/Sprites/PL1/Idle.png'
var SRCPl2 = '../Addons/Sprites/PL1/Idle.png'
var FRPL1;
var FRPL2;
var bglink
let atkcount = 0
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
    imageSRC: bglink,
    CurrentFrame: 0
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
color: 'green',
lastpress: '',
width: 50,
height: 100,
AttackBoxcolor: 'red',
HP: 100,
imageSRC: SRCPl1,
FramesMax:1,
isattack: false,
increm: 70,
canattack:true,
lastattack: false,
iscombo:false
}
)

//Let Player2 have higher mass than player1
var Player2 = new Fighter({
    position: {
    x:900,
    y:150
},
velocity: {
    x:0,
    y:1
},
width: 50,
height: 100,
color: 'red',
lastpress: '',
AttackBoxcolor: 'yellow',
HP: 100,
imageSRC: SRCPl2,
FramesMax:1,
isattack: false,
increm: 70
})

//KEY HANDLERS 
var Lastrelease = 0
if(!isfinishedT && !isfinishedP){

    console.log(isfinishedP, isfinishedT)
window.addEventListener('keydown', (event) => {
    
    if(!isfinishedT && !isfinishedP){
    if(event.key.length === 1){
        key = event.key.toLowerCase()}
        else{
            key = event.key
        }
        
    switch(key){
        case 'w': {
            //jump
            
            gravityaccy = 0.7
            bool.w.press = true
            Player1.lastpress = 'w'
            
        }break;
        case 'a': {
            
            bool.a.press = true
            Player1.lastpress = 'a'
            
        }break;

        case 's': {
            gravityaccy += 1
        }break;

        case 'd': {
            
            bool.d.press = true
            Player1.lastpress = 'd'
        }break;

        case 'e': {
            //Up Attack
            if(Player1.canattack && atkcount < 5){
            Player1.lastattack = Date.now()
            Player1.isattack = true
            cooldown = 0
            bool.e.press = true
            Player1.increm = 70
            counter++
            Player1.lastpress = 'e'
            atkcount++
            console.log('YES')
            }else{
                console.log('DO \n NOT \n SPAM!!!!!!!!!!!!!', atkcount, Player1.canattack)
                Player1.canattack = false
                Player1.isattack = false
            }
            if(gravityaccy > 0.7){
                console.log('combo')
                Player1.iscombo = true
            }
        }break;
        
        case 'Enter': {
            if(counteralt < 5){
                bool.ENTER.press = true}
                counteralt++
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
            bool.sp.press = true
            Player2.lastpress = '_'
            gravityaccy = 0.9
            
        }break;

        

        default: {
            console.log('incorrect event')
        }break
    }}
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
            Player1.increm = 70
            bool.w.press = false
        }break;

        case 'a': {
            Player1.increm = 70
            bool.a.press = false
            Player1.velocity.x = 0
            
        }break;

        case 's': {
            //USELESS... UNLESS!! (COMBOS)
        }break;

        case 'd': {
            Player1.increm = 70
            bool.d.press = false
            Player1.velocity.x = 0
        }break;

        case 'e': {
            if(Player1.canattack){
            bool.e.press = false
            counter = 0
            Player1.canattack = false
            setTimeout(() => {
                Player1.isattack = false;
                bool.e.press = false
            }, 100)
            atkcount = 0
            }
            Lastrelease = Date.now()

        }break;

        case 'Enter': {
            bool.ENTER.press = false
            counteralt = 0
            
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
        default: {
            console.log('incorrect event')
        }break
    }}
})}
anim()