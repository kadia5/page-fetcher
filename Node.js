const fs = require('fs')

const content = 'Some content!'

fs.writeFile('/w2/d3/fetcher.js', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  if (file) {
    console.log('body:', body);
    return
  }
  if (file) {
    console.log('body:', body);
    return
  }
  
})
// request('http://www.example.edu ', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.