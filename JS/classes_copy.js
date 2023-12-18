const jumps = 70
let intervals = 100
let count = 0;
class Fighter{
    constructor({position, velocity, lastpress, AttackBoxcolor, HP, width, height, imageSRC, FramesMax, isattack, increm, canattack, lastattack, iscombo, Framescount}){
        this.position = position
        this.velocity = velocity
        console.log(velocity)
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
        this.iscombo = iscombo,
        this.Framescount = Framescount
    }

    draw(){

        
            if(this.isattack){
                console.log(this.Framescount)
                this.image.src = '../Addons/Sprites/PL2/Attack1.png'
                this.canattack = false;
                this.FramesMax = 6
                if(this.Framescount === this.FramesMax - 1){
                    this.Framescount = 0;
                    this.isattack = false;
                    this.canattack = true;
                }
            }else{
                if(this.velocity.x === 0 && this.velocity.y === 0){
                    this.image.src = '../Addons/Sprites/PL2/Idle.png'
                    this.FramesMax =  8
                    if(this.Framescount === this.FramesMax - 1){
                        this.Framescount = 0
                    }
                }

                else if(this.velocity.x !== 0 && this.velocity.y === 0){
                    this.image.src = '../Addons/Sprites/PL2/Run.png';
                    this.FramesMax = 8;
                    if(this.Framescount === this.FramesMax - 1){
                        this.Framescount = 0
                    }

                 
                }
                else if(this.velocity.y !== 0){
                    if(Math.trunc(this.velocity.y) <= 0 ){
                        this.image.src = '../Addons/Sprites/PL2/Jump.png';
                        this.FramesMax = 2;
                    }
                    else if(Math.trunc(this.velocity.y) > 0){
                        this.image.src = '../Addons/Sprites/PL2/Fall.png';
                        this.FramesMax = 2
                    }
                    
                if(this.Framescount === this.FramesMax - 1){
                    this.Framescount = 0
                }
                }
            }

            
            c.drawImage(this.image,this.increm, 40, this.image.width / this.FramesMax, this.image.height, this.position.x - 20, this.position.y - 130, this.width * 11, this.height * 6)

    }

    updat(){
        this.draw()
        //If character t

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
    if(Player1.increm < (jumps + (200*(Player1.FramesMax - 1)))){
        
        Player1.Framescount++
        if(Player1.increm === (70 + (200*Player1.FramesMax))){
        }else{
        }
    
    Player1.increm += 200}
    else Player1.increm = 70

    if(Player2.increm < (jumps + (200*(Player2.FramesMax - 1)))){
    Player2.increm += 200
    }
    else Player2.increm = 70

}, intervals)

