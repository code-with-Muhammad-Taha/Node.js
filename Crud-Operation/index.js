import express, { response } from "express";
import { log } from "node:console";

const app = express();

app.use(express.json());
//data-base
let users = [];

//Create Api
app.post("/user", (req, res) => {
  const data = req.body;

  if (data) {
    users.push(data);
  }
  if (!data) {
    return res.status(400).json({
      status: "false",
      message: "some problem",
    });
  }

  res.status(200).json({
    status: "true",
    message: "user added succesfully",
  });
});


//read Api

app.get("/user", (req,res)=>{
    res.status(200).json({
        status:"true",
        data:users
    })
})

app.listen(5500, () => {
  console.log("Server is Listening On Port 5500");
});
