const express = require('express');

const getAllUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Ths routes is not created yet',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Ths routes is not created yet',
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Ths routes is not created yet',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Ths routes is not created yet',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Ths routes is not created yet',
  });
};

const router = express.Router();
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
