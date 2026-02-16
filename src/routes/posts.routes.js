const express = require('express');
const postController = require('../controllers/posts.controller');

const router = express.Router();

// Add route-level validation middleware here when validators are introduced.
router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);

module.exports = router;
