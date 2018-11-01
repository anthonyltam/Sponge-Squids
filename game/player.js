import MovingObject from './moving_objects';

class Player extends MovingObject {
  constructor(options = {}) {
    options.rad = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = 'green';
    super(options);

  }
}

Player.RADIUS = 15;

export default Player;