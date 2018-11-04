import MovingObject from './moving_objects';
import Player from './player';
import Util from './util';

class Turtle extends MovingObject {
  constructor(options = {}) {
    let squidward = new Image();
    squidward.src = "assets/good-squid.png";
    // squidward.src = "assets/Squidward.png";

    options.color = "orange";
    options.pos = options.pos || options.game.randomPosition();
    options.rad = options.rad;
    // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
    this.squidward = squidward;
  }

  draw(ctx) {
    ctx.drawImage(this.squidward, this.pos[0], this.pos[1], this.height, this.width);
  }

  collideWith(otherObject) {
    if (otherObject instanceof Turtle) {
      // otherObject.relocate();
      // return true;
    } else if (otherObject instanceof Player) {
      // this.remove();
      // otherObject.remove();
      alert('GAME OVER! REFRESH TO RESTART');
      return true;
    }

    return false;
  }

}

export default Turtle;