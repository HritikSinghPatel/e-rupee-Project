const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://deepak:EUiXHygM72rTSRpb@cluster0.3dxu4en.mongodb.net/pgminiproject?retryWrites=true&w=majority');
  console.log("database connected............")

}


const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    balance:String,
  });


  const User = mongoose.model('User', userSchema);

const server = express();

server.use(bodyParser.json());
server.use(cors())

server.post('/demo',async (req,res)=>{

    let user = new User();
    user.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.balance = req.body.balance;

    const doc = await user.save()


    console.log(doc);
    res.send(doc);
})


server.listen(5000,()=>{
    console.log("liteing.......")
})

