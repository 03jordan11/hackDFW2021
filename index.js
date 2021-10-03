import { Entity } from './entity';

const can = document.querySelector('#can');
const ctx = can.getContext('2d');

const gravity = 0.2;
let isJumping = false;
const entities = [];

function registerEntity(entity) {
  entities.push(entity);
}

const genkijira = new Entity(
  {
    x: 200,
    y: 200,
    width: 200,
    height: 300,
    imagePath: './gotchi.png',
    zIndex: 99,
  }
);
registerEntity(genkijira);

const lollipop = new Entity(
  {
    x: 600,
    y: 200,
    width: 130,
    height: 200,
    imagePath: './lollipop.png',
  }
);
registerEntity(lollipop);

const brocolli = new Entity(
  {
    x: 900,
    y: 300,
    width: 130,
    height: 200,
    imagePath: './broccoli.png',
  }
);
registerEntity(brocolli);

function initCanvas() {
  can.width = window.innerWidth;
  can.height = window.innerHeight;
}

function clear() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, can.width, can.height);
}

function jump() {
  isJumping = true;
  genkijira.vel.y = -10;
}

function update() {
  genkijira.vel.y += gravity;
  genkijira.pos.y += genkijira.vel.y;

  const g = can.height - genkijira.height;
  if (genkijira.pos.y >= g) {
    genkijira.pos.y = g - (genkijira.pos.y - g);
    genkijira.vel.y = 0;
    isJumping = false;
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
      if (!isJumping)
        jump();
      break;
  }
});

function loop() {
  window.requestAnimationFrame(loop);

  clear();

  update();

  entities.forEach(entity => {
    entity.draw(ctx);
  });
}

initCanvas();

entities.sort((entity1, entity2) => entity1.zIndex > entity2.zIndex);

Promise.all(entities.map(entity => {
  return new Promise(resolve => {
    entity.image.addEventListener('load', () => resolve(true));
    entity.image.addEventListener('error', () => resolve(false));
  });
})).then(results => {
  if (results.every(res => res)) {
    console.log('All images loaded successfully');
    loop();
  }
  else
    console.log('Some images failed to load');
});

