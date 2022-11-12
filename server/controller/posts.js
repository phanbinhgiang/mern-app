import { PostModel } from '../models/PostModels.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log('posts', posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await PostModel.create({ ...req.body });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      { ...updatePost },
      { new: true },
    );
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
