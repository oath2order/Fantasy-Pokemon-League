//this loads the draft page via handlebars (draft.handlebars is a partial and gets called in index.handlebars)
var template = document.getElementById('start-template').innerHTML;
var renderPokePool = Handlebars.compile(template);
$('#app-frame').append(renderPokePool());


$(document).ready(function() {

    $("#startGame-btn").click(function() {
        //there's an error on this one when you click the start button
        var template = document.getElementById('pokepool-template').innerHTML;
        var renderPokePool = Handlebars.compile(template);
        var potate = { name: "potato" };
        $('#app-frame').html(renderPokePool());

        //document.getElementById('app-frame').innerHTML = renderPokePool(potate);
    });

    $("body").on("click", ".battle", function() {
        //there's an error on this one when you click the start button
        var template = document.getElementById('battle').innerHTML;
        //var renderPokePool = Handlebars.compile(template);
        $('#app-frame').html(template);
        $(".startButton").on("click", function() {
            drawPokemon1(teams[0]);
            drawPokemon2(teams[1]);
            $(".startButtonDiv").html("");
        });
        //document.getElementById('app-frame').innerHTML = renderPokePool();
    });

    //js for start page starts here ------------------

    //initialize object to send to battle page
    var teams = [{
            "name": "Team 1",
            "pokemon": []
        },
        {
            "name": "Team 2",
            "pokemon": []
        },
        {
            "name": "Team 3",
            "pokemon": []
        },
        {
            "name": "Team 4",
            "pokemon": []
        }
    ];


    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
    });


    //Replaces player name placeholder with player name
    $("#add-player1-name-btn").click(function() {
        var p1name = $("#inputPlayer1Name").val();
        $("#p1name-placeholder").replaceWith(p1name);
        teams[0].name = p1name;
    });

    $("#add-player2-name-btn").click(function() {
        var p2name = $("#inputPlayer2Name").val();
        $("#p2name-placeholder").replaceWith(p2name);
        teams[1].name = p2name;
    });

    $("#add-player3-name-btn").click(function() {
        var p3name = $("#inputPlayer3Name").val();
        $("#p3name-placeholder").replaceWith(p3name);
        teams[2].name = p3name;
    });

    $("#add-player4-name-btn").click(function() {
        var p4name = $("#inputPlayer4Name").val();
        $("#p4name-placeholder").replaceWith(p4name);
        teams[3].name = p4name;
    });


    //end start page logic -----------------------------

    //draft page js ------------------------------

    var displayTeamStatus = function(currentlyDrafting) {
        if (currentlyDrafting < 3) {
            nextUp = currentlyDrafting + 1;
        } else {
            nextUp = 0;
        }
        console.log(nextUp, currentlyDrafting);
        $(".team-" + nextUp + "").addClass("active");
        for (var i = 0; i < teams[nextUp].pokemon.length; i++) {
            $(".teamPicks").append('<img src="https://img.pokemondb.net/artwork/' + teams[nextUp].pokemon[i] + '.jpg"</img>');
        }
        $(".team-" + currentlyDrafting + "").removeClass("active");
    }


    var draftNumberStatus = function() {
        if (draftNumber < 23) {
            draftNumber++
        } else {
            $(".pokepool").html('<a class="waves-effect waves-light red darken-2 btn battle"><i class="material-icons left">play_circle_outline</i>Begin Battle</a>');
        }
        console.log(draftNumber);
    }

    var changeToPokeball = function(pokeName) {
        $(".teamPicks").append('<img src="https://img.pokemondb.net/artwork/' + pokeName + '.jpg"</img>');
        var pokeBallURL = $(".pokepic-" + pokeName + "").attr("alt-src");
        var pokePicURL = $(".pokepic-" + pokeName + "").attr("src");
        $(".pokepic-" + pokeName + "").attr("alt-src", pokePicURL);
        $(".pokepic-" + pokeName + "").attr("src", pokeBallURL);
    }

    var addToTeam = function(teamNumber, pokeName) {
        teamArray = teams[teamNumber].pokemon;
        teamArray.push(pokeName);
    }

    //render the pokes initially
    var startGame = function() {
        var pokes = ["pikachu", "jigglypuff", "squirtle", "vulpix", "charmander", "oddish", "bulbasaur", "weedle", "zubat", "charizard", "psyduck", "machop", "bellsprout", "slowbro", "mimikyu", "drowzee", "krabby", "koffing", "bewear", "lapras", "ditto", "snorlax", "mewtwo", "pichu"]
        //append pokes to draft screen
        for (var i = 0; i < pokes.length; i++) {
            $('.pokepool').append('<div class="col l2 m3 s4"> <div class="card"> <div class="card-image waves-effect waves-block waves-light"><img class="pokepic pokepic-' + pokes[i] + '" src="https://img.pokemondb.net/artwork/' + pokes[i] + '.jpg" alt-src="images/Pokeball.png"></div>' +
                '<div class="card-content"><span class="card-title activator flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons flow-text right">more_vert</i></span><p class="draftLink" id="' + pokes[i] + '"><a>Draft</a></p>' +
                '</div><div class="card-reveal"><span class="card-title flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons right">close</i></span>' +
                '<p>Type: <br> HP: <br> Attack: <br> Defense: <br> Special Defense: <br> Special Attack: <br> Total: <br> Dexterity: <br> Mod: </p></div></div>');
        }
        $(".draftStatus").empty();
        $(".team-0").addClass("active");
        currentlyDrafting = 0;
        draftNumber = 0;
    }

    $("body").on("click", ".start", function() {
        startGame();

    });

    $("body").on("click", ".draftLink", function() {
        $(".teamPicks").empty();
        addToTeam(currentlyDrafting, this.id);
        changeToPokeball(this.id);
        setTimeout(displayTeamStatus(currentlyDrafting), 2000);
        draftNumberStatus();
        if (currentlyDrafting === 3){
            currentlyDrafting = 0;
        } else {
            currentlyDrafting++;
        }
    });

});

//battle page logic-------------------
//hardcode team just in case 
var teams2 = [{
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
        "name": "Cristina",
        "pokemon": ["gengar", "umbreon", "lucario", "jigglypuff", "zapdos"]
    }
];


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