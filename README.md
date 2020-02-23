# backend-service

This project acts a backend service which can allow a user to post product details along with a file upload feature. Built wit **NodeJs**,  **ExpressJS** & **MongoDB**.


## Devlopment

1. Clone the Repo:
```
git clone https://github.com/RupakQuestDot/backend-service.git
```

2. Navigate to root directory

```
cd backend-service
```

3. Install node dependencies

```
npm install (or) yarn install
```

4. Start development server

```
npm run dev (or) yarn run dev
```

## Production

1. Live server

```
npm start (or) yarn start
```

## Configuration
Go `.env` file in the root directory and do required changes
```
DB_URL = "ADD YOUR OWN DB URL"
```

### Middlewares Used

1. `body-parser` - The **body parser** middleware is especially **used** to extract the **body** from the incoming requests. In short, it extracts the data out of the request headers like the form data, etc,. It provides four modules to **parse** different types of data including, JSON **body parser**.
3. `multer` - **Multer** is a node. js middleware for handling multipart/form-data , which is primarily **used** for uploading files.
4. `morgan`- **Morgan** is a HTTP request logger middleware for **Node**. **js**. **It** simplifies the process of logging requests to your application. **You** might think of **Morgan** as a helper that generates request logs.

### Testing 
Use Postman as GUI tool to test the api end points.

After completing the setup, just navigate to `localhost:8081/api/` you will can see the message `Welcome to CRUD APP API..!`.
 
 ### End Points: 
 
1. To upload product choose `POST` method the URL : `localhost:8081/api/products` and the required entries of data with the following feilds `title, description, images, category, broucher` . Broucher feild accepts a file input. Also this method requires a `JWT` token to passed in headers, ie., user must be logged in.

2. Get All Products : Choose `GET` method, URL:`localhost:8081/api/products`.

3. Get Details of a product : Choose `GET` method, URL:`localhost:8081/api/products/:productId`, <:productId> must be an ID of Product.

4. Update the product details : Choose `PUT` method, URL:`localhost:8081/api/products/:productId`, <:productId> must be an ID of Product.

5. Delete the Product : Choose `DELETE` method, URL:`localhost:8081/api/products/:productId`, <:productId> must be an ID of Product.

Other than `POST` method all the routes are public.
