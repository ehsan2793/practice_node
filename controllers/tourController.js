const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'sucess',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.getTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<updated tour...updated>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.send('done');
};
