
 let suits = ["hearts", "clubs","diamond","spade"];
  let numbers = ['2','3','4','5','6','7','8','9','10','11','12','13','14'];
  let deck = []

      function freshDeck(){
       for(let i=0; i<suits.length; i++){
                for(let j=0; j<numbers.length;j++){ 
                  deck.push(numbers[j] + suits[i])
                }
            }
        }

        freshDeck();
console.log(deck)
    let shuffle = () => {
        let j,x,i
        for(i= deck.length - 1; i > 0; i--) {
             j = Math.floor( Math.random() * i)
            x = deck[i]
            deck[i] = deck[j]
            deck[j] = x;
        }
        return deck
    }


    console.log (shuffle())


let Hand=()=>{
    let hand = []
    return deck.pop()
}

let incrementScore =()=>{
    let score = 0
score += 1 ;

    return score}

let mainDeck = () => {

    // let playerOneScore = 0
    // let playerTwoScore =0
    //let totalScore = 0

   let player1=  shuffle().slice(0,26);

   let player2=  shuffle().slice(26,(deck.length));
 
let playerOneHand = Hand(shuffle().slice(0,26))
let playerTwoHand = Hand(shuffle().slice(26,(deck.length)))
   console.log(player1)
    console.log(player2)

    console.log(playerOneHand)
    console.log(playerTwoHand)

     x = parseInt(playerOneHand)
     y = parseInt(playerTwoHand)
    
    console.log(parseInt(playerOneHand));
    
    console.log(parseInt(playerTwoHand));


for(i=0; i<playerOneHand.length && playerTwoHand.length; i++){
    if(x == y){
        console.log(`Neither player gets a point, score is ${incrementScore()}`)

    }else if (x > y){
 incrementScore()
    

        console.log(`Player One gets a point, score is ${incrementScore()}`)

    }else{

    incrementScore

        console.log(`Player Two gets a point, score is ${incrementScore()}`)

    }
    // //}
    // console.log(playerOneScore)
    // console.log(playerTwoScore)
}
}
mainDeck();
