const gameBox = document.querySelector('.game_box');
const numberBox = document.querySelector('.number_box');
const answer = document.querySelector('.answer');
const scoreBox = document.querySelector('.score');
const button = document.querySelector('.button');
const winMessage = document.querySelector('.win_message');
const loseMessage = document.querySelector('.lose_message');

let gameInfo = {
  num1: Math.ceil(Math.random() * 9),
  num2: Math.ceil(Math.random() * 9),
  response: '',
  score: 0,
};

numberBox.innerHTML = `${gameInfo['num1']} + ${gameInfo['num2']}`;
scoreBox.innerHTML = gameInfo['score'];

function updateResponse() {
  gameInfo = {
    ...gameInfo,
    response: answer.value,
  };

  const userAnswer = parseInt(gameInfo['response']);

  if (gameInfo['num1'] + gameInfo['num2'] === userAnswer) {
    gameInfo = {
      ...gameInfo,
      num1: Math.ceil(Math.random() * 9),
      num2: Math.ceil(Math.random() * 9),
      response: '',
      score: gameInfo['score'] + 1,
    };

    answer.value = '';
    numberBox.classList.remove('incorrect');
    numberBox.innerHTML = `${gameInfo['num1']} + ${gameInfo['num2']}`;
    scoreBox.innerHTML = gameInfo['score'];
  } else {
    gameInfo = {
      ...gameInfo,
      response: '',
      score: gameInfo['score'] - 1,
    };

    answer.value = '';
    numberBox.classList.add('incorrect');
    numberBox.innerHTML = `${gameInfo['num1']} + ${gameInfo['num2']}`;
    scoreBox.innerHTML = gameInfo['score'];
  }

  if (gameInfo['score'] === 10) {
    gameBox.classList.add('inactive');
    winMessage.classList.remove('inactive');
    button.classList.remove('inactive');
  } else if (gameInfo['score'] < 0) {
    gameBox.classList.add('inactive');
    loseMessage.classList.remove('inactive');
    button.classList.remove('inactive');
  }

  button.addEventListener('click', () => {
    location.reload();
  });
}

answer.addEventListener('change', updateResponse);
