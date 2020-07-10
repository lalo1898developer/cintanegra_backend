const { UserService, PostService } = require('../service');

module.exports = {
  create: async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
      const user = await UserService.readOne(idUser);
      const post = await PostService.createOne(body);
      const userWithPost = await UserService.addPost(user, post);
      res.status(201).json(userWithPost);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  readAll: async (req, res) => {
    const { idUser } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      const posts = await PostService.readAllActive(user);
      // const userWithPost = await UserService.readAllPosts(user);
      res.status(200).json(posts);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  readOne: async (req, res) => {
    const { idUser, id } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      const userWithPost = await PostService.readOne(user, id);
      res.status(200).json(userWithPost);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { idUser, id } = req.params;
    const { body } = req;
    try {
      const user = await UserService.readOne(idUser);
      const userWithPost = await PostService.updateOne(id, user, body);
      res.status(200).json(userWithPost.posts.id(id));
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { idUser, id } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      await PostService.updateOne(id, user, { is_active: false });
      res.status(204).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
