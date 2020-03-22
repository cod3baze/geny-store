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
searchElement.addEventListener('change', handleSearch)
