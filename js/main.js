axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

axios.get('https://superheroapi.com/api/418828005513547/69')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
