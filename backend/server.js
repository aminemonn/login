const express= require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",	
  user: "root",
  password: "",
  database: "detection",
 
})

app.post('/detection', (req, res) => {
  const sql ="INSERT INTO users(cin, nom, prenom, email, password) VALUES (?, ?, ?, ?, ?)";
   
    const values = [
    req.body.cin,
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.password
    ]
    db.query(sql, [values], (err, data) =>{
    if(err) {
    return res.json("Error");
    }
    return res.json(req.data);
    })
})
app.post('/detection', (req, res) => {
  const sql = "select * from users where email =? AND password=?";
 
  db.query(sql, [req.body.email,req.body.password], (err, data) =>{
  if(err) {
  return res.json("Error");
  }
 if (data.length>0){
return res.json("success")

 }else{
   return res.json("login echouee")
 }
  })
})
    app.listen(3000, () => {
    console.log("listening");
    })
