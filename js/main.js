/*----- constants -----*/
//Need to have an array of 1-20 with 10 possible matches
//Better to have one long array rather than 10 two number arrays. 
//Need to figure out how I can group. Whether by ID or color & textContent
array = ['']
confirmedMatches = ['']




/*----- app's state (variables) -----*/
//need to randomly sort array and floor off the decimals
//gamestatus should be set to inplay, or win
gameStatus = null;
guessedCards = ['']



/*----- cached element references -----*/
//I could assign each individual Div 1-20 a unique ID but it is better
//to simply ID assign the underlying section/grid
//need to find the guard  



/*----- event listeners -----*/
document.querySelector('section')
.addEventListener('click' handleCardClick);




/*----- functions -----*/
//To start the game
initalize() {
let cards


}
//need to render out all previously defined IDs and Imgs
render()


function handleCardClick(evt)
const card = document.querySelector('section>div')
if (evt.target1 && evt.target2 !== card);
return null;
else if (evt.target1 === evt.target2);
    card.push(evt)(confirmedMatches);
    else return null; 


    


//When I get a correct guess I need to .push the pair out of the matches
//array into a new array