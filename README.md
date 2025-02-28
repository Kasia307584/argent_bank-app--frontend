# ArgentBank - banking user authentication API

ArgentBank is a financial web application designed to manage user accounts and transactions in a simple, secure, and user-friendly manner. This project aims to provide users with a seamless experience to view account details, manage their profile, and perform basic banking operations such as checking balances and editing personal information.

The front-end of ArgentBank was built using modern web technologies to ensure high performance and scalability. It interacts with a back-end server to provide secure user authentication and manage account data efficiently.

This app was developed as part of the [OpenClassrooms](https://openclassrooms.com/) curriculum.

## Overview

### Screenshot

![](/assets/screenshot.png)

### The challenge

Users should be able to:

- Log in to the application
- See thier welcoming page when loged in
- Edit their personal informations and save them to a database
- Log out from the application

### Links

- Live Site URL: [See the live page here](https://argent-bank-snowy.vercel.app/)
- API Transactions Documentation: [View the API proposal here](./api/swagger-transactions.yaml)

## My process

### Built with

- **React.js** for building the user interface
- **React Router** for managing navigation and routing between pages
- **React Redux** for managing state throughout the application
- **REST API** for user authentication and authorization
- **CSS3** and **BEM methodology** for styling and maintainable code structure
- **Vite** for fast development and optimized builds
- **Vercel** for seamless deployment and hosting

### What I learned

- Initializing the application using Vite.
- Installing the provided backend, populating a MongoDB database, and interacting with it using MongoDB Compass.
- Using NVM to switch Node.js versions for different parts of the project (front-end and back-end).
- Interacting with APIs based on provided Swagger UI documentation, testing API calls with Postman.
- Handling token-based user authentication and authorization.
- Managing the application with global state using React Redux and Redux Toolkit, with hooks like `useDispatch` and `useSelector`.
- Designing a REST API for handling transactions using the Swagger methodology to define the API structure, the OpenAPI extention in VS Code to facilitate writing, and Swagger UI to visualize the API. [View the API proposal here](./api/swagger-transactions.yaml).
- Using React Router hooks like `useNavigate`, `useOutletContext`, and a custom hook `useSignMethod` for enhanced sign-in functionality.

### Continued development

- Keep the user session by utilizing localStorage to persist data.
- Remove hardcoded data when interacting with API by creating a `constants` file to store base URLs and API enpoints for easier maintenance and readability.
- Ensure that when editing the user's first name, the previously set last name remains unchanged.
