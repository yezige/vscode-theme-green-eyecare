const fs = require('fs')

// create a JSON object
const user = {
  id: 1,
  name: 'John Doe',
  age: 22
}

// convert JSON object to string
const data = JSON.stringify(user, null, 2)

// write JSON string to a file
fs.writeFile('user.json', data, (err) => {
  if (err) {
    throw err
  }
  console.log('JSON data is saved.')
})
