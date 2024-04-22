// In this file we write all backend cors
const port = 4000; //define port for express server running
//import all the dependency with package name
// const express = require("express"); //(express) package name
// const app = express();
// const mongoose = require("mongoose");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
// Database Connection with MongoDB
const DB =
  "mongodb+srv://tanusondhiya:987654321@cluster1.upp659v.mongodb.net/mernStack?retryWrites=true&w=majority&appName=Cluster1";
mongoose.connect(DB);
// Api creation
app.get("/", (req, res) => {
  res.send("Express app is running");
});
//

// Image storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});
// creating upload endpoint for images

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});
// ------------------------
//schema for creating products(mongodb)
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
// here we create one endpoint to add the product

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    // here we are using req.body.name because we are getting data from frontend

    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    available: req.body.available,
  });
  console.log(product);
  await product.save(); //using this method save data into database
  console.log("saved");
  res.json({
    success: true,
    name: req.body.name,
  }); //generate response for  frontend..
});
// creating the API for deleting products
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id }); //mongo method
  console.log("removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});
// creating API for getting allproducts

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all products fetched");
  res.send(products);
});
// Schema creating for User model
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
});
// creating API for registering  the user
app.post('/signup',async(req,res)=>{
  let check =await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false,errors:"existing user found"})
  }
  let cart={};
  for(let i=0;i<300;i++){
   cart[i]=0;
  }
  const  user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
  })
  await user.save();
  // creating obj for the database
  const data={
    user:{
      id:user.id
    }
  }
  const token =jwt.sign(data,'secret_ecom');
  res.json({success:true,token})

})
// creating endpoint for userlogin
app.post('/login',async(req,res)=>{
  let user= await Users.findOne({email:req.body.email});
  if(user){
    const passCompare=req.body.password===user.password;
    if(passCompare){
      const data={
        user:{
          id:user.id
        }
      }
      const token =jwt.sign(data,'secret_ecom');
      res.json({success:true,token});
    }else{
      res.json({success:false,errors:"password is incorrect"});
    }
  }
  else{
    res.json({success:false,errors:"wrong email id"})
  }
})
// creating endoint for  --- newcollection data
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newcollection=products.slice(1).slice(-8)
  console.log("newCollection fetched");
  res.send(newcollection);
});

// creating endoint for  --- popular-in-women data
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({category:'women'});
  let popular_in_women=products.slice(0,4);
  console.log("popular_in_women fetched");
  res.send(popular_in_women);
});
// creating middleware to fetch user
const fetchUser=async(req,res,next)=>{
  const token = req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"please authenticate using valid token"})
  }
  else{
    try{
      const data=jwt.verify(token,"secret_ecom");
      req.user=data.user;
      next();
    }catch(error){
res.status(401).send({errors:"please authenticate usinga valid token"})
    }
  }

}



// creating endpoint for all product in cartdata
app.post('/addtocart',fetchUser,async(req,res)=>{
  console.log("added",req.body.itemId);
  let userData=await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemid]+=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartDat:userData.cart})
  res.send("item added to cart");
})


// creatingendpoint toremovecartdata
app.post('/removefromcart',fetchUser,async(req,res)=>{
  console.log('removed',req.body.itemId)
  let userData=await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemid]>0)
  userData.cartData[req.body.itemid]-=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartDat:userData.cart})
  res.send("removed");
})


// creating endpoint to get cartdata
app.post('/gecart',fetchUser,async(req,res)=>{
  console.log('getcart');
  let userData=await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})

app.listen(port, (error) => {
  if (!error) {
    console.log("server running on port  " + port);
  } else {
    console.log("Error:" + error);
  }
});
//using these api we creating admin panel
