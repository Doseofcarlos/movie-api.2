var queryURL = "https://www.potterapi.com/v1/";

var apiKey ="?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW"

function sortingHat(){
    $("#container-2").empty()
    var sortingHatQueryURL = queryURL + ("sortinghat");
    console.log(sortingHatQueryURL);
    $.ajax({
        url: sortingHatQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
var houseEl = $("<h4>").text(response).addClass("text-white")
$("#container-2").append(houseEl)
        //any html page manipulation
        //added with new data 
    });
}
$("#sorting-btn").on("click",sortingHat)




function hogwartsHousing(){
    var housingQueryURL = queryURL + "houses"+ apiKey;
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
    var characterQueryURL = queryURL + "characters" + characterId + apiKey;
    $.ajax({
        url: characterQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}
sortingHat();
// hogwartsHousing();











