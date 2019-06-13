// Display functions
function displayKits(){	
	var hometeam = document.getElementById("hometeam").value;
	var awayteam = document.getElementById("awayteam").value;

	//First case: Home kit vs Home Kit
	var validation1 = kitsValidator(homekits.kits[hometeam - 1], homekits.kits[awayteam - 1]);
	
	if (validation1){
		document.getElementById("homekit").src = getHomeKit(hometeam);
		document.getElementById("awaykit").src = getHomeKit(awayteam);	
	}
	else{
		//Second case: Home kit vs Away Kit
		var validation2 = kitsValidator(homekits.kits[hometeam - 1], awaykits.kits[awayteam - 1]);

		if (validation2){
			document.getElementById("homekit").src = getHomeKit(hometeam);
			document.getElementById("awaykit").src = getAwayKit(awayteam);	
		}
		else{
			//Third case: Away kit vs Home Kit
			var validation3 = kitsValidator(awaykits.kits[hometeam - 1], homekits.kits[awayteam - 1]);

			if (validation3){
				document.getElementById("homekit").src = getAwayKit(hometeam);
				document.getElementById("awaykit").src = getHomeKit(awayteam);	
			}
			else{
				document.getElementById("homekit").src = getAwayKit(hometeam);
				document.getElementById("awaykit").src = getAwayKit(awayteam);
			}
		}
	}
}
