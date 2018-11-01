import MovingObject from './moving_objects';


const DEFAULTS = {
  COLOR: "#505050",
  SPEED: 4
};

class Turtle extends MovingObject {
  constructor(options = {}) {
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.rad = options.rad;
    // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
  }

}

export default Turtle;