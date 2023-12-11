/**
 * Represents the game elements and functions.
 * @typedef {Object} GameElements
 * @property {string} tourActuel - The current player's symbol.
 * @property {HTMLElement} tourEl - The element displaying the current player's symbol.
 * @property {Object} points - The points of each player.
 * @property {HTMLElement} points.cercleEl - The element displaying the points of the circle player.
 * @property {HTMLElement} points.croixEl - The element displaying the points of the cross player.
 * @property {number} points.cercle - The number of points of the circle player.
 * @property {number} points.croix - The number of points of the cross player.
 * @property {Array<Array<string>>} game - The game board.
 * @property {Array<string>} joueurs - The symbols for each player.
 * @property {Array<number>} fullCases - The indices of the fully completed cases.
 * @property {number} numLastClicked - The index of the last clicked case.
 * @property {Object} grCase1 - The first group of cases.
 * @property {HTMLElement} grCase1.el - The element representing the first group of cases.
 * @property {string} grCase1.id - The ID of the first group of cases.
 * @property {Object} grCase1.ptCase - The individual cases within the first group.
 * @property {HTMLElement} grCase1.ptCase.1 - The first case within the first group.
 * @property {HTMLElement} grCase1.ptCase.2 - The second case within the first group.
 * ...
 * @property {Object} grCase9 - The ninth group of cases.
 * @property {HTMLElement} grCase9.el - The element representing the ninth group of cases.
 * @property {string} grCase9.id - The ID of the ninth group of cases.
 * @property {Object} grCase9.ptCase - The individual cases within the ninth group.
 * @property {HTMLElement} grCase9.ptCase.1 - The first case within the ninth group.
 * @property {HTMLElement} grCase9.ptCase.2 - The second case within the ninth group.
 * ...
 */

/**
 * Initializes the game.
 * @function initGame
 */

/**
 * Adds event listeners to all cases.
 * @function callAllCases
 */

/**
 * Adds an event listener to a case.
 * @function addEventListeners
 * @param {HTMLElement} caseEl - The case element.
 */

/**
 * Handles the click event on a case.
 * @function caseClicked
 * @param {HTMLElement} caseEl - The clicked case element.
 */

/**
 * Checks if a half-win condition is met in a big case.
 * @function checkHalfWin
 * @param {string} bigCase - The ID of the big case.
 */

/**
 * Marks a half-win in a big case.
 * @function makeHalfWin
 * @param {string} bigCase - The ID of the big case.
 * @param {number} pt1 - The first point of the half-win.
 * @param {number} pt2 - The second point of the half-win.
 * @param {number} pt3 - The third point of the half-win.
 */

/**
 * Changes the current player's turn.
 * @function changeTour
 * @param {HTMLElement} caseEl - The clicked case element.
 */

/**
 * Fades the inactive cases.
 * @function fadeCases
 */

/**
 * Makes all cases playable.
 * @function makeAllCasePlayable
 */

/**
 * Checks if a win condition is met in a big case.
 * @function checkWin
 * @param {string} bigCase - The ID of the big case.
 */

/**
 * Marks a win in a big case.
 * @function makeWin
 * @param {number} pt1 - The first point of the win.
 * @param {number} pt2 - The second point of the win.
 * @param {number} pt3 - The third point of the win.
 */
