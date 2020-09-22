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
        var house = response;
        // var houseEl = $("<h4>").text(response).addClass("text-white")
        // $("#container-2").append(houseEl)
        hogwartsHousing(house);
    });
}
// creating a click event for "sortingHat"
$("#sorting-btn").on("click",sortingHat)
function hogwartsHousing(house){
    var housingQueryURL = queryURL + "houses" + apiKey;
    console.log(housingQueryURL);
    $.ajax({
        url: housingQueryURL,
        method: "GET"
    }).then(function(response){
        result = response;
        GetInformationHouse(result, house);
    })
}
function GetInformationHouse (result, house){
    $("#container-fluid").empty()   
    for (var iloop = 0; iloop < result.length; iloop++ ){
        if (result[iloop].name == house){
            var title = $("<h2>").text(result[iloop].name).addClass("text-white");
            $("#container-fluid").append(title);
            var founder = $("<h6>").text("Founder: ").addClass("text-primary");
            var founderSP = $("<span>").text(result[iloop].founder).addClass("text-white");
            $(founder).append(founderSP);
            var mascot = $("<h6>").text("Mascot: ").addClass("text-primary");
            var mascotSP = $("<span>").text(result[iloop].mascot).addClass("text-white"); 
            $(mascot).append(mascotSP);
            var headOfHouse = $("<h6>").text("headOfHouse: ").addClass("text-primary");
            var headOfHouseSP = $("<span>").text(result[iloop].headOfHouse).addClass("text-white"); 
            $(headOfHouse).append(headOfHouseSP);
            var houseGhost = $("<h6>").text("houseGhost: ").addClass("text-primary");
            var houseGhostSP = $("<span>").text(result[iloop].houseGhost).addClass("text-white"); 
            $(houseGhost).append(houseGhostSP);
            var parag = $("<p>")
            $(parag).append(founder, mascot, headOfHouse, houseGhost);
            $("#container-fluid").append(parag);
        }
        }
}

