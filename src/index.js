
const formElement = document.querySelector('#create-task-form');
const listElement = document.querySelector('#tasks');

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const inputElement = document.querySelector('#new-task-description');
  const description = inputElement.value;

  if (description !== '') {
    const listItemElement = document.createElement('li');
    listItemElement.innerText = description;
    listElement.appendChild(listItemElement);
    inputElement.value = '';
  }
});
