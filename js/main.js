/*----- constants -----*/
//Need to have an array of 1-20 with 10 possible matches
//Better to have one long array rather than 10 two number arrays. 
//Need to figure out how I can group. Whether by ID or color & textContent
const board = [ 
   {img: "https://st2.depositphotos.com/1803332/9245/v/950/depositphotos_92457980-stock-illustration-playing-cards-back.jpg"
   {img: "https://st2.depositphotos.com/1803332/9245/v/950/depositphotos_92457980-stock-illustration-playing-cards-back.jpg"
   , matched: false}, 
   {img: 'imgurl2', matched: false}, 
   {img: 'imgurl2', matched: false}, 
   
];



/*----- app's state (variables) -----*/
//need to randomly sort array and floor off the decimals
//gamestatus should be set to inplay, or win
let gameStatus;




/*----- cached element references -----*/
//I could assign each individual Div 1-20 a unique ID but it is better
//to simply ID assign the underlying section/grid
//need to find the guard  



/*----- event listeners -----*/
// document.querySelector('section')
// .addEventListener('click' , handleCardClick);





/*----- functions -----*/
initalize();

function initalize() {
    for (let i=0;i>200; i++) {
        const r1 = Math.floor(Math.random() * board.length);
        const r2 = Math.floor(Math.random() * board.length);
        const temp = board[r1];
        board[r1] = board[r2];   
        board[r2] = temp;
    }

   

    render()
}



// function handleCardClick(evt) 
// const card = document.querySelector('section>div')
// if (evt.target1 && evt.target2 !== card);
// return null;
// else if (evt.target1 === evt.target2);
//     card.push(evt)(confirmedMatches);
//     else return null; 


    


//When I get a correct guess I need to .push the pair out of the matches
//array into a new array