const usersURL = "http://localhost:3000/users"

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const mainNode = document.querySelector('#main-holder')
let userData


  loginForm.addEventListener('submit', newUser)
  function newUser(event) {
    event.preventDefault()
    username = event.target[0].value
      const reqObj = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify({ username: username })
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
    console.log(data)
    let programTitles = data.programs.map(program => {
      return program.title
    })
    data.user_programs.forEach(user_p => {
      mainNode.innerHTML += `<div><h2>${programTitles.shift()}</h2>
      <p id="comment" data-id=${user_p.id}>${user_p.comment}</p>
      <p id="trailer" data-id=${user_p.id}>${user_p.trailer}</p>
      <iframe width="420" height="315"
      src="${user_p.trailer}">
       </iframe>    
      <button data-id=${user_p.id} class="delete-program">delete program</button></div>`
    })
    mainNode.innerHTML += '<button id="add-program"> Add New Program </button>'
  }

  // add new program
  const addProgramNode = document.querySelector('#add-program')
  mainNode.addEventListener('click', function(event) {
    if (event.target.id === 'add-program') {
      mainNode.innerHTML = '<form id="new-program-submit"><label>Title</label><input type="text"><label>Comment</label><input type="text"><label>Trailer</label><input type="text"><input type="submit"></form>'
    }
  })
  mainNode.addEventListener('submit', function(event) {
    if (event.target.id === 'new-program-submit') {
      event.preventDefault()
      let title = event.target[0].value
      let comment = event.target[1].value
      let trailer = event.target[2].value
      let trailerFix = trailer.replace("watch?v=", "embed/")

      reqObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          title: title,
          comment: comment,
          trailer: trailerFix,
          userId: userData.id
        })
      }
      fetch('http://localhost:3000/programs',reqObj)
      .then(resp => resp.json())
      .then(data => userShow(data))
    }
  })

  // remove a program from your list 

    mainNode.addEventListener('click', function(event) {
      if (event.target.className === 'delete-program') {
        handleDelete(event)
      }

    })

    function handleDelete(event) {
      event.target.parentNode.remove()
      const upId = event.target.dataset.id

      const reqObj = {
        method: "DELETE"}

      fetch(`http://localhost:3000/user_programs/${upId}`, reqObj)
      .then(resp => resp.json())
      .then(data => console.log(data))
    }

    // edit comment and/or trailer

    mainNode.addEventListener('click', function(event) {
      if (event.target.id === 'comment') {
       let parent = event.target.parentNode
       let pNode = event.target
       let originalComment = event.target.innerText
       console.log(event)
       let nodeee = document.createElement("div")
       nodeee.innerHTML = `<form data-id="${event.target.dataset.id}" class="new-comment-form"><input type="text" placeholder="${originalComment}"><input type="submit" value="save"></form>`
       parent.replaceChild(nodeee, event.target)

      }
    })

    mainNode.addEventListener('submit', function(event) {
      if (event.target.className === 'new-comment-form') {
        event.preventDefault()
        upId = event.target.dataset.id
        console.log(event)
        newComment = event.target[0].value 

        reqObj = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({comment: newComment})
        }
        
        fetch(`http://localhost:3000/user_programs/${upId}`, reqObj)
        .then(resp => resp.json())
        .then(data => renderComment(data))

        let parent = event.target.parentNode

        function renderComment(data) {
          let commentNode = document.createElement("div")
          commentNode.innerHTML = `<p id="comment" data-id="${data.id}">${data.comment}</p>`
          parent.replaceChild(commentNode, event.target)
        }
      }
    })





 




