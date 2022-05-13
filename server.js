const express=require('express');
const connectDB=require('./config/db');




const app=express();
//connect to database
connectDB();
app.use(express.json({extended:false}));

//Routes

app.use('/',require('./routes/index'))
app.use('/api',require('./routes/url'))
app.listen(process.env.PORT || 5000);

