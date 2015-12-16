import { Router } from 'express'
import resolveAssets from '../../helper/resolveAssets'
import data from './data.json'

const router = Router()
const assets = resolveAssets('home')

router.get('/', (req, res) => {
  res.render('home/index', {
    assets, ...data
  })
})

module.exports = router
