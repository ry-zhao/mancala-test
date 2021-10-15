const $pits = document.querySelectorAll('.pit');
const $counter = document.querySelector('.counter');

addSeed();
addSeed();
addSeed();
addSeed();

function addSeed() {
  for (let i = 0; i < $pits.length; i++) {
    const $pit = $pits[i];
    const $seed = document.createElement('div');
    $seed.className = 'seed'
    $seed.style.position = 'absolute';
    $seed.style.left = `${getRandomNumber(0, 2)}rem`;
    $seed.style.top = `${getRandomNumber(0, 2)}rem`;
    $seed.style.background = `linear-gradient(${getRandomNumber(0, 360)}deg, #${getRandomColor()}, #${getRandomColor()})`;
    console.log($seed.style.background);
    $pit.append($seed);
    $counter.textContent = $pit.children.length - 1;
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function getRandomColor() {
  let rc = (Math.floor(Math.random() * 16777215)).toString(16);
  while (rc.length !== 6) {
    rc = 0 + rc;
  }
  return rc;
}
