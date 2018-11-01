import MovingObject from './moving_objects';

class Turtle extends MovingObject {
  constructor(options = {}) {
    options.color = 'black';
    options.pos = options.pos || options.game.randomPosition();
    options.rad = options.rad;
    // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
  }

}

export default Turtle;