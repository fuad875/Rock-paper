let userScore = 0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() =>{

    const options =["rock","paper","scissors"]
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
    // rock ,paper,scissors

};

const drawGame =() =>{
    // console.log("draw game");
    msg.innerText ="Game draw";
}

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win");
        msg.innerText =`you win!! your ${userChoice} beats ${compChoice}`;
    
    }else{
        compScore++;
        compScorePara.innerText =compScore;
        // console.log("you lose");
        msg.innerText ="you lose";
    }
};

const playGame = (userChoice) => {
     console.log("user Choice =",userChoice);
     const compChoice = genCompChoice();
     console.log("comp Choice =",compChoice);

     if(userChoice === compChoice){
        // Draw game
        drawGame();
     }else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false:true;
        }else{
            userWin =compChoice === "rock"? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
     }

};


choices.forEach((choice) => {
    // console.log(choice); 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Clicked",choiceId);
          playGame(userChoice);
    });
});