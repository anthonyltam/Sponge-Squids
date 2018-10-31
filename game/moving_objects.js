class MovingObject {
  constructor(props) {
    this.pos = props.pos;
    this.vel = props.vel;
    this.rad = props.rad;
    this.height = props.height;
    this.width = props.width;
    this.color = "rgb(255, 140, 0)";
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.pos[0],
      this.pos[1],
      this.width,
      this.height
    );
  }
  
}


export default MovingObject;