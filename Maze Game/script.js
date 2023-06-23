//Code for the maze game.
//This nested array stores the maze itself. 1 corresponds to a wall, 0 to a path.
const mazeGrid = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Player coordinates, used for collisions and rendering.
let pX = 1;
let pY = 1;

let coords = {
    x: pX,
    y: pY
};

//The setColor function takes in an id and a color and sets the HTML element with id "id" to have the background color of "color".
const setColor = (id, color) => {
    document.querySelector(id).style.backgroundColor = color;
}

//The applyMovement function is where the state of pX and pY are changed to be the value of a movementEvent call.
const applyMovement = (oldCoords, event) => {
    let newCoords = movementEvent(oldCoords, event);
    oldCoords.x = newCoords.x;
    oldCoords.y = newCoords.y;
}

//The movementEvent function takes in an event identifier (moveLeft, moveUp, moveRight, and moveDown), processes pX and pY accordingly, and returns a new value equivalent to player movement in the direction specified by the event identifier.
const movementEvent = (coords, event) => {
    if(event === "moveLeft") {
	return {
	   x: coords.x - 1,
	   y: coords.y
	};
    }
    else if(event === "moveRight") {
	return {
	   x: coords.x + 1,
	   y: coords.y
	};
    }
    else if(event === "moveUp") {
	return {
	   x: coords.x,
	   y: coords.y - 1
	};
    }
    else if(event === "moveDown") {
	return {
	   x: coords.x,
	   y: coords.y + 1
	};
    }
    else {
	return {
	   x: coords.x,
	   y: coords.y
	}
    }
}

//The render function uses the above function to display the maze game on a 5x5 grid. The player is in the middle of this grid, and the grid extends to two spaces up, left, right, and down of the player.
const render = (pX, pY) => {
    for(var y = - 2; y <= 2; y ++) {
	for(var x = - 2; x <= 2; x ++) { 
	    let curSpace = "#X" + x + "Y" + y;
	    //console.log(curSpace);
	    if(x === 0 && y === 0) {
		setColor(curSpace, "blue");
	    }
	    else if(mazeGrid?.[y + pY]?.[x + pX] === 1) {
		setColor(curSpace, "dimgray");
	    }
	    else if(mazeGrid?.[y + pY]?.[x + pX] === 0) {
		setColor(curSpace, "peru");
	    }
	    else {
		setColor(curSpace, "olivedrab");
	    }
	}
    }
}
render(pX, pY);

//When an arrow key is pressed, we move the player in that direction and then call render() to display the changes.
document.onkeyup = (e) => {
    let key = e.key;
    console.log(key);

    if(key === "ArrowRight") {
	console.log("move right");
	applyMovement(coords, "moveRight");
    }
    else if(key === "ArrowUp") {
	console.log("move up");
	applyMovement(coords, "moveUp");
    }
    else if(key === "ArrowLeft") {
	console.log("move left");
	applyMovement(coords, "moveLeft");
    }
    else if(key === "ArrowDown") {
	console.log("move down");
	applyMovement(coords, "moveDown");
    }
    
    render(coords.x, coords.y);
}
