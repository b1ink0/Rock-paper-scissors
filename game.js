const game = ()=> {

    let pScore = 0; 
    let cScore = 0;


    const start = ()=> {
        const play_btn = document.querySelector(".play-btn");
        play_btn.addEventListener("click", function (){
            const page1 = document.querySelector(".page1");
            const page2 = document.querySelector(".page2")
            page1.classList.add("fadeOut");
            page2.classList.add("fadeIn");
        });
    };



    // match
    const playMatch = ()=>{
    const option = document.querySelectorAll(".playerOption button");
    const playerHand = document.querySelector(".playerHand");    
    const computerHand = document.querySelector(".computerHand");
    const hand = document.querySelectorAll(".hand img")
    
    hand.forEach(hand => {
        hand.addEventListener("animationend", function (){
            this.style.animation = "";
        });
    });

    const computerOption = ["rock", "paper", "scissors"];
    option.forEach(option => {
        option.addEventListener("click", function(){
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOption[computerNumber];
            //update img
            
            setTimeout(()=>{
                playerHand.src = `assets/${this.textContent}.png`;
                computerHand.src = `assets/${computerChoice}.png`;
                compare(this.textContent, computerChoice);
            }, 2000);


            

            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
    // score

    const updateScore = ()=>{
        const playerScore = document.querySelector(".pScore");
        const computerScore = document.querySelector(".cScore");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    // compare

    const compare =  (playerChoice, computerChoice) =>{
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice){
            winner.textContent = "It's a tie !";
            return;
        };

        //rock
        if (playerChoice === "rock"){
            if (computerChoice === "scissors"){
                winner.textContent = "Player Wins !";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins !";
                cScore++;
                updateScore();
                return;
            } 
        };

        //paper
        if (playerChoice === "paper"){
            if (computerChoice === "rock"){
                winner.textContent = "Player Wins !";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins !";
                cScore++;
                updateScore();
                return;
            }
        }

        //scissors
        if (playerChoice === "scissors"){
            if (computerChoice === "paper"){
                winner.textContent = "Player Wins !";
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Computer Wins !";
                cScore++;
                updateScore();
                return;
            }
        }
    };
playMatch();
start();
};
game();




