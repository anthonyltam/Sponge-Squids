import MovingObject from './moving_objects';
import Player from './player';
// import Util from './util';

class Turtle extends MovingObject {
  constructor(options = {}) {
    options.color = "black";
    options.pos = options.pos || options.game.randomPosition();
    options.rad = options.rad;
    // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
  }

  collideWith(otherObject) {
    if (otherObject instanceof Turtle) {
      // otherObject.relocate();
      // console.log("HIT TURTLE!");
      // return true;
    } else if (otherObject instanceof Player) {
      // this.remove();
      // otherObject.remove();
      alert('GAME OVER!');
      return true;
    }

    return false;
  }

}

export default Turtle;