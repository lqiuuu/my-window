require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/my-window'
}