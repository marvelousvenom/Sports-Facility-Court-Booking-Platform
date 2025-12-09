import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bhargav_user:Bhargav_2003@acornglobus.ile1kli.mongodb.net/sports_booking?retryWrites=true&w=majority"
    );

    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
