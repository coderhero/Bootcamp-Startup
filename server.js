const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const bcrypt = require('bcrypt');


const { Course, Student, Instructor, User } = require('./models');
const PORT = 3001;
const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());


app.get('/', async (req, res) => {
try{
  res.json({msg: 'Welcome to the BS API!'});
}catch(e){
  console.log(e);
}
});


app.get('/students', async(req,res) => {
  try{
    const studentList = await Student.findAll({});
    res.json({studentList});

  }
  catch(e){
    console.log(e);
  }
});


app.get('/instructors', async(req,res) => {
  try{
    const instructorList = await Instructor.findAll({});
    res.json({instructorList});
  }
  catch(e){
    console.log(e);
  }
});


app.get('/courses', async(req,res) => {
  try{
    const courseList = await Course.findAll({});
    res.json({courseList});
  }
  catch(e){
    console.log(e);
  }
});


app.listen(PORT, () => {
  console.log('up and ATOM!!')
});
