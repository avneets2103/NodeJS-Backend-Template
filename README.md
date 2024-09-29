Backend template for use 
## How to Start using:
#### 1. Clone the repo:
`git clone https://github.com/avneetsingh/NodeJS-Backend-Template.git`
#### 2. Open the cloned repo:
`cd NodeJS-Backend-Template`
#### 3. Install the dependencies:
`npm install`
#### 4. Create a .env file:
`touch .env`
#### 5. Add the following variables to the .env file:
```
PORT = 4000
MONGODB_URI = ""
# jwt
ACCESS_TOKEN_SECRET = ""
REFRESH_TOKEN_SECRET = ""
ACCESS_TOKEN_EXPIRY = 10d
REFRESH_TOKEN_EXPIRY = 100d 
# for otp
otp_secret_key = ""
# for nodemailer
MAIL_PASSWORD = ""
MAIL_USER = ""
# for s3
S3_ACCESS_KEY_ID = ""
S3_SECRET_ACCESS_KEY = ""
S3_CLIENT_REGION = ""
S3_BUCKET_NAME = ""
```
#### 6. Run the server:
`npm run dev`   

## Included packages: 
1. @aws-sdk/client-s3
2. bcrypt
3. cloudinary
4. cookie-parser 
5. cors
6. dotenv
7. express 
8. fs 
9. jsonwebtoken 
10. mongoose 
11. mongoose-aggregate-paginate-v2
12. multer
13. nodemailer
14. nodemon
15. speakeasy

## Directory Structure: 
```
root
├── src
│   ├── Controllers
│   │   ├── user.controller.js  # A template controller for authentication
|  
│   ├── DB
│   │   ├── index.js  # DB connection with Mongo DB
│   
│   ├── Middlewares
│   │   ├── auth.middleware.js  # Authentication middleware
│   │   ├── multer.middleware.js # Multer for file handling
│   
│   ├── Models
│   │   ├── user.model.js  # Mongo DB model
│   
│   ├── Routes
│   │   ├── user.routes.js  # Routes for User Authentication
│   
│   ├── Utils
│   │   ├── ApiError.js  # API Error handling
│   │   ├── ApiResponse.js  # API Response handling
|   |   ├── asyncHandler.js  # Async Handler
|   |   ├── cloudinary.js  # Cloudinary for image upload
|   |   ├── helpers.js  # Helper functions
|   |   ├── messagingService.js  # Sending mails
|   |   ├── s3.js  # AWS S3 for file storage
│   
│   ├── app.js  # Express app
│   
│   ├── constants.js  # Constants
|
|   ├── index.js  # Main file
│
├── .env                        # Environment variables
├── .gitignore                   # Ignored files and directories
├── package.json                 # Project metadata and dependencies
├── README.md                    # Documentation
```

