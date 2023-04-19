import express  from 'express';
import { engine } from 'express-handlebars';
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
const students =[ 
    {
        id: 1,
        name: "sama",
    },
    {
        id: 2,
        name: "zeinab",
    },
    {
        id: 3,
        name: "Ahmed",
    },
    {
        id: 4,
        name: "rana",
    },
    {
        id: 5,
        name: "shahd",
    },
    {
        id: 6,
        name: "Mohamed",
    },
    {
        id:7,
        name:"youssef"
    }
]


app.get("/students",(req,res)=>
{
res.render("students",{name:'Ahmed',students});
});


// app.get("/students",studentsFunction);

// app.get("/user",(req,res )=>{
// res.send("userrrrrr")
    
// })

app.listen(2000);