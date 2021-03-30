const cups = document.querySelectorAll('.cup-small');
const literText = document.querySelector('#liters');
const remained = document.querySelector('#remained');
const percentage = document.querySelector('#percentage');
const percentText = document.querySelector('#percentText');
console.log(percentText);

cups.forEach((cup, idx) => {
  cup.addEventListener('click', (a) => {
    fillCups(idx);
  });
});

function fillCups(idx) {
  cups.forEach((cup, num) => {
    if (
      cup.classList.contains('full') &&
      !cup.nextElementSibling.classList.contains('full')
    ) {
      idx--;
    }
    if (num <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  fillBigCup(idx + 1);
}

function fillBigCup(a) {
  percentText.textContent = `${(1 / 8) * 100 * a}%`;
  percentage.style.height = `${(330 / 8) * a}px`;
  literText.textContent = `${2 - (2 / 8) * a}L`;
  if (a === 8) {
    remained.style.height = 0;
  }
}
