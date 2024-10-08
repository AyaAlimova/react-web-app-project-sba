React Shopping Cart Project
This is a simple React-based shopping cart application that fetches products from an API, allows users to add products to the cart, and displays the total price of all products in the cart.

Features
Fetches product data from an external API (https://dummyjson.com/products).
Displays a list of products with their images, titles, and prices.
Allows users to add products to a cart.
Displays the cart content and calculates the total price of items in the cart.
Navigates between the product list and cart pages using React Router.

Usage
Viewing Products
The homepage (/) lists all available products fetched from the API. Each product displays an image, title, and price.
Users can click the Add to Cart button to add a product to their shopping cart.
Viewing Cart
The cart can be accessed by navigating to the /cart route or using the provided navigation menu.
The cart displays the list of products that have been added and calculates the total price of all products.
Notes
This project uses functional components and React hooks (useState, useEffect) to manage state and handle side effects.
It utilizes react-router-dom for navigation between different pages.
