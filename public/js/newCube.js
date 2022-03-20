var itemsTitle = "";
var itemsArray = [];

function storeItems(e) {
  e.preventDefault();
  var item = $('.item-input').val()
  if (item != '') {
    itemsArray.push(item);
    var noSpace = item.replace(/\s+/g, '-').toLowerCase();
    var itemToAdd = '<li id=' + noSpace + '>' + item + ' <button class="btn btn-small btn-dark remove-item" name = ' + itemsArray.length + ' id=' + noSpace + '>x</button></li>';
    $('.newItems').append(itemToAdd);
    $('.item-input').val('');
  }
}

function removeItem(obj) {
  item = obj.name;
  itemToRemove = obj.id;
  console.log(itemToRemove)
  var el = document.querySelector('#' + itemToRemove)
  var index = itemsArray.indexOf(item);
  if (index !== -1) {
    itemsArray.splice(index, 1);
    el.remove()
  }

}


$(document).ready(function(){
  $('.item-input').keydown(function(event) {
    if (event.which === 13) {
      storeItems(event);
    }
  });

  $('.newItems').on("click", "button.remove-item", function() {
    item = this.name;
    itemToRemove = this.id;
    console.log(itemToRemove)
    var el = document.querySelector('#' + itemToRemove)
    var index = itemsArray.indexOf(item);
    if (index != -1) {
      itemsArray.splice(index, 1);
      el.remove()
    }
  })

  function test() {
    console.log(this.attr("class"))
  }

})
