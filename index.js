const express = require('express')
const app = express()
const port = 3002

const  bodyParser = require('body-parser')
const db = require('./connection.js') 
const response = require('./request.js')

// penggunaan body parser
app.use(bodyParser.json())

app.get('/pelanggan', (req, res) => {
    db.query('SELECT * FROM pelanggan', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/barang', (req, res) => {
    db.query('SELECT * FROM barang', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/transaksi', (req, res) => {
    db.query('SELECT * FROM transaksi', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.get('/detail_transaksi', (req, res) => {
    db.query('SELECT * FROM detail_transaksi', (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            res.send(result);
        }
    });
});

app.post('/pelanggan', (req, res) => {
    const { pelanggan_id, nama_pelanggan, alamat, telepon } = req.body;
    const sql = `INSERT INTO pelanggan (pelanggan_id, nama_pelanggan, alamat, telepon) VALUES ('${pelanggan_id}', '${nama_pelanggan}', '${alamat}', '${telepon}')`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});

app.post('/barang', (req, res) => {
    const { barang_id, nama_barang, harga, stok } = req.body;
    const sql = `INSERT INTO barang (barang_id, nama_barang, harga, stok) VALUES ('${barang_id}', '${nama_barang}','${harga}', '${stok}')`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});

app.post('/transaksi', (req, res) => {
    const { transaksi_id, pelanggan_id, tanggal, total } = req.body;
    const sql = `INSERT INTO transaksi (transaksi_id, pelanggan_id, tanggal, total) VALUES ('${transaksi_id}', '${pelanggan_id}', '${tanggal}','${total}')`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});

app.post('/detail_transaksi', (req, res) => {
    const { detail_transaksi_id, transaksi_id, barang_id, jumlah, harga, subtotal } = req.body;
    const sql = `INSERT INTO detail_transaksi (detail_transaksi_id, transaksi_id, barang_id, jumlah, harga, subtotal) VALUES ('${detail_transaksi_id}', '${transaksi_id}', '${barang_id}','${jumlah}', '${harga}', '${subtotal}')`;

    db.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            response(500, null, "Internal Server Error", res);
        } else {
            const data = {
                isSuccess: result.affectedRows > 0,
                id: result.insertId
            };
            response(200, data, "Data berhasil disimpan", res);
        }
    });
});


app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})
