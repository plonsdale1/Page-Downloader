const arg = process.argv[2];

const obfuscate = function(pass) {
  let newPass = '';
  for(let i = 0; i < pass.length; i++) {
    const currentChar = pass[i];
    if(currentChar === 'a') {
      newPass += '4'
    }else if(currentChar === 'e') {
      newPass += '3' 
    }else if(currentChar === 'o') {
      newPass += '0'
    }else if(currentChar === 'l') {
      newPass += '1'
    }else {
      newPass += currentChar;
    }
  }return newPass;
};

console.log(obfuscate(arg));