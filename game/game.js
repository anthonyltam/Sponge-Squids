import Turtle from './turtle';

class Game {
  constructor() {
    this.turtles = [];

    this.addTurtles();
  }

  over() {
    console.log("GAME OVER!");
  }

  addTurtles() {
    for (let i = 0; i < Game.NUM_TURTLES; i++) {
      this.turtles.push(
        new Turtle({
          pos: [10, 10],
          vel: 10,
          rad: 5,
          height: 6,
          width: 6
        })
      );
    }
    console.log(this.turtles);
  }

  randomPosition() {}

  draw(ctx) {
    // console.log('blue');
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.turtles.forEach(turtle => {
      turtle.draw(ctx);
    });
  }

  moveTurtles(delta) {
    this.turtles.forEach(turtle => turtle.move(delta));
  }

  step(delta) {
    this.moveTurtles(delta);
    // this.checkCollisions();
  }
}

Game.DIM_X = 800;
Game.DIM_Y = 400;
Game.BG_COLOR = 'orange';
Game.NUM_TURTLES = 1;

export default Game;