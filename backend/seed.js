import mongoose from "mongoose";
import Court from "./models/Court.js";
import Coach from "./models/Coach.js";
import Equipment from "./models/Equipment.js";
import PricingRule from "./models/PricingRule.js";

const MONGO_URI =
  "mongodb+srv://bhargav_user:Bhargav_2003@acornglobus.ile1kli.mongodb.net/sports_booking";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB for seeding"))
  .catch((err) => console.error(err));

async function seed() {
  try {
    console.log("Clearing old data...");
    await Court.deleteMany();
    await Coach.deleteMany();
    await Equipment.deleteMany();
    await PricingRule.deleteMany();

    console.log("Inserting Courts...");
    await Court.insertMany([
      { name: "Indoor Court A", type: "indoor", basePrice: 200 },
      { name: "Indoor Court B", type: "indoor", basePrice: 250 },
      { name: "Outdoor Court C", type: "outdoor", basePrice: 150 }
    ]);

    console.log("Inserting Coaches...");
    await Coach.insertMany([
      { name: "John David", sport: "Badminton", isAvailable: true },
      { name: "Anand Kumar", sport: "Badminton", isAvailable: true },
      { name: "Sneha Reddy", sport: "Badminton", isAvailable: false }
    ]);

    console.log("Inserting Equipment...");
    await Equipment.insertMany([
      { name: "Racket", totalStock: 10 },
      { name: "Shoes", totalStock: 15 }
    ]);

    console.log("Inserting Pricing Rules...");
    await PricingRule.insertMany([
      {
        name: "Weekend Surcharge",
        type: "weekend",
        surcharge: 50,
        multiplier: 1,
        startHour: null,
        endHour: null
      },
      {
        name: "Peak Hours",
        type: "peakHour",
        multiplier: 1.5,
        surcharge: 0,
        startHour: 18,
        endHour: 21
      }
    ]);

    console.log("Seeding Completed Successfully!");
    process.exit();
  } catch (err) {
    console.error("Seed Error:", err);
    process.exit(1);
  }
}

seed();
