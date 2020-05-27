const usersURL = "http://localhost:3000/users"

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const mainNode = document.querySelector('#main-holder')
let userData

//const loginErrorMsg = document.getElementById("login-error-msg");



// function fetchUsers() {
//     fetch(usersURL)
//       .then(resp => resp.json())
//       .then(users => users.forEach(renderUser))
//   }

// function loginListener(){
 
    loginForm.addEventListener('submit', newUser)

        // event.preventDefault()
        // console.log(event)})
      // event.preventDefault()
      // const loginInput = loginForm.username.value
      // loginForm.reset()
      // addUser(event)
  

  function newUser(event) {
    event.preventDefault()
    username = event.target[0].value

      const reqObj = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body:  JSON.stringify({ username: username })
    } 

        fetch(usersURL, reqObj)
      .then(resp => resp.json())
      .then(data => {
        userData = data
        userShow(data)
      })

  }
  // user show page function

  function userShow(data) {
    mainNode.innerHTML = ''
    <ol>
    <li>data.included[0].attributes.title</li>
    </ol>


  }

    // data.forEach()
    // mainNode.innerHTML = `
    // <div id="show-wrapper">
    // <div id="program-wrapper">
    //   <ol id="program-list">
    //   <li class="program"> ${} </li>
    //   <li class="program"> </li>
    //   <li class="program"> </li>
    //   <li class="program"> </li>
    //   <li class="program"> </li>
    //   </ol>
    //   </div>
    // </div>
    // `
  
  

  


  
    // const username = event.target.dataset['username']
  
  //   const reqObj = {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "Accept": "application/json"
  //     },
  //     body:  JSON.stringify({ username: username })
  //   }
  
  //   fetch(usersURL, reqObj)
  //     .then(resp => resp.json())
  //     .then(data => {console.log(data)})
  // }
  



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


// USER CLICKS ON FOLLOWING BUTTON
