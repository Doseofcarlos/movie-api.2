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
// adding a house api with definitions appending to sortinghat
function GetInformationHouse (result, house){
    $("#container-fluid").empty()   
    for (var iloop = 0; iloop < result.length; iloop++ ){
        if (result[iloop].name == house){
            var title = $("<h2>").text(result[iloop].name)
            switch(house){
                case "Slytherin" :
                    title.addClass("text-success");
                    break;
                case "Hufflepuff" :
                    title.addClass("text-warning");
                    break;
                case "Ravenclaw" :
                    title.addClass("text-primary");
                    break;
                case "Gryffindor" :
                    title.addClass("text-danger");
                    break;
             }

            $("#container-fluid").append(title);
            var founder = $("<h6>").text("Founder: ")
            var founderSP = $("<span>").text(result[iloop].founder)
            $(founder).append(founderSP);
            var mascot = $("<h6>").text("Mascot: ")
            var mascotSP = $("<span>").text(result[iloop].mascot); 
            $(mascot).append(mascotSP);
            var headOfHouse = $("<h6>").text("headOfHouse: ");
            var headOfHouseSP = $("<span>").text(result[iloop].headOfHouse); 
            $(headOfHouse).append(headOfHouseSP);
            var houseGhost = $("<h6>").text("houseGhost: ");
            var houseGhostSP = $("<span>").text(result[iloop].houseGhost); 
            $(houseGhost).append(houseGhostSP);
            var parag = $("<p>")
            $(parag).append(founder, mascot, headOfHouse, houseGhost);
            $("#container-fluid").append(parag);
        }
        }
}

