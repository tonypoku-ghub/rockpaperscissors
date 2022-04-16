var computer = {
  choices: ["R", "P", "S"],
  play: function () {
    var rndmNbr = Math.floor(Math.random() * this.choices.length); //returns 0, 1, 2
    return this.choices[rndmNbr];
  },
};

var scorekeeper = {
  userWins: 0,
  userLosses: 0,
  userTies: 0,
  determineWinner: function (userChoice, compChoice) {
    if (compChoice === userChoice) {
      return "tie";
    } else if (compChoice === "R" && userChoice === "P") {
      return "user";
    } else if (compChoice === "S" && userChoice === "R") {
      return "user";
    } else if (compChoice === "P" && userChoice === "S") {
      return "user";
    } else if (compChoice === "S" && userChoice === "R") {
      return "user";
    } else if (compChoice === "S" && userChoice === "R") {
      return "user";
    }
  },
  tally: function (winner) {
    if (winner === "user") {
      userWins++;
    } else if (winner === "comp") {
      userLosses++;
    } else {
      this.userTies++;
    }
  },
};

function playRPS() {
  console.log("playing RPS");

  //Loop until user cancels
  for (var hasCanceled = false; hasCanceled === false; ) {
    var userResp = prompt("Enter R, P or S?", "");

    var compResp = computer.play();

    if (userResp === null || userResp === "") {
      hasCanceled = true;
    } else {
      var winner = scorekeeper.determineWinner(userResp, compResp);

      //Publish result Win/Loss
      if (winner === "user") {
        alert("You won");
      } else if ((winner = "comp")) {
        alert("You lost");
      } else {
        alert("It's at tie");
      }

      scorekeeper.tally(winner);
    }

    //Publish Stats
    alert(
      "Stats: \nWins: " +
        scorekeeper.userWins +
        "\nLosses: " +
        scorekeeper.userLosses +
        "\nTies: " +
        scorekeeper.userTies
    );
  }
}
