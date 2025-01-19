const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      // process.env.MONGO_URI
      "mongodb+srv://Test_db:Test_db@cluster0.duvmrrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      , {
    
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
