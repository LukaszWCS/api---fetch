//==================ASYNC==================

// API "end point"
const url = 'https://trouve-mot.fr/api/random';


//---VERSION--------.then-----------
fetch(url)                            // this function returns a "Promise" that is then passed to the next block(".then")
  .then((responseFromFetch) => {      // 1st BLOCK(".then") that takes function callback as a parameter. This callback function takes as a parameter response("responseFromFetch") from fetch(...)
    return responseFromFetch.json()   // scope(body) of function callback is executed only(!) when "responseFromFetch" has arrived. When it arrives we need to translate it("json()"") into an object that we can read.
  })
  .then((responseFromBlock1) => {     // 2nd BLOCK(".then") that takes function callback as a parameter. This callback function takes as a parameter a response("responseFromFetch") from function: fetch(...)
    console.log(responseFromBlock1)   // DATA available and ready to be used in our application
  })



//---VERSION----async / await-------
async function fetchWord() {          // initialization of an ASYNC function (can contain AWAIT inside)
  const res = await fetch(url);       // AWAIT : JS stops here(inside this function only/ lines 20, 21, 22 are waiting but lines from 24... are still executed). Execution will continue until fetch(url) returns a response.
  const data = await res.json();      // AWAIT : JS stops again and wait for a response from a function ".json()". Execution will continue until res.json() returns a response(data).
  console.log(data);                  // data here is ready to be used in our application !
}
fetchWord();


// Both VERSIONS do the same thing. They take care of requests asynchronous 
