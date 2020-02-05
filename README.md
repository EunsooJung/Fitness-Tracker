# Burger Web Application

Create a Fitness Tracker web applicaion with MongoDB, Mongoose schema and handle routes with Express, applying MVC Pattern then deploy to heroku.

- [Fitness-Tracker-Web-Application: Heroku Demo](https://stark-gorge-35582.herokuapp.com/)
- [React version: Workout Tracker](https://github.com/EunsooJung/Workout-Tracker-React.git)

- [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```bash
# Install body-parser
npm i body-parser

# Install middleware
npm i express

# CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
npm i cors

# Install dotenv: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
npm i dotenv

# Run
node server.js or npm start (using nodemon)
```

## Preview

[![Fitness-Tracker](https://github.com/EunsooJung/Fitness-Tracker/blob/master/public/images/Fitness%20Tracker-Demo.gif)](https://github.com/EunsooJung/Fitness-Tracker/blob/master/public/images/Fitness%20Tracker-Demo.gif)

## Usage

### Basic Usage

To get Fitness Tracker, after downloading, you need to make sure Git Bash terminal open and looking at the correct folder. When you are within the correct location, you may type the following commands to ask her for information:

- node server.js

### Guidelines:

- Proceeds as follows:

To use this applicaion, Clone the applicaion to your local git repository or directory:

- In your terminal, git clone https://github.com/EunsooJung/Fitness-Tracker.git

To start:

- You have to install npm packages depend on my package.json file: "npm install"
- Open your terminal then "node server.js"

### Code Snippet

- Project structure

  [![Fitness-Tracker-Project-Structure](https://github.com/EunsooJung/Fitness-Tracker/blob/master/public/images/Project-Structure.png)]

- Source Code Check point

1. folder "models": It provides Mongoose Schema model

```javascript
  const mongoose = require('mongoose');

  const Schema = mongoose.Schema;

  const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  });

  const Exercise = mongoose.model('Exercise', ExerciseSchema);
    module.exports = Exercise;
  });
  }
```

2. folder "public": As the view layer, it provides present html page and ui logic.
   - api.js: Main role is communicate with Server API

```javascript
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  }
```

3. Controller layer: Server-Side routes

- Create all of this Fitness Tracker web application's routes (maps) using a exppress router.

```javascript
// Provide all workouts
app.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .populate('exercises')
    .then(exercises => {
      res.json(exercises);
    })
    .catch(err => {
      res.json(err);
    });
});
```

4. server.js:
   - Setup Fitness Tracker web applicaion's environments (npm package dependencies)
   - Import routes to access.
   - It provide MongoDB Atlas URI to connect cloud service

```javascript
require('./routes/htmlRoutes')(app, path);
require('./routes/apiRoutes')(app);
```

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [MVC Patterns](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

## Authors

- **Michael(Eunsoo)Jung**

* [Fitness Tracker-Application: Demo](https://stark-gorge-35582.herokuapp.com/)
* [My Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)
* [Link to Github](https://github.com/EunsooJung/Employee-Tracker)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/)

## License

This project is licensed under the MIT License
