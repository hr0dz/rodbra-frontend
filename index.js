


function main(){
    fetchUsers();
    }
    
const usersURL = 'http://localhost:3000/users';
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


function fetchUsers() {
    fetch(usersURL)
      .then(resp => resp.json())
      .then(users => { renderUser(users)
      userData = users } )
  }
//const mainNode = document.querySelector('#main-holder')
let userData
//const loginErrorMsg = document.getElementById("login-error-msg");


    loginForm.addEventListener('submit', newUser)
   

    function newUser(event) {
    event.preventDefault()
    username = event.target[0].value
    console.log(username)

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
      .then(user => renderUser(user))
     // .then(data => {
       // userData(data)
        //userShow(data)
    };
        
    const userCollect = document.querySelector('#usersList')
    
    function renderUser(user) { 
     const userCard = `
     <li class="user">
            <h2>${user.username}</h2>
            </li>`
    userCollect.innerHTML += userCard
}


// user show page function

//   function userShow(data) {
// //     mainNode.innerHTML = ''
// //     <ol>
// //     <li>data.included[0].attributes.title</li>
// //     </ol>


//    }

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
  
    
// USER CLICKS ON FOLLOWING BUTTON


//const userCollect = document.getElementById('userCollect');
const searchBar = document.getElementById('searchBar');
let usersArr = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;

    const filteredUsers = usersArr.filter((user) => {
        console.log(user.username)
        return (
            user.username.includes(searchString)
           // user.id.includes(searchString)
        );
    });
    displayUsers(filteredUsers);
});

const loadUsers = async () => {
    try {
        const res = await fetch('http://localhost:3000/users');
        usersArr = await res.json();
        displayUsers(usersArr);
    } catch (err) {
        console.error(err);
    }
};

const displayUsers = (users) => {
    const htmlString = users
        .map((user) => {
            return `
            <li class="user">
            <h2>${user.username}</h2>
            <h3>${user.follower_relationships.followers}</h3>
            <h3>${user.following_relationships}</h3>
            <button class="follow-btn" data-id=${user.id}>Follow +</button> 
            </li>
        `;
        })
        .join('');
    userCollect.innerHTML = htmlString;
};


function followButton(event){
        if (event.target.className === "follow-btn") {
            handleFollow(event)
        };

    }
 
 function handleFollow(event){

 }


loadUsers();