const elements = {
  tourActuel: "rond",
  tourEl: document.getElementById("tour"),
  points: {
    cercleEl: document.getElementById("ptcercle"),
    croixEl: document.getElementById("ptcroix"),
    cercle: 0,
    croix: 0,
  },
  game: [["x"], ["x"], ["x"], ["x"], ["x"], ["x"], ["x"], ["x"], ["x"]],
  joueurs: ["❌", "⭕"],
  fullCases: [],
  numLastClicked: 0,
  grCase1: {
    el: document.getElementById("gr1"),
    id: "1",
    ptCase: {
      1: document.getElementById("1pt1"),
      2: document.getElementById("1pt2"),
      3: document.getElementById("1pt3"),
      4: document.getElementById("1pt4"),
      5: document.getElementById("1pt5"),
      6: document.getElementById("1pt6"),
      7: document.getElementById("1pt7"),
      8: document.getElementById("1pt8"),
      9: document.getElementById("1pt9"),
    },
  },
  grCase2: {
    el: document.getElementById("gr2"),
    id: "2",
    ptCase: {
      1: document.getElementById("2pt1"),
      2: document.getElementById("2pt2"),
      3: document.getElementById("2pt3"),
      4: document.getElementById("2pt4"),
      5: document.getElementById("2pt5"),
      6: document.getElementById("2pt6"),
      7: document.getElementById("2pt7"),
      8: document.getElementById("2pt8"),
      9: document.getElementById("2pt9"),
    },
  },
  grCase3: {
    el: document.getElementById("gr3"),
    id: "3",
    ptCase: {
      1: document.getElementById("3pt1"),
      2: document.getElementById("3pt2"),
      3: document.getElementById("3pt3"),
      4: document.getElementById("3pt4"),
      5: document.getElementById("3pt5"),
      6: document.getElementById("3pt6"),
      7: document.getElementById("3pt7"),
      8: document.getElementById("3pt8"),
      9: document.getElementById("3pt9"),
    },
  },
  grCase4: {
    el: document.getElementById("gr4"),
    id: "4",
    ptCase: {
      1: document.getElementById("4pt1"),
      2: document.getElementById("4pt2"),
      3: document.getElementById("4pt3"),
      4: document.getElementById("4pt4"),
      5: document.getElementById("4pt5"),
      6: document.getElementById("4pt6"),
      7: document.getElementById("4pt7"),
      8: document.getElementById("4pt8"),
      9: document.getElementById("4pt9"),
    },
  },
  grCase5: {
    el: document.getElementById("gr5"),
    id: "5",
    ptCase: {
      1: document.getElementById("5pt1"),
      2: document.getElementById("5pt2"),
      3: document.getElementById("5pt3"),
      4: document.getElementById("5pt4"),
      5: document.getElementById("5pt5"),
      6: document.getElementById("5pt6"),
      7: document.getElementById("5pt7"),
      8: document.getElementById("5pt8"),
      9: document.getElementById("5pt9"),
    },
  },
  grCase6: {
    el: document.getElementById("gr6"),
    id: "6",
    ptCase: {
      1: document.getElementById("6pt1"),
      2: document.getElementById("6pt2"),
      3: document.getElementById("6pt3"),
      4: document.getElementById("6pt4"),
      5: document.getElementById("6pt5"),
      6: document.getElementById("6pt6"),
      7: document.getElementById("6pt7"),
      8: document.getElementById("6pt8"),
      9: document.getElementById("6pt9"),
    },
  },
  grCase7: {
    el: document.getElementById("gr7"),
    id: "7",
    ptCase: {
      1: document.getElementById("7pt1"),
      2: document.getElementById("7pt2"),
      3: document.getElementById("7pt3"),
      4: document.getElementById("7pt4"),
      5: document.getElementById("7pt5"),
      6: document.getElementById("7pt6"),
      7: document.getElementById("7pt7"),
      8: document.getElementById("7pt8"),
      9: document.getElementById("7pt9"),
    },
  },
  grCase8: {
    el: document.getElementById("gr8"),
    id: "8",
    ptCase: {
      1: document.getElementById("8pt1"),
      2: document.getElementById("8pt2"),
      3: document.getElementById("8pt3"),
      4: document.getElementById("8pt4"),
      5: document.getElementById("8pt5"),
      6: document.getElementById("8pt6"),
      7: document.getElementById("8pt7"),
      8: document.getElementById("8pt8"),
      9: document.getElementById("8pt9"),
    },
  },
  grCase9: {
    el: document.getElementById("gr9"),
    id: "9",
    ptCase: {
      1: document.getElementById("9pt1"),
      2: document.getElementById("9pt2"),
      3: document.getElementById("9pt3"),
      4: document.getElementById("9pt4"),
      5: document.getElementById("9pt5"),
      6: document.getElementById("9pt6"),
      7: document.getElementById("9pt7"),
      8: document.getElementById("9pt8"),
      9: document.getElementById("9pt9"),
    },
  },
};

const initGame = () => {
  console.log("Game initialized");
  let random = Math.floor(Math.random() * 2);
  elements.tourEl.textContent = elements.joueurs[random];
  elements.points.cercleEl.textContent = "0";
  elements.points.croixEl.textContent = "0";
  elements.tourActuel = elements.joueurs[random];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      let ptCase = elements[`grCase${i}`].ptCase[j];
      ptCase.textContent = "";
    }
  }
  callAllCases();
};

const callAllCases = () => {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      let ptCase = elements[`grCase${i}`].ptCase[j];
      addEventListeners(ptCase);
    }
  }
};

