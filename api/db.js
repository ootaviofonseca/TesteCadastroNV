// Desc: Arquivo de conexão com o banco de dados
import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'cliente.cbs4syus6w2y.us-east-1.rds.amazonaws.com',
    port: "3306",
    user: 'mysuperuser',
    password: 'mysuperuser',
    database: 'meubanco'
});

db.connect((err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('Banco conectado com sucesso!');
});