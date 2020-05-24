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
  const cardsWonArray = [];
  let chosenCardArray = [];
  let chosenCardKeyArray = [];
  let flips = 0;

  cardArray.sort;

  function createBoard() {
    cardArray.sort(() => 0.5 - Math.random());
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/light.png");
      card.setAttribute("key", i);
      card.setAttribute("class", "card");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    if (this.getAttribute("src") != "images/dark.png") {
      // flips card if it's not a dark card

      let key = this.getAttribute("key");
      this.setAttribute("src", cardArray[key].image);
      chosenCardArray.push(cardArray[key].name);
      // keeps track of chosen card name for match comparison

      chosenCardKeyArray.push(this.getAttribute("key"));
      // keeps track of card key for flipping cards to light or dark.png

      if (chosenCardArray.length === 2) {
        setTimeout(checkMatch, 500);
        // gives a little delay before actually running checkMatch
      }

      flips++;
      document.getElementById("steps").textContent = flips;
    }
  }

  function checkMatch() {
    const cards = document.querySelectorAll("img");
    // stores an instance of all the cards in this function
    if (chosenCardArray[0] === chosenCardArray[1]) {
      cardsWonArray.push(chosenCardArray[0]);
      // keeps track on which cards are matched for score tabulation
      cards[chosenCardKeyArray[0]].setAttribute("src", "images/dark.png");
      cards[chosenCardKeyArray[1]].setAttribute("src", "images/dark.png");
      // changes cards to dark
    } else {
      cards[chosenCardKeyArray[0]].setAttribute("src", "images/light.png");
      cards[chosenCardKeyArray[1]].setAttribute("src", "images/light.png");
      // changes cards to light
    }
    chosenCardArray = [];
    chosenCardKeyArray = [];
    // resets utility cards arrays
    document.getElementById("result").textContent = cardsWonArray.length;
    // upcates score

    if (cardsWonArray.length === cardArray.length / 2) {
      let congrats = document.getElementById("congrats");
      congrats.textContent = "Congratulations! You've found them all!";
    }
  }

  createBoard();
});
