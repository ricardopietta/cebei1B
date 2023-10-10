
  createCanvas(400, 300);
  background("red");
}

function draw() {
  

  stroke("black");
  fill("blue");

  //console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30, 45);
  }

}
