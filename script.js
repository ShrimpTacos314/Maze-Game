//Code for the maze game.
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

let pX = 0;
let pY = 0;

const setColor = (id, color) => {
    document.querySelector(id).style.backgroundColor = color;
}

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
	    else if(mazeGrid?.[y + pY + 1]?.[x + pX + 1] === 1)
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
