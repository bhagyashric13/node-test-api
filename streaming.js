
import fs from 'fs'; 
import http from 'http'; 

// readable stream , witeable, duplex, 
// transform : output computed based on input
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("abc")
    }else if(req.url == '/about'){
        
        // var wstream = fs.createWriteStream('read.txt');
        // wstream.write('hello, mauu');
        // var rstram = fs.createReadStream('read.txt');
        // rstram.pipe(res);

        // rstram.on('data',(chunkdata)=>{
        //     res.end(chunkdata + " one ")
        // })
        // rstram.on('end',()=>{
        //     res.end()
        // })  
        // rstram.on('error',(err)=>{
        //     console.log(err)
        // }) 
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<b>not found </b>");
    }
});

server.listen("8003","127.0.0.1",()=>{
    console.log("listen...")
})

