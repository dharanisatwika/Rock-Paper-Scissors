const game = () => {
    let pScore = 0;
    let cScore = 0;
    let attempt=0;
    const playagainbtn = document.querySelector(".btn-play-again");
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");

      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          attempt++;
          const para = document.querySelector(".p");
            para.textContent="You still have "+ (5-attempt)+ " attempts";
            
        if(attempt===5){
          const op = document.querySelector(".options");
          op.classList.add("fadeOut");
            playagainbtn.classList.add("fadeIn");
            para.classList.add("fadeOut");
            let myAudio2 = document.querySelector('#gameover');
            myAudio2.play();
          playagainbtn.addEventListener("click",()=>{
            op.classList.add("fadeIn");
            playagainbtn.classList.add("fadeOut");
            para.classList.add("fadeIn");
            attempt=0;
            para.textContent="You still have "+ (5-attempt)+ " attempts";
          });
        }
          
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 1000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
    const soundbtn = document.querySelector('.options');
    let myAudio = document.querySelector('#audio');
    soundbtn.addEventListener('click',() =>{
        myAudio.play(); 
    });

    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "You Won!!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You Lost!!";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "You Lost!!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You Won!!";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "You Lost!!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You Won!!";
          pScore++;
          updateScore();
          return;
        }
      }
    };
    playagainbtn.addEventListener("click",() =>{
        pScore=0;
        cScore=0;
        updateScore();
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;
        const winner = document.querySelector(".winner");
        winner.textContent = "Choose an Option";
        const last=document.querySelector(".last");
        last.classList.addEventListener("fadeOut");
        const match = document.querySelector(".match"); 
        match.classList.add("fadeIn");
        playagainbtn.classList.remove("fadeIn");
        });
    
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();