const addEventListeners = (caseEl) => {
  caseEl.addEventListener("click", () => {
    console.log("Case " + caseEl.id + " clicked");
    caseClicked(caseEl);
  });
};

const caseClicked = (caseEl) => {
  let ptCase = caseEl.textContent;
  if (ptCase === "") {
    if (elements.numLastClicked != 0) {
      if (caseEl.id[0] == elements.numLastClicked) {
        caseEl.textContent = elements.tourActuel;
        changeTour(caseEl);
        checkHalfWin(caseEl.id[0]);
      }
    } else {
      caseEl.textContent = elements.tourActuel;
      changeTour(caseEl);
      checkHalfWin(caseEl.id[0]);
    }
  }
};
const checkHalfWin = (bigCase) => {
  let ptCase = elements[`grCase${bigCase}`].ptCase;
  let tour = elements.tourActuel;
  let win = false;
  if (
    ptCase[1].textContent == ptCase[2].textContent &&
    ptCase[2].textContent == ptCase[3].textContent &&
    ptCase[1].textContent != ""
  ) {
    makeHalfWin(bigCase, 1, 2, 3);
  } else if (
    ptCase[4].textContent == ptCase[5].textContent &&
    ptCase[5].textContent == ptCase[6].textContent &&
    ptCase[4].textContent != ""
  ) {
    makeHalfWin(bigCase, 4, 5, 6);
  } else if (
    ptCase[7].textContent == ptCase[8].textContent &&
    ptCase[8].textContent == ptCase[9].textContent &&
    ptCase[7].textContent != ""
  ) {
    makeHalfWin(bigCase, 7, 8, 9);
  } else if (
    ptCase[1].textContent == ptCase[4].textContent &&
    ptCase[4].textContent == ptCase[7].textContent &&
    ptCase[1].textContent != ""
  ) {
    makeHalfWin(bigCase, 1, 4, 7);
  } else if (
    ptCase[2].textContent == ptCase[5].textContent &&
    ptCase[5].textContent == ptCase[8].textContent &&
    ptCase[2].textContent != ""
  ) {
    makeHalfWin(bigCase, 2, 5, 8);
  } else if (
    ptCase[3].textContent == ptCase[6].textContent &&
    ptCase[6].textContent == ptCase[9].textContent &&
    ptCase[3].textContent != ""
  ) {
    makeHalfWin(bigCase, 3, 6, 9);
  } else if (
    ptCase[1].textContent == ptCase[5].textContent &&
    ptCase[5].textContent == ptCase[9].textContent &&
    ptCase[1].textContent != ""
  ) {
    makeHalfWin(bigCase, 1, 5, 9);
  } else if (
    ptCase[3].textContent == ptCase[5].textContent &&
    ptCase[5].textContent == ptCase[7].textContent &&
    ptCase[3].textContent != ""
  ) {
    makeHalfWin(bigCase, 3, 5, 7);
  } else if (
    ptCase[1].textContent != "" &&
    ptCase[2].textContent != "" &&
    ptCase[3].textContent != "" &&
    ptCase[4].textContent != "" &&
    ptCase[5].textContent != "" &&
    ptCase[6].textContent != "" &&
    ptCase[7].textContent != "" &&
    ptCase[8].textContent != "" &&
    ptCase[9].textContent != ""
  ) {
    elements.fullCases.push(parseInt(bigCase));
    makeAllCasePlayable();
    checkWin(bigCase);
  }
};
const makeHalfWin = (bigCase, pt1, pt2, pt3) => {
  elements.game[bigCase - 1] =
    elements[`grCase${bigCase}`].ptCase[pt1].textContent;
  elements[`grCase${bigCase}`].el.innerHTML =
    elements[`grCase${bigCase}`].ptCase[pt1].textContent;
  elements[`grCase${bigCase}`].el.classList.add("bigText");
  elements[`grCase${bigCase}`].el.classList.remove("active");
  console.log("Big Case id : ", bigCase);

  elements.fullCases.push(parseInt(bigCase));
  makeAllCasePlayable();
  checkWin(bigCase);
};

const changeTour = (caseEl) => {
  let id = caseEl.id[3];
  elements.numLastClicked = id;

  elements.tourActuel = elements.tourActuel === "❌" ? "⭕" : "❌";
  elements.tourEl.textContent = elements.tourActuel;
  if (elements.fullCases.includes(parseInt(elements.numLastClicked))) {
    makeAllCasePlayable();
  } else {
    fadeCases();
  }
};

