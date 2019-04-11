var list = document.querySelector('.list__list');
var items = list.children;


var newElement = function(){

  var li = document.createElement('li');
  li.className = "list__item";
  li.textContent = document.querySelector('.input-block__input').value;
  if(li.textContent == ''){
    console.log('message');
  } else {
    list.insertBefore(li, list.children[0]);
    document.querySelector('.input-block__input').value = '';

    var inputCheckbox = document.createElement('input');
    inputCheckbox.className = "list__checkbox";
    inputCheckbox.type = 'checkbox';
    li.appendChild(inputCheckbox);

    addCheckHandler(li);
  }
}

var buttonAdd = document.querySelector('.input-block__button');
buttonAdd.addEventListener('click', newElement);


var addCheckHandler = function(item){
  var checkbox = item.querySelector('.list__checkbox');
  checkbox.addEventListener('change', function(){


    setTimeout(function(){
    item.remove();}, 500);
    
  });

};

for(var i=0; i<items.length; i++){
  addCheckHandler(items[i]);
};