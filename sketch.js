let crabX = 30; // Initial x position for the crab
let crabY = 300; // Initial y position for the crab
let crabInterval; // To store the interval ID
let useBackground2 = false; // Track which background to use


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  seaBackground(0,0); // Draw the sea background
  crab(crabX, crabY); // Draw the crab at the initial position

  // Change to seaBackground2 after 5 seconds
   setTimeout(() => {
    useBackground2 = true; // Switch to background 2
    drawScene(); // Redraw the scene with the new background
  }, 5000);

}


function seaBackground(xPos,yPos){
    //sand setup
    fill(250, 233, 192);
    noStroke();
    quad(0,250, 0, 400, 400,400, 400, 200);
  
    //water setup
    fill(3, 141, 168);
    noStroke();
    quad(0,150, 0,250, 400, 200, 400, 150);
  
    //sky setup
    fill(157, 220, 242);
    noStroke();
    quad(0,0, 0,150, 400,150, 400,0);
  
    //sun
    fill(255, 219, 56);
    noStroke();
    circle( 180, 50, 50);

    fill(255,0,0);
    textSize(20);
    textFont("Courier New");
    textStyle(BOLDITALIC);
    text("Day", 10,380);

}

function seaBackground2(xPos,yPos){
  //sand setup
  fill(103, 88, 122);
  noStroke();
  quad(0,250, 0, 400, 400,400, 400, 200);

  //water setup
  fill(43, 48, 128);
  noStroke();
  quad(0,150, 0,250, 400, 200, 400, 150);

  //sky setup
  fill(14, 29, 82);
  noStroke();
  quad(0,0, 0,150, 400,150, 400,0);

  //moon
  fill(245, 241, 228);
  noStroke();
  circle( 180, 50, 50);

  fill(255,255,255);
  textSize(20);
  textFont("Courier New");
  textStyle(BOLDITALIC);
  text("Night", 10,380);
}

function crab(xPos, yPos){
  fill("red");
  noStroke();
  arc(xPos,yPos,50,50,90,270); //hand - left
  arc(xPos+80,yPos,50,50,270,90);//hand - right
  arc(xPos+40, yPos+30, 75,75, 180,0); // body
  circle(xPos+10, yPos+35, 10); //left eye
  circle(xPos+70, yPos+35, 10); //right eye

  fill("black");
  circle(xPos+25, yPos-15, 5); //left eye
  circle(xPos+55, yPos-15, 5); //right eye

}

//function that deciding which background to use
function drawScene() {
  if (useBackground2) {
    seaBackground2(0, 0); // Use the second background
  } else {
    seaBackground(0, 0); // Use the first background
  }
  crab(crabX, crabY); // Redraw the crab
}

function mousePressed() {

  // Clear any existing intervals to prevent stacking
  clearInterval(crabInterval);

  // Set an interval to move the crab every second
  crabInterval = setInterval(() => {
    crabX += 5; // Increment x position by 5
    drawScene(); // Redraw the scene with the crab in its new position

    // Stop the interval if the crab reaches the edge of the canvas
    if (crabX > width+50) { //i add 50 since sometimes the left claws still on the canvas 
      clearInterval(crabInterval);
    }
  }, 200); // 1000 ms = 1 second
}

function doubleClicked() {
  redraw();
}