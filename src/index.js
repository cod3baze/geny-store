const searchElement = document.querySelector('input#search')
const resultElement = document.querySelector('div#result-search ul')

const data = ["Angola", "Brazil", "EUA", "Rússia"]

const handleSearch = () => {
  var val = searchElement.value 
  if(!val) return

  let item = document.createElement('li')
  let no = document.createTextNode(val)
  item.appendChild(no)
  
  resultElement.appendChild(item)

  searchElement.value = ""
}

searchElement.addEventListener('change', handleSearch)
