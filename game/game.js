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
          pos: this.randomPosition(),
          vel: Math.ceil(Math.random() * 5),
          rad: 10
        })
      );
    }
    console.log(this.turtles);
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

  draw(ctx) {
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

  // draw()
}
// Game.draw();
// Game.draw()
Game.DIM_X = 800;
Game.DIM_Y = 400;
Game.BG_COLOR = 'orange';
Game.NUM_TURTLES = 2;

export default Game;