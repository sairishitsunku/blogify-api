const express = require('express')
const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welcome to Blogify API");
});
const postsRouter = require('./routes/posts.routes');
app.use('/api/v1/posts', postsRouter);
const users = [];
app.post('/posts',(req,res)=>{
    const post = req.body;
    users.push(post);
    res.json({message:"post added successfully",post});
});
app.get("/users",(req,res)=>{
   res.json(users);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});