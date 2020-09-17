size(400,400);
noStroke();
background(23,100,240);

float x = 0;
while (x < width) {
    float y = 0;
    while (y < height) {
      fill(random(0,150));
      ellipse(x + 20, y +20 ,30,30);
    y += 40;
  }
  x += 40;
}
