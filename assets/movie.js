
$(document).ready(function(){


// Initial array of movies
var movies = ["Harry Potter and the Sorcerer's Stone", 
                    "Harry Potter and the Prisoner of Azkaban", 
                    "Harry Potter and the Goblet of Fire", 
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows – Part 1",
                    "Harry Potter and the Deathly Hallows – Part 2"];


// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {

$("#movies-view").empty(); 

var movie = $(this).attr("data-name");
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

console.log(queryURL);

// Creating an AJAX call for the specific movie button being clicked
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {

// Creating a div to hold the movie
var movieDiv = $("<div class='movie'>");

// Storing the rating data
var rating = response.Rated;

// Creating an element to have the rating displayed
var pOne = $("<p>").text("Rating: " + rating);

// Displaying the rating
movieDiv.append(pOne);

// Storing the release year
var released = response.Released;

// Creating an element to hold the release year
var pTwo = $("<p>").text("Released: " + released);

// Displaying the release year
movieDiv.append(pTwo);

// Storing the plot
var plot = response.Plot;

// Creating an element to hold the plot
var pThree = $("<p>").text("Plot: " + plot);

// Appending the plot
movieDiv.append(pThree);

// Retrieving the URL for the image
var imgURL = response.Poster;

// Creating an element to hold the image
var image = $("<img>").attr("src", imgURL);

// Appending the image
movieDiv.append(image);

// Putting the entire movie above the previous movies
$("#movies-view").prepend(movieDiv);
});

}

// Function for displaying movie data
function renderButtons() {

// Deleting the movies prior to adding new movies
// (this is necessary otherwise you will have repeat buttons)
//$("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {
    
//console.log($("#movies-view").length);
  // Then dynamicaly generating buttons for each movie in the array
  // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
  var a = $("<button>");
  // Adding a class of movie-btn to our button
  a.addClass("movie-btn");
  // Adding a data-attribute
  a.attr("data-name", movies[i]);
  // Providing the initial button text
  a.text(movies[i]);
 // a.text("movies");
  // Adding the button to the buttons-view div
  //$("#buttons-view").append(a);
  $("#buttons-view").append(a);

  }

}


// This function handles events where a movie button is clicked
//$("#add-movie").on("click", function(event) {
//event.preventDefault();
//renderButtons();
//});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();

});