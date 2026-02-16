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

module.exports = { getAllPosts, getPostById };
