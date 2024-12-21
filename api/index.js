const express =require("express");
const { default: mongoose } = require("mongoose");
const sign =require("./routers/signup.route")
const app=express();
const PORT =8000;
async function connect()
{ 
   return await  mongoose.connect('mongodb://127.0.0.1:27017/notes')

}
connect().then(()=>
{
    console.log("connected to data base")
});
app.use(express.json());
app.use("/api/sign",sign);


app.listen(PORT,()=>
{
    console.log(`http://localhost:${PORT}`);
})