const fadeCases = () => {
  for (let i = 1; i <= 9; i++) {
    if (i != elements.numLastClicked || elements.fullCases.includes(i)) {
      elements[`grCase${i}`].el.classList.remove("active");

      elements[`grCase${i}`].el.classList.add("fade");
    } else {
      elements[`grCase${i}`].el.classList.remove("fade");
      elements[`grCase${i}`].el.classList.add("active");
    }
  }
};

const makeAllCasePlayable = () => {
  for (let i = 1; i <= 9; i++) {
    elements[`grCase${i}`].el.classList.remove("fade");
    elements[`grCase${i}`].el.classList.remove("active");
  }
  elements.numLastClicked = 0;
};

const checkWin = (bigCase) => {
  if (
    elements.game[0] == elements.game[1] &&
    elements.game[1] == elements.game[2] &&
    elements.game[0] != ""
  ) {
    makeWin(1, 2, 3);
  }
  if (
    elements.game[3] == elements.game[4] &&
    elements.game[4] == elements.game[5] &&
    elements.game[3] != ""
  ) {
    makeWin(4, 5, 6);
  }
  if (
    elements.game[6] == elements.game[7] &&
    elements.game[7] == elements.game[8] &&
    elements.game[6] != ""
  ) {
    makeWin(7, 8, 9);
  }
  if (
    elements.game[0] == elements.game[3] &&
    elements.game[3] == elements.game[6] &&
    elements.game[0] != ""
  ) {
    makeWin(1, 4, 7);
  }
  if (
    elements.game[1] == elements.game[4] &&
    elements.game[4] == elements.game[7] &&
    elements.game[1] != ""
  ) {
    makeWin(2, 5, 8);
  }
  if (
    elements.game[2] == elements.game[5] &&
    elements.game[5] == elements.game[8] &&
    elements.game[2] != ""
  ) {
    makeWin(3, 6, 9);
  }

  if (
    elements.game[0] == elements.game[4] &&
    elements.game[4] == elements.game[8] &&
    elements.game[0] != ""
  ) {
    makeWin(1, 5, 9);
  }
  if (
    elements.game[2] == elements.game[4] &&
    elements.game[4] == elements.game[6] &&
    elements.game[2] != ""
  ) {
    makeWin(3, 5, 7);
  }
  // if all the cases are full and no one won
  if (elements.fullCases.length == 9) {
    //   make a popup with the winner
    let popup = document.createElement("div");
    popup.classList.add("popup");
    let popupContent = document.createElement("div");
    popupContent.classList.add("popupContent");
    let popupText = document.createElement("p");
    popupText.classList.add("popupText");
    popupText.textContent = "Match nul !";
    let popupText2 = document.createElement("p");
    popupText2.classList.add("popupText");
    popupText2.textContent =
      "Les cercles ont : " + elements.points.cercle + " points !";
    let popupText3 = document.createElement("p");
    popupText3.classList.add("popupText");
    popupText3.textContent =
      "Les croix ont : " + elements.points.croix + " points !";
    document.body.appendChild(popup);
    popup.appendChild(popupContent);
    popupContent.appendChild(popupText);
    popupContent.appendChild(popupText2);
    popupContent.appendChild(popupText3);
    setTimeout(() => {
      console.log(popup);
      popup.style.display = "none";
    }, 3000);
    elements.numLastClicked = 0;
    elements.tourActuel = elements.game[pt1 - 1];
    elements.tourEl.textContent = elements.tourActuel;
    for (let i = 1; i <= 9; i++) {
      elements[`grCase${i}`].el.classList.remove("active");
      elements[`grCase${i}`].el.classList.remove("fade");
      elements[`grCase${i}`].el.classList.remove("bigText");
      elements[`grCase${i}`].el.innerHTML = "";
      //   <div class="grCase" id="gr1">
      //     <div class="ptCase" id="1pt1"></div>
      //     <div class="ptCase" id="1pt2"></div>
      //     <div class="ptCase" id="1pt3"></div>
      //     <div class="ptCase" id="1pt4"></div>
      //     <div class="ptCase" id="1pt5"></div>
      //     <div class="ptCase" id="1pt6"></div>
      //     <div class="ptCase" id="1pt7"></div>
      for (let j = 1; j <= 9; j++) {
        let div = document.createElement("div");
        div.classList.add("ptCase");
        div.id = `${i}pt${j}`;
        elements[`grCase${i}`].el.appendChild(div);
        elements[`grCase${i}`].ptCase[j] = div;
      }
      callAllCases();
    }
    elements.fullCases = [];
    elements.game = [
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
    ];
    elements.numLastClicked = 0;
    makeAllCasePlayable();
  }
};

