

let boxes = document.querySelectorAll(".box");

let playerX = true;

let winning = [[0, 1, 2],
               [3, 4, 5],
               [6, 7, 8],
               [0, 3, 6],
               [1, 4, 7],
               [2, 5, 8],
               [0, 4, 8],
               [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(playerX){
            box.innerText = "X";
            playerX = false;
        }
        else {
            box.innerText = "O";
            playerX = true;
        }
        box.disabled = true;
        winner();
    })
});

const winner = () => {
    for(let pattern of winning){
        // console.log(pattern[0], pattern[1], pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val === pos2Val && pos2Val === pos3Val){
            if (pos1Val !== "") {
                boxes.forEach((box) => {
                    box.disabled = true;
                })
                document.querySelector("#message").innerText = `Player ${pos1Val} Won!!`;
            }
        }
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[0]].innerText);
    }
};

const reset = () => {
    playerX = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
    document.querySelector("#message").innerText = "";
};