var font;
/*
Wait...
That wasn't
supposed
to happen
*/
var vehicles = [];
var messages = [[],[],[],[],[]];
var circles;
var spots;
var img;
var mode = 0;
var timer = 0;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
  img = loadImage("arakelian.PNG");
}

function setup() {
  createCanvas(713, 453);
  background(51);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('Erick', 25, 305, 250, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y, true);
    vehicles.push(vehicle);
  }
  points = font.textToPoints('Wait...', 25, 305, 250, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y, true);
    messages[0].push(vehicle);
  }
  points = font.textToPoints('That', 25, 305, 250, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y, true);
    messages[1].push(vehicle);
  }
  points = font.textToPoints('Wasn\'t', 25, 305, 250, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y, true);
    messages[2].push(vehicle);
  }
  points = font.textToPoints('Supposed', 25, 305, 250, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y, true);
    messages[3].push(vehicle);
  }
  points = font.textToPoints('To happen', 25, 305, 250, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y, true);
    messages[4].push(vehicle);
  }
}

function mousePressed(){
  if(mode===0)
    mode=1;
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}


      
