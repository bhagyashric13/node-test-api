// import http from 'http'; 

//Handle https web request create own server without need xampp wampp etc

import http from 'http'; 
import { type } from 'os';

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("abc")
    }else if(req.url == '/about'){
        res.end("im to about")
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<b>not found </b>");
    }
});

server.listen("8003","127.0.0.1",()=>{
    console.log("listen...")
})

//Method convert object to json 
// JSON.stringify(obj);
//Method convert json to object 
// JSON.parse(Jsonobj);

// normal Object
// {name : "bhc"}
// json Object
// {"name" : "bhc"}
