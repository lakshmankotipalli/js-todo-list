var items = [];

function addToDo (evt) {
  if (evt.keyCode === 13) {
    let val = document.getElementById('ItemBox').value;
    if (val != '') {
      items.push(val);
    }
    console.log(items);
    bindList(val);
    document.getElementById('ItemBox').value = '';
  }

  
}

function bindList (itemVal) {
  let list = document.getElementById('ToDoList');
  let li = document.createElement('li');
  let iTag = document.createElement('i');
  li.appendChild(document.createTextNode(itemVal));
  iTag.innerHTML = '<i class="fas fa-trash" onclick="deleteItem(event)"></i>';
  li.appendChild(iTag);
  list.appendChild(li);
}

function deleteItem (e) { 
  console.log(e.currentTarget.parentNode.parentNode);
  e.currentTarget.parentNode.parentNode.remove();
}