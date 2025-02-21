const express =require ("express")
const cors = require ("cors")
const mongoose = require ("mongoose")
const userRoute = require ("./router/userRoute")

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoute);

URI = 'mongodb+srv://sankarsv96:sankarsv@cluster0.f62xoll.mongodb.net/'

PORT = 8000;

mongoose.connect(URI).then(app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
    console.log("mangodb is connected succesfully")
}))

// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`)
// })


