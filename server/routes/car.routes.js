const CarController = require("../controllers/car.controller");

module.exports = app => {
	app.get("/api/cars", CarController.getAllCars);
	app.get("/api/cars/:id", CarController.getOneCar);
	app.post("/api/cars/new", CarController.createCar);
	app.put("/api/cars/update/:id", CarController.updateCar);
	app.delete("/api/cars/remove/:id", CarController.deleteCar);
}