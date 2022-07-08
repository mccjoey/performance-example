const express = require("express");
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  // Delay de response
  // JSON.stringify({}) => "{}"
  // [5,2,1,4,3].sort()

  delay(4000);
  res.send(`Beep beep beep! ${process.pid}`);
});

app.listen(3000);
