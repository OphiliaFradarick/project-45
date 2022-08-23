
var edges

function preload()
{
	backgroundImg = loadImage("wood background.jpg");
	restartButtonImg = loadImage("restart_button.png");
	letterStackImg = loadImage("letter stack.png");
	muteButtonImg = loadImage("MuteSound.png");
	catImg = loadImage("cat.png");
	letterA = loadImage("letter a.png");
	letterB = loadImage("letter b.png");
	letterC = loadImage("letter c.png");
	letterD = loadImage("letter d.png");
	letterE = loadImage("letter e.png");
	letterF = loadImage("letter f.png");
	letterG = loadImage("letter g.png");
	letterH = loadImage("letter h.png");
	letterI = loadImage("letter i.png");
	letterJ = loadImage("letter j.png");
	letterK = loadImage("letter k.png");
	letterL = loadImage("letter l.png");
	letterM = loadImage("letter m.png");
	letterN = loadImage("letter n.png");
	letterO = loadImage("letter o.png");
	letterP = loadImage("letter p.png");
	letterQ = loadImage("letter q.png");
	letterR = loadImage("letter r.png");
	letterS = loadImage("letter s.png");
	letterT = loadImage("letter t.png");
	letterU = loadImage("letter u.png");
	letterV = loadImage("letter v.png");
	letterW = loadImage("letter w.png");
	letterX = loadImage("letter x.png");
	letterY = loadImage("letter y.png");
	letterZ = loadImage("letter z.png");
	
	
}

function setup() {
	createCanvas(800, 700);

	edges = createEdgeSprites()

	//Create the Bodies Here.
	cat = createSprite(100,600)
	cat.addImage(catImg)
	cat.scale = 0.3

	A = createSprite(810,350)
	A.addImage(letterA)
	A.scale = 0.2

	B = createSprite(810,350)
	B.addImage(letterB)
	B.scale = 0.2

	C = createSprite(810,350)
	C.addImage(letterC)
	C.scale = 0.2

	D = createSprite(810,350)
	D.addImage(letterD)
	D.scale = 0.2

	E = createSprite(810,350)
	E.addImage(letterE)
	E.scale = 0.2

	F = createSprite(810,350)
	F.addImage(letterF)
	F.scale = 0.2

	G = createSprite(810,350)
	G.addImage(letterG)
	G.scale = 0.2

	H = createSprite(810,350)
	H.addImage(letterH)
	H.scale = 0.2

	I = createSprite(810,350)
	I.addImage(letterI)
	I.scale = 0.2

	J = createSprite(810,350)
	J.addImage(letterJ)
	J.scale = 0.2

	K = createSprite(810,350)
	K.addImage(letterK)
	K.scale = 0.2

	L = createSprite(810,350)
	L.addImage(letterL)
	L.scale = 0.2

	M = createSprite(810,350)
	M.addImage(letterM)
	M.scale = 0.2

	N = createSprite(810,350)
	N.addImage(letterN)
	N.scale = 0.2

	O = createSprite(810,350)
	O.addImage(letterO)
	O.scale = 0.2

	P = createSprite(810,350)
	P.addImage(letterP)
	P.scale = 0.2

	Q = createSprite(810,350)
	Q.addImage(letterQ)
	Q.scale = 0.2

	R = createSprite(810,350)
	R.addImage(letterR)
	R.scale = 0.2

	S = createSprite(810,350)
	S.addImage(letterS)
	S.scale = 0.2

	T = createSprite(810,350)
	T.addImage(letterT)
	T.scale = 0.2

	U = createSprite(810,350)
	U.addImage(letterU)
	U.scale = 0.2

	V = createSprite(810,350)
	V.addImage(letterV)
	V.scale = 0.2

	W = createSprite(810,350)
	W.addImage(letterW)
	W.scale = 0.2

	X = createSprite(810,350)
	X.addImage(letterX)
	X.scale = 0.2

	Y = createSprite(810,350)
	Y.addImage(letterY)
	Y.scale = 0.2

	Z = createSprite(810,350)
	Z.addImage(letterZ)
	Z.scale = 0.2
	
}


function draw() {
  background(backgroundImg);

  if(keyCode === 32){
	cat.velocityY = -8
  }
  cat.velocityY = cat.velocityY + 0.1

  cat.collide(edges[3])
  
  drawSprites();
 
}



