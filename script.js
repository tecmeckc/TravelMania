
const express=require("express");
const ejsMate=require("ejs-mate");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
app.use(express.static(path.join(__dirname, 'public')));

const methodOverride = require('method-override');
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.set("view engine","ejs");

// app.use(express.static('public'));

app.set("views",path.resolve("./views"));
const Listing=require("./models/temp.js");
const mongo_URL="mongodb://127.0.0.1:27017/Travelmania";
app.use(express.urlencoded({extended:true}));
main().then(() =>{
  console.log('Connected to DB!');
 }
).catch((err)=>{
 console.log(err);
});
 async function main(){
  await mongoose.connect(mongo_URL);

};
app.listen(8008,()=>{
  console.log("Listening to the port ....!!!");
});
// index route
app.get("/listings",async (req,res)=>{
  let AllLis= await Listing.find({});
  
  res.render("./listings/index",{AllLis});
});
// //create new 
app.get("/listings/new",(req,res)=>{
  res.render("./listings/new");
  });
// //show details
app.get("/show/:id",async (req,res)=>{
  let {id}=req.params;
  let listing=await Listing.findById(id);
  res.render("./listings/show",{listing});
});
//saving the new data
app.post("/listings",async (req,res)=>{
  const newListing=new Listing(req.body.listing);
await newListing.save();
res.redirect("/listings");
});
app.get("/show/listings/:id/edit",async (req,res)=>{
  let {id}=req.params;
  const listing=await Listing.findById(id);
  res.render("./listings/edit",{listing});
});
//update
app.put("/listings/:id",async (req,res)=>{
  let {id}=req.params;
  //destroying and recreating the data
  await Listing.findByIdAndUpdate(id,{...req.body.listing});
  res.redirect("/listings");
});
//Delete route
app.delete("/listings/:id",async (req,res)=>{
  let {id}=req.params;
  let deleteListing= await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  res.redirect("/listings");
});
///getttttttt
app.get('/',function(req,res,next){
  res.render('listings/index');
});

