import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute(`select * from users`);
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(JSON.stringify(user))
}

let getCreatePage = async (req, res) => {
    // let {name, email, country} = req.body; rút gọn 
    let name = req.body.name
    let email = req.body.email
    let country = req.body.country
    await pool.execute('insert into users(name, email, country) values(?, ?, ?)', [name, email, country]);
    // return res.send('create done')
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId
    await pool.execute('delete from users where id = ?', [userId]);
    return res.redirect('/');
    // return res.send(`Do you want delete ${req.body.userId}`) test lay id
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [id]);
    return res.render('update.ejs', {dataUser: user[0]});
}

let postUpdate = async (req,res) => {
    let {name, email, country, id} = req.body;
    await pool.execute('update users set name= ?, email= ?, country= ? where id = ?', [name, email, country, id]);
    return res.redirect('/');
}
 
module.exports = {
    getHomepage, getDetailPage, getCreatePage,deleteUser,getEditPage,postUpdate
}