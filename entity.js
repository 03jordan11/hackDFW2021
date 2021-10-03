export class Entity {
  constructor({x, y, width, height, imagePath, zIndex = 0}) {
    this.pos = {
      x,
      y,
    };
    this.vel = {
      x: 0,
      y: 0,
    };
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imagePath;
    this.zIndex = zIndex;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.pos.x, this.pos.y, this.width, this.height);
  }
}
