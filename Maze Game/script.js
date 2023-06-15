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
let pX = 0;
let pY = 0;

//The setColor function takes in an id and a color and sets the HTML element with id "id" to have the background color of "color".
const setColor = (id, color) => {
    document.querySelector(id).style.backgroundColor = color;
}

//The render function uses the above function to display the maze game on a 5x5 grid. The player is in the middle of this grid, and the grid extends to two spaces up, left, right, and down of the player.
const render = () => {
    for(var y = - 2; y <= 2; y ++)
    {
	for(var x = - 2; x <= 2; x ++)
	{
	    let curSpace = "#X" + x + "Y" + y;
	    //console.log(curSpace);
	    if(x === 0 && y === 0)
	    {
		setColor(curSpace, "blue");
	    }
	    else if(mazeGrid?.[y + pY + 1]?.[x + pX + 1] === 1) //Is this really the best solution?
	    {
		setColor(curSpace, "dimgray");
	    }
	    else if(mazeGrid?.[y + pY + 1]?.[x + pX + 1] === 0)
	    {
		setColor(curSpace, "peru");
	    }
	    else
	    {
		setColor(curSpace, "olivedrab");
	    }
	}
    }
}
render();

//When an arrow key is pressed, we move the player in that direction and then call render() to display the changes.
document.onkeyup = (e) => {
    let key = e.key;
    console.log(key);

    if(key === "ArrowRight")
    {
	console.log("move right");
	pX ++;
    }
    else if(key === "ArrowUp")
    {
	console.log("move up");
	pY --;
    }
    else if(key === "ArrowLeft")
    {
	console.log("move left");
	pX --;
    }
    else if(key === "ArrowDown")
    {
	console.log("move down");
	pY ++;
    }
    
    render();
}
