import pool from '../configs/connectDB';

let getAllUser = async (req, res) => {
    const [rows, fields] = await pool.execute(`select * from users`);
    return res.status(200).json({
        message: 'oke',
        data: rows
    })
}

let createUser = async (req, res) => {
    let { name, email, country } = req.body;

    if (!name || !email || !country) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into users(name, email, country) values (?, ?, ?)',
        [name, email, country]);

    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { name, email, country, id } = req.body;

    if (!name || !email || !country || !id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('update users set name= ?, email = ? , country = ? where id = ?',
        [name, email, country, id]);

    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from users where id = ?', [userId])
    return res.status(200).json({
        message: 'ok'
    })
}


module.exports = {
    getAllUser, createUser, updateUser, deleteUser
}