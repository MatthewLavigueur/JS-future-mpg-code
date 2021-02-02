let userAnswer = ""; //storing user answer in string
let miles = 0;
let gallons = 0;
let compareMg = 0;
let userAsk = true; //main loop flag, true while user wants to continue
let userMiles = true; //usermile flag, true until valid answer
let userGallons = true; //usermile flag, true until valid answer

//git hub change :)
//another comment

while(userAsk)//main loop
{       
    userMiles = true;
    while(userMiles) //miles loop
    {   
        miles = parseFloat(prompt("Enter total Miles Driven"));
        if(miles > compareMg){
            document.write(`<p>Miles = ${miles}`);
            userMiles = false;
        }else{
            alert("please enter positive number");
    
        }
    }

    userGallons = true;
    while(userGallons) //gallons loop
    {   
        gallons = parseFloat(prompt("Enter total Gallons consumed"));
        if(gallons > compareMg){
            document.write(`<p>gallons = ${gallons}`);
            userGallons = false;
        }else{
            alert("please enter positive number");
        }
    }

    const MPG = parseFloat(miles / gallons);
    const html = `<p>Miles per gallon = ${MPG}<p>`;
    document.write(html);

    userAnswer = prompt("would you like to continue y/n");
    if(userAnswer === "n"){
        userAsk = false;
    }
}



/*    
let miles = 0;
let gallons = 0;



    miles = parseFloat(prompt("Enter total Miles Driven"));
    document.write(`<p>Miles = ${miles}`);
    
    gallons = parseFloat(prompt("Enter total Gallons consumed"));
    document.write(`<p>gallons = ${gallons}`);
    
    
 const MPG = parseFloat(miles / gallons);
 const html = `<p>Miles per gallon = ${MPG}<p>`;
 document.write(html);
*/

