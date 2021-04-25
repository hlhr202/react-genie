
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-genie.cjs.production.min.js')
} else {
  module.exports = require('./react-genie.cjs.development.js')
}
