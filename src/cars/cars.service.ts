import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = ['Toyota', 'Honda', 'Jeep'];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    return this.cars[id];
  }
}
