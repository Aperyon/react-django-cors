import axios from 'axios';


axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;


axios.post('/login/', { username: 'user', password: 'asdasdasd'})
  .then(rv => {
    console.log('Login', rv)
    updateStuff();
  })
  .catch(err => {
    console.log('Login error', err.response)
  })

const updateStuff = () => {
  axios.patch('http://localhost:8000/api/stuffs/1/', { quantity: 2 })
    .then(resp => {
      console.log('Update response', resp)
    })
    .catch(error => {
      console.log("Update error", error)
    })
}
