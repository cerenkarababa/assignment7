# MyShop - React Online Shop

## Project Description

MyShop is a simple online shopping application developed with React and Vite. It allows users to browse products, search and filter by category, view product details, log in, and manage a shopping cart.

## Technologies Used

- React
- Vite
- React Router
- Zustand
- Context API
- useReducer
- Fetch API
- JavaScript
- localStorage

## Installation and Running

1. Clone the repository:

   ```bash
   git clone https://github.com/cerenkarababa/assignment7.git
   ```

2. Navigate to the project directory:

   ```bash
   cd assignment7
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Demo Login Credentials

- **Email:** 230408045@st.biruni.edu.tr
- **Password:** demo123456

## Project Structure

```text
src/
  api/
    productsApi.js
    authApi.js
  hooks/
    useFetch.js
    useLocalStorage.js
  context/
    AuthContext.jsx
  store/
    cartStore.js
  components/
    Layout.jsx
    NavBar.jsx
    ProductCard.jsx
    ProtectedRoute.jsx
  pages/
    Home.jsx
    ProductList.jsx
    ProductDetail.jsx
    Cart.jsx
    Login.jsx
    NotFound.jsx
  App.jsx
  main.jsx
```

## Main Features

- Fetching products from FakeStore API.
- Searching products by title.
- Filtering products by category.
- Keeping search and category filters in URL query parameters.
- Viewing individual product details.
- Adding and removing products from the cart.
- Updating product quantities.
- Persisting cart data using localStorage.
- User login and logout simulation.
- Protecting the cart route.
- Persistent dark and light themes.

## Technical Questions and Answers

### 1. Why did you use useReducer in useFetch?

I used useReducer to manage the loading, success, and error states in one place. It makes the data-fetching logic easier to organize and maintain.

### 2. Why did you use URL search parameters for filtering?

I used useSearchParams to keep search and category filters in the URL. This allows users to share filtered product pages and keep their filters when refreshing the page.

### 3. Why did you choose Zustand for cart management?

Zustand provides a simple way to manage shared cart state without passing props through multiple components. It also allows different components to access and update the cart independently.

### 4. Why did you create custom hooks?

I created useFetch to reuse API-fetching logic and useLocalStorage to manage persistent browser storage. Custom hooks reduce repeated code and make components easier to understand.

### 5. How does the authentication system work?

The application uses Context API and useReducer to manage authentication state. The ProtectedRoute component redirects unauthenticated users to the login page. This is only a client-side demonstration and does not provide real security.

### 6. Why is localStorage used?

localStorage keeps cart data and theme preferences between page refreshes. This improves the user experience because users do not lose their saved cart or selected theme when reopening the application.

## Challenges and Solutions

One challenge was managing shared state between different components. I used Context API for authentication and Zustand for cart management.

Another challenge was handling asynchronous API requests. I used AbortController to cancel outdated requests and prevent unnecessary updates.

I also learned how to use React Router for nested routes, URL parameters, and protected pages.

## Security Note

This project uses simulated authentication with fixed demo credentials. It does not use a real backend, secure password storage, or server-side authentication. Client-side route protection is only for demonstration purposes and should not be considered real security.

## Deployment Note

The application uses React Router with client-side routing. When deploying to a static hosting service, the server must be configured to redirect unknown routes to index.html. Without this fallback, directly opening nested routes such as /products/1 may return a 404 error.

## Self-Study

During this project, I practiced React hooks, custom hooks, Context API, useReducer, Zustand, React Router, Fetch API, asynchronous JavaScript, and localStorage.

I also improved my understanding of component organization, state management, and Git version control.

## Repository

GitHub: https://github.com/cerenkarababa/assignment7