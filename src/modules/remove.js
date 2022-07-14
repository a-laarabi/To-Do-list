function removeItems (child) {
  list.removeChild(child);
  let count = 1;
  const parsedItems = localStorage.getItem('items');
  let data_local = JSON.parse(parsedItems);
  arr = JSON.parse(localStorage.getItem('items'));
  arr.splice((child.id) - 1, 1);
  data_local = arr;

  data_local.map((item) => {
    item.index = count;
    count += 1;
    return null;
  });
  localStorage.setItem('items', JSON.stringify(data_local));
};

export default removeItems;