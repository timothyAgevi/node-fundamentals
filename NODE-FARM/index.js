const fs =require('fs');
// blocking ,synchronous way
//  const textIn= fs.readFileSync('./txt/input.txt','utf-8');
//  console.log(textIn);

//  const textOut =`This is how to write into files: ${textIn}.\n Created on ${Date.now()}`;
//  fs.writeFileSync('./txt/output.txt',textOut);
//  console.log('Filewriten!');

// non-blocking,asynchrouss way
fs.readFile('./txt/start.txt','utf-8', (err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',  (err,data2)=>{
        console.log(data2);

        fs.readFile(`./txt/append.txt`,'utf-8',  (err,data3)=>{
            console.log(data3);
//writing onto file
fs.writeFile(`./txt/final.txt`, `${data2}\n ${data3}`,'utf-8', err=>{
console.log('your file has been written');
})
            });
        });
});
console.log('Will read file');