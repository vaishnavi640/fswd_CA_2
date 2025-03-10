const express = require('express');
const app = express();
const PORT = 3000;
const product = [
    {name: 'iphone12', quantity :2},
    {name : 'laptop', quantity :5}
];

app.get('/',(req,res)=>{
    res.send(product);
});


app.put('/change',(req,res)=>{
    try {
        let name= req.query;
      if(product.name){
        let quantity = new quantity;
      }
      else{
        res.send("product not found");
      }
    } 
    catch(error){
       console.log("error found:",error);
    }
});

app.delete('/delete',(req,res)=>{
    try{
        let name = req.query;
    if(product.name){
            product = product.name.delete();
            res.send("product deleted Successfully");
        }
        else{
            res.send("product not found");
        }
    }
    catch(error){
        console.log("error found:",error);
     }
});


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});