function main(){

	//Variable Decloration
	player = new character;
	enemy = new character;
	mymon = new mon;
	pnameUI = document.getElementById('pName');
	enameUI = document.getElementById('eName');

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "data/charData.xml", false);
	xhttp.send();

	//Load XML
	if (xhttp.status === 200) {
        mainLogic(xhttp.responseXML);
	};

	//MAIN LOGIC GOES HERE AFTER XML LOADS
	function mainLogic(xml) {
	    charactersXML = xml.getElementsByTagName("character");
		player.populate(0,charactersXML);
		enemy.populate(1,charactersXML);
		populateUI(player, enemy);

		console.log(player);
		console.log(enemy);
	}

	function populateUI(player, enemy){
		console.log(pnameUI);
		pnameUI.innerHTML = "<b>Name: </b>" + player.name;
		enameUI.innerHTML = "<b>Name: </b>" + enemy.name;
	}
}