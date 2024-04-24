const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  // const id = +req.params.id;
  // const tour = tours.find((item) => item.id === id);
  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'Failed',
  //     message: 'Invalid ID',
  //   });
  // }
  // res.status(200).json({
  //   status: 'sucess',
  //   data: {
  //     tour,
  //   },
  // });
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
