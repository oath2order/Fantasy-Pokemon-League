//on start button click, get random pokepool
$("#start-button").click(function() {
    var pokePool = getPokepool();
    var template = document.getElementById('pokePool-template').innerHTML;
    var renderPokePool = Handlebars.compile(template);
    document.getElementById('pokePool').innerHTML = renderPokePool({
        pokePool: pokePool
    });
});