export class Entity {
  constructor({x, y, width, height, imagePath}) {
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
  }
}
