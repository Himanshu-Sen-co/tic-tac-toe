// console.log('i am working');

// let sumFunction = async (a,b) =>{
// return new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve(a + b);
//     }, 100);
// });
// }
// let sumArray = async (arr) => {
//     let sum = 0;
//     arr.forEach(async Number => {
//         sum = await sumFunction(sum, Number);
//     });
//     return  sum;
// }
// let arr = [2,3,2,1];
// console.log(sumArray(arr));

let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let winner = document.querySelector(".winner");

let turno = true;
let count = 0;
let winChance = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log('it was clicked');
    count++;
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let checkWinner = () => {
  for (let pattern of winChance) {
    //     console.log(pattern[0], pattern[1], pattern[2]);
    //  console.log(
    //      boxes[pattern[0]].innerText,
    //      boxes[pattern[1]].innerText,
    //      boxes[pattern[2]].innerText
    //     );
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winner.innerText = `WINNER IS ${pos1Val}`;
        disable();
      }
    }
  }
  if (count === 9 && winner.innerText === "") {
    winner.innerText = "Its a draw, Play Again!";
    // resetGame();
  }
};
let resetGame = () => {
  turno = true;
  count = 0;
  enable();
};
let disable = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
let enable = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  winner.innerText = "";
};
