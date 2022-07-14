function getItemsLocalStorage() {
  const localItem = localStorage.getItem('items');
  const items = JSON.parse(localItem);
  items.map((item) => {
    arr.push(item);
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    const newId = item.index;
    newItem.setAttribute('id', newId);
    newItem.innerHTML = `
  <input type="checkbox" class="checkBox" id="${item.index}">
  <p class="eachItem" class="itemP" id="span-${item.index}">${item.description}</p>
  <i id="dots-${item.index}" class="dots material-icons">&#xe5d4;</i>
  <i id="trash-${item.index}" class="fa trash">&#xf1f8;</i>
  `;
    list.appendChild(newItem);
    const editItem = document.querySelectorAll('.dots');
    editItem.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentNode.classList.add('clicked-on');
        editItems(item.previousElementSibling, newItem);
      });
    });
    return null;
  });

  const checkbox = document.querySelectorAll('.checkBox');
  checkbox.forEach((checkboxInput) => {
    checkboxInput.addEventListener('click', () => {
      checkboxInput.nextElementSibling.classList.toggle('strike');
      checkboxInput.parentNode.classList.toggle('clicked-on');
      const ellipsisIcon = checkboxInput.parentNode.childNodes[5];
      ellipsisIcon.classList.toggle('inactive-dots');
      const trashIcon = checkboxInput.parentNode.childNodes[7];
      trashIcon.classList.toggle('active-trash');
      completeItem();
    });
  });

  const removeItem = document.querySelectorAll('.trash');
  removeItem.forEach((item) => {
    item.addEventListener('click', () => {
      removeItems(item.parentNode);
    });
  });
  localStorage.setItem('items', JSON.stringify(arr));
};

export default getItemsLocalStorage;