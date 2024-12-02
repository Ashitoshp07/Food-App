const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/food-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 3000, // Set a higher value if needed
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
};

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

module.exports = connectDB;

