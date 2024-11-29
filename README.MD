# Gadget Heaven - Gadget For Everyone

## Live Website Link

[Gadget Heaven](https://gadget-heaven-pro-max.netlify.app/)

## Requirement Document Link

The requirement document for the project can be found here:
[Requirement Document](/Batch-10_Assignment-08.pdf)

## React Fundamentals Used in the Project

This project utilizes the following React fundamental concepts:

1. **Functional Components**:

    - Most of the components in this project are functional components that make use of React hooks like `useState` and `useEffect`.

2. **State Management**:

    - `useState` is used to manage local state in the components.
    - State is used to handle the cart items, wishlist, and modal visibility.

3. **React Hooks**:

    - `useEffect`: Used for side effects like fetching data and syncing localStorage with state.
    - `useState`: Used to handle component state, such as active state for cart and wishlist.

4. **Conditional Rendering**:

    - Used to toggle between different views such as Cart and Wishlist based on user selection.

5. **Component Reusability**:

    - Components like `CartItem` are reusable, taking props and displaying dynamic content.

6. **React Router**:
    - Used for navigating between different routes within the app (e.g., Dashboard, Cart, Wishlist).

## Data Handling and Management

This project uses the following techniques to manage and handle data:

1. **Local Storage**:

    - **Cart List** and **Wishlist** are stored in the browser's localStorage to persist data between page reloads.
    - Functions like `getStoredCartList` and `getStoredWishList` are used to fetch the stored data from localStorage.

2. **Local State**:

    - `useState` is used to store and manage state data for cart and wishlist.
    - State updates trigger re-renders, ensuring that the UI reflects the current data.

3. **Side Effects**:

    - `useEffect` is used for managing side effects like updating the cart or wishlist from localStorage.

## Features of the Website/Project

1. **Cart Management**:

    - Users can add multiple instances of the same item to the cart.
    - The cart total dynamically updates as items are added or removed(after purchase) .

2. **Wishlist Functionality**:

    - Users can add items to the wishlist.
    - Items in the wishlist are stored in localStorage and can be viewed across sessions.

3. **Sorting Items by Price**:

    - Users can sort the items in the cart by price in descending order for better shopping experience.

4. **Payment Confirmation Modal**:
    - After completing a purchase, a modal is displayed confirming the payment success along with the total price.
