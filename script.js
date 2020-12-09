//Variables
const age=18;
const isFemale = false;
const driverStatus = 'bob';

//Check age
if (age >= 18){
    console.log('Geweldig, ja  mag alcohol kopen! Kom binnen!');
}
else {
    console.log('Geen 18, geen druppel! Je mag niet binnen!');
}

//Check of een vrouw is
if (isFemale){
    console.log('Hah, ladiesnight korting voor je');
}
else {
    console.log('Helaas, geen ladiesnight korting voor je');
}

//Ben je de bob?
if (driverStatus == 'bob'){
    console.log('Je mag gewoon jouw auto besturen');
}
else {
    console.log('Je bent dronken, je mag niet auto rijden, he!');
}