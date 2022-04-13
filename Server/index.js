import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connection from "./DB.js";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hi");
});
app.get("/movieList",(req,res)=>{
    connection.query("SELECT * FROM movie",(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
