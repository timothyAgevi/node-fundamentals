const fs =require('fs');

 const textIn= fs.readFileSync('./txt/input.txt','utf-8');
 console.log(textIn);

 const textOut =`This is how to write into files: ${textIn}.\n Created on ${Date.now()}`;
 fs.writeFileSync('./txt/output.txt',textOut);
 console.log('Filewriten!');

