const canv = document.querySelector('canvas')
const ctx = canv.getContext('2d')

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canv.width, canv.height)

class BG {
    constructor({position, imageSRC}){
        this.position = position,
        this.image = new Image()
        this.image.src = imageSRC
        
    }
    draw(){

    }
    update(){
        this.draw()
    }
}

function animate(){
    window.requestAnimationFrame(animate)


}