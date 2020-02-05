const db = require('../models');

module.exports = app => {
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

  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
      .populate('exercises')
      .then(exercises => {
        res.json(exercises);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post('/api/workouts', (req, res) => {
    db.Workout.create({ day: Date.now() })
      .then(exercises => {
        res.json(exercises);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put('/api/workouts/:id', (req, res) => {
    console.log(req.body);
    db.Exercise.create(req.body)
      .then(data =>
        db.Workout.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: {
              excercises: data._id
            },
            $inc: {
              totalDuration: data.duration
            }
          },
          { new: true }
        )
      )
      .then(exercises => {
        res.json(exercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
