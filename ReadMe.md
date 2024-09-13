# Design patterns use cases in typescript

## Introduction

This repository showcases practical implementations of various **design patterns** in TypeScript. Each design pattern is demonstrated with a real-world use case and comes with a full implementation that you can run as a Node.js console application. The goal is to provide clear, relevant examples that are helpful both for learning and evaluation.

## Overview

| Feature                           | Description                                                            |
| --------------------------------- | ---------------------------------------------------------------------- |
| **What are Design patterns?** :   | Reusable solutions to common software design problems.                 |
| **Why use design patterns?**:     | To improve code maintainability, flexibility, and reusability.         |
| **How do design patterns work?**: | By providing proven templates for solving recurring design challenges. |

### A Summary of Design Pattern Categories

| Category                                                                     | Description                                                                                                                                                                                  |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Creational Patterns](./src/Creational%20Patterns/CreationalPatterns.md)** | These patterns focus on how objects are created. They provide mechanisms to instantiate objects flexibly and efficiently, decoupling the client from the object's creation process.          |
| **Structural Patterns**                                                      | These patterns address how objects are composed and organized. They provide solutions for structuring objects and classes to create larger systems that are flexible and scalable.           |
| **Behavioral Patterns**                                                      | These patterns concern how objects interact and communicate with each other. They offer solutions for managing object behavior, such as algorithms, responsibilities, and state transitions. |

## Factory Pattern

### Theoretical Overview

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. Instead of directly instantiating classes, the factory method encapsulates the object creation logic.

### Real-world Use Case: E-commerce Products

In this example, we use the Factory Pattern to handle the creation of various types of products in an e-commerce system. The factory decides whether to create a physical product, a digital product, or a service based on the input.

### Example Usage

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

_You can find the full implementation of the Factory Pattern_ **[here](./src/Creational%20Patterns/FactoryPattern.ts)**
