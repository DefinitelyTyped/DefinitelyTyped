export class Rectangle {
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}
