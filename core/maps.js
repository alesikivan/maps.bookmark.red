require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('/get-data/:id', (req, res) => {
  const { id = 1 } = req.params

  const folderPath = './data/versions/4/'

  switch (+id) {
    case 1:
      // Traffic Map
      return res.sendFile(path.join(__dirname, folderPath + 'kepler.gl.json'))

    case 2:
      // Cluster Map
      return res.sendFile(path.join(__dirname, folderPath + 'clusters_kepler.gl.json'))
    
    case 3:
      // Czech highway weekly traffic Map
      return res.sendFile(path.join(__dirname, folderPath + 'czech-highway-weekly-traffic.json'))

    default:
      return res.sendFile(path.join(__dirname, folderPath + 'clusters_kepler.gl.json'));
  }
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
