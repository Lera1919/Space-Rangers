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

        let fps = 30,
            interval = 1000 / fps,
            delta = 0,
            dt = 0;


        let frame = (timestamp) => {
            requestAnimationFrame(frame)

            dt = timestamp - dt
            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            if (delta > interval) {
                 this.update()
                 delta = 0
            }
           
            this.render()
            delta = delta + dt
            dt = timestamp


            
        }

        
        requestAnimationFrame(frame)
    }

}


let game = new Game();

console.log(game);

