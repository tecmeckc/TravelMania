const mongoose=require("mongoose");
const initData=require("./init.js");
const Listing=require("../models/temp.js");
const mongo_URL="mongodb://127.0.0.1:27017/Travelmania";
main().then(() =>{
  console.log('Connected successfully!');
 }
).catch((err)=>{
 console.log(err);
});
 async function main(){
  await mongoose.connect(mongo_URL);

};
const initDB=async()=>{
  await Listing.deleteMany({});
   await Listing.insertMany(initData.data);
console.log("Data was initialized");
};
initDB();