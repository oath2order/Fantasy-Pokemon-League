//on start button click, get random pokepool
$('#start-button').click(function() {
    var pokePool = getPokepool();
    var template = document.getElementById('pokePool-template').innerHTML;
    var renderPokePool = Handlebars.compile(template);
    document.getElementById('pokePool').innerHTML = renderPokePool({
        pokePool: pokePool
    });
});

//render 24 pokeballs
$(document).ready(function() {
    var pokes = ["pikachu", "jigglypuff", "squirtle", "vulpix", "charmander", "oddish", "bulbasaur", "weedle", "zubat", "charizard", "psyduck", "machop", "bellsprout", "slowbro", "muk", "drowzee", "krabby", "koffing", "jynx", "lapras", "ditto", "snorlax", "mewtwo", "pichu"]

    for (var i = 0; i < pokes.length; i++) {
        $('.pokepool').append('<div class="col l2 m3 s4"> <div class="card"> <div class="card-image waves-effect waves-block waves-light"><img class="pokepic pokepic-' + pokes[i] + '" src="https://img.pokemondb.net/artwork/' + pokes[i] + '.jpg" alt-src="../public/images/Pokeball.png"></div>' +
            '<div class="card-content"><span class="card-title activator flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons flow-text right">more_vert</i></span><p class="draftLink" id="' + pokes[i] + '"><a>Draft</a></p>' +
            '</div><div class="card-reveal"><span class="card-title flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons right">close</i></span>' +
            '<p>Type: <br> HP: <br> Attack: <br> Defense: <br> Special Defense: <br> Special Attack: <br> Total: <br> Dexterity: <br> Mod: </p></div></div>');
    }

    teams = ["team1", "Team2", "team3", "team4"];
    currentlyDrafting = 0;
    gameStart = false;

    $(".start").click(function() {
        gameStart = true;
        nextDraftTeam(currentlyDrafting);

    });

    $("body").on("click", ".draftLink", function() {
        draftPoke(this.id);
    });
});


var nextDraftTeam = function(teamNumber) {
	// teamPicks = ["jigglypuff", "oddish"];
 //    $(".teamPicks").html("");
 //    for (var i = 0; i < teamPicks.length; i++) {
 //        $(".teamPicks").append('<img src="https://img.pokemondb.net/artwork/' + teamPicks[i] + '.jpg"</img>');
 //    }
    $(".team-" + teamNumber + "").addClass("active");
    $(".team-" + (teamNumber - 1) + "").removeClass("active");
    $(".start").hide();
    $(".draftStatus").html("<p>Now Drafing: " + teams[teamNumber] + "</p><p> Next Up: " + teams[teamNumber + 1] + "</p>");
    currentlyDrafting++;
}

var draftPoke = function(pokeName) {
    $(".teamPicks").append('<img src="https://img.pokemondb.net/artwork/' + pokeName + '.jpg"</img>');
    var pokeBallURL = $(".pokepic-" + pokeName + "").attr("alt-src");
    var pokePicURL = $(".pokepic-" + pokeName + "").attr("src");
    $(".pokepic-" + pokeName + "").attr("alt-src", pokePicURL);
    $(".pokepic-" + pokeName + "").attr("src", pokeBallURL);
    nextDraftTeam(1);

}