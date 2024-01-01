var frmax1
var frmax2
let ricolor = 'gray'
const times = [];
let fps;
let msPrev = window.performance.now()
const fpslim = 60
const msPerFrame = 1000 / fpslim
var TO_RADIANS = Math.PI/180; 

function redirect(num){
    switch(num){
        case 1 : {
            document.getElementById('pause').style.display = 'none'
            ispaused = false
        }break;
        case 2 : {
            console.log('just hit... (yet)')
        }break;
        case 3 : {

        }break;
        case 4 : {
            document.getElementById('transition').style.display = 'block'
            document.getElementById('transition').style.backgroundColor = 'black'
            setTimeout(() => {
                window.location.href = '../mainmen.html'
            }, 1000)
        }break;

        case 5 : {
            //CHANGE CHARACTER
            
            document.getElementById('transition').style.display = 'block'
            document.getElementById('transition').style.backgroundColor = 'black'
            document.getElementById('transition').style.opacity = '100%'
            setTimeout(() => {
                window.location.href = '../charsel.html'
            }, 1000)

        }break;

        case 6 : {

        }break;

        case 7 : {

        }break;
    }
}

//TIMER     
setInterval(function () {
    if(document.getElementById('timer').innerHTML > 0 && !isfinishedP && !isfinishedT && !ispaused){document.getElementById('timer').innerHTML -= 1}
        if(document.getElementById('timer').innerHTML === '0' && alertcounter === 0){
            alertcounter++
            document.getElementById('alttime').style.display = 'flex'
            let count = -95
            setInterval(() => {
                if(count < 14){
                    count++
                    document.getElementById('timetxt').style.left = `${count}%`
                }
                else if(count === 14){
                    
                    setTimeout(() => {
                        document.getElementById('transition').style.display = 'block'
                        document.getElementById('transition').style.opacity = '50%'
                        document.getElementById('transition').style.backgroundColor = 'black'
                        document.getElementById('TimeAlert').style.display = 'block'
                    }, 3000)
                }
            }, 1)
            isfinishedT = true
        }}, 1000)

//FPS COUNTER
let initialpos = -60
function refreshLoop() {
    window.requestAnimationFrame(() => {
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;
      document.getElementById('isfps').innerHTML = `${fps}`
      if(fps >= 90){
        initialpos++
        document.getElementById('fps-al').style.display = 'flex';
        if(initialpos <= 0){
        document.getElementById('fps-al').style.top = `${initialpos}px`;}
        else if(initialpos > 900){document.getElementById('fps-al').style.opacity = '0%';}
        
      }
      refreshLoop();
    });
  }
  
  refreshLoop();

        function RESTART(){
            location.reload()
        }
    let bgcount = 0
setInterval(() => {
    if(bgcount < 4){
    bgcount++
    // background.image.src = `../Addons/Background/${bgcount}.gif`
} else {bgcount = 0}
}, 130)

/////////////////////////////////// PXLOADER

var loader = new PxLoader(), 
    backgroundImg = loader.addImage('images/headerbg.jpg'), 
    treesImg = loader.addImage('images/trees.png'), 
    ufoImg = loader.addImage('images/ufo.png'); 

function Skin(char){
    var image;
    var Frames;
    var inc;
    var ival;
    var jumping;
    var yi;
    var offsety;
    switch(char){
        case 'PL1': {Frames = {
            attack: 4,
            idle: 4,
            jump: 2,
            fall: 2,
            run: 8,
            hit: 3
        }
        inc = null;
        ival = 70;
        jumping = 200;
        yi = 170;
        offsety = 4
        }break;
        case 'PL2': {Frames = {
                attack: 6,
                idle: 8,
                jump: 2,
                fall: 2,
                run: 8,
                hit: 4
            }
            inc = null;
            ival = 70;
            jumping = 200;
            yi = 153;
            offsety = 0
        }break;
        case 'PL3': {Frames = {
            attack: 7,
            idle: 10,
            jump: 3,
            fall: 3,
            run: 8
        }
        inc = 48;
        ival = 48;
        jumping = 162;
        yi = 0;
        offsety = 0
        }break;
        case 'PL4': {Frames = {
            attack: 5,
            idle: 8,
            jump: 2,
            fall: 2,
            run: 8
        }
        inc = 48;
        jumping = 150;
        ival = 48;
        yi = 0;
        offsety = 0
    }break;
    default: {
        char = null;
    }
    }
    

    if(char){
        image = {
            attack: `../Addons/Sprites/${char}/Attack1.png`,
            cmb1: `../Addons/Sprites/${char}/Attack2.png`,
            idle: `../Addons/Sprites/${char}/Idle.png`,
            jump: `../Addons/Sprites/${char}/Jump.png`,
            fall: `../Addons/Sprites/${char}/Fall.png`,
            run: `../Addons/Sprites/${char}/Run.png`,
            hit: `../Addons/Sprites/${char}/Take hit.png`
        }
    }

return [image, Frames, inc, ival, jumping, yi, offsety]
}


