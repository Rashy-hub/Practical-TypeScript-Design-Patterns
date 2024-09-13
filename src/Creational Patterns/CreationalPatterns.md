# Factory Pattern

## Theoretical Overview

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. Instead of directly instantiating classes, the factory method encapsulates the object creation logic.

## Real-world Use Case: E-commerce Products

In this example, we use the Factory Pattern to handle the creation of various types of products in an e-commerce system. The factory decides whether to create a physical product, a digital product, or a service based on the input.

## Example Usage

Here's how the factory is used in the main application:

```js
import { ProductFactory } from './FactoryPattern';

function main() {
  const physicalProduct = ProductFactory.createProduct('physical');
  physicalProduct.display();

  const digitalProduct = ProductFactory.createProduct('digital');
  digitalProduct.display();

  const serviceProduct = ProductFactory.createProduct('service');
  serviceProduct.display();
}

main();
```

_go back to main [readme.md](../../ReadMe.md)_
