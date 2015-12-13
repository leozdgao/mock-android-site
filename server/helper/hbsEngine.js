import exphbs from 'express-handlebars'
import fp from 'path'
import env from '../../config/environment'

module.exports = exphbs.create({
  extname: '.hbs',
  layoutsDir: fp.join(env.entriesDirectory, '_layouts'),
  partialsDir: fp.join(env.entriesDirectory, '_components'),
  defaultLayout: 'main',
  helpers: {
    // each (context, options) {
    //   let ret = ""
    //
    //   for(var i=0, j=context.length; i<j; i++) {
    //     ret = ret + options.fn(context[i])
    //   }
    //
    //   return ret
    // }
  }
})
