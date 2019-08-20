

const diceRoll = function(num) {
  const sides = 6;
  for (let i = 0; i < num; i++) {
    const odds = Math.floor(Math.random() * sides + 1);
    console.log(odds);
  }
};






const arg = process.argv[2];
diceRoll(arg);