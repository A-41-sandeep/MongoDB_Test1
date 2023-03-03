const mongoose = require("mongoose");
//create the database
mongoose.connect("mongodb://0.0.0.0:27017/myCollection")
.then
( ()=>console.log("connection successfull")).catch
((err)=> console.log(err)); 



//define schema

const mySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    roll_no:Number,
    isPlaced:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})



//create collection
const Collect=new mongoose.model("Collect-1",mySchema);



// insert document
const createDocument=async()=>{
const doc=new Collect({
    name:'Nitin',
    roll_no:42,
    isPlaced: true
})
const result=await doc.save();
console.log(result);
}

createDocument();
