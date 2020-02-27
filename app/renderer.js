let config = require('../config.js')

app.socket.url = 'ws://' + getHost(config.BASE_URL) + ':51230'
$.ajaxSetup({
  beforeSend: function(xhr, options) {
    options.url = config.BASE_URL + options.url;
  }
})

$('.main-category-list-head .left-part .title').hide();
$('[data-toggle="export-file"]').attr('href', `${config.BASE_URL}/categoryExcel`)

function getHost(url) {
  var a = document.createElement('a');
  a.href = url;
  return a.hostname;
}
