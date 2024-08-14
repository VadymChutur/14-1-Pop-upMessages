const btnPopUpRef = document.querySelector('#pop-up');
const bodyRef = document.querySelector('body');

function chips(message, timeOutRemove = 3000) {
  const chips = document.createElement('div');
  chips.classList.add('chips');
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
}

function addChipsBlock(chips) {
  const chipsField = document.querySelector('.chips-field');
  console.log(chipsField);
  if (chipsField === null) {
    const chipsField = document.createElement('div');
    chipsField.classList.add('chips-field');
    bodyRef.appendChild(chipsField);
  }
  chipsField.appendChild(chips);
}

btnPopUpRef.addEventListener('click', (event) => {
  chips('Hello');
});
