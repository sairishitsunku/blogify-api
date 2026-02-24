const Post = require('../models/post.model.js');

const getAllPosts = (req, res, next) => {
  try {
    const { sortBy } = req.query;
    const isSortedByDate = sortBy === 'date';

    res.status(200).json({
      success: true,
      data: {
        message: 'Route handled by postController.getAllPosts',
        sortBy: sortBy || null,
        isSortedByDate,
      },
    });
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(201).json({
      success: true,
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getPostById = (req, res, next) => {
  try {
    const { postId } = req.params;

    res.status(200).json({
      success: true,
      data: {
        message: `Requested post with ID: ${postId}`,
        postId,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllPosts, createPost, getPostById };
