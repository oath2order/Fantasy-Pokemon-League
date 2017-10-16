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



    $("#startGame-btn").click(function(e) {
      //e.preventDefault();
      var pokePool = [];
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/pokeapi",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "57ad201f-32d0-0568-5c10-0be1c6a50383"
        },
        "processData": false,
        "data": "{\r\n    \"name\": \"Royale with cheese\"\r\n}"
      }
      $.when($.ajax(settings), $.ajax(settings)).done(function(a1, a2) {
        pokePool.push(a1[0]);
        pokePool.push(a2[0]);
        var winner = thunderDome(pokePool[0], pokePool[1]);
        console.log(winner);
        //console.log(winner.name, "has won!");
      });
    })

