const postsModel = require("../models/postsModel");

const Add = async (req, res) => {
    try {
        let { title, description, isActive } = req.body;
        const newPost = new postsModel({
            title: title,
            description: description,
            isActive: isActive
        });
        const savedPost = await newPost.save();
        return res.status(200).json({ status: 200, message: "Post Added Successfully" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const All = async (req, res) => {
    try {
        const allPosts = await postsModel.find({});
        return res.status(200).json({ status: 200, message: "Posts Details Fetched Successfully", data: allPosts });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const Show = async (req, res) => {
    let _id = req.params._id;
    try {
        const specificPost = await postsModel.findOne({ _id: _id });
        return res.status(200).json({ status: 200, message: "Post Details Fetched Successfully", data: specificPost });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const Update = async (req, res) => {
    let _id = req.params._id;
    let { title, description, isActive } = req.body;
    let newObj = {
        title: title,
        description: description,
        isActive: isActive
    };
    try {
        const updatePost = await postsModel.updateOne({ _id: _id }, { $set: newObj });
        return res.status(200).json({ status: 200, message: "Post Updated Successfully" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const Remove = async (req, res) => {
    let _id = req.params._id;
    try {
        const removePost = await postsModel.deleteOne({ _id: _id });
        return res.status(200).json({ status: 200, message: "Post Removed Successfully" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

module.exports = { Add, All, Show, Update, Remove };