
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
    //console.log(username)

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
     // .then(user => renderUser(user))
      .then(data => {
       userData = data
        renderUser(data)
      
    })
}
        
    const userCollect = document.querySelector('#usersList')
    
    function renderUser(user) { 
     const userCard = `
     <li class="user">
            <h2> wassup, ${user.username}</h2>
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

searchBar.addEventListener('keyup', (event) => {
    const searchString = event.target.value;

    const filteredUsers = usersArr.filter((user) => {
        console.log(user.username)
        console.log(usersArr)
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

loadUsers();

const displayUsers = (users) => {
    const htmlString = users
        .map((user) => {
            console.log(user);
            return `
            <li class="user">
            <h2>${user.username}</h2>
            <button class="follow-btn" data-id=${user.id}>Follow +</button> 
            </li>
        `;
        })
        .join('');

    userCollect.innerHTML = htmlString;
};


userCollect.addEventListener('click', followButton);

function followButton(event){
    if (event.target.className === "follow-btn") {
        handleFollow(event)
        event.target.innerText = 'Following';
    };

}

function handleFollow(event){
    const followUserId = event.target.dataset.id
    const reqObj = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
        body:  JSON.stringify({ user: userData.id,
        followUser: followUserId })
      }
      fetch('http://localhost:3000/follow_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
       userData(data)
      }
        ) 
};

let main = document.querySelector("#main-holder")
console.log(main)

let nav = document.querySelector("#search")
nav.addEventListener('click', function(event){
    main.innerHTML = ''
    main.innerHTML = "hi"
    console.log(event)
//     ` <div class="container">
// //     <h1>&#x2728; Search For User &#x2728;</h1>
// //     <div id="searchWrapper">
// //         <input
// //             type="text"
// //             name="searchBar"
// //             id="searchBar"
// //             placeholder="search for a user"
// //         />
// //     </div>
// //     <ul id="usersList"></ul>
// // </div> `
})











// function followButton(event){
//         if (event.target.className === "follow-btn") {
//             handleFollow(event)
            // $("#follow-btn").animate({ width: '-=10px' }, 100, 'easeInCubic', function () {});
            // $("#follow-btn").animate({ width: '+=45px', left: '-=15px' }, 600, 'easeInOutBack', function () { 
            //     $("#follow-btn").css("color", "#fff");
            //     $("#follow-btn").text("Following");
            //     $("#follow-btn").animate({
            //         backgroundColor: "#2EB82E",
            //         borderColor: "#2EB82E"
            //       }, 1000 );
            //     });
            //   }else{
            //     $("#follow-btn").animate({ width: '-=25px', left: '+=15px' }, 600, 'easeInOutBack', function () { 
            //         $("#follow-btn").text("+ Follow");
            //         $("#follow-btn").css("color", "#3399FF");
            //         $("#follow-btn").css("background-color", "#ffffff");
            //         $("#follow-btn").css("border-color", "#3399FF");
            //       });
            //     }
            //   }


//  function handleFollow(event){

//  }

// loadUsers();