var teamA = 0;
var teamB = 0;
var seekerStart = Math.random();
while (seekerStart >= .03) {
    var random = Math.ceil(Math.random() * 10);
    if (random >= 9) {
        console.log("Team A attack stopped by Team B beater!");
    } else if (random >= 8) {
        console.log("Team B attack stopped by Team A beater!");
    } else if (random >= 7) {
        console.log("Team A shot saved by Team B keeper!");
    } else if (random >= 6) {
        console.log("Team B shot saved by Team A keeper!");
    } else if (random >= 4) {
        teamB += 10;
        console.log("Team B scores! Team A: " + teamA + ", Team B: " + teamB); 
    } else {
        teamA += 10;
        console.log("Team A scores! Team A: " + teamA + ", Team B: " + teamB);
    }
    confirm("Click OK to continue!");
    seekerStart = Math.random();
}
console.log("The seekers have spotted the snitch!");
confirm("Click OK to continue!");
var seekerA = 0;
var seekerB = 0;
do {
  var seekerRandom = Math.random();
  if (seekerRandom >= .5) {
        seekerA++;
  } else {
        seekerB++;
  }
  if (seekerA > seekerB) {
            console.log("The seeker from Team A pulls ahead!");
  } else if (seekerB > seekerA) {
            console.log("The seeker from Team B pulls ahead!");
  } else {
            console.log("They're even with each other!");
  }
  confirm("Click OK to continue!");
} while (Math.max(seekerA, seekerB) - Math.min(seekerA, seekerB) < 2);
if (seekerA > seekerB) {
    console.log("Seeker A caught the snitch!!");
    teamA += 150;
} else {
    console.log("Seeker B caught the snitch!!");
    teamB += 150;
}
if (teamA > teamB) {
    for (var i = 0; i <= 2; i++) {
        console.log("Team A wins, " + teamA + " to " + teamB + "!!!");
    }
} else if (teamB > teamA) {
    for (var i = 0; i <= 2; i++) {
        console.log("Team B wins, " + teamB + " to " + teamA + "!!!");
    }
} else {
    for (var i = 0; i <= 2; i++) {
        console.log("The match is tied, " + teamB + " to " + teamA + "!!!");
    }
} 
