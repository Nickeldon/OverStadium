var frmax1
var frmax2
let ricolor = 'gray'
//TIMER     
setInterval(function () {
    if(document.getElementById('timer').innerHTML > 0 && !isfinishedP && !isfinishedT){document.getElementById('timer').innerHTML -= 1}
        if(document.getElementById('timer').innerHTML === '0' && alertcounter === 0){
            alertcounter++
            alert('TIME\'S UP!!')
            isfinishedT = true
        }}, 1000)

       

        function RESTART(){
            location.reload()
        }
    let bgcount = 0
setInterval(() => {
    if(bgcount < 4){
    bgcount++
    background.image.src = `../Addons/Background/${bgcount}.gif`} else {bgcount = 0}
}, 130)

function anim(){
    window.requestAnimationFrame(anim)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    background.updat()
    if(bool.a.press && Player1.lastpress === 'a'){
        if(Player1.position.x > 0){
            if(Player1.position.y < 430){
                Player1.velocity.x = -5
            }
            else Player1.velocity.x = -2}
    }
    if(bool.w.press && Player1.lastpress === 'w'){
            if(Player1.position.y >= canvas.height - 126){
                Player1.velocity.y -= 15}
    }
    if(bool.d.press && Player1.lastpress === 'd'){
        if(Player1.position.x < 910){
        Player1.velocity.x = 5}
    }
    if(bool.l.press && Player2.lastpress === 'l'){
        if(Player2.position.x > 0){
            if(Player2.position.y < 430){
                Player2.velocity.x = -5
            }
            else Player2.velocity.x = -2}
    }
    if(bool.r.press && Player2.lastpress === 'r'){
        if(Player2.position.x < 910){
        Player2.velocity.x = 3}
    }
    if(bool.sp.press && Player2.lastpress === '_'){
        if(Player2.position.y >= canvas.height - 126){
        Player2.velocity.y -= 15}
        else{}
    }
    if(bool.e.press && Player1.lastpress === 'e' && Player1.isattack){
        c.fillStyle = 'blue'
        
        if(Player1.position.x > Player2.position.x + 10){
            Player2pres = 'l'
            //c.fillRect(Player1.position.x - 60, Player1.position.y + 30, 70, 30)
        }
        else{
            Player2pres = 'r'
            //c.fillRect(Player1.position.x + 50, Player1.position.y + 30, 60, 30)
        }
        
        if(Player2.position.x >= Player1.position.x - 110 && Player2.position.x <= Player1.position.x && Player2pres === 'l'){Player2pres = 'touch'}

        
        if(Player2.position.x <= Player1.position.x + 170 && Player2.position.x >= Player1.position.x || Player2pres === 'touch'){
            if(Player2.position.y <= Player1.position.y + 60){
                if(Player2.HP > 0){
                    if(Player1.iscombo && gravityaccy > 0.7){
                        Player2.HP -= 0.5
                        Player1.image.src = '../Addons/Sprites/PL1/Attack2.png'
                    }else{
                Player2.HP -= 0.3}
                if(Player2.HP <= 30){
                    document.getElementById('ri').style.backgroundColor = 'rgb(130, 16, 16)'
                }
                console.log('PLAYER 2 TOUCHED HP REMAINING: ', Player2.HP)}
                else{
                    Player2.HP = 0
                    console.log('PLAYER 2 IS DEAD; HP REMAINING: ', Player2.HP)
                    if(alertcounter === 0){
                    document.getElementById('GameOverScreen').style.display = 'block'}
                    alertcounter++
                    isfinishedP = true
                }
                
            }
        }
        
        counter++
        if(counter > 5) bool.e.press = false 
        else console.log('SOMEHOW')
    }
    if(bool.ENTER.press && Player2.lastpress === 'ENTER'){
        atk = 1
        c.fillStyle = 'yellow'
        if(Player2.position.x > Player1.position.x + 10){
            Player1pres = 'l'
            c.fillRect(Player2.position.x - 60, Player2.position.y + 30, 70, 30)
        }
        else{
            Player1pres = 'r'
            c.fillRect(Player2.position.x + 50, Player2.position.y + 30, 60, 30)
        }
        
        if(Player2.position.x - 110 <= Player1.position.x && Player2.position.x >= Player1.position.x ){Player1pres = 'touch'}

        if(Player1.position.x <= Player2.position.x + 110 && Player1.position.x >= Player2.position.x || Player1pres === 'touch'){
            if(Player1.position.y <= Player2.position.y + 60){
                if(Player1.HP > 0){
                Player1.HP -= 0.3
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