function anim(){
    window.requestAnimationFrame(anim)

    //Request 60FPS limit
    const msNow = window.performance.now()
    const msPassed = msNow - msPrev
  
    if (msPassed < msPerFrame) return
  
    const excessTime = msPassed % msPerFrame
    msPrev = msNow - excessTime

    if(Player1.position.x > Player2.position.x + 10){
        Player2.rotate = false
        Player2pres = 'l'
        //c.fillRect(Player1.position.x - 60, Player1.position.y + 30, 70, 30)
    }
    
    else{
        Player2pres = 'r'
        Player2.rotate = true
        //c.fillRect(Player1.position.x + 50, Player1.position.y + 30, 60, 30)
    }
    if(Player2.position.x > Player1.position.x + 10){
        Player1pres = 'l'
        Player1.rotate = false
        c.fillRect(Player2.position.x - 60, Player2.position.y + 30, 70, 30)
    }
    else{
        Player1pres = 'r'
        Player1.rotate = true
        c.fillRect(Player2.position.x + 50, Player2.position.y + 30, 60, 30)
    }

    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    background.updat()
    if(bool.a.press && Player1.lastpress === 'a'){
        
        if(Player1.position.x > 0){
            if(Player1.position.y < 430){
                Player1.velocity.x = -5
            }
            else Player1.velocity.x = -7}
    }

    if(bool.w.press && Player1.lastpress === 'w'){
            if(Player1.position.y >= canvas.height - 126){
                //Player1.velocity.y -= 20
            }
    }

    if(bool.d.press && Player1.lastpress === 'd'){
        if(Player1.position.x < 910){
        Player1.velocity.x = 9}
    }

    if(bool.l.press && Player2.lastpress === 'l'){
        if(Player2.position.x > 0){
            if(Player2.position.y < 430){
                Player2.velocity.x = -5
            }
            else Player2.velocity.x = -6}
    }

    if(bool.r.press && Player2.lastpress === 'r'){
        if(Player2.position.x < 910){
        Player2.velocity.x = 9}
    }

    if(bool.sp.press && Player2.lastpress === '_'){
        if(Player2.position.y >= canvas.height - 126){
        }
    }
    
    if(bool.e.press && Player1.lastpress === 'e' && Player1.isattack){
        if(Player2.position.x >= Player1.position.x - 110 && Player2.position.x <= Player1.position.x && Player2pres === 'l'){Player2pres = 'touch'}

        
        if(Player2.position.x <= Player1.position.x + 185 && Player2.position.x >= Player1.position.x || Player2pres === 'touch'){
            if(Player2.position.y <= Player1.position.y + 60){
                if(Player2.HP > 0){
                Player2.HP -= 1.5
                Player2.hit = true
                Player2.velocity.y = -9;
                if(Player1.position.x < Player2.position.x){
                Player2.fall.x = 9} else Player2.fall.x = -9
                if(Player2.HP <= 30){
                    document.getElementById('ri').style.backgroundColor = 'rgb(130, 16, 16)'
                }
                console.log('PLAYER 2 TOUCHED HP REMAINING: ', Player2.HP)}
                else{
                    
                    Player2.HP = 0;
                    
                    if(alertcounter === 0){
                    document.getElementById('GameOverScreen').style.display = 'block'}
                    alertcounter++
                    isfinishedP = true
                }
                
            }
        }
        
        counter++
        Player1.lastpress = ''
        if(counter > 5) bool.e.press = false 
    }
    if(bool.ENTER.press && Player2.lastpress === 'ENTER'){
        atk = 1
        
        if(Player2.position.x - 110 <= Player1.position.x && Player2.position.x >= Player1.position.x ){Player1pres = 'touch'}

        if(Player1.position.x <= Player2.position.x + 110 && Player1.position.x >= Player2.position.x || Player1pres === 'touch'){
            if(Player1.position.y <= Player2.position.y + 60){
                if(Player1.HP > 0){
                Player1.HP -= 2.0
                Player1.hit = true
                Player1.velocity.y = -9;
                if(Player2.position.x < Player1.position.x){
                Player1.fall.x = 9} else Player1.fall.x = -9
                if(Player1.HP <= 30){
                    document.getElementById('le').style.backgroundColor = 'rgb(130, 16, 16)'
                }
                console.log('PLAYER 1 TOUCHED HP REMAINING: ', Player1.HP)}
                else{
                    Player1.HP = 0
                    console.log('PLAYER 1 IS DEAD; HP REMAINING: ', Player1.HP)
                    if(alertcounter === 0){
                        document.getElementById('GameOverScreen').style.display = 'block'}
                    alertcounter++
                    isfinishedP = true
                }
                
            }
        }
        counteralt++
        if(counteralt > 5) bool.ENTER.press = false
    }
    if((Player1.position.x + 50) > (Player2.position.x - 1) && Player1.position.y === Player2.position.y && Player1.position.x < Player2.position.x){
        Player1.position.x -= 3
        Player1.velocity.x = 0
    }
    else if((Player2.position.x + 50) > (Player1.position.x - 1) && Player2.position.y === Player1.position.y && Player2.position.x < Player1.position.x){
        console.log('true')
        Player2.velocity.x = 0
        Player2.position.x -= 3
        
    }
    if(Player1.velocity.x === 0){
        Player1.FramesMax = 4
    }
    if(Player2.velocity.x === 0){
        Player2.FramesMax = 4
    }

    
    Player2.updat()
    Player1.updat()

    
}