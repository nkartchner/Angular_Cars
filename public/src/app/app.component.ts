import { Component } from '@angular/core';
import { CarService } from './services/car.service';
import { Car } from './models/car.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: Car[] = [];
  newCar: Car = {
    year: 0,
    make: '',
    model: ''
  };
  selectedCar: Car;

  constructor(private carService: CarService) {}

  getAllDaCars() {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }
  submitNewCar() {
    this.carService.createCar(this.newCar).subscribe(data => {
      this.cars.push(data);
      this.newCar = {
        year: 0,
        make: '',
        model: ''
      };
    });
  }
  getOneCar(id: string) {
    this.carService.getOneCar(id).subscribe(data => {
      this.selectedCar = data;
    });
  }
}
