# FEEDBACK FORM

## Description

_Duration: Weekend Project_

This Project is a feedback form where the user can fill out a multi page form, and submit answers to questions that get pushed to a database. Once all of the users questions are answered, the
info is pushed to the database, and they are able to fill out the form again. The site uses react routers to send the user to different components or pages depending on the quesion being asked.
I started out by making all of the boiler plate for the assignment. I then setup the components for each question and made the basic structure of the pages. After that, I setup redux, and 
connected it to each question, so that when the user answers a question, it is added to the local state in redux. After all questions are answered, I setup a review page to review all of the
questions one more time, and submit. The answers are then stored in a single object, and pushed to the database via axios. The user is then taken to a page where they can take the questions
again.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- Axios
- Nodemon
- React
- Redux
- Postgres SQL
- React Routers
- Material UI

## Installation
 
1. Open up your editor of choice and run an `npm install`
2. Run `npm run server` in your terminal
3. In another terminal, run `npm run client` to boot up the client side
5. Your browser should automatically go to `localhost:3000`

## Usage

1. You can fill out each question, and go back to edit quesitons as well
2. Once the last comment is filled out, you will be sent to a review screen with all of the questions and answers
3. Submit the form to send it to the database


## Built With

- node.js
- express.js
- Postgres SQL
- React
- Redux
- React Router
- Material UI
- Nodemon
- visual studio code


## Acknowledgement
Thanks to [Emerging Digital Academy](https://www.emergingacademy.org/) who equipped and helped me to make this application a reality.