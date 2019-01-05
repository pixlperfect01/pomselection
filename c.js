function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 1;
  this.growing = true;

  this.grow = function() {
    if (this.growing) {
      this.r += 0.5;
    }
  }

  this.show = function() {
    ctx.strokeStyle="blue";
    ctx.lineWidth=2;
    ctx.beginPath();
    arc(this.x, this.y, this.r * 2, 0, 2 * Math.PI);
    ctx.stroke();
  }

  this.edges = function() {
    return (this.x + this.r >= c.width || this.x - this.r <= 0 || this.y + this.r >= c.height || this.y - this.r <= 0||(this.r*2)>10)
  }
}
