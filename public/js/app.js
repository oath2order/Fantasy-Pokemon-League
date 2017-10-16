//on start button click, get random pokepool

// var pokePool = getPokepool();


var userState = {

	renderDraft: function(pokes) {
		var template = document.getElementById('pokepool-template').innerHTML;
		var renderPokePool = Handlebars.compile(template);
		document.getElementById('app-frame').innerHTML = renderPokePool({
      pokePool: pokes
		});
	}

}

$('draftButton').click(function() {
	gameStore.onDraft(this);
});

var gameStore = {
	draft: {
		index: 0,
		limit: 4
	},
	teams: {
		1: {
			container: $(".teamPicks"),
			name: null,
			pokes: []
		},
		2: {
			name: null,
			pokes: []
		},
		3: {
			name: null,
			pokes: []
		},
		4: { 
			name: null,
			pokes: []
		}
	},
	getDraftingTeam: function() {
		return this.teams[this.draft.index];
	},
	draftNext: function() {
		this.draft.index = (this.draft.index ++) < this.draft.limit ? this.draft.index++ : 0;
		var next = new CustomEvent('nextDraft', {
			draftee: this.team[this.draft.index]
		});
		document.dispatchEvent(next);
	},
	addToTeam: function(team, pokemon) {
		team.pokes.push(pokemon);
		var added = new CustomEvent('addedToTeam', {
			container: team.container,
			pokemon: pokemon
		});
		document.dispatchEvent(added);
	},
	onDraft: function(link) {
		var pokemonId = link.id;
		var pokemon = listOfPokemon[pokemonId];
		var team = getDraftingTeam();
		this.addToTeam(team, pokemon);
		this.draftNext();
	}
}

document.addEventListener('nextDraft', function(draftEvent) {
	$(draftEvent.detail.container).append(draftEvent.detail.pokemon);
});

document.addEventListener('addedToTeam', function(nextEvent) {

});

//render 24 pokeballs
$(document).ready(function() {
    var pokes = ["pikachu", "jigglypuff", "squirtle", "vulpix", "charmander", "oddish", "bulbasaur", "weedle", "zubat", "charizard", "psyduck", "machop", "bellsprout", "slowbro", "mimikyu", "drowzee", "krabby", "koffing", "bewear", "lapras", "ditto", "snorlax", "mewtwo", "pichu"]

    for (var i = 0; i < pokes.length; i++) {
        $('.pokepool').append('<div class="col l2 m3 s4"> <div class="card"> <div class="card-image waves-effect waves-block waves-light"><img class="pokepic pokepic-' + pokes[i] + '" src="https://img.pokemondb.net/artwork/' + pokes[i] + '.jpg" alt-src="images/Pokeball.png"></div>' +
            '<div class="card-content"><span class="card-title activator flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons flow-text right">more_vert</i></span><p class="draftLink" id="' + pokes[i] + '"><a>Draft</a></p>' +
            '</div><div class="card-reveal"><span class="card-title flow-text grey-text text-darken-4">' + pokes[i] + '<i class="material-icons right">close</i></span>' +
            '<p>Type: <br> HP: <br> Attack: <br> Defense: <br> Special Defense: <br> Special Attack: <br> Total: <br> Dexterity: <br> Mod: </p></div></div>');
    }

    teams = [{
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
    $(".draftStatus").html("<p>Now Drafting: " + teams[teamNumber].name + "</p><p> Next Up: " + teams[teamNumber + 1].name + "</p>");
    currentlyDrafting++;
}

var draftPoke = function(teamNumber, pokeName) {
    $(".teamPicks").append('<img src="https://img.pokemondb.net/artwork/' + pokeName + '.jpg"</img>');
    var pokeBallURL = $(".pokepic-" + pokeName + "").attr("alt-src");
    var pokePicURL = $(".pokepic-" + pokeName + "").attr("src");
    $(".pokepic-" + pokeName + "").attr("alt-src", pokePicURL);
    $(".pokepic-" + pokeName + "").attr("src", pokeBallURL);
    teams[teamNumber].pokemon.push();
    nextDraftTeam();
}