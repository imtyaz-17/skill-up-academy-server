const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
const categories = require('./data/category.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Skill Up Academy - API running')
})
app.get('/course-categories', (req, res) => {
    res.send(categories)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '00') {
        res.send(courses);
    } else {
        const categoryCourses = courses.filter(cs => cs.category_id === id);
        res.send(categoryCourses);
    }

})

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);
})
app.listen(port, () => {
    console.log(`Skill Up Academy app listening on port ${port}`)
})