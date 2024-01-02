let intervals = 100
let count = 0;
class Fighter{
    constructor({position, velocity, lastpress, AttackBoxcolor, HP, width, height, imageSRC, FramesMax, isattack, increm, canattack, lastattack, iscombo, Framescount, Char, jump, ivalue, hit, fall, rotate, directories}){
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
        this.iscombo = iscombo,
        this.Framescount = Framescount,
        this.Char = Char,
        this.jump = jump,
        this.ivalue = ivalue,
        this.hit = hit,
        this.fall = fall,
        this.rotate = rotate,
        this.directories = directories
    }

    draw(){
        var metadata = Skin(this.Char)
        var incy = metadata[5];
        var offset = metadata[6];
        
        //console.log(Player1.directories)

        if(this.hit){
            this.image = this.directories.hit
            this.FramesMax = metadata[1].hit
            this.jump = metadata[4]
            this.ivalue = metadata[3]
            console.log(this.Framescount, this.FramesMax)
            if(this.Framescount >= this.FramesMax - 1){
                console.log('yes')
                this.Framescount = 0;
                this.hit = false
            }
        }
        else{
            var verif = Math.trunc(Date.now() / this.lastattack)
            if(verif >= 1 && verif <= 5 && this.isattack){ console.log('combo', verif); this.lastattack = 0}

            if(this.isattack){
                this.image = this.directories.attack;
                this.FramesMax = metadata[1].attack
                this.jump = metadata[4]
                this.ivalue = metadata[3]
                this.canattack = false;
                if(this.Framescount === this.FramesMax){
                    this.lastattack = Date.now()
                    this.Framescount = 0;
                    this.isattack = false;
                    this.canattack = true;
                }
            }else{
                if(this.velocity.x === 0 && this.velocity.y === 0){
                    this.image = this.directories.idle;
                    this.FramesMax = metadata[1].idle;
                    this.jump = metadata[4]
                    this.ivalue = metadata[3]
                    if(this.Framescount === this.FramesMax - 1){
                        this.Framescount = 0
                    }
                }

                else if(this.velocity.x !== 0 && this.velocity.y === 0){
                    this.image = this.directories.run;
                    this.FramesMax = metadata[1].run;
                    this.jump = metadata[4]
                    this.ivalue = metadata[3]
                    if(this.Char === 'PL3'){
                        console.log('yes')
                        this.ivalue = 48;
                        this.jump = 158;
                    }
                    if(this.Framescount === this.FramesMax - 1){
                        this.Framescount = 0
                    }
                 
                }
                else if(this.velocity.y !== 0){
                    if(Math.trunc(this.velocity.y) <= 0 ){
                        this.image = this.directories.jump;
                        
                        this.FramesMax = metadata[1].jump;
                    }
                    else if(Math.trunc(this.velocity.y) > 0){
                        this.jump = metadata[4]
                        this.ivalue = metadata[3]
                        
                        this.image = this.directories.fall;
                        this.FramesMax = metadata[1].fall
                    }
                    
                if(this.Framescount === this.FramesMax - 1){
                    this.Framescount = 0
                }
                }
            }}

            if(this.rotate){
                var deg = 360
                c.save()
                c.translate(this.position.x + this.width/2, this.position.y + this.height/2)
                var rad = 2 * Math.PI - deg * Math.PI / 180;    
                c.rotate(rad);
                c.scale(-1, 1);
                c.drawImage(this.image, this.increm, 40, this.image.width / this.FramesMax, this.image.height, -this.width/2 - 100, -this.height/2 - (incy + offset), this.width*10, this.height* 6)
                c.restore()
            }
            else c.drawImage(this.image,this.increm, 40, this.image.width / this.FramesMax, this.image.height, this.position.x, this.position.y - (incy), this.width * 11, this.height * 6)
            
    }

    updat(){
        this.draw()
        if(isfinishedT){
            gravityaccx = 0;
            gravityaccy = 0;
            this.velocity.y = 0;
            this.velocity.x = 0
        }
        //If character t
        this.fall.x = Math.trunc(this.fall.x)
        this.fall.y = Math.trunc(this.fall.y)
            this.position.y += this.velocity.y
            this.position.x += this.velocity.x
            this.position.x += this.fall.x
            if(this.position.y >= 450){this.velocity.y = 0; this.position.y = 450}
            else{
                this.velocity.y += gravityaccy
            }

            if(this.fall.x !== 0){
                if(this.fall.x < 0){
                this.fall.x += gravityaccx}
                else{
                    this.fall.x -= gravityaccx
                }
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
        c.drawImage(this.image, this.position.x, this.position.y, this.image.width*1.5, this.image.height*1.5 )}catch(e){}
}
    updat(){
        this.draw()
        //If character t
           
    }
}


setInterval(() => {
    //console.log(Player1.increm, Player1.jump, Player1.ivalue)
    if(!isfinishedP && !isfinishedT && !ispaused){
    if(Player1.increm < (Player1.ivalue + (Player1.jump*(Player1.FramesMax - 1)))){
        
        Player1.Framescount++
        if(Player1.increm === (Player1.ivalue + (Player1.jump*Player1.FramesMax))){
            Player1.increm += Player1.jump
        }
    
    Player1.increm += Player1.jump}
    else {Player1.increm = Player1.ivalue;}

    if(Player2.increm < (Player2.ivalue + (Player2.jump*(Player2.FramesMax - 1)))){
    Player2.Framescount++
    Player2.increm += Player2.jump
    }
    else Player2.increm = Player2.ivalue    }

}, intervals)

