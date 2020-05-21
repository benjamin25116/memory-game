document.addEventListener("DOMContentLoaded", () => {
  // card options

  const cardArray = [
    {
      name: "1",
      image: "images/1.png",
    },
    {
      name: "1",
      image: "images/1.png",
    },
    {
      name: "2",
      image: "images/2.png",
    },
    {
      name: "2",
      image: "images/2.png",
    },
    {
      name: "3",
      image: "images/3.png",
    },
    {
      name: "3",
      image: "images/3.png",
    },
    {
      name: "4",
      image: "images/4.png",
    },
    {
      name: "4",
      image: "images/4.png",
    },
    {
      name: "5",
      image: "images/5.png",
    },
    {
      name: "5",
      image: "images/5.png",
    },
    {
      name: "6",
      image: "images/6.png",
    },
    {
      name: "6",
      image: "images/6.png",
    },
    {
      name: "7",
      image: "images/7.png",
    },
    {
      name: "7",
      image: "images/7.png",
    },
    {
      name: "8",
      image: "images/8.png",
    },
    {
      name: "8",
      image: "images/8.png",
    },
  ];

  const grid = document.querySelector(".grid");
  const chosenCardArray = [];
  const cardsWon = [];

  // create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/light.png");
      card.setAttribute("key", i);
      card.setAttribute("class", "card");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // flipcard
  /*
  When clicked, get id of card clicked. This is to keep track of which cards were matched (when they are matched).
  Use card id to get card from cardArray.
  Display card image to card in cardArray.
  Push card to chosenCardArray
  if chosenCardArray.length>1, checkMatch()
  

  */
  function flipCard() {
    let cardKey = this.getAttribute("key");
    this.setAttribute("src", cardArray[cardKey].image);
    chosenCardArray.push(cardArray[cardKey]);
  }

  // check match
  /*
  if chosenCardArray.length === 2, check if the name of both cards are the same.
  If yes, it's a match. so add one of the cards to cardsWon (this will be the score tally). 
  reset chosenCardArray to zero
  
  */
  function checkMatch() {}

  createBoard();
});
