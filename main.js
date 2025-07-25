let computerNum = 0; 
let userInput = document.getElementById('user-input');
let playButton = document.getElementById('play-button');
let resetButton = document.getElementById('reset-button');
let userValue = '';
let chances = 3;
let history = [];
let chanceArea = document.getElementById('chance-area');
let resultArea = document.getElementById('result-area');
let imgArea = document.getElementById('img-area');

playButton.addEventListener('click', play);
userInput.addEventListener('keypress', enterKey);
userInput.addEventListener('focus', focusInput);
resetButton.addEventListener('click', reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 10) + 1;
  console.log('정답:', computerNum);
}

function play() {
  userValue = userInput.value;

  if (userValue < 1 || userValue > 10) {
    imgArea.src = 'images/same.gif';
    resultArea.textContent = '1~10 사이의 숫자를 입력해주세요!';
    return;
  }

  if (history.includes(userValue)) {
    imgArea.src = 'images/cheer.gif';
    resultArea.textContent = '기존에 입력했던 숫자입니다!🤣';
    return;
  }

  chances--;
  chanceArea.textContent = `⭐️남은기회: ${chances}번⭐️`;

  if (computerNum > userValue) {
    imgArea.src = 'images/up.gif';
    resultArea.textContent = 'Up⬆️';
  } else if (computerNum < userValue) {
    imgArea.src = 'images/down.gif';
    resultArea.textContent = 'Down⬇️';
  } else {
    imgArea.src = 'images/good.gif';
    resultArea.textContent = '정답🎉🎉';
  }

  history.push(userValue);

  if (chances < 1) {
    playButton.disabled = true;
    imgArea.src = 'images/sad.gif';
    resultArea.textContent = '다시 도전해보세요~🤭';
  }
}

function reset() {
  playButton.disabled = false;
  focusInput()
  pickRandomNum(); 
  chances = 3;
  chanceArea.textContent = `⭐️남은기회: ${chances}번⭐️`;
  imgArea.src = 'images/check.gif';
  resultArea.textContent = '결과창';
}

function focusInput() {
  userInput.value = '';
}

function enterKey(e) {
  if (e.key === 'Enter') {
    play();
  }
}

pickRandomNum();