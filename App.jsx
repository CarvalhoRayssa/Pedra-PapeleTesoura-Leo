import React ,{useState, useEffect} from "react";
import './App.css';

  const Game = () => {
    const[userChoice, setUserChoice] = useState(null);
    const[computerChoice, setComputerChoice] = useState(null);
    const[result, setResult] = useState(null);
  
  const[wins, setWins] = useState(0);
  const[losses, setLosses] = useState(0);

  const choices = ['pedra', 'papel', 'tesoura'];

  const playGame = (userChoice) => {
    const computerChoice = choices[Math.floor(Math.random()*3)];

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);

    if(userChoice === computerChoice) { setResult('Empate!😐')}
    else if (
      (userChoice === 'pedra' && computerChoice === 'tesoura') ||
      (userChoice === 'papel' && computerChoice === 'pedra') ||
      (userChoice === 'tesoura' && computerChoice === 'papel')
    ){
    setResult('Você Ganhou!🤩');
    setWins(wins +1);
    } else {
     setResult('Você Perdeu!😯');
     setLosses(losses +1);
    }
  };
  return (
    <div className="game-container">

      <h2>Escolha uma opção: </h2>
      <div className="choice-buttons">

        <button onClick={() => playGame('pedra')}>
          <img src={ require('./img/pedra.png') } alt="Pedra"
          className="choice-image" />
        </button>

        <button onClick={() => playGame('papel')}>
          <img src={ require('./img/papel.png') } alt="Papel"
          className="choice-image" />
        </button>

        <button onClick={() => playGame('tesoura')}>
          <img src={ require('./img/tesoura.png') } alt="Tesoura"
          className="choice-image" />
        </button>

      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <h3>Sua escolha:</h3>
    <img src={require(`./img/${userChoice}.png`)}
          alt={userChoice} className="choice-image" />

<h3>Escolha do computador:</h3>
    <img src={require(`./img/${computerChoice}.png`)}
          alt={computerChoice} className="choice-image" />

          <h3>{result}</h3>
          <p>Vitórias: {wins}</p>
          <p>Derrotas: {losses}</p>
    </div>
  )}
  </div>
  );
      };
      export default Game;
