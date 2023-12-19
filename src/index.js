const fs = require('fs')
const config = require('./config.js')

const themes = [{ name: 'Eyecare Green Dark', type: 'dark' }]
for (let opt of themes) {
  const json = config.getConfig(opt)

  // write JSON string to a file
  const themepath = 'themes/'
  const filename = opt.name + '.color-theme.json'
  fs.writeFile(themepath + filename, JSON.stringify(json, null, 2), (err) => {
    if (err) {
      throw err
    }
    console.log(`The theme json file ${filename}was generated successfully.`)
  })
}

