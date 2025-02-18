const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Express Pug Boilerplate' , foods: []});
});

// router.get("/count/:id", (req, res) => {
//   console.log(req.params.id)
//   if(req.params.id > 5){
//     res.render("index", {title: "hello", foods: []})
//   }
//   res.render("index", {title: req.params.id, foods: []})
// })

router.get("/list", (req, res) => {
  console.log("List Web")
  const items = ["Pizza", "Burger", "Pasta"]
  res.render("list", {foods: items})
})
module.exports = router;
