import MovingObject from './moving_objects';
import Game from './game';

console.log('inside entry file');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('myCanvas');
  // const c = canvas.getContext('2d');
  const start = document.getElementById('start');

  
  
  
  // let game = new Game;
  
  const gameStart = () => {
    console.log('blue');
    // game.over();
  };
  start.addEventListener('click', gameStart);
});