// make a fork

//## Lesson Task 1 Question

//connect documents

/* const overskrift = document.querySelector("h1");
overskrift.innerHTML += " tihi";
const storDiv = document.querySelector(".container");
storDiv.innerHTML += `<div class ="ny-div"> halloi </div>`;
 */
// successfully connected css and js to index

//Make a call to the following endpoint:
// https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json




///////////// MITT FORSØK
/* 

const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

//select results div
const resultsDiv = document.querySelector(".results");

async function makeACall() {
    try {
        const name = await fetch(url);
        const secondName = await name.json();
        console.log(secondName);

        for (let i = 0; i <= 14; i++) {
            //remember the first is 0, so only count to 14, to have 15 in total    
            // what is the action we want from the loop: put api-data into html
            //how do i connect the json content to the loop?

            console.log(secondName[i])

            if(secondName.teamName = c) {
                continue;
            } 

            // her er det en feil , men gir opp, gå hjem og se på fasit
            // LØSNING: BRUK STARTSWITH METHOD!!!

            resultsDiv.innerHTML += `<div> <h2> how to display [i+1] Name of team: ${secondName[i].teamName}</h2> <p>City: ${secondName[i].location} </div>`
            // if += the loading circle is kept, but we want it to disappear when api data har arrived
            //whan i use the += all the "items" in the loop apears, but also the load :( skip this , could make new div, but i cant bother

        }
    }
    catch (error) {
        console.log("OI, FINN MINST EN FEIL")
    }
}
// ahhahaah forgot to call the function again
makeACall();

 */



//yesssss array appeared, wrote all from memory
// error worked as well

// now, expand array to find possible properties
//there are 30 objects
//the objects seem to have 5 properties each

//// now, display 15 objects team name and city, 




/* 



Display the team name and city of the first 15 results, OK
but exclude any team whose name begins with `c`. HOW 


There will be a maximum of 15 results displayed if no teams' names begin with "C", and less than 15 displayed if there are teams whose names begin with "C".
HMMMMM OK 

---

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" target="_blank">The `startsWith` method documentation.</a> */


///////////////////// FASIT

const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";
// HAD THIS ONE

const resultsContainer = document.querySelector(".results");
// HAD THIS ONE

async function fetchTeams() {
    //HAD THIS ONE

    try {
        // HAD THIS ONE

        const response = await fetch(url);
        // HAD THIS ONE

        const json = await response.json();
        //HAD THIS ONE

        console.log(json);
        // HAD THIS ONE, BUT ADDED [i] AFTER A WHILE, BC OVERWHELMING WITH SO MUCH DATA

        const teams = json;
        //WHY

        resultsContainer.innerHTML = "";
        // ALSO WHY, TO MAKE IT REUSABLE? I THINK I PUT THAT IN THE LOOP
        //JO, FORDI DA KAN DU SI DEN ER TOM, OG NÅR div BLIR LAGT TIL ER loading BORTE! (TAR VEKK LOADING)

        for (let i = 0; i < teams.length; i++) {
            //STILL, WHY NOT JUST USE THE VARIABLE NAME FOR JSON, IF THEY ARE THE SAME ANYWAYS

            // we only want to display a maximum of 15 teams
            // there will be less than 15 if any team names begin with "C"
            // use break to leave the loop !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (i === 15) {
                break;
            }
            // WHY NOT JUST SAY THE LOOP ONLY RUNS 15 TIMES????
            // BC IF NOT IT WILL KEEP GOING TO 15, EVEN IF SOME NAMES STARTING W C IS OUT I THINK

            const teamName = teams[i].teamName;
            const city = teams[i].location;
            //WHY NOT WRITE IT DIRECTY INTO THE HTML? TO MAKE IT REUSABLE!!!!!!
            // IF I HAD TIME, I WOULD TRY TO REMOVE TEAMS VARIABLE, AND JUST USE JSON NAME, SO WEIRD

            // we are checking for small "c" and big "C" SMART
            if (teamName.startsWith("c") || teamName.startsWith("C")) {
                continue;
            }
            //THIS METHOD WAS LINKED TO IN THE QUESTION, BUT I DIDNT READ UP ON IT, I GAVE UP, LOLZ


            // instead of checking for both small "c" and big "C" we can make the teamName lowercase and just check for "c"
            // if (teamName.toLowerCase().startsWith("c")) {
            //     continue;
            // } HAHAHHA NO, BUT I UNDERSTAND

            resultsContainer.innerHTML += `<div class="card">
                                            <h4>${teamName}</h4>
                                            <p>${city}</p>
                                        </div>`;
                                        // I KIND OF DID THIS, BUT THIS ONE IS PRETTIER, BC REUSABLE
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }// ALSO PRETTIER BC, MAKING ACTUAL MESSAGE FOR THE USER
}

// call the function
// without this nothing will happen
// I KNOW? STILL HARD TO REMEMBER THO......
fetchTeams();

