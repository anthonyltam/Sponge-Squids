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
      this.turtles.push(
        new Turtle({
          pos: this.randomPosition(),
          vel: Math.ceil(Math.random() * 5),
          rad: 10
        })
      );
    }
  }

  allObjects() {
    console.log(this.user.concat(this.turtles));
    return this.user.concat(this.turtles);
  }

  randomPosition() {
    const positions = [0, Game.DIM_X];
    const xPosition = positions[Math.floor(Math.random() * positions.length)];

      return [
        // xPosition,
        0,
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
      console.log(object);
      object.draw(ctx);
    });
  }
  

  moveTurtles(delta) {
    this.turtles.forEach(turtle => turtle.move(delta));
  }

  step(delta) {
    this.moveTurtles(delta);
    // this.checkCollisions();
  }

  // checkCollisions() {
  //   const allObjects = this.allObjects();
  //   for (let i = 0; i < allObjects.length; i++) {
  //     for (let j = 0; j < allObjects.length; j++) {
  //       const obj1 = allObjects[i];
  //       const obj2 = allObjects[j];

  //       if (obj1.isCollidedWith(obj2)) {
  //         const collision = obj1.collideWith(obj2);
  //         if (collision) return;
  //       }
  //     }
  //   }
  // }

}

Game.DIM_X = 800;
Game.DIM_Y = 400;
Game.BG_COLOR = 'orange';
Game.NUM_TURTLES = 1;

export default Game;