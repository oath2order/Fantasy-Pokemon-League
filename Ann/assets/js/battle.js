teams = [{
        "name": "team1",
        "pokemon": ["pikachu", "celebi", "eevee", "charizard", "lugia", "mewtwo"]
    },
    {
        "name": "team2",
        "pokemon": ["pikachu", "celebi", "eevee", "charizard", "lugia", "mewtwo"]
    },
    {
        "name": "team3",
        "pokemon": ["pikachu", "celebi", "eevee", "charizard", "lugia", "mewtwo"]
    },
    {
        "name": "team4",
        "pokemon": ["pikachu", "celebi", "eevee", "charizard", "lugia", "mewtwo"]
    }
];

for (var i = 0; i < teams.length; i++) {
    var name = teams[i].name;
    for (var i = 0; i < teams[i].pokemon.length; i++) {
        var pokemon = teams[i].pokemon[i];
        var url = "https://img.pokemondb.net/artwork/" + pokemon + ".jpg";
    };
};

//beginning game
window.onload = function() {
    $(".startButton").on("click", loadPokemon1(), loadPokemon2());
    console.log(team[i].name[0]);
    console.log(team[i.name[1]]);
};

//load pokemon
function loadPokemon1(n) {
    $(".placeholder").html('<div class="player1 activePokemon center-align"><img class="activeImg" src=' + url +
        'width="300" height="280" alt=' + pokemon + ' "artwork by Ken Sugimori"></div>');
    $(".pokeball_1").html('<img id="pokeballa" src="pokeball.png"><img id="pokeballb" src="pokeball.png"><img id="pokeballc" src="pokeball.png"><img id="pokeballd" src="pokeball.png"><img id="pokeballe" src="pokeball.png"><img id="pokeballf" src="pokeball.png">');
    $(".forProgress_1").html('<div class="progress"><div class="determinate red" style="width: 30%"></div></div>');
    $(".name_1").html('<div class="col s4 bar userName player2 center-align"><h2>' + teams[i].name[0] + '</h2></div>')
}

function loadPokemon2(n) {
    $(".placeholder2").html('<div class="player2 activePokemon center-align"><img class="activeImg" src=' + url +
        'width="300" height="280" alt=' + pokemon + ' "artwork by Ken Sugimori"></div>');
    $(".pokeball_2").html('<img id="pokeballg" src="pokeball.png"><img id="pokeballh" src="pokeball.png"><img id="pokeballi" src="pokeball.png"><img id="pokeballj" src="pokeball.png"><img id="pokeballk" src="pokeball.png"><img id="pokeballl" src="pokeball.png">');
    $("forProgress_2").html('<div class="progress"><div class="determinate red" style="width: 30%"></div></div>');
    $(".versus").html('<h1 class="center-align">VS</h1>');
    $(".name_2").html('<div class="col s4 bar userName player2 center-align"><h2>' + teams[i].name[1] + '</h2></div>')
}