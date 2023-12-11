const express = require("express");
const postsController = require("../controllers/postsController");

const router = new express.Router();

// Add a new post
router.post("/post", (req, res) => {
    postsController.Add(req, res);
});

// Show all posts
router.get("/posts", (req, res) => {
    postsController.All(req, res);
});

// Show specific post
router.get("/post/:_id", (req, res) => {
    postsController.Show(req, res);
});

// Update specific post
router.put("/post/:_id", (req, res) => {
    postsController.Update(req, res);
});

// Remove specific post
router.delete("/post/:_id", (req, res) => {
    postsController.Remove(req, res);
});

module.exports = router;