import MovingObject from './moving_objects';
import Turtle from './turtle';

class Player extends MovingObject {
  constructor(options = {}) {
    options.rad = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = 'green';
    super(options);

  }

  collideWith(otherObject) {
    if (otherObject instanceof Turtle) {
      // otherObject.relocate();
      console.log('GAMEOVER!');
      return true;
    } else if (otherObject instanceof Player) {
      // this.remove();
      // otherObject.remove();
      // console.log('player');
      return true;
    }

    return false;
  }
}

Player.RADIUS = 15;

export default Player;