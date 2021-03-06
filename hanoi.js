/*------------------------- hanoi --------------------------*/




// Globals so that they can be changed via the UI
var Towers;
var numTowers = 3;
var numColors = 1;
var numDisks = 3;
var canvas; // load the canvas in start (after page is loaded)
var height = 300;
var width = 800;

/*------------------------- makeTowersandDisks --------------------------*/
/*
 * 
 */
function makeTowersandDisks(){
    Towers = new Array();
    for (var i=0;i<numTowers;i++) {
	var tBlockWidth= width/numTowers;
	var tCenterX   = i*tBlockWidth+tBlockWidth/2;
	var tCenterY   = height-40;
	var tWidth     = tBlockWidth * .9;
	var tHeight    = (height-40)*.8;
	
	/* Make the tower */
	Towers.push(new Tower(canvas,tCenterX,tCenterY,
			      tWidth,tHeight));
    }

    // Make the starting disks
    for (var i=numDisks;i>0;i--)
	Towers[0].addDisk(new Disk(canvas,0,0,i*25+25,i,numColors));
}

/*------------------------- drawTowers --------------------------*/
/*
 * 
 */
function drawTowers() {
    for (t in Towers){
	Towers[t].draw(canvas.getContext("2d"));
    }
}


/*------------------------- start --------------------------*/
/*
 * application starting point
 */
function start() {
    
    // We can't set canvas until after the page is loaded
    canvas = document.getElementById("canvas");

    makeTowersandDisks();
    drawTowers();


    bindButtons();


}

window.onload = start;