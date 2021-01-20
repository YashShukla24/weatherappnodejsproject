const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
//process.env.PORT ||  hosting time mai agr ye vala port nhi mila to dusre port pr chl jaega apne hisab se

const port =  process.env.PORT || 8000;
const static_path=path.join(__dirname,"../public");
const templatePath= path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname,"../templates/partials");
app.set("view engine", "hbs");
app.set("views", templatePath);
//using a partials
hbs.registerPartials(partialsPath);
//html pGE PUBLIC FOLDER KO LINK KRNE KE LIYE STATIC EXPRESS USE KRENGE NS PUBLIC KA PATH DENA HAI
  app.use(express.static(static_path))  ;
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
  });
  app.get("/weather", (req, res) => {
    res.render("weather");
  });
  app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg:'Oops! page not found'
    });
  });
app.listen(port, () => {
  console.log(`listing the port at ${port} `);
});
