import MovingObject from './moving_objects';

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

class Turtle extends MovingObject {
  constructor(options = {}) {
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
  }

  
}

export default Turtle;