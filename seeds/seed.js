if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connect to database from seeder')
});

const workoutSeed = [

    {
        day: new Date(new Date().setDate(new Date().getDate() - 6)),
        exercises: [
          {
            type: 'cardio',
            name: 'Running',
            duration: 25,
            distance: 4,
          },
        ],
      },
      {
        day: new Date(new Date().setDate(new Date().getDate() - 6)),
        exercises: [
          {
            type: 'cardio',
            name: 'Crunches',
            duration: 20,
            reps: 10,
            sets: 3,
          },
        ],
      },


  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: 'Circuit training',
        name: 'Bicep Curl',
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: 'resistance',
        name: ' Pull Up',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: 'resistance',
        name: 'Push Press',
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4,
      },
    ],
  },

  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: 'Circuit training',
        name: 'Quad Press',
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },

  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: 'strength',
        name: 'Bench Press',
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  },

  {

  day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: 'strength',
        name: 'Dumbbell single arm row',
        duration: 20,
        weight: 30,
        reps: 10,
        sets: 5,
      },
    ],
  },
  
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: 'resistance',
        name: 'Military Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });