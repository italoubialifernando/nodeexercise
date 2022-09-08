function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

/* for each is poweerrr

const participant = ["Joe", "Caroline", "Sabrina"]
participant.forEach(player => {
    luckyDraw(player).then((value)=>console.log(value))    
}); */


  luckyDraw("Joe")
    .then((value)=>console.log(value))
    .then(()=>luckyDraw("Caroline"))
    .then((value)=>console.log(value))
    .then(()=> luckyDraw("Sabrina"))
    .then((value)=>console.log(value))


  /* Joe, Caroline and Sabrina */