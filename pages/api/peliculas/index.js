// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const {peliculas} = require('./datos.json')

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(peliculas)
  }else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Método ${req.method} no permitido`})
  }
}
