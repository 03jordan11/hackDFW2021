import { Entity } from './entity';

const can = document.querySelector('#can');
const ctx = can.getContext('2d');

const gravity = 0.1;

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
    width: 130,
    height: 200,
    imagePath: './lollipop.png',
  }
);

function drawEntity(entity) {
  ctx.drawImage(entity.image, entity.pos.x, entity.pos.y, entity.width, entity.height);
}

function init() {
  can.width = window.innerWidth;
  can.height = window.innerHeight;
}

function clear() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, can.width, can.height);
}

function jump() {
  console.log('unimplemented');
}

function update() {
  genkijira.vel.y += gravity;
  genkijira.pos.y += genkijira.vel.y;

  const g = can.height - genkijira.height;
  if (genkijira.pos.y >= g) {
    genkijira.pos.y = g - (genkijira.pos.y - g);
    genkijira.vel.y = -Math.abs(genkijira.vel.y);
  }
}

document.addEventListener('keydown', ev => {
  switch(ev.key) {
    case 'ArrowLeft':
      genkijira.pos.x -= 5;
      break;
    case 'ArrowRight':
      genkijira.pos.x += 5;
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
genkijira.image.onload = () => {
  loop();
};

function loop() {
  window.requestAnimationFrame(loop);

  clear();

  update();

  drawEntity(food);
  drawEntity(genkijira);
}
