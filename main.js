var firsttime = true;
function touchHandler(event){
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

	var touches = event.changedTouches;
	var first   = touches[0];
	var type    = "";
	if(firsttime)
		first.identifier = 0;
	firsttime = false;
	switch(event.type){
		case "touchstart" :
			if(first.identifier == 0) evts.lDown = true;
			else if(first.identifier == 1) evts.rDown = true;
			break;
		case "touchend"   :
			if(first.identifier == 0) evts.lUp = true;
			break;
	}

	if(first.identifier == 0){
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
	document.getElementById("evts").innerHTML = JSON.stringify(evts);
}
document.addEventListener("touchstart" , touchHandler);
document.addEventListener("touchmove"  , touchHandler);
document.addEventListener("touchend"   , touchHandler);