const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type",
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of exercise",
            },
            duration: {
                type: Number,
                required: 'Enter duration in minutes',
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        }
    ]
}); 
const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;