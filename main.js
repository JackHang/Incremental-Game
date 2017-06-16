var clicks;
var click_leve;
var worker;

function save() {

}

function load() {

}

function manualClick(value) {
	clicks += 1 * value;
	updateInfo();
}

function hireWorker() {
	var coast = Math.floor(10 * Math.pow(1.3, worker))
	if(clicks < coast) {
		document.getElementById("log").value += "No enough Clicks\n";
	} else {
		clicks -= coast;
		worker++;
		updateInfo();
	}
}

function leve_up() {
	var coast = Math.floor(10 * Math.pow(1.3, click_leve))
	if(clicks < coast) {
		document.getElementById("log").value += "No enough Clicks\n";
	} else {
		clicks -= coast;
		click_leve++;
		updateInfo();
	}
}

function updateInfo() {
	document.getElementById("collect").innerHTML = clicks.toFixed(2);
	document.getElementById("click_leve").innerHTML = click_leve;
	document.getElementById("up_coast").innerHTML = Math.floor(10 * Math.pow(1.3, click_leve));
	document.getElementById("click_num").innerHTML = click_leve;
	document.getElementById("coast").innerHTML = Math.floor(10 * Math.pow(1.3, worker));
}

function init() {
	click_leve = 1;
	clicks = 0;
	worker = 0;
	updateInfo()
}

window.setInterval(function(){
	manualClick(worker);
},1000)
