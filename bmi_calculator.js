const express = require("express");
const app = express();

// BMI Calculator Project with Node.js built by Ronald, with the guide of "The Complete 2022 Web Development Bootcamp Course" by Dr. Angela Yu

app.use(express.urlencoded({ extended: true }));

app.get('/bmiCalculator', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', function(req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var BMI = weight / (height * height);
    res.send("Your BMI is: " + BMI);

});

app.listen(3000, function() {
    console.log("Site is up on Port:3000")
})