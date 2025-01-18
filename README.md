# workshop-task-2
Here is a URL to the webpage for this project: [Link](https://climedu.github.io/workshop-task-2/)

## Task (Coding Environments & Sharing Work)
- Try using an IDE running locally on your own computer, rather than the p5.js web editor. VSCodium or VSCode are recommended. If you use  VSCodium, see this workaround to install the p5.vscode extensionLinks to an external site. and use this file Download this file(you can install the Live Preview extension through the application's extension manager). For VSCode, you can install both extensions from the application's extension manager.
- Make a p5.js sketch using the setTimeout and setInterval functions.
- Experiment with at least one new item from the from the p5.js documentationLinks to an external site..
- Create a GitHub loginLinks to an external site., make repositories for your three p5.js sketches (for workshop tasks 0, 1 and 2), and publish these projects as webpages using GitHub pages. Include a README file in each repository with a link to the webpage. Use the README files to document your work clearly.
- Post a link to your GitHub account on the course discussion board on Canvas.

## Overview
- 

## Workshop Notes

- Learn to control the timing of animation
- Focus on the environment to write code and publish it online
- Usually, software developers would integrate the development environment or Edy Schultz(a program that is installed on a computer)
- Use Visual Studio Code (maintained by Microsoft, open source, free, but arguably not open source because it has some proprietary assets) or VSCodium (fully open source, based on VS code)
- Visual Studio code has advertising and telemetry on the Visual Studio code (detecting what users are mainly interested in), which also happens on other apps like Chrome, etc.
However, the VSCodium removed the advertising and telemetry.


### Code Notes (Workshop):

Set Timer: This red square will appear 2 seconds after the servers start
- Code :
  
```ruby
function setup() {
  createCanvas(400, 400);
  background(220);
//setting up the function, and 2000 is the time in milliseconds, execute 2 seconds after the programme is launched
setTimeout(makeRedSquare, 2000);
}
function makeRedSquare(){
  fill(255,0,0);
  noStroke();
  rect(50,50,50,50);
}
```
<img width="300" alt="Screenshot 2025-01-18 at 10 25 32 PM" src="https://github.com/user-attachments/assets/e5841fb4-fe8a-4b7f-b5f4-7d58475dcb85" />


Adding some mouse-pressed function appears 2 seconds after the mouse-pressed.
- Code : 
```ruby
function setup() {
  createCanvas(400, 400);
  background(220);
}
function mousePressed(){
  //setting up the function, and 2000 is the time in milliseconds, execute 2 seconds after the program is launched
setTimeout(makeRedSquare, 2000);
}
function makeRedSquare(){
  fill(255,0,0);
  noStroke();
  rect(50,50,50,50);
}
```
<img width="300" alt="Screenshot 2025-01-18 at 10 25 32 PM" src="https://github.com/user-attachments/assets/e5841fb4-fe8a-4b7f-b5f4-7d58475dcb85" />


Trying to the function like in the workshop but instead, using makeHouse function. Draw houses in the loop. However, this code does not stop because it doesn't have a command to make it stop.


Workshop example:

<img width="300" alt="Screenshot 2025-01-18 at 10 45 05 PM" src="https://github.com/user-attachments/assets/30d130e8-ce6e-4c96-a8d8-be889e700ef3" />


- Code :
``` ruby
function setup() {
  createCanvas(400, 400);
  background(220);
}
function mousePressed(){
  //setting up the function, and 2000 is the time in milliseconds, execute 2 seconds after the programme is launched
  setTimeout(makeHouse, 2000, random(0,width), random(0,height), random(10,100), color(255,0,0));
}
function makeHouse(xPos, yPos, stories, colour){
  fill(colour);
  noStroke();
  rect(xPos,yPos,50,stories);
  triangle(xPos, yPos, xPos+25, yPos -20, xPos +50, yPos);
//putting the same function to make a loop and go to up again
  setTimeout(makeHouse, 2000, random(0,width), random(0,height), random(10,100), color(255,0,0));
}
```
<img width="300" alt="Screenshot 2025-01-18 at 10 40 42 PM" src="https://github.com/user-attachments/assets/7a3413f6-73e4-422e-8f14-96d12b3f5a2a" />


Feels the code longer since it's not a singular shapes, but it's a function that consist of multiple shapes.
- Code:

  ``` ruby
  function setup() {
  createCanvas(400, 400);
  background(220);
  setInterval(() => {
    makeHouse(
      random(0, width), // Random x position
      random(0, height), // Random y position
      random(10, 100), // Random height (stories)
      color(random(255), random(255), random(255)) // Random color
    );
  }, 1000);
  }
  function makeHouse(xPos, yPos, stories, colour){
  fill(colour);
  noStroke();
  rect(xPos,yPos,50,stories);
  triangle(xPos, yPos, xPos+25, yPos -20, xPos +50, yPos);
  }
<img width="300" alt="Screenshot 2025-01-18 at 10 50 53 PM" src="https://github.com/user-attachments/assets/4e63ce07-446a-4071-a016-dc2c2482dc16" />


Trying to make it stops when it's more than 4 house had been drawn
- Code : 
``` ruby
let counter = 0
let countInterval = setInterval(() => {
  makeHouse(
    random(0, width), // Random x position
    random(0, height), // Random y position
    random(10, 100), // Random height (stories)
    color(random(255), random(255), random(255)) // Random color
  );
}, 1000);

function setup() {
  createCanvas(400, 400);
  background(220);
}
function makeHouse(xPos, yPos, stories, colour){
  fill(colour);
  noStroke();
  rect(xPos,yPos,50,stories);
  triangle(xPos, yPos, xPos+25, yPos -20, xPos +50, yPos);
 
  counter++; //means counter = counter + 1
  if (counter >4){ //more than 4. clear interval (means 5 houses)
    clearInterval(countInterval);
  }
}
```
<img width="300" alt="Screenshot 2025-01-18 at 10 52 52 PM" src="https://github.com/user-attachments/assets/e49200f4-30ac-49bf-8396-1d3cced74f7a" />


Adding the mouse pressed to do again and overlaying from previous one, reason, haven't reset the counter
- Code :


```ruby
let counter = 0
let countInterval = setInterval(() => {
  makeHouse(
    random(0, width), // Random x position
    random(0, height), // Random y position
    random(10, 100), // Random height (stories)
    color(random(255), random(255), random(255)) // Random color
  );
}, 1000);

function setup() {
  createCanvas(400, 400);
  background(220);
}
function makeHouse(xPos, yPos, stories, colour){
  fill(colour);
  noStroke();
  rect(xPos,yPos,50,stories);
  triangle(xPos, yPos, xPos+25, yPos -20, xPos +50, yPos);
 
  counter++; //means counter = counter + 1
  if (counter >4){ //more than 4. clear interval (means 5 houses)
    clearInterval(countInterval);
    counter = 0;
  }
}
//so it's stop every 5 houses, and u click the mouse to draw 5 houses again
function mousePressed(){
  countInterval = setInterval(() => {
    makeHouse(
      random(0, width), // Random x position
      random(0, height), // Random y position
      random(10, 100), // Random height (stories)
      color(random(255), random(255), random(255)) // Random color
    );
  }, 1000);
}
```
<img width="300" alt="Screenshot 2025-01-18 at 10 57 55 PM" src="https://github.com/user-attachments/assets/c955260b-ef0c-4f21-b809-3bd6f9a1590a" />

### Tools informations
- Git and git hub are web use d by creative. Coders
- Git -> manage version control for us
- Github -> online software that run git software
- Readmefile : # as level.1 heading  ## level 2 heading ### level 3 heading
- In Github, Can see the history, different version of file. The red line shows the previous one. Green is addition to current file.
- Updated file, just upload new one, and give comment of what updated if the software detect the same name file name. *only changed file will be updated.




## Task Journey
From the time interval. I'm wondering to explore or maybe combine the code with other outcomes from the other workshop. So instead of the shapes just randomly drawn after few seconds, I'm wondering what if the objects move to several points or changed into other functions after few seconds. 

### Process 1
Creating the basic shape. Starting it with normal x y points. Trying to make a crab.
- Code :
 ```ruby
  function draw () {
    fill ("red");// Use a string for the color "red"
    noStroke(); // Optional: removes any stroke from the arcs

    // Draw arcs
    arc(190,120,50,50,270,90); // Left arc
    arc(110,120,50,50,90,270); // Right arc
    arc(150,150,75,75,180,0); //body
    circle(120,155,10);//left eye
    circle(180,155,10);//right eye

    fill("black");
    circle(135,105,5);
    circle(165,105,5);
}
```
<img width="300" alt="Screenshot 2025-01-18 at 11 12 47 PM" src="https://github.com/user-attachments/assets/6beadb5a-aa33-4d39-8788-5088c723e6ef" />


### Process 2

Changing the point using xpos and ypos variable, adjusting the other position by using (+-) based on the original xPos, yPos. Also trying to make the crab moving to the right in basic way. Not using the timeInterval yet. 
- Code :
```ruby
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
```
<img width="300" alt="Screenshot 2025-01-18 at 11 14 54 PM" src="https://github.com/user-attachments/assets/9ce3ba8c-3ed2-433e-a12b-260c7f670f73" />

### Process 3

Experimenting to have 2 background, and changes after several seconds. So it's change from day to night. The adjustment just using the color. Also making them as a function. 

- Code :
``` ruby
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
```

### Process 4 : Experiment with 1 thing from p5js web
Trying what else and what kidn of command that I never tried before. Turned out I can use the textStyle, so I change them to bolditalic.

- Code :
  ``` ruby
    textSize(20);
    textFont("Courier New");
    textStyle(BOLDITALIC);
    text("Day", 10,3);

<img width="300" alt="Screenshot 2025-01-18 at 11 29 23 PM" src="https://github.com/user-attachments/assets/fee62a57-21db-4f94-bd02-260dc18cd6b1" />


### Result : 
Can be seen on the sketch.js file

Adding time interval to the background and make the crab move also reset to position when double clicked.
- Code
```ruby
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
  crabX = 30;
  crabY = 300; //Just reset the crab position but not the background

}
```


### Commentaries
- Learned new things such as timeInterval. Can be use not only as for drawing a shape/function in random position but also moving them.
- Explore new thing about text which is textStyle

## Future Development
- Make it able to stop and play
- Change the crab's color based on the background's color as well
