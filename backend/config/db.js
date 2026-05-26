const mongoose = require('mongoose');

/**
 * Connect to MongoDB using Mongoose.
 * Retries every 5 seconds on failure.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Retry after 5 seconds instead of crashing immediately
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
