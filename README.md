# Calculator Microservice

This is a simple calculator microservice built using **Node.js** and **Express.js**. It supports basic arithmetic operations like addition, subtraction, multiplication, and division, along with advanced operations like exponentiation, square root, and modulo.

## Features
- Supports RESTful API endpoints for basic and advanced arithmetic operations.
- Implements **error handling** for invalid inputs and division by zero.
- Includes **logging functionality** using Winston to track requests and errors.

## Prerequisites
Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (Version 14 or later recommended)
- [Git](https://git-scm.com/downloads)

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/CODEHAPP/sit737-2025-prac4p.git
   cd sit737-2025-prac4p
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Microservice**
   ```sh
   npm start
   ```

   The service will start on `http://localhost:3000`.

## API Endpoints
### 1. Basic Arithmetic Operations
| Method | Endpoint         | Parameters              | Description              |
|--------|----------------|--------------------------|--------------------------|
| GET    | `/add`         | `num1`, `num2`          | Returns sum of numbers  |
| GET    | `/subtract`    | `num1`, `num2`          | Returns difference      |
| GET    | `/multiply`    | `num1`, `num2`          | Returns product         |
| GET    | `/divide`      | `num1`, `num2`          | Returns quotient        |

#### Example Request:
```sh
curl "http://localhost:3000/add?num1=10&num2=5"
```
#### Example Response:
```json
{
  "result": 15
}
```

### 2. Advanced Operations
| Method | Endpoint          | Parameters                 | Description                      |
|--------|-----------------|-----------------------------|----------------------------------|
| GET    | `/exponentiation` | `base`, `exponent`         | Returns `base^exponent`         |
| GET    | `/sqrt`          | `number`                   | Returns square root of number   |
| GET    | `/modulo`        | `dividend`, `divisor`      | Returns remainder               |

#### Example Request:
```sh
curl "http://localhost:3000/sqrt?number=16"
```
#### Example Response:
```json
{
  "result": 4
}
```

## Logging
- Logs are stored in the `logs/` directory.
- To monitor logs in real-time:
  ```sh
  tail -f logs/combined.log
  ```

## Deployment
To deploy this microservice on a cloud platform, you may use **Docker**, **Render**, or **Heroku**.

## Author
Developed as part of **SIT737 Cloud Native Application Development** coursework.

![image](https://github.com/user-attachments/assets/f88c029f-f118-49db-a58f-05f8e25549fa)
![image](https://github.com/user-attachments/assets/16ad7877-e095-487d-a761-442567194559)
![image](https://github.com/user-attachments/assets/d3d91c41-68ca-4c1f-8444-1616234a522c)
![image](https://github.com/user-attachments/assets/0f07b5e2-9449-496b-b608-8ee7bdbf7d8d)
![image](https://github.com/user-attachments/assets/b6a605e5-1308-45fe-a9a7-2b18e1050a7e)
![image](https://github.com/user-attachments/assets/79173473-ec55-4b6f-aaca-0ee228c7f83c)

