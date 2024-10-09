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

## My process

### Built with

- **React.js** for building the user interface
- **React Router** for managing navigation and routing between pages
- **React Redux** for managing state throughout the application
- **REST API** for user authentication and authorization
- **CSS3** and **BEM methodology** for styling and maintainable code structure
- **Vercel** for seamless deployment and hosting

### What I learned

- **Initialize with Vite**: Initialized the application using `Vite`
- **Install Backend and Database**: Installed provided backend, populated a `MongoDB` database, and interacted with it through the GUI tool `MongoDB Compass`. Used `Node Version Manager` (`NVM`) to change Node.js versions depending of the project.
- **Interact with APIs**: Worked with APIs to communicate with the server and retrieve data based on provided Swagger UI doucmentation, using `Postman` to test API calls
- **Authenticate and Authorize Users**: Implemented token-base user authentication and authorization mechanisms
- **Manage State Globaly**: Managed application state using React-Redux and Redux Toolkit, with hooks like `useDispatch` and `useSelector`
- **Design REST APIs**: Designed a REST API for handling transactions, following the Swagger methodology, using VS Code extention OpenAPI and Swagger UI
- **Use React Router Hooks**: Utilized hooks like `useNavigate`, `useOutletContext`, and a custom hook `useSignMethod` for enhanced sign-in functionality

### Continued development

- keep the user session by utilizing localStorage to persist data
- remove hardcoded data when interacting with API by creating a `constants` file to store base URLs and API enpoints for easier maintenance and readability
- ensure that when editing the user's first name, the previously set last name remains unchanged
