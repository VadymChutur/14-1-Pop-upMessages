const btnPopUpRef = document.querySelector('#pop-up');
const bodyRef = document.querySelector('body');

function chips(
  message,
  backgroundColor = '#rgba(0,0,0,0.6)',
  timeOutRemove = 3000
) {
  const chips = document.createElement('div');
  chips.classList.add('chips');
  chips.style.backgroundColor = backgroundColor;
  chips.innerHTML = message;
  addChipsBlock(chips);
  //   bodyRef.appendChild(chips);

  setTimeout(() => {
    deleteChips(chips);
  }, timeOutRemove);
  //   console.log(chips);
}

function deleteChips(chips) {
  chips.remove();
  const allChips = document.querySelectorAll('.chips-field .chips');
  console.log(allChips);
  if (allChips.length === 0) {
    const chipsFieldEmpty = document.querySelector('.chips-field');
    chipsFieldEmpty.remove();
  }
}

function addChipsBlock(chips) {
  const chipsField = document.querySelector('.chips-field');
  console.log(chipsField);
  console.log(typeof chipsField);
  if (chipsField) {
    chipsField.appendChild(chips);
  } else {
    const chipsField = document.createElement('div');
    chipsField.classList.add('chips-field');
    bodyRef.appendChild(chipsField);
    chipsField.appendChild(chips);
  }
}

btnPopUpRef.addEventListener('click', (event) => {
  chips('Hello', 'green');
});
