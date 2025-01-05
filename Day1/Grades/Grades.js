/*
Create a function that takes the following:
    a- User name using prompt ( required)
    b- User Grades in one prompt in the format: 
        “90,50,30,10”
    Welcome the user by Name on console
    and display grades as table on console
    after that show the average grade of user’s grades.
*/
function diplayGrades(){
    var name = prompt('Enter your name: ');
    while (!name || name.trim() === "" || !isNaN(name)) {
        name = prompt('Enter your name: ');
        if (!name || name.trim() === "") {
            console.error("User name is required and cannot be empty.");
        }
        else if (!isNaN(name)) {
            console.error("User name is required and cannot be a number.");
        }
    }
    var grades = prompt('Enter your grades in this format 90,50,30,10: ');

    var arrGrades = grades.split(",").map(Number); //take grades and sparate them then put them into array of numbers
    while (arrGrades.some(isNaN)) { //The some method is used to test whether at least one element in the array
        grades = prompt('Enter your grades in this format 90,50,30,10: ');
        arrGrades = grades.split(",").map(Number);
        if (arrGrades.some(isNaN)){
        console.error("Invalid grades format. Please enter only numbers separated by commas.");
        }
    }

    var sum =0;
    for (var i=0; i<arrGrades.length; i++){
        sum += arrGrades[i];
    }
    var gradesAverage= sum/arrGrades.length;

    console.log('Welcome ' + name);
    console.log("Your Grades:")
    console.table(arrGrades);
    console.log("The average your grades is: " + gradesAverage);

}
diplayGrades();