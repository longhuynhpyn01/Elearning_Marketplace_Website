const express = require("express");
const app = express();
const session = require("express-session");
const handlebars = require('express-handlebars');
const mongoose = require("mongoose");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(
    session({
        secret: "app",
        resave: false,
        saveUninitialized: true,
    })
);

const hbs = handlebars.create({
    extname: 'hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

const mainRouter = require("./routes/main");

app.use(mainRouter);

app.listen(port, () => {
    console.log(`App E-learning listening at http://localhost:${port}`);
});

//Connect to MongoDB
// mongoose
//   .connect(/*mongodb-URI*/)
//   .then(() => {
//     app.listen(3000);
//   })
//   .catch((err) => console.error(err));