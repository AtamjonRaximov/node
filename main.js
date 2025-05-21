// const {MongoClient}=require("mongodb")
// const http =require("http")

// http.createServer((req, res) => {
//     if ( req.url == '/save') {
//       run()
//     }
//     res.end()
//   }).listen("8000");

// async function run() {
//     try{
//         const connect = new MongoClient("mongodb://127.0.0.1:27017")
//         await connect.connect()
//         const db =connect.db("product")
//         const collection=db.collection("telefon")
//         const result=collection.insertOne({
//             "name":"samsung A15",
//             "Price":"200000"
//         })
//         const collection2 =db.collection("Nootbook")
//         const nootbook=collection2.insertOne({
//             "name":"HP",
//             "Price":"3000000"
//         })

//         await result.insertedId

//     }catch(err){
//         console.log(err.message);

//     }

// }
// run()

///  product qo'shish

// const http = require('http')
// const fs = require('fs')
// const qs = require('querystring')
// const { MongoClient } = require('mongodb')

// http.createServer(
//     async function(request, response) {

//         const connect = new MongoClient('mongodb://127.0.0.1:27017')
//         await connect.connect()
//         const db = connect.db('product')
//         const collection = db.collection('phone')

//         if (request.url == '/products' && request.method == "GET") {

//             let data = {
//                 "name" : "Samsung S3",
//                 "price" : "100$"
//             }

//         }

//         if (request.url == '/' && request.method == 'POST') {

//             let body = ""
//             request.on('data', elem => {body += elem.toString()})
//             request.on('end', () => {
//                 let data = qs.parse(body)

//                 collection.insertOne({
//                     "name": data.name ,
//                     "price": data.price
//                 })

//             })

//             fs.readFile('index.html', (_, html) => {

//                 response.end(html)
//             })
//         } else {

//             fs.readFile('index.html', (_, html) => {

//                 response.end(html)
//             })
//         }
//     }

// ).listen(3000)

const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const { MongoClient } = require("mongodb");

http
  .createServer(async function (request, response) {
    const connect = new MongoClient("mongodb://127.0.0.1:27017");
    await connect.connect();
    const db = connect.db("product");
    const collection = db.collection("phone");

    if (request.url == "/products" && request.method == "GET") {
      let products = await collection.find().toArray();

      let finalData = products
        .map((items) => `<li>${items.name} - ${items.price}</li>`)
        .join("\n");

      fs.readFile("products.html", "utf8", (_, html) => {
        let finalHtml = html.replace("{{Products}}", finalData);
        response.end(finalHtml);
      });

      return;
    }
    

    if (request.url == "/" && request.method == "POST") {
      let body = "";
      request.on("data", (elem) => {
        body += elem.toString();
      });
      request.on("end", () => {
        let data = qs.parse(body);

        collection.insertOne({
          name: data.name,
          price: data.price,
        });
      });

      fs.readFile("index.html", (_, html) => {
        response.end(html);
      });
    } else {
      fs.readFile("index.html", (_, html) => {
        response.end(html);
      });
    }
  })
  .listen(3000);
