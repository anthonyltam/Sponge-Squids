import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('myCanvas');
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");

  const game = new Game;
  new GameView(game, ctx).start();

  // const start = document.getElementById('start');
  // start.addEventListener('click', gameStart);

  
  // const gameStart = () => {
  //   game.draw();
  // };
  
  setInterval( () => {
    game.addTurtles();
  }, 1000);

});

// FROM LA

// function drawBackground() {
//   vx += 1;
//   ctxBg.drawImage(bgImg, 0, vx, height, width);
//   ctxBg.drawImage(bgImg, 0, vx - 500, height, width);
//   if (vx >= 500) {
//     vx = 0;
//   }
// }