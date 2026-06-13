Its a backend for Proteus MoneyTracker v1

*** Documentation for using MoneyTracker APIv1 ***

Route 1 - Registration:
        Method: POST
        Path: :<domain>/api/v1/access/register
        Header: 'Content-Type': 'application/json'
        Request Body Requires: 
            username: String, Length:3-30, unique
            password: String, Length:3-60
            email: String, Length:3-..., unique
Route 2 - Login:
        Method: POST
        Path: :<domain>/api/v1/access/login
        Header: 'Content-Type': 'application/json'
        Request Body Requires:
            username: String OR email: String
            password: String
Route 3 - Login by jwt:
        Method: POST
        Path: :<domain>/api/v1/access/loginbyjwt
        Header: 'Content-Type': 'application/json', 'authorization': 'Bearer { JWT given when registering or loging in }'
        Request Body Requires:
            no requirements
Route 4 - Create a transaction:
        Method: POST
        Path: :<domain>/api/v1/transactions/create
        Header: 'Content-Type': 'application/json'
        Request Body Requires:
            type: String (must equal to "living", "food", "entertainment" or "income")
            price: Number
Route 5 - Delete transacrion:
        Method: DELETE
        Path: :<domain>/api/v1/transactions/delete_transaction/
        Request Should have: ID of transaction you want to delete after /delete_transaction in URL
        URL example: :3000/api/v1/transactions/delete_transaction/6a2697f591a8c365e38373fc
Route 6 - Find transactions:
        Method: GET
        Path: :<domain>/api/v1/transactions/spendings
        Request Should have: 'all',"living", "food", "entertainment" or "income" after /spendings in URL
        URL example: :3000/api/v1/transactions/spendings/all
Route 7 - All Money You Spent:
        Method: GET
        Path: :<domain>/api/v1/transactions/total/
        Request Should have: 'all',"living", "food", "entertainment" or "income" after /total in URL
        URL example: :3000/api/v1/transactions/total/all

--- Possible Request Statuses ---

500 - Error on Backend
400 - Bad Request
200 - Success