import Express from "express";

const app = Express();

// inbuilt meddleware

app.get('/',(req,res)=>{
    res.write("Bhagyashri...")
    res.write("Bhagyashri...")
    res.status(200).end();

    // res.status(200).end("BHC");
});

app.listen('8003', ()=>{
    console.log("Start.......Added runner");
})