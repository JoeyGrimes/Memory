/*----- constants -----*/
//Set an array of 20 objects, 10 of them are identical 


const board = [ 
   {img: "imgur1", matched: false},
   {img: 'imgur1', matched: false}, 
   {img: 'imgur2', matched: false}, 
   {img: 'imgur2', matched: false}, 
   {img: 'imgur3', matched: false}, 
   {img: 'imgur3', matched: false}, 
   {img: 'imgur4', matched: false},
   {img: 'imgur4', matched: false},
   {img: 'imgur5', matched: false},
   {img: 'imgur5', matched: false},
   {img: 'imgur6', matched: false}, 
   {img: 'imgur6', matched: false}, 
   {img: 'imgur7', matched: false}, 
   {img: 'imgur7', matched: false}, 
   {img: 'imgur8', matched: false},
   {img: 'imgur8', matched: false},
   {img: 'imgur9', matched: false},
   {img: 'imgur9', matched: false},
   {img: 'imgurl0', matched: false},
   {img: 'imgurl0', matched: false}
   
];






/*----- app's state (variables) -----*/
let gameStatus;
let win;




/*----- cached element references -----*/
//divs need to be able to be interacted with via EventListener,




/*----- event listeners -----*/




/*----- functions -----*/

initalize();

function initalize() {
    for (let i=0;i<board.length; i++) {
        const r1 = Math.floor(Math.random() * board.length);
        const r2 = Math.floor(Math.random() * board.length);
        const temp = board[r1];
        board[r1] = board[r2];   
        board[r2] = temp;
    }

   

   
}





    


//
