const cups = document.querySelectorAll('.cup-small');
const literText = document.querySelector('#liters');
const remained = document.querySelector('#remained');
const percentage = document.querySelector('#percentage');
const percentText = document.querySelector('#percentText');

cups.forEach((cup, idx) => {
  cup.addEventListener('click', (a) => {
    fillCups(idx);
    console.log('idx=', idx);
  });
});

function fillCups(idx) {
  console.log(cups[idx].classList.contains('full'));
  cups.forEach((cup, num) => {
    if (num === idx && cups[idx].classList.contains('full')) {
      cup.classList.toggle('full');
      --idx;
      fillBigCup(idx);
    } else if (num <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  fillBigCup(idx);
}

function fillBigCup(a) {
  console.log(a);
  a = a + 1;
  percentText.textContent = `${(1 / 8) * 100 * a}%`;
  percentage.style.height = `${(330 / 8) * a}px`;
  literText.textContent = `${2 - (2 / 8) * a}L`;
  if (a === 8) {
    remained.style.height = 0;
  }
}

function fillBigCup2(b) {}
