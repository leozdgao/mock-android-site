import { Router } from 'express'
import resolveAssets from '../../helper/resolveAssets'

const router = Router()
const assets = resolveAssets('home')

router.get('/', (req, res) => {
  res.render('home/index', {
    assets
  })
})

module.exports = router
