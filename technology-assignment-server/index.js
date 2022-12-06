const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');

app.get('/', (req, res) =>{
    res.send('API running');
});

app.get('/courses', (req,res) =>{
    res.send(courses);
});

app.get('/courses/:id',(req,res) =>{
    const id = req.params.id;
    const selectedCourse = courses.find( c => c.id ===id);
    res.send(selectedCourse);
});
app.get('/checkout/:id',(req,res) =>{
    const id = req.params.id;
    const selectedItem = courses.find( c => c.id ===id);
    res.send(selectedItem);
});


app.listen(port, () =>{
    console.log('Server Running on Port');
})