const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root123",
    database: "StudensRecords",

  });


app.post("/create",(req,res) =>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;

    db.query(
        "INSERT INTO students (fname, lname, email, mobile, address) VALUES (?,?,?,?,?)",
        [fname, lname, email, mobile, address],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
})

app.get('/contact',(req,res)=>{
    res.send("hello I am from backend code to contact page");
})

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(3005,()=>{
    console.log("server run on port 3005");
})