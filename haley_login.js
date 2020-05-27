const usersURL = "http://localhost:3000/users"

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");



function fetchUsers() {
    fetch(usersURL)
      .then(resp => resp.json())
      .then(users => renderUser(users))
  }

function loginListener(){
      loginForm.addEventListener('submit', function(event){
      event.preventDefault()
      const loginInput = loginForm.username.value
      loginForm.reset()
      addUser(event)
    })
  }

  function addUser(event){
    const username = event.target.dataset['username']
  
    const reqObj = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({ username: username })
    }
  
    fetch(usersURL, reqObj)
      .then(resp => resp.json())
      .then(data => {console.log(data)})
  }



// function loginListener(){
//     const loginForm = document.querySelector('form')
//     loginForm.addEventListener('submit', function(event){
//       event.preventDefault()
//       const loginInput = event.target.login.value
//       loginForm.reset()
//       addUser(username)
//     })
//   }

//   function addUser(username){
//     const username = event.target.dataset['username']
//     const fetchObj = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         username: username
//       })
//     }
  
//     fetch(usersURL, fetchObj)
//     .then(resp => resp.json())
//     .then(data => {console.log(data)})
//   }


//   function renderUser{

//   }
