const express= require('express');
const cors=require('cors');
const dotenv= require('dotenv');
const connectDB = require('./dbconfig');

dotenv.config();//Configured dotenv file
const app = express();
app.use(express.json());//JSON Parser
app.use(cors());
connectDB();

//importing routes
app.use('/api/users',require('./routes/user_routes'));

//start express server on the Port no of env file
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});