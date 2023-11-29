import express from 'express'
import bodyParser from 'body-parser'
import { selectBoks } from './backend/controller/controller.js'
// import { CorsOptions } from 'cors'
import pool from './db.js'
import { test } from './backend/controller/controller.js'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// pool.query('SELECT NOW()', (err, result) => {
//     if (err) {
//         console.error('Ошибка выполнения запроса:', err);
//     } else {
//         console.log('Результат запроса:', result.rows[0]);
//     }
// });


// app.get('/', test)
app.get('/', selectBoks)

app.listen(3000, () => console.log('server started on port 3000'))