const makeWin = (pt1, pt2, pt3) => {
  let popup;
  if (elements.game[pt1 - 1] == "❌") {
    elements.points.croix++;
    elements.points.croixEl.textContent = elements.points.croix;
    elements.game[pt1 - 1] = "❌";
    elements.game[pt2 - 1] = "❌";
    elements.game[pt3 - 1] = "❌";
    let popup = document.createElement("div");
    popup.classList.add("popup");

    let popupContent = document.createElement("div");
    popupContent.classList.add("popupContent");

    let popupText = document.createElement("p");
    popupText.classList.add("popupText");
    popupText.textContent = "Les croix ont gagné !";

    let popupText2 = document.createElement("p");
    popupText2.classList.add("popupText");
    popupText2.textContent =
      "Les croix ont : " + elements.points.croix + " points !";

    let popupText3 = document.createElement("p");
    popupText3.classList.add("popupText");
    popupText3.textContent =
      "Les cercles ont : " + elements.points.cercle + " points !";

    document.body.appendChild(popup);
    popup.appendChild(popupContent);
    popupContent.appendChild(popupText);
    popupContent.appendChild(popupText2);
    popupContent.appendChild(popupText3);

    setTimeout(() => {
      console.log(popup);
      popup.style.display = "none";
    }, 3000);
  } else {
    elements.points.cercle++;
    elements.points.cercleEl.textContent = elements.points.cercle;
    elements.game[pt1 - 1] = "⭕";
    elements.game[pt2 - 1] = "⭕";
    elements.game[pt3 - 1] = "⭕";

    let popup = document.createElement("div");
    popup.classList.add("popup");

    let popupContent = document.createElement("div");
    popupContent.classList.add("popupContent");

    let popupText = document.createElement("p");
    popupText.classList.add("popupText");
    popupText.textContent = "Les cercles ont gagné !";

    let popupText2 = document.createElement("p");
    popupText2.classList.add("popupText");
    popupText2.textContent =
      "Les cercles ont : " + elements.points.cercle + " points !";

    let popupText3 = document.createElement("p");
    popupText3.classList.add("popupText");
    popupText3.textContent =
      "Les croix ont : " + elements.points.croix + " points !";

    document.body.appendChild(popup);
    popup.appendChild(popupContent);
    popupContent.appendChild(popupText);
    popupContent.appendChild(popupText2);
    popupContent.appendChild(popupText3);

    setTimeout(() => {
      console.log(popup);
      popup.style.display = "none";
    }, 3000);
  }
  elements.numLastClicked = 0;
  elements.tourActuel = elements.game[pt1 - 1];
  elements.tourEl.textContent = elements.tourActuel;
  for (let i = 1; i <= 9; i++) {
    elements[`grCase${i}`].el.classList.remove("active");
    elements[`grCase${i}`].el.classList.remove("fade");
    elements[`grCase${i}`].el.classList.remove("bigText");
    elements[`grCase${i}`].el.innerHTML = "";
    //   <div class="grCase" id="gr1">
    //     <div class="ptCase" id="1pt1"></div>
    //     <div class="ptCase" id="1pt2"></div>
    //     <div class="ptCase" id="1pt3"></div>
    //     <div class="ptCase" id="1pt4"></div>
    //     <div class="ptCase" id="1pt5"></div>
    //     <div class="ptCase" id="1pt6"></div>
    //     <div class="ptCase" id="1pt7"></div>
    //     <div class="ptCase" id="1pt8"></div>
    //     <div class="ptCase" id="1pt9"></div>
    //   </div>;
    for (let j = 1; j <= 9; j++) {
      let div = document.createElement("div");
      div.classList.add("ptCase");
      div.id = `${i}pt${j}`;
      elements[`grCase${i}`].el.appendChild(div);
      elements[`grCase${i}`].ptCase[j] = div;
    }
    callAllCases();
    elements.fullCases = [];
    elements.game = [
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
      ["x"],
    ];
    elements.numLastClicked = 0;
  }
  makeAllCasePlayable();
  // Close the popup after 3 seconds
};
initGame();
