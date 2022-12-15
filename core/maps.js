require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/get-data/:id', (req, res) => {
  const { id = 1 } = req.params

  console.log(id, +id)

  switch (+id) {
    case 1:
      // Traffic Map
      return res.sendFile(path.join(__dirname, './data/versions/3/kepler.gl.json'));   

    case 2:
      // Cluster Map
      return res.sendFile(path.join(__dirname, './data/versions/3/clusters_kepler.gl.json'));   
  
    default:
      return res.sendFile(path.join(__dirname, './data/versions/3/clusters_kepler.gl.json'));   
  }
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
