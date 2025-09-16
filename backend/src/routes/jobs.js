// backend/src/routes/jobs.js
import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM jobs");
    console.log("Jobs fetched:", rows);  // log everything
    res.json(rows);
  } catch (err) {
    console.error("Error fetching jobs:", err.message);
    res.status(500).json({ error: "Failed to fetch jobs", details: err.message });
  }
});


export default router;
