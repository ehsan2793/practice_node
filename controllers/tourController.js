const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 200,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = +req.params.id;

  const tour = tours.find((tour) => tour.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'Failed',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'sucess',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((tour) => tour.id === id);
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
