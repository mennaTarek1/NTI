const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const post = require('./postDB');

// 1. Create Post
router.post("/", async (req, res) => {
    try {
        const { title, body } = req.body;
        const newpost = new post({ title, body });
        const savepost = await newpost.save();
        res.status(201).json(savepost);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// 2. Get All Posts
router.get("/", async (req, res) => {
    try {
        const posts = await post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// 3. Get Post by ID
router.get("/:id", async (req, res) => {
    try {
        const postid = await post.findById(req.params.id);
        if (!postid) return res.status(404).json({ Message: "post not found" });
        res.json(postid);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// 4. Update Post
router.put("/:id", async (req, res) => {
    try {
        const { title, body } = req.body;
        const updatapost = await post.findByIdAndUpdate(req.params.id, { title, body }, { new: true });
        if (!updatapost) return res.status(404).json({ Message: "post not found" });
        res.json(updatapost);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// 5. Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const postdelte = await post.findByIdAndDelete(req.params.id);
        if (!postdelte) return res.status(404).json({ message: "Post not found" });
        res.json({ message: "Post deleted" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

module.exports = router;

//6.Patch Post <<task>> => "تحديث جزئي
//عايزة اغير title بس
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params; //كود بوست عايزه احدثه
        const { title } = req.body;  //عنوان جديد عايزه اكتبه مكان قديم
        //دلوقتي عايزة ادور علي البوست و اعدل العنوان
        //id عشان احدث البوست ب  -> Mongoose method
        const updatedPost = await post.findByIdAndUpdate(id, { title }, { new: true });
        if (!updatedPost) return res.status(404).json({ message: "Post not found" });
        res.json(updatedPost);
        //new:true =>رجعلي النسخه الجديدة بعد الابديت مش القديمة
        //طيب لو انا ملقتش البوست هرجع 404
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});
