if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}
const expres = require("express")
const app = expres();
const expresslayout = require("express-ejs-layouts");
const  route  = require("./routes");
const mongoose = require("mongoose")
const env = 

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expresslayout)
app.use(expres.static('public'))
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("CONNECTED TO DATABASE")
}).catch(err=>{
    console.log(err);
})
app.listen(process.env.PORT||3000)

app.get('/',route)

