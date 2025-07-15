
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());// middelware
const data = fs.readFileSync(`${__dirname}/data.json`,'utf-8');
let posts = JSON.parse(data);
///get posts 
const getposts=(req,res)=>{
    res.status(200).json(posts);
}
///get post by id pram
const getpostbyid=(req,res)=>{
const id = parseInt(req.params.id);
const post = posts.find(p=>p.id===id);
res.status(200).json(post);
}
const createpost=(req,res)=>{
    const newpost ={
        userId: req.body.userId ,
        id:posts.length?posts[posts.length-1].id+1:1,
        title:req.body.title,
        body:req.body.body
    };
    posts.push(newpost);
    res.status(201).json(newpost);
    fs.writeFileSync('./data.json',JSON.stringify(posts,null,2),'utf-8');
}
const modifypost=(req,res)=>{
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p=>p.id===id);
  posts[index]={
    id:id,
    userId:req.body.userId,
    title:req.body.title,
    body:req.body.body
  }
  res.status(200).json(posts[index]);
  fs.writeFileSync('./data.json',JSON.stringify(posts,null,2),'utf-8');
}


//patch post
const patchPost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  post.title = req.body.title || post.title;
  post.body = req.body.body || post.body;
  post.userId = req.body.userId || post.userId;

  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
  res.status(200).json(post);
};

//delete post
const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) return res.status(404).json({ message: "Post not found" });

  const deleted = posts.splice(index, 1);
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
  res.status(200).json({ message: "Post deleted", post: deleted[0] });
};
app.route("/posts").get(getposts).post(createpost);
app.route('/posts/:id')
  .get(getpostbyid)
  .put(modifypost)
  .patch(patchPost)
  .delete(deletePost);
;
//listen server
const port = 8000;
app.listen(port,()=>{
    console.log("server listen");
});
//patch اعدل جزء من الداتا
//put اعدل كل البيانات الموجودة
