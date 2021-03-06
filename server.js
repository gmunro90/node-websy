const http = require('http')
const { getProducts } = require('./controllers/productController')

const server = http.createServer((req, res) => {
  
  if(req.url === '/api/products' && req.method === 'GET')  {
    getProducts(req, res)
  }
  else {
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: 'Not found'}))
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))
