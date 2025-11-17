import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set in .env');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Health check
app.get('/', (req, res) => {
  res.send('Neon DB API is running ✅');
});

// GET /api/students -> fetch all students
app.get('/api/students', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        member_id AS id,
        first_name || ' ' || last_name AS name,
        pronouns,
        email,
        phone_number,
        year_of_study,
        role
      FROM "Simple_Members".members_info
      ORDER BY member_id ASC;
    `);

    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching students:', err.stack || err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
