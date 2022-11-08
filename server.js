const express = require("express")
const app = express()
const cors = require('cors')
const brunchData = require('./brunch-data')

app.use(cors())
app.use(express.json());

app.set("port", process.env.PORT || 3001)

app.locals= {
  title: 'Late Breakfast API', brunchData
}

app.get("/api/v1/brunch", (request, response) => {
  const brunchData = app.locals.brunchData;

  response.json({ brunchData });
});


app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});