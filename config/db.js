const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
<<<<<<< HEAD
    console.log('MongoDB Connected');
  } catch (err) {
    console.error("MongoDB connection failed", err.message);
=======
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed", err.message);
>>>>>>> 34bbefa9d746eb0963146424b3cf50b5c9b58f07
    process.exit(1);
  }
};

module.exports = connectDB;
