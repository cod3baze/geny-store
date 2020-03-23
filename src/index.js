const searchElement = document.querySelector('input#search')
const resultElement = document.querySelector('div#result-search ul')

const data = ["Angola", "Brazil", "EUA", "Rússia"]

const handle_insert_element = (index) => {
  const word = data[index]

  let item = document.createElement('li')
  let no = document.createTextNode(word)
  item.appendChild(no)

  resultElement.appendChild(item)

  searchElement.value = ""
}

const handleSearch = () => {
  var val = searchElement.value 
  if(!val) return

  const index = data.indexOf(val)
  if(index !== -1) {
    handle_insert_element(index)
  }
}
// searchElement.addEventListener('change', handleSearch)

handle_blank = (ul) => {
  if(ul.innerText === "") {
    let item = document.createElement('li')
    let no = document.createTextNode("Do not have!")
    item.appendChild(no)

    ul.appendChild(item)
  }
}

const handle_filter = () => {
  var filter, ul, li, a, i, txtValue;

  input = document.querySelector('input#search');
  filter = input.value.toUpperCase();

  ul = document.getElementById("list-item");
  handle_blank(ul)
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent ?? a.innerText;
    console.log(txtValue)

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
searchElement.addEventListener('keyup', handle_filter)
