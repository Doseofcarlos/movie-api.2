var queryURL = "https://www.potterapi.com/v1/";


//characters?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW&bloodStatus=pure-blood&ministryOfMagic=True"

var apiKey = "?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW"

        //Character = 195 -array
        //var queryURL = “https://www.potterapi.com/v1/characters?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW”;
        //sortingHat

function sortingHat(){
    var sortingHatQueryURL = queryURL + "sortingHat";
    $.ajax({
        url: sortingHatQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        //any html page manipulation
        //added with new data 
    });
}

function hogwartsHousing(){
    var housingQueryURL = queryURL + "houses" + apiKey;
    $.ajax({
        url: housingQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response[0].members[0]);
        characterSelect(response[1].members[1])
    })
}

function characterSelect(characterId){
    var characterQueryURL = queryURL + "characters/" + characterId + apiKey;
    $.ajax({
        url: characterQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}


sortingHat();
hogwartsHousing();
        