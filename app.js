const team = {
  //players array in team object
  _players:[ {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11,
  },
   {
     firstName: 'James',
     lastName: 'Garvey',
     age: 28,
   },
    {
      firstName: 'Prince',
      lastName: 'Larry',
      age: 45,
    }        
  ],
  //games array in team object
  _games:[
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Patriots',
      teamPoints: 30,
      opponentPoints: 15,
    },
    {
      opponent: 'Jets',
      teamPoints: 60,
      opponentPoints: 6,
    }
  ],
  //getter methods to return players and games
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  //push the players object into player
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
let game = {
  opponent: opponent,
  teamPoints: teamPoints,
  opponentPoints: opponentPoints, 
};
this.games.push(game);
  }
};
//add player method 
team.addPlayer('Steph','Curry', 29),
team.addPlayer('Lisa','Leslie', 33),
team.addPlayer('Michael','Jordan', 49);
//logs the team players
console.log(team.players);
//logs team games
console.log(team.games);
 //invoke addgame method 
team.addGame('Giants', 55, 14),
team.addGame('Rams', 35, 14),
team.addGame('Chargers', 7, 7); 
//logs team games 
console.log(team.games)




