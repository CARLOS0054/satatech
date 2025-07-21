// netlify/functions/consulta.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Variável de ambiente no Netlify
  ssl: { rejectUnauthorized: false } // Necessário para Neon
});

export async function handler(event, context) {
  try {
    const result = await pool.query("SELECT * FROM sua_tabela LIMIT 10;");
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
