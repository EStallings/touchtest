var gTouches = [null, null];
var mouse = {
	x:0,
	y:0
}

var evts = {
	lDown: false,
	lUp:   false,
	rDown: false //don't need a rUp
}

function getMouseFromEvent(evt){
	mouse.x = evt.clientX;
	mouse.y = evt.clientY;
}
function touchHandler(event){
	var first   = event.changedTouches[0];
	var id = 0;
	if(gTouches[0] === null || gTouches[0] === first.identifier){
		gTouches[0] = first.identifier;
		id = 0;
	}
	else if(gTouches[1] === null || gTouches[1] === first.identifier){
		gTouches[1] = first.identifier;
		id = 1;
	}
	else return;

	switch(event.type){
		case "touchstart" :
			if(id == 0) evts.lDown = true;
			else if(id == 1) evts.rDown = true;
			break;
		case "touchend"   :
			if(id == 0) evts.lUp = true;
			gTouches[id] = null;
			break;
	}

	if(id == 0){
		getMouseFromEvent(first);
	}
	event.preventDefault();
	var string =  "clientX: " + first.clientX + "<br/>" +
								"clientY: " + first.clientY + "<br/>" +
								"identifier: " + first.identifier + "<br/>" +
								"pageX: " + first.pageX + "<br/>" +
								"pageY: " + first.pageY + "<br/>" +
								"screenX: " + first.screenX + "<br/>" +
								"screenY: " + first.screenY + "<br/>" +
								"webkitForce: " + first.webkitForce + "<br/>" +
								"webkitRadiusX: " + first.webkitRadiusX + "<br/>" +
								"webkitRadiusY: " + first.webkitRadiusY + "<br/>" +
								"webkitRotationAngle: " + first.webkitRotationAngle + "<br/>";
	document.getElementById("event").innerHTML = string;
	document.getElementById("mouse").innerHTML = JSON.stringify(mouse);
	document.getElementById("button").innerHTML = id;
	document.getElementById("evts").innerHTML = JSON.stringify(evts);
}
document.addEventListener("touchstart" , touchHandler);
document.addEventListener("touchmove"  , touchHandler);
document.addEventListener("touchend"   , touchHandler);