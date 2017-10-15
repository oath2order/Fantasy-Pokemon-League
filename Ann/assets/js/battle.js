var teams = [{
        "name": "Josh",
        "pokemon": ["pikachu", "celebi", "eevee", "charizard", "lugia", "mewtwo"]
    },
    {
        "name": "Ann",
        "pokemon": ["snorlax", "ditto", "tyranitar", "charmander", "squirtle", "gardevoir"]
    },
    {
        "name": "Dante",
        "pokemon": ["bulbasaur", "mew", "gyarados", "dragonite", "magikarp"]
    },
    {
        "name": "Christina",
        "pokemon": ["gengar", "umbreon", "lucario", "jigglypuff", "zapdos"]
    }
];


//start game
window.onload = function() {
    $(".startButton").on("click", function() {
        drawPokemon1(teams[0]);
        drawPokemon2(teams[1]);
        $(".startButtonDiv").html("");
    });
};

//load pokemon
function drawPokemon1(team1) {
    //draw current player
    $(".placeholder").html('<div class="player1 activePokemon center-align"><img class="activeImg" src=' +
        "https://img.pokemondb.net/artwork/" + team1.pokemon[0] + ".jpg ' " +
        'width="300" height="280" alt=' + team1.pokemon[0] + '"artwork by Ken Sugimori"></div>');
    //pokeballs for 'to fight'
    $(".pokeball_1").html("");
    for (var i = 1; i < team1.pokemon.length; i++) {
        $(".pokeball_1").append('<img id="pokeball" src="./assets/images/Pokeball.png">');
    }

    //hp bar at start
    setHpPokemon1(100);

    $(".name_1").html('<div class="bar userName player2 center-align"><h2>' + team1.name + '</h2></div>')
}

function drawPokemon2(team2) {
    //draw current player
    $(".placeholder2").html('<div class="player2 activePokemon center-align"><img class="activeImg" src=' +
        "https://img.pokemondb.net/artwork/" + team2.pokemon[0] + ".jpg ' " +
        'width="300" height="280" alt=' + team2.pokemon[0] + '"artwork by Ken Sugimori"></div>');
    //pokeballs for 'to fight'
    $(".pokeball_2").html("");
    for (var i = 1; i < team2.pokemon.length; i++) {
        $(".pokeball_2").append('<img id="pokeball" src="./assets/images/Pokeball.png">');
    }
    //hp bar at start
    setHpPokemon2(100);
    $(".versus").html('<h1 class="center-align">VS</h1>');
    $(".name_2").html('<div class="bar userName player2 center-align"><h2>' + team2.name + '</h2></div>')
}

//progress bars during game play
function setHpPokemon1(HP) {
    $(".forProgress_1").html('<div class="progress"><div class="determinate red" style="width: ' + HP + '%"></div></div>');
}

function setHpPokemon2(HP) {
    $(".forProgress_2").html('<div class="progress"><div class="determinate red" style="width:' + HP + '%"></div></div>');
}