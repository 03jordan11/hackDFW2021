export class Entity {
  constructor({x, y, width, height, imagePath}) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imagePath;
  }
}
