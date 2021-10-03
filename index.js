import { Entity } from './entity';

const can = document.querySelector('#can');
const ctx = can.getContext('2d');

const gravity = 0.05;
let gravitySpeed = 0;
let jumping = false;

const genkijira = new Entity(
  {
    x: 200,
    y: 200,
    width: 200,
    height: 300,
    imagePath: './gotchi.png',
  }
);

const food = new Entity(
  {
    x: 600,
    y: 200,
    width: 100,
    height: 200,
    imagePath: './candy.png',
  }
);

function drawEntity(entity) {
  ctx.drawImage(entity.image, entity.x, entity.y, entity.width, entity.height);
}

function init() {
  can.width = window.innerWidth;
  can.height = window.innerHeight;
}

function loadImage() {
}

function draw() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, can.width, can.height);
  ctx.drawImage(genkijira.image, genkijira.x, genkijira.y, 200, 300);
}

function jump() {
  genkijira.speedY = -10;
  jumping = true;
}

function clear() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, can.width, can.height);
}

document.addEventListener('keydown', ev => {
  switch(ev.key) {
    case 'ArrowLeft':
      genkijira.x -= 5;
      break;
    case 'ArrowRight':
      genkijira.x += 5;
      break;
    case 'ArrowUp':
      break;
    case 'ArrowDown':
      break;
    case ' ':
      jump();
      break;
  }
});

init();
loadImage();
genkijira.image.onload = () => {
  loop();
};

function loop() {
  window.requestAnimationFrame(loop);

  clear();

  drawEntity(food);
  drawEntity(genkijira);
}
