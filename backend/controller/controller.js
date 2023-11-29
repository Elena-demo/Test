import pool from "../../db.js";

// pool.query('SELECT NOW()', (err, result) => {
//     if (err) {
//         console.error('Ошибка выполнения запроса:', err);
//     } else {
//         console.log('Результат запроса:', result.rows[0]);
//     }
// });



export function selectBoks(req, res) {
    console.error('Ошибка выполнения запроса:');
    pool.query(`SELECT * from "Books"`, function(err, rows) {
        // if (err) return console.log(err);
        if (err) throw err;

        console.log(res.json(rows))
            // res.json(rows)
    });


}

export function test(req, res) {
    res.send('hello world')
}