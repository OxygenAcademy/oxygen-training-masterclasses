// Fetch GET Example

document
  .querySelector("#btn")
  .addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/ability/1")
      .then(response => response.json())
      .then(data => {
        console.log(data.names[5].name)
      })
      .catch(error => console.log(`El servidor se ha caído: ${error}`))
  })

/*
// Fetch POST Example

document
  .querySelector("#submit")
  .addEventListener("click", () => {
    fetch("https://mybackend.com/login", {
      method: 'POST',
      body: JSON.stringify({
        user: document.getElementById("user").value,
        pass: document.getElementById("pass").value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      ...
    })
  })
*/

// Classic promise version
const myPromise = new Promise((resolve, reject) => {

  const delay = Math.floor(Math.random() * 2000) + 1000

  if (delay > 2500) {
    reject()
  }
  else {
    // Async actions
    setTimeout(() => {
      resolve(`Han pasado ${delay / 1000} segundos`)
    }, delay)
  }
})

myPromise
  .then(msg => console.log(msg))
  .catch(() => console.log('Demasiado tiempo esperando'))

// Modern async/await version
const getQuotes = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/ability/1")
    const data = await response.json()
  
    console.log(data.names[5].name)
  }
  catch (error) {
    console.log(`El servidor se ha caído: ${error}`)
  }
}

//getQuotes()
