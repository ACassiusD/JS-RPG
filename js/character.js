//Base class for all character objects including the player
class character{
	
	constructor(){
		this.name = "Main_Character";
		this.mons = [];		
		this.activeMon = 0;
	}

	//Searches through xml and finds the character data, mons and moves for a givin playerID
	populate(characterID, characterXML){
		var character;
		//loop through and find the character 
		for (var i = 0; i < charactersXML.length; i++) { 
			if(charactersXML[i].childNodes[1].textContent == characterID){
				character = charactersXML[i];
				break;
			}
		}
		
		//SET CHARACTER DATA
		this.name = character.childNodes[3].textContent;

		//GET CHARACTERS MON'S NAMES
		var monNames = [];
		for (var i = 0; i < character.getElementsByTagName("mon").length; i++) {
			monNames[i] = character.getElementsByTagName("mon")[i].textContent;
		}

		//OPEN MONS XML
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", "data/monsData.xml", false);
		xhttp.send(null);

		//SYNCHRONOUS
		if (xhttp.status === 200) {
			var monsXML = xhttp.responseXML.getElementsByTagName("mon");
			
			//For each of the players mons
			for (var i = 0; i < monNames.length; i++) {
				
				//create a temp mon that will be pushed to the array
				var tempMon = new mon;
				//For each mon in mon data
				for (var j = 0; j < monsXML.length; j++){ 
					if(monsXML[j].childNodes[1].textContent == monNames[i]){
						tempMon.name = monsXML[j].childNodes[1].textContent;
						tempMon.type = monsXML[j].childNodes[3].textContent; 
						tempMon.attack = monsXML[j].childNodes[5].textContent; 
						this.mons.push(tempMon);
					} 
				}
			}	        
		}	
	}
}