import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import courtRoutes from "./routes/courtRoutes.js";
import coachRoutes from "./routes/coachRoutes.js";
import equipmentRoutes from "./routes/equipmentRoutes.js";
import pricingRoutes from "./routes/pricingRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/courts", courtRoutes);
app.use("/api/coaches", coachRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
