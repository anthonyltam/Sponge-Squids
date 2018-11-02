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

    const player = new Player({
      pos: this.playerPosition(),
      game: this
    });

    this.user.push(player);
    return player;
  }

  addTurtles() {
    for (let i = 0; i < Game.NUM_TURTLES; i++) {
      const direction = ([-1, 1])[Math.floor(Math.random() * 2)];
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

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
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
      object.draw(ctx);
    });
  }
  

  // moveTurtles(delta) {
  //   this.turtles.forEach(turtle => turtle.move(delta));
  // }

  moveObjects(delta) {
    // this.user[0].move();
    this.allObjects().forEach( obj => obj.move(delta));
    console.log(this.user[0]);
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