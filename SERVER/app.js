const express = require('express');
const morgan = require('morgan');
const connectMongoDB = require('./Config/db')

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.json());
app.use(morgan("tiny"));

app.get('/',(req,res)=>{
    res.send("baseball huh?");
})


app.listen(PORT, async ()=>{
    await connectMongoDB();
    console.log('server running!!')
})

/*
const serverStart = async () => {
    // these are just a distraction don't mind anyone
    try{
        console.log('1')
        await connectMongoDB();
        console.log('3')
        app.listen(PORT,  () => {
            console.log('server runnning!!!')
        })
    }catch(err){
        console.error('failed to connect to monog',err);
        process.exit(1)
    }
}

serverStart();
*/