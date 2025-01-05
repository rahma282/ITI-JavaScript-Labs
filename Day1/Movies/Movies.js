/*
create an array with your favourite movies.
a- copy the array into a different variable.
b- replace the third element with a different movie.
c- return the last array item in 3 different ways.
d- add a new movie to the beggining.
*/
function addMovie(){
    var favouriteMovies = ["MidNight","ExtrmeJop", "Exit" , "MidNight Runners" ,"Summer"];
    console.log("Original Array:", favouriteMovies);

    var cpMovies =  [].concat(favouriteMovies);  //concat() / slice() /map() /Array.from() to create a shallow copy of sourceArray 
    console.log("Copied Array:", cpMovies);

    cpMovies[2] = "Fake City";
    console.log("replace the third element with a different movie in Copied  Array:", cpMovies);

    var lastMovie = favouriteMovies[favouriteMovies.length-1];
    var lastMovie2 = favouriteMovies.at(-1); //return the element located at spacific index
    var lastMovie3 = favouriteMovies.slice(-1)  //Retrieve the last element using negative index  as a new array object
    console.log("Last Movie (Method 1):", lastMovie);
    console.log("Last Movie (Method 2):", lastMovie2);
    console.log("Last Movie (Method 3):", lastMovie3);

    //add new element to the beginning
    cpMovies.unshift("Exit");
    console.log("add a new movie to the beggining of Copied Array:", cpMovies);

}
addMovie();