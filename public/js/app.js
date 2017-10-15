
//this loads the draft page via handlebars (draft.handlebars is a partial and gets called in index.handlebars)
    var template = document.getElementById('pokepool-template').innerHTML;
    var renderPokePool = Handlebars.compile(template);
    document.getElementById('app-frame').innerHTML = renderPokePool({});



$(document).ready(function() {

$("#startGame-btn").click(function(){
//there's an error on this one when you click the start button
    var template = document.getElementById('pokepool-template').innerHTML;
    var renderPokePool = Handlebars.compile(template);
    document.getElementById('app-frame').innerHTML = renderPokePool({});
});

//js for start page starts here ------------------
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

//hardcode pokes for testing
    var pokes = ["pikachu", "jigglypuff", "squirtle", "vulpix", "charmander", "oddish", "bulbasaur", "weedle", "zubat", "charizard", "psyduck", "machop", "bellsprout", "slowbro", "mimikyu", "drowzee", "krabby", "koffing", "bewear", "lapras", "ditto", "snorlax", "mewtwo", "pichu"]
//append pokes to draft screen
    for (var i = 0; i < pokes.length; i++) {
        $('.pokepool').append('<div class="col l2 m3 s4"> <div class="card"> <div class="card-image waves-effect waves-block waves-light"><img class="pokepic pokepic-' + pokes[i] + '" src="https://img.pokemondb.net/artwork/' + pokes[i] + '.jpg" alt-src="images/Pokeball.png"></div>' +
            '<div class="card-content"><span class="card-title activator flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons flow-text right">more_vert</i></span><p class="draftLink" id="' + pokes[i] + '"><a>Draft</a></p>' +
            '</div><div class="card-reveal"><span class="card-title flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons right">close</i></span>' +
            '<p>Type: <br> HP: <br> Attack: <br> Defense: <br> Special Defense: <br> Special Attack: <br> Total: <br> Dexterity: <br> Mod: </p></div></div>');
    }

//initialize object to send to battle page
    var teams = [{
            "name": "team1",
            "pokemon": []
        },
        {
            "name": "team2",
            "pokemon": []
        },
        {
            "name": "team3",
            "pokemon": []
        },
        {
            "name": "team4",
            "pokemon": []
        }
    ];

    currentlyDrafting = 0;
    gameStart = false;

    $(".start").click(function() {
        gameStart = true;
        nextDraftTeam(currentlyDrafting);

    });

    $("body").on("click", ".draftLink", function() {
        draftPoke(currentlyDrafting, this.id);
    });


//sets up the screen once a poke gets drafted -- highlights next team and changes status div
    var nextDraftTeam = function(teamNumber) {
        $(".team-" + teamNumber + "").addClass("active");
        if (teamNumber === 0) {
            previous = 3;
        } else {
            previous = teamNumber - 1;
        }
        $(".team-" + previous + "").removeClass("active");
        $(".start").hide();
        if (teamNumber < 3) {
            onDeck = teamNumber + 1;
        } else {
            onDeck = 0;
        }
        $(".draftStatus").html("<p>Now Drafting: " + teams[teamNumber].name + "</p><p> Next Up: " + teams[onDeck].name + "</p>");
        if (currentlyDrafting < 3) {
            currentlyDrafting++;

        } else {
            currentlyDrafting = 0;

        }
        console.log(currentlyDrafting);

    }

//moves pokes from draft spot to team spot and replaces drafted pokes with poke ball
    var draftPoke = function(teamNumber, pokeName, teamObj) {
        $(".teamPicks").append('<img src="https://img.pokemondb.net/artwork/' + pokeName + '.jpg"</img>');
        var pokeBallURL = $(".pokepic-" + pokeName + "").attr("alt-src");
        var pokePicURL = $(".pokepic-" + pokeName + "").attr("src");
        $(".pokepic-" + pokeName + "").attr("alt-src", pokePicURL);
        $(".pokepic-" + pokeName + "").attr("src", pokeBallURL);
        if (teamNumber < 4) {
            teamArray = teams[teamNumber].pokemon;
            teamArray.push(pokeName);
            nextDraftTeam(teamNumber);
        } else if (teamNumber = 3) {
            teamArray = teams[0].pokemon;
            teamArray.push(pokeName);
            nextDraftTeam(0);
        }
        console.log(teams);
    }
});