import Turtle from './turtle';
import Player from './player';
import Util from './util';

class Game {
  constructor() {
    this.turtles = [];
    this.user = [];

    // this.addPlayer();
    this.addTurtles();
  }

  over() {
    console.log("GAME OVER!");
  }

  addPlayer() {
    const player = new Player({
      pos: this.playerPosition(),
      game: this
    });

    this.user.push(player);
    return player;
  }

  wrap(pos) {
    return [Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)];
  }

  addTurtles() {
    for (let i = 0; i < Game.NUM_TURTLES; i++) {
      const direction = [-1, 1][Math.floor(Math.random() * 2)];
      this.turtles.push(
        new Turtle({
          pos: this.randomPosition(direction),
          vel: [Math.ceil(Math.random() * 5) * direction, 0],
          rad: 10,
          game: this
        })
      );
    }
  }

  allObjects() {
    return this.user.concat(this.turtles);
  }

  isOutOfBounds(pos, rad = 0) {
    // rad = 0;
    if (rad === 10) rad = 0;
    return (
      pos[0] < rad || pos[1] < rad || pos[0] + rad > Game.DIM_X || pos[1] + rad > Game.DIM_Y
    );
  }

  randomPosition(direction) {
    let xPosition;

    if (direction < 0) {
      xPosition = Game.DIM_X;
    } else {
      xPosition = 0;
    }
    return [xPosition, Game.DIM_Y * Math.random()];
  }

  playerPosition() {
    return [Game.DIM_X / 2, Game.DIM_Y / 2];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx);
    });
  }

  moveObjects(delta) {
    // this.user[0].move();
    this.allObjects().forEach(obj => obj.move(delta));
  }

  remove(object) {
    if (object instanceof Turtle) {
      this.turtles.splice(this.turtles.indexOf(object), 1);
    } else {
      let [x, y ] = this.user[0].vel;
      this.user[0].vel = [0 , 0];
    }
  }

  step(delta) {
    // this.moveTurtles(delta);
    this.moveObjects(delta);
    this.checkCollisions();
  }

  checkCollisions() {
    const allObjects = this.allObjects();

    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];
        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }
}

Game.DIM_X = 800;
Game.DIM_Y = 400;
Game.BG_COLOR = 'orange';
Game.NUM_TURTLES = 1;

export default Game;