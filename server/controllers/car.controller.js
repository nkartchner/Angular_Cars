const Car = require("../models/car.model");

module.exports.getAllCars = (req, res) => {
  console.log(req.body);
  Car.find()
    .then(allDaCars => res.json(allDaCars))
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
};

module.exports.createCar = (req, res) => {
  console.log(req.body);
  Car.create(req.body)
    .then(car => res.json(car))
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
};

module.exports.updateCar = (req, res) => {
  console.log(req.body);
  Car.update({ _id: req.params.id }, req.body)
    .then(car => res.json(car))
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
};

module.exports.getOneCar = (req, res) => {
  console.log(req.params);
  Car.findOne({ _id: req.params.id })
    .then(car => res.json(car))
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
};

module.exports.deleteCar = (req, res) => {
  Car.deleteOne({ _id: req.params.id })
    .then(car => res.json(car))
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
};
