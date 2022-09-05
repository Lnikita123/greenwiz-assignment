const imageDownloader = require('node-image-downloader')
 
imageDownloader({
  imgs: [
    {
      uri: 'https://www.amazon.in/',
      filename: 'profile.png'
    },
    {
      uri: 'https://s.cdpn.io/3/kiwi.svg' // in this case filename will be kiwi.svg
    }
  ],
  dest: './images', //destination folder
})
  .then((info) => {
    console.log('all done', info)
  })
  .catch((error, response, body) => {
    console.log('something goes bad!')
    console.log(error)
  })
