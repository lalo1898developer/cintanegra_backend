const { UserService } = require('../service');
const { comparePasswords, createToken } = require('../utils');

module.exports = {
  create: async (req, res) => {
    try {
      const userExist = await UserService.readOneByEmail(req.params.email);
      if (userExist) res.status(400).json({ message: 'Email already taken' });
      const user = await UserService.createOne(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  readOne: async (req, res) => {
    try {
      const user = await UserService.readOne(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  readAll: async (req, res) => {
    try {
      const user = await UserService.readAll();
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  update: async (req, res) => {
    try {
      const user = await UserService.readOne(req.params.id);
      if (!user) res.status(404).json({ message: 'User not found' });
      const modifiedUser = await UserService.updateOne(req.params.id, req.body);
      res.status(200).json(modifiedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  delete: async (req, res) => {
    try {
      const user = await UserService.readOne(req.params.id);
      if (!user) res.status(404).json({ message: 'User not found' });
      await UserService.updateOne(user, { is_active: false });
      res.status(204).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  signup: async (req, res) => {
    try {
      const userExist = await UserService.readOneByEmail(req.params.email);
      if (userExist) res.status(400).json({ message: 'Email already taken' });
      const user = await UserService.createOne(req.body);
      user.password = undefined;
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await UserService.readOneByEmail(email);
    if (!user) res.status(400).json({ message: 'Error on credentials' });
    const isValid = await comparePasswords(user.password, password);
    if (!isValid) res.status(400).json({ message: 'Error on credentials' });
    const token = await createToken(user);
    res.status(200).json({ message: 'login successful', token });
  },
};
