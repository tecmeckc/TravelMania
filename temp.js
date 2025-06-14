const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const listSchema=new Schema({
 caption:{
    Type:String
  },
  description:{
  type:String
  },
  image:{
    type:String,
     default:"https://images.unsplash.com/photo-1723199688073-0c18e53c321b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     set:(v)=>
       v===""?"https://images.unsplash.com/photo-1723199688073-0c18e53c321b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ":v
  },
  price:{
    type:Number
  },
  location:{
    type:String
  },
  country:{
    type:String
  }
});
const Listing=mongoose.model("Listing",listSchema);
module.exports=Listing;
