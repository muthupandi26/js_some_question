// 8.What will be the output of the following code snippet?

new Promise((resolve, reject) => {
    resolve('Success!')
  })
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return "actually, that worked"
  })
  .catch(error => console.log(error.message))
  // .then( () => console.log("I am always print"))


  // output : It's won't print anything (I think)...