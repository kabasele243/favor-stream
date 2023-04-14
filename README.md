Favor-Stream

Favor-Stream is a streaming platform built using Next.js that allows users to
watch their favorite movies, TV shows, and live events. The platform is designed
to be easy to use and has a clean, modern user interface. Features

    User authentication
    Search functionality
    Watchlist feature
    Recommended content based on user preferences
    Responsive design for mobile devices

Technologies Used

    Next.js
    React
    Node.js
    Express.js
    MongoDB
    AWS S3 for video storage

Getting Started

To get started with Favor-Stream, you will need to have Node.js and MongoDB
installed on your machine. You will also need to set up an AWS S3 account for
video storage.

Clone the repository to your local machine using git clone https://github.com/yourusername/favor-stream.git
Install dependencies using npm install
Create a .env file in the root directory of the project and add the following variables:


    MONGO_URI=your_mongodb_uri
    AWS_ACCESS_KEY_ID=your_aws_access_key_id
    AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
    AWS_REGION=your_aws_region
    AWS_BUCKET_NAME=your_aws_bucket_name
    JWT_SECRET=your_jwt_secret

Run the development server using npm run dev
Navigate to http://localhost:3000 in your browser to see the app.

Contributing

If you would like to contribute to Favor-Stream, please follow these steps:

Fork the repository
Create a new branch for your feature or bug fix
Commit your changes and push your branch to your fork
Submit a pull request to the develop branch of the main repository

License

Favor-Stream is licensed under the MIT License. See LICENSE for more
information.
