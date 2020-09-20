    //var queryURL = "https://www.potterapi.com/v1/characters?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW&bloodStatus=pure-blood&ministryOfMagic=True";

        //Character = 195 -array
        //var queryURL = "https://www.potterapi.com/v1/characters?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW&name=Harry Potter";

        //var queryURL = "https://www.potterapi.com/v1/characters?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW&name=Harry Potter";


        //sortingHat
        //var queryURL = "https://www.potterapi.com/v1/sortingHat";

        // var arrayCharacter = [
        //     "Harry Potter",
        //     "Hermione Granger", 
        //     "Ronald Weasley",
        //     "Draco Malfoy", 
        //     "Albus Dumbledore",
        //     "Rubeus Hagrid"
        //     ];

        //dobby
        //Voldemor
        //minerva 
        //severa snape

        var arrayCharacter = [{
            name : "Harry Potter",
            biog : "Harry James Potter was an England and only child and son of James and Lily Potter, orphaned as an infant. He was a student wizard at Hogwarts School of Witchcraft and Wizardry, where he belongs to the house of Gryffindor together his friends Hermione Granger and Ronald Weasley. He was one of the most famous wizards of modern times."
          },
          {
            name : "Hermione Granger",
            biog : "Hermione Jean Granger was the brightest witch of her age. She began attending Hogwarts in 1991 and was Sorted into Gryffindor House. She possessed a brilliant academic mind and proved to be a gifted student in almost every subject that she studied."
          },
          {
            name : "Ronald Weasley",
            biog : "Ronald Weasley was an English, the sixth and youngest son of Arthur and Molly Weasley. He was also the younger brother of Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny."
          },
          {
            name : "Draco Malfoy", 
            biog : "Draco Lucius Malfoy the only son of Lucius and Narcissa Malfoy. The son of a Death Eater, Draco was raised to strongly believe in the importance of blood purity. He attended Hogwarts School of Witchcraft and Wizardry from 1991-1998."
          },
          {
            name : "Albus Dumbledore",
            biog : "Professor Albus Percival Wulfric Brian Dumbledore was an English, who was the Defence Against the Dark Arts Professor, later the Transfiguration Professor, and later the Headmaster of Hogwarts School of Witchcraft and Wizardry. Considered to be the most powerful wizard of his time, Dumbledore was awarded the Order of Merlin, First Class, and was the Supreme Mugwump of the International Confederation of Wizards as well as the Chief Warlock of the Wizengamot.",
          },
          {
            name : "Rubeus Hagrid",
            biog : "Professor Rubeus Hagrid was an English half-giant wizard, son of Mr Hagrid and the giantess Fridwulfa, and elder half-brother of the giant Grawp. Hagrid attended Hogwarts School of Witchcraft and Wizardry in 1940 and was sorted into Gryffindor house."
          }
          ];

      var result = [];
      var index = 0; 

      for (var iloop = 0; iloop < arrayCharacter.length; iloop++ ){

          console.log(arrayCharacter.length);
          //console.log(iloop);
          

           //var queryURL = "https://www.potterapi.com/v1/characters?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW&name=" + arrayCharacter[iloop];
           //console.log(queryURL);
           var queryURL = "https://www.potterapi.com/v1/characters?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW&name=" + arrayCharacter[iloop].name;
           console.log(queryURL);

           var nameCharacter1 = "";

          $.ajax({
          url: queryURL,
          method: "GET"
          }).then(function(response) {

              result = response;
              //result = JSON.stringify(response);
              //console.log(result);
              //nameCharacter1 = response.name;
              makeProfile(result);
        });
      }

    function makeProfile (result){
       
       
        console.log(result);
        
        //debugger

        //console.log("index " + index)

        for (var iloop = 0; iloop < arrayCharacter.length; iloop++ ){

          //Check name from API is the same from arrayCharacter to create HTML elements
          if(result[0].name == arrayCharacter[iloop].name){

            var nameCharacter = result[0].name;

            var title = $("<h2>").text(nameCharacter);

            var image = $("<img>").attr("src", "img/" + nameCharacter + ".jpg");
            image.addClass("center");
           
            //get short description from obj arrayCharacter
            var bio = $("<p>").text(arrayCharacter[iloop].biog); 

            var blood = $("<h6>").text("Blood Status: ");
            var statusblood = $("<span>").text(result[0].bloodStatus); 
            $(blood).append(statusblood);

            var wandtitle = $("<h6>").text("Wand: ");
            var wand  = $("<span>").text(result[0].wand);
            $(wandtitle).append(wand);

            var housetitle = $("<h6>").text("House: ");
            var house = $("<span>").text(result[0].house);
            $(housetitle).append(house);

            var roletitle = $("<h6>").text("Role: ");
            var role = $("<span>").text(result[0].role);
            $(roletitle).append(role);


            // var order = result[0].orderOfThePhoenix;
            // var patronus = result[0].patronus;
            // var species = result[0].species;
            

            var parag = $("<p>")
            var btnDetail = $("<button>");
            btnDetail.addClass("btn btn-secondary");
            btnDetail.attr({"data-toggle":"modal", "data-target":"#myModal"});
            btnDetail.text("View details >>");

            
            // console.log(blood);
            // console.log(wand);
            // console.log(house);

            //shown.bs.modal
            //$(btnDetail).on('click', function () {
            $("#myBtn_3").on('click', function () {

              event.preventDefault();
              // var bioname = $("<p>").text("Name: " + nameCharacter);
              // var bioblood = $("<p>").text("Blood: " + blood) 
             
              // $("#biomodal").append(bioname, bioblood);
              DetailProfile(nameCharacter, blood);
   
              //$("#myModal").modal("show");
              
         
            });

            parag.append(btnDetail);
          
            $("#column_" + index).append(image, title, bio, blood, wandtitle, housetitle, roletitle); 

          }
        }
        index = index +1;
    }

    function DetailProfile(name, blood){
      var params = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=600,height=300,left=100,top=100";
      open('detailProfile.html?name=' + name, 'Profile', params);

      // var bioname = $("<p>").text("Name: " + nameCharacter);
      // var bioblood = $("<p>").text("Blood: " + blood) 
      // $("#biomodal").prepend(bioname, bioblood);
      // $("#myModal").modal();


    }

