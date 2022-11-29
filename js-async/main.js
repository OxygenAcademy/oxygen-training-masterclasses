document
  .querySelector("#btn")
  .addEventListener("click", () => {
    fetch("https://futuramaapi.herokuapp.com/api/quotes")
      .then(response => response.json())
      .then(data => {
        data.map(quote => {
          document.querySelector("#quotes").innerHTML += quote.character + " dijo: " + quote.quote + "<br />"
        })
      })
      .catch(error => console.log(`El servidor se ha caído: ${error}`));
  });

/*
document
  .querySelector("#submit")
  .addEventListener("click", () => {
    fetch("https://mybackend.com/login", {
        method: 'POST',
        body: JSON.stringify({
          user: ...,
          pass: ...
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
      ...
    });
  });
*/

// Classic Promise Version
const myPromise = new Promise((resolve, reject) => {

  // Async actions
  //if(false)
    setTimeout(() => {
      resolve('El tiempo ha pasado');
    }, 3000);
  // else
  //   reject()
});

myPromise
  .then(msg => console.log(msg))
  .catch(() => console.log('Se ha roto el reloj'));

// Modern async/await Version
const getQuotes = async () => {

  const response = await fetch("https://futuramaapi.herokuapp.com/api/quotes");
  const data = await response.json();

  data.map(quote => {
    document.querySelector("#quotes").innerHTML += quote.character + " dijo: " + quote.quote + "<br />"
  })
}

//getQuotes();