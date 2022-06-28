const fs =require('fs');
const http=require('http');
const url= require('url');
/////////////////////////////////
//Files
// blocking ,synchronous way
//  const textIn= fs.readFileSync('./txt/input.txt','utf-8');
//  console.log(textIn);

//  const textOut =`This is how to write into files: ${textIn}.\n Created on ${Date.now()}`;
//  fs.writeFileSync('./txt/output.txt',textOut);
//  console.log('Filewriten!');

// non-blocking,asynchrouss way
// fs.readFile('./txt/start.txt','utf-8', (err,data1)=>{
//     if(err) return console.log('Error!');
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',  (err,data2)=>{
//         console.log(data2);

//         fs.readFile(`./txt/append.txt`,'utf-8',  (err,data3)=>{
//             console.log(data3);
// //writing onto file
// fs.writeFile(`./txt/final.txt`, `${data2}\n ${data3}`,'utf-8', err=>{
// console.log('your file has been written');
// })
//             });
//         });
// });
// console.log('Will read file');

/////////////////////////////////////
       //creating web server
   const server=  http.createServer ((req,res) =>{
     
        //routing
        const pathName = req.url;

        if(pathName==='/' || pathName==='/overview'){
         res.end('This the OverView');
        }else if(pathName ==='/product'){
         res.end('This is the PRODUCT');
        }else {
         res.end('Page not found');
        }
     });
     //server listening
     server.listen(8000,'127.0.0.1',()=>{
        console.log('listening to request on port 8000');
     })
     
