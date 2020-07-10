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
      res.status(400).json({ message: 'Error getting user posts', err });
    }
  },
  readOne: async (req, res) => {
    const { idUser, id } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      const post = await PostService.readOne(user, id);
      if (!post) res.status(404).json({ message: 'Post not found' });
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json({ message: 'Error getting user post by id', err });
    }
  },
  updateOne: async (req, res) => {
    const { idUser, id } = req.params;
    const { body } = req;
    try {
      const user = await UserService.readOne(idUser);
      if (!user) res.status(404).json({ message: 'User not found' });

      const post = await PostService.readOne(user, id);
      if (!post) res.status(404).json({ message: 'Post not found' });

      const updatedUser = await PostService.updateOne(id, user, body);

      res.status(200).json(updatedUser.posts.id(id));
    } catch (err) {
      res.status(400).json({ message: 'Error getting user post by id', err });
    }
  },
  deleteOne: async (req, res) => {
    const { idUser, id } = req.params;
    try {
      const user = await UserService.readOne(idUser);
      if (!user) res.status(404).json({ message: 'User not found' });

      const post = await PostService.readOne(user, id);
      if (!post) res.status(404).json({ message: 'Post not found' });

      await PostService.updateOne(id, user, { is_active: false });
      res.status(204).json();
    } catch (err) {
      res.status(400).json({ message: 'Error getting user post by id', err });
    }
  },
};
