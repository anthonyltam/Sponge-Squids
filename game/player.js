import MovingObject from './moving_objects';
import Turtle from './turtle';

class Player extends MovingObject {
  constructor(options = {}) {
    options.rad = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = 'green';
    super(options);

  }

  // move() { console.log('hello')}

  power(move) {
    // console.log('moving');
    // console.log(move)
    this.vel[0] += move[0];
    this.vel[1] += move[1];
    // console.log(new_vel, new_vel2);
  }

}

Player.RADIUS = 15;

export default Player;