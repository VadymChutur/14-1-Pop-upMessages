const clickRulesRef = document.querySelector('.block__read-rules');
const clickRulesBackRef = document.querySelectorAll('.block__read-rules--back');

clickRulesRef.addEventListener('click', rulesShiftLeft);
clickRulesBackRef.forEach((element) => {
  element.addEventListener('click', rulesShiftRight);
});

function rulesShiftLeft() {
  const sliderStreif = document.querySelector('.block__form-slider');
  sliderStreif.style.marginLeft = '-250px';
}

function rulesShiftRight() {
  const sliderStreif = document.querySelector('.block__form-slider');
  sliderStreif.style.marginLeft = '0px';
}
