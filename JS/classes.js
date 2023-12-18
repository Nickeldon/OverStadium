const jumps = 70
let intervals = 100
let count = 0;
let isatkend = true
class Fighter{
    constructor({position, velocity, lastpress, AttackBoxcolor, HP, width, height, imageSRC, FramesMax, isattack, increm, canattack, lastattack, iscombo,}){
        this.position = position
        this.velocity = velocity
        this.lastpress = lastpress,
        this.width = width,
        this.height = height,
        this.image = new Image(),
        this.image.src = imageSRC
        this.AttackBox = {
            color: AttackBoxcolor,
            position: this.position,
            width: 100,
            height: 30,
        }
        this.HP = HP,
        this.FramesMax = FramesMax,
        this.isattack = isattack,
        this.increm = increm,
        this.canattack = canattack,
        this.lastattack = lastattack,
        this.iscombo = iscombo
    }

    draw(){
         //if(!this.isattack && this.velocity.x === 0 && this.velocity.y === 0) this.image.src = '../Addons/Sprites/PL1/Idle.png';
        //c.fillStyle = this.color
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        if(Player1.canattack && Player1.increm === 670){isatkend = true}
        if(Math.abs(Math.trunc(this.HP)) === 0 && isfinishedP){this.image.src = '../Addons/Sprites/PL1/Death.png'; this.FramesMax = 7; intervals = 1000}
        else{
        if(this.isattack && this.canattack && isatkend){ 
            this.image.src = '../Addons/Sprites/PL1/Attack1.png';
            this.FramesMax = 4; intervals = 100; isatkend = false; 
            
            }
            
           else if(isatkend){
        if(this.velocity.y !== 0 && !this.isattack){this.image.src = '../Addons/Sprites/PL1/Jump.png';this.FramesMax = 2; intervals = 100; console.log('MAYBE')}
          else if(this.velocity.y === 0 && this.velocity.x === 0 && !this.isattack){this.image.src = '../Addons/Sprites/PL1/Idle.png';this.FramesMax = 4; intervals = 100}
            else if(this.velocity.y === 0 && this.velocity.x !== 0 && !this.isattack){this.image.src = '../Addons/Sprites/PL1/Run.png'; this.FramesMax = 8; intervals = 100;}
               }
        }
        if(this.isattack && this.velocity.x !== 0){
            this.FramesMax = 4}
           
            if(this.position.y === (450 - ((450-281.6999999999998)/2)) && Math.trunc((this.velocity.y)/15) === -1){this.increm = 70; }
            else if(this.position.y === 281.6999999999998){this.increm = 270;}
            if(this.velocity.x > 0){
                console.log('Higher than 0')
                if(this.position.y === (450 - ((450-281.6999999999998)/2)) || Math.trunc((this.velocity.y)) === (Math.trunc(15/2)) && this.velocity.x !== 0){this.image.src = '../Addons/Sprites/PL1/Fall.png'; console.log('3rd jump'); this.FramesMax = 2; intervals = 100}
                     else if(Math.trunc(this.position.y/450) === 1 && Math.trunc(this.velocity.y / 15) === 1 && this.velocity.x > 0){this.image.src = '../Addons/Sprites/PL1/Fall.png';console.log('4th jump'); this.FramesMax = 2; intervals = 100}
                }

            c.drawImage(this.image,this.increm, 70, this.image.width / this.FramesMax, this.image.height, this.position.x - 20, this.position.y - 70, this.width * 11, this.height * 6)

    }

    updat(){
        this.draw()
        //If character t

        console.log(this.velocity.y)

            if(!Player1.canattack){
                
                if(Math.trunc((Date.now() - Player1.lastattack)/200) >= 1){
                    this.increm = 70
                    Player1.canattack = true
                    if(this.increm === 670 && !isatkend){
                        isatkend = true
                        
                    }
                    else{
                        console.log('why')
                    }
                }   
            }
            
            this.position.y += this.velocity.y
            this.position.x += this.velocity.x
            if(this.position.y >= 450){this.velocity.y = 0; this.position.y = 450}
            else{
                this.velocity.y += gravityaccy
            }
            
            if(this.position.x < 0){
                this.velocity.x = 0
                this.position.x += 1
            }
            if(this.position.x > 910){
                this.velocity.x = 0
                this.position.x -= 1
            }

            //HEALTH BARS
            document.getElementById('le').style.width = `${Player1.HP}%`
            
            document.getElementById('ri').style.width = `${Player2.HP}%`
            
        
    }
}

class Sprite{
    constructor({position, imageSRC, width, height, scale = 1, FramesMax = 1, CurrentFrame}){
        this.position = position,
        this.width = width,
        this.height = height,
        this.image = new Image(),
        this.image.src = imageSRC,
        this.CurrentFrame = CurrentFrame,
        this.scale = scale,
        this.FramesMax = FramesMax
    }

    draw(){
        try{
        c.drawImage(this.image, this.position.x, this.position.y )}catch(e){}
}
    updat(){
        this.draw()
        //If character t
           
    }
}


setInterval(() => {
    if(Math.abs(Math.trunc(Player1.HP)) !== 0 && Math.abs(Math.trunc(Player2.HP)) !== 0){
    if(Player1.increm < (jumps + (200*(Player1.FramesMax - 1)))){
    if(Player1.isattack && !isatkend){
        if(Player1.increm === (70 + (200*Player1.FramesMax))){
            isatkend = true
            Player1.isattack = false
        }else{
            console.log('IT SEEMS FALSE')
        }
    }
    Player1.increm += 200}
    else Player1.increm = 70

    if(Player2.increm < (jumps + (200*(Player2.FramesMax - 1)))){
    Player2.increm += 200
    }
    else Player2.increm = 70
}
}, intervals)

