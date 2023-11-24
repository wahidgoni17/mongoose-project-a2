This project is made with typescript, express and mongoose. The project is mainly an advanced crud application with data validation and integrity.Here are the instructions to run the project locally

Ins1: When user hit the /api/user/ with post request and in the request body he/she send the user data, the data will save in the database

Ins2: when user create a get request and hit /api/user/ route, user can find all of the users data from the database

Ins3: When user wants to get a specific user data,the user have to hit /api/user/:userId and then user can find the specific user data

Ins4: When user wants to update a specific user data, the user have to hit /api/user/:userId with put request and in the request body user have to give the updated data

Ins5: when someone wants to delete a specific user data,
he have hit /api/user/:userId with delete request

Ins6: when someone wants add a product into a user's order field he have to give product details in request body and hit /api/user/:userId/orders with put request

Ins7: when someone wants know the total price of products added in the orders of a user he have to hit /api/user/:userId/orders/total-price with get request

Ins8: when a user wants to get the ordered product of a user, the user have to hit the /api/user/:userId/orders with a get request