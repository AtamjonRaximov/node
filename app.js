// let server = require("http")

// server.createServer((sorov,javob)=>{
//     javob.write("hey boy")

//     javob.end()
// }).listen(8000)

// const http = require("http");

// http.createServer((request, response) => {
//     if (request.url != "/favicon.ico") {
//         console.log(request.url);

//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.write("text");
//         response.end();
//     }
// }).listen(8000);

// const http = require("http");
// const fs = require("fs");

// http.createServer((request, response) => {
//     if (request.url == "/favicon.ico") return;

//    else if (request.url == "/page1") {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.write("1");
//         response.end();
//         return;
//     }

//     else if (request.url == "/page2") {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.write("2");
//         response.end();
//         return;
//     }

//     else if (request.url == "/page3") {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.write("3");
//         response.end();
//         return;
//     }

//     fs.readFile("index.html", (error, data) => {
//         if (!error) {
//             response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//             response.end(data);
//         } else {
//             response.writeHead(404, { "Content-Type": "text/plain" });
//             response.end("Fayl topilmadi");
//         }
//     });

// }).listen(8000);

// const http = require("http")
// const fs = require("fs")

// http.createServer(async(request,response)=>{
//     if(request.url != "/favicon.ico"){
//         let text = await fs.promises.readFile("index.html","utf8");
//         response.writeHead(200,{"Content-Type":"text/html"});
//         response.write(text);
//         response.end();
//     }

// }).listen(3000)

// let obj ={
//     '/page1': 'file1.html',
// 	'/page2': 'file2.html',
// 	'/page3': 'file3.html',
// }

// const http = require("http");
// const url = require("url");

// http.createServer(
//     function(request, response) {
//         if (request.url !== "/favicon.ico") {
//             console.log( url.parse(request.url, true).query); 
//             response.end();
//         }
        
        
 
//   }).listen(8000);



// const http = require("http");
// const fs = require("fs");
  
// http.createServer(async (request, response) => {
        
//     if(request.url == "/user"){
           
//           let body = "";  
//           for await (const chunk of request) {
//             body += chunk;
//           }
//         let userName = "";
//         let userAge = 0;
//         const params = body.split("&");
//         for(param of params){
//             const [paramName, paramValue] = param.split("=");
//             if(paramName === "username") userName = paramValue;
//             if(paramName === "userage") userAge = paramValue;
//         }
//         response.end(`Your name: ${userName}  Your Age: ${userAge}`);
//     }
//     else{
//         fs.readFile("index.html", (_, data) => response.end(data));
//     }
// }).listen(8000, ()=>console.log("Сервер запущен по адресу http://localhost:8000"));



