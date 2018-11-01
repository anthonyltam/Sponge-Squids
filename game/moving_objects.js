class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.rad = options.rad;
    this.height = options.height;
    this.width = options.width;
    this.color = "black";

    this.draw = this.draw.bind(this);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
 
  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
    const offsetX = this.vel * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1]];
  }

  
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default MovingObject;