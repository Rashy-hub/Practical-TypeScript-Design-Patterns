console.log('main.ts entry point');

// src/main.ts
import { ProductFactory } from './Creational Patterns/FactoryPattern';

function main() {
  const physicalProduct = ProductFactory.createProduct('physical');
  physicalProduct.display();

  const digitalProduct = ProductFactory.createProduct('digital');
  digitalProduct.display();

  const serviceProduct = ProductFactory.createProduct('service');
  serviceProduct.display();
}

main();
