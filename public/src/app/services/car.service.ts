import { Injectable } from '@angular/core';
import { Car } from '../models/car.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) {}

  getAllCars() {
    return this.http.get<Car[]>('/api/cars');
  }
  getOneCar(id: string) {
    return this.http.get<Car>(`/api/cars/${id}`);
  }
  updateOneCar(car: Car) {
    return this.http.put<Car>(`/api/cars/update/${car._id}`, car);
  }
  deleteCar(id: string) {
    return this.http.delete(`/api/cars/remove/${id}`);
  }
  createCar(car: Car) {
    return this.http.post<Car>('/api/cars/new', car);
  }
}
