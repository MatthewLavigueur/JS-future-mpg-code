
//no magic numbers
//variables
let userAnswer = "";
let deposit = 0;
let interest = 0;
let years = 0;
let startYear = 1;
let multiplier = 100;       //( * 100) in for loop formula
let compareDiy = 0;         //Diy = deaposit/interest/years //operational comaparision
let decimalValAlert = 8;    //Prompt decimals
let decimalValWrite = 2;    //Print decimals  
let userAsk = true;
let userDeposit = true;
let userInterest = true;
let userYears = true;

while(userAsk)  // main loop
{
    userDeposit = true;
    while(userDeposit)  //deposit loop
    {   
            deposit = parseFloat(prompt("Enter a deposit amount to invest")); //ask user input
            if(deposit > compareDiy)
            {
                document.write(`Deposit Amount =  ${deposit}<br>`);
                userDeposit = false;
            }else{
                alert(`Enter a positive number`); //user Input false, loop back and try again
                }                                   
    }

    userInterest = true;
    while(userInterest) //interest loop
    {
            interest = parseFloat(prompt("Enter an amount of interest of investment"));
            if(interest > compareDiy)
            {
                document.write(`Interest Amount =  ${interest}<br>`);
                userInterest = false;
            }else{
                alert(`Enter a positive number`);
                }
    }

    userYears = true;
    while(userYears)    //years loop
    {
            years = parseFloat(prompt("Enter an amount of years for investment"));
            if(years > compareDiy)
            {
                document.write(`Year total =  ${years}<br>`);
                userYears = false;
            }else{
                alert(`Enter a positive number`);
                }
    }
    //loop to calculate user inputs
    let futureValue = deposit;
    for(i = startYear; i <= years; i++ )
    {
        futureValue += futureValue * interest / multiplier; //formula for future value
    }
    
    //prints information gathered and calculated on web page
    alert(`Final Value = ${futureValue.toFixed(decimalValAlert)}`);
    const html = `<p> Final Value = ${futureValue.toFixed(decimalValWrite)} </p>`;
    document.write(html);

    //asks user to continue or not
    userAnswer = prompt("Would you like to continue?","n")
    if(userAnswer == "n"){
        userAsk = false;
    }
}



/*

let deposit = 0;
let interest = 0;
let years = 0;
let startYear = 1;
let multiplier = 100;

deposit = parseFloat(prompt("Enter an amount to invest"));
document.write(`Deposit Amount =  ${deposit}<br>`);


interest = parseFloat(prompt("Enter an amount of interest"));
document.write(`Interest Amount =  ${interest}<br>`);


years = parseFloat(prompt("Enter an amount to years"));
document.write(`Total Years =  ${years}<br>`);

let futureValue = deposit;
for(i = startYear; i <= years; i++ ){
    futureValue += futureValue * interest / multiplier;
}

alert(`Final Value = ${futureValue.toFixed(8)}`);
const html = `<p> Final Value = ${futureValue.toFixed(3)} </p>`;
document.write(html);

*/