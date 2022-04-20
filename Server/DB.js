import { createPool } from "mysql";
const connection = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "movies",

});
connection.on("error", (err) => {
  console.log("db error", err);
});

export default connection;
