console.log('FactoryPattern.ts entry point');

// src/FactoryPattern.ts

abstract class Product {
  abstract name: string;
  abstract price: number;

  display(): void {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

class PhysicalProduct extends Product {
  name = 'Physical Product';
  price = 100;
}

class DigitalProduct extends Product {
  name = 'Digital Product';
  price = 50;
}

class ServiceProduct extends Product {
  name = 'Service Product';
  price = 150;
}

class ProductFactory {
  static createProduct(type: string): Product {
    switch (type) {
      case 'physical':
        return new PhysicalProduct();
      case 'digital':
        return new DigitalProduct();
      case 'service':
        return new ServiceProduct();
      default:
        throw new Error('Invalid product type');
    }
  }
}

export {
  Product,
  PhysicalProduct,
  DigitalProduct,
  ServiceProduct,
  ProductFactory
};
