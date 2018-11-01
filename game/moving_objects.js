class MovingObject {
  constructor(props) {
    this.pos = props.pos;
    this.vel = props.vel;
    this.rad = props.rad;
    this.height = props.height;
    this.width = props.width;
    this.color = "black";

    this.draw = this.draw.bind(this);
  }

  draw(ctx) {
    // console.log('here')
    ctx.beginPath();
    ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
 
  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    // if (this.game.isOutOfBounds(this.pos)) {
    //   if (this.isWrappable) {
    //     this.pos = this.game.wrap(this.pos);
    //   } else {
    //     this.remove();
    //   }
    // }
  }


}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default MovingObject;