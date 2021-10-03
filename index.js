const can = document.querySelector('#can');
const ctx = can.getContext('2d');

const gravity = 0.05;
let gravitySpeed = 0;
let jumping = false;

const genkijira = {
  x: 200,
  y: 200,
  width: 200,
  height: 300,
  img: new Image(),
  speedY: 0,
};

const food = {
  x: 100,
  y: 100,
  img: new Image(),
};

function drawEntity(entity) {
  ctx.drawImage(entity.img, entity.x, entity.y, entity.width, entity.height);
}

function init() {
  can.width = window.innerWidth;
  can.height = window.innerHeight;
}

function loadImage() {
  genkijira.img.onload = () => {
    ctx.drawImage(genkijira.img, genkijira.x, genkijira.y, 200, 300);
  };
  genkijira.img.src = './gotchi.png';
}

function draw() {
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, can.width, can.height);
  ctx.drawImage(genkijira.img, genkijira.x, genkijira.y, 200, 300);
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

(function loop() {
  window.requestAnimationFrame(loop);

  clear();

  drawEntity(genkijira);

  //draw();
})();
