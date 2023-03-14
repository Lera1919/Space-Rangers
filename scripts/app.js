class Game {
    constructor() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.position = {
            x: 300, 
            y: 250
        }
        this.start()
    }

    update() {
        this.position.x = this.position.x + 1
        this.position.y = this.position.y + 1
    }
 
    render() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.position.x, this.position.y, 400, 400)
    }

    start() {
        let frame = () => {
            this.render()
        }

        frame()
        // requestAnimationFrame(frame)
    }

}


let game = new Game();

console.log(game);