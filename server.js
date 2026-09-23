const express = require('express');
const interviewRouter = require('./routes/interview.route');
const  app = express();
const PORT = process.env.PORT||3000;
const cors = require('cors');



app.use(cors({
    origin:" http://localhost:5173"
}))
app.use(express.json());
app.use(interviewRouter);

app.listen(PORT,()=>{
    console.log(`Server is running in the ${PORT}`);
    
})