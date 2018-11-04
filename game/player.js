import MovingObject from './moving_objects';
import Turtle from './turtle';

class Player extends MovingObject {
  constructor(options = {}) {
    let spongeBob = new Image();
    spongeBob.src = "assets/sponge.png";
    
    options.rad = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = 'green';
    super(options);
    
    // console.log(spongeBob);
    this.spongeBob = spongeBob;
    // console.log(this.spongeBob);
  }

  power(move) {
    this.vel[0] += move[0];
    this.vel[1] += move[1];
  }
  draw(ctx) {
    // ctx.beginPath();
    // ctx.rect(this.pos[0], this.pos[1], this.height, this.width);
    // ctx.fillStyle = this.color;
    // console.log(this.rect)
    // ctx.fill();
    // console.log(ctx);
    // ctx.closePath()
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.rad, 0, Math.PI * 2, false);
    // ctx.fillStyle = this.color;
    // ctx.fill();
    // ctx.closePath();
    // console.log(this.spongeBob);
    // console.log(this)
    ctx.drawImage(this.spongeBob, this.pos[0], this.pos[1], this.height, this.width);
  }
}

Player.RADIUS = 15;

export default Player;


// this.imgObject.onLoad = new function () {
//   this.ImageReady = true;
//   console.log(this.imgObject);
//   context.drawImage(this.imgObject, 120, this.posY); //this one throws the exception
// }
// this.imgObject.src = source; 