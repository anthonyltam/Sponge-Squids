import Turtle from './turtle';
import Player from './player';

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
    const player = new Player( {pos: this.playerPosition() });
    this.user.push(player);

    return player;
  }

  addTurtles() {
    for (let i = 0; i < Game.NUM_TURTLES; i++) {
      const direction = ([-1, 1])[Math.floor(Math.random() * 2)];
      this.turtles.push(
        new Turtle({
          pos: this.randomPosition(direction),
          vel: Math.ceil(Math.random() * 5) * direction,
          rad: 10
        })
      );
    }
  }

  allObjects() {
    // console.log(this.user.concat(this.turtles));
    return this.user.concat(this.turtles);
  }

  randomPosition(direction) {
    let xPosition;

    if (direction < 0 ){
      xPosition = Game.DIM_X;
    } else {
      xPosition = 0;
    }
    return [
      xPosition,
      Game.DIM_Y * Math.random()
    ];
  }

  playerPosition() {
    return [
      Game.DIM_X / 2,
      Game.DIM_Y / 2
    ];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);


    this.allObjects().forEach((object) => {
      // console.log(object);
      object.draw(ctx);
    });
  }
  

  moveTurtles(delta) {
    this.turtles.forEach(turtle => turtle.move(delta));
  }

  step(delta) {
    this.moveTurtles(delta);
    this.checkCollisions();
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    // console.log(allObjects);
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];
        // console.log(obj1, obj2);
        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          // if (collision) console.log('DANGER');
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