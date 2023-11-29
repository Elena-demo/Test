// import { Pool } from "pg";

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres', // Пользователь базы данных
    host: 'localhost', // Хост базы данных (обычно localhost)
    database: 'test', // Название базы данных, которую мы создали
    password: '1234', // Пароль пользователя postgres
    port: 5432, // Порт PostgreSQL (по умолчанию 5432)
});

export default pool