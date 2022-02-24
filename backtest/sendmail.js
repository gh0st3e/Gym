//Создание веб-сервера
var app = require('express')();
let cors = require('cors');
const { mongo } = require('mongoose');
app.use(cors());
// Загрузка html





app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/form.html');
});
app.get('/stat', function(req,res){
    res.sendFile(__dirname + '/stat.html')
    
});
app.get('/reviews', function(req,res){
    res.sendFile(__dirname+"/reviews.html")
})





app.post('/email', function (req, res) {
    console.log(req.headers['body']);
    let ClientName = JSON.parse(req.headers['body']).name
    let ClientLname = JSON.parse(req.headers['body']).lname
    let ClientTel = JSON.parse(req.headers['body']).tel
    let ClientEmail = JSON.parse(req.headers['body']).mail
    let Coach = JSON.parse(req.headers['body']).coach
    let Text = "Здравствуйте, " + ClientName + " " + ClientLname + ". Вы оставили заявку на заказ тренера " + Coach + ". Мы позвоним вам по номеру: " + ClientTel;
    
    sendemail(ClientEmail,Text); // Отправка на почту
    AddToDB(ClientName,ClientLname,ClientTel,ClientEmail,Coach) // Отправка на базу данных
    
    });

app.post('/sendreview', function(req,res){
    console.log(req.headers['body'])
    let Name = JSON.parse(req.headers['body']).name
    let Review = JSON.parse(req.headers['body']).review
    let Coach = JSON.parse(req.headers['body']).coach
    let Star = JSON.parse(req.headers['body']).star

    AddToReviewsDB(Name,Review,Coach,Star);
})





// Веб-сервер
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('listening web server');
});





//Подключение модулей для отправки на почту
require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
function sendemail(email,text) // Функция отправка данных на почту
{
    const mailOptions ={
        from: 'coachkurswork@gmail.com',
        to: email ,
        subject: 'Заявка на сайте',
        text: text
    }
    transporter.sendMail(mailOptions)
}





//Функция подключения к бд и отправке данных 
function AddToDB(name,lname,phone,email,coach)
{
    const mongo = require('mongodb').MongoClient

    mongo.connect('mongodb+srv://ghostfed:Denis2003@cluster0.it104.mongodb.net/db_name?retryWrites=true&w=majority', (err,client) =>{
        if(err){
            console.log(err);
            throw err
        }
        console.log("connected")
        const db = client.db('db_name')
        const users = db.collection('users')
        users.insertOne(
            {Name: name,Lname: lname, Phone: phone, Email: email,Coach: coach},
            (err,result) =>{
                if(err){
                    console.log(err)
                    throw err;
                }
            }
        )
    })
    ViewStat();
}

function AddToReviewsDB(name,review,coach,star)
{
    const mongo = require('mongodb').MongoClient

    mongo.connect('mongodb+srv://ghostfed:Denis2003@cluster0.it104.mongodb.net/db_name?retryWrites=true&w=majority', (err,client) =>{
        if(err){
            console.log(err);
            throw err
        }
        console.log("connected")
        const db = client.db('db_name')
        const users = db.collection('reviews')
        users.insertOne(
            {Name: name,Review: review, Coach: coach, Star: star},
            (err,result) =>{
                if(err){
                    console.log(err)
                    throw err;
                }
            }
        )
    })
    
}





function ViewStat()
{
    const MongoClient = require("mongodb").MongoClient
    const mongoClient = new MongoClient('mongodb+srv://ghostfed:Denis2003@cluster0.it104.mongodb.net/db_name.users?retryWrites=true&w=majority')
    async function run()
    {
        await mongoClient.connect();
        const db = mongoClient.db("db_name");
        const users = db.collection("users");
        const Coach1 = await users.find({Coach: "Aleksandr Baykov"}).toArray();
        const Coach2 = await users.find({Coach: "Denis Leonov"}).toArray();
        const Coach3 = await users.find({Coach: "Andrei Ivanov"}).toArray();

        const stars = db.collection("reviews")
        const Star1 = await stars.find({Coach: "Aleksandr Baykov"}).toArray();
        const Star2 = await stars.find({Coach: "Denis Leonov"}).toArray();
        const Star3 = await stars.find({Coach: "Andrei Ivanov"}).toArray();
        // Coach1.forEach(element => {
        //     console.log(element.Coach);
        //     console.log(Coach1.length);
        // });
        var Average1=+0;
        var Average2=+0;
        var Average3=+0;
        Star1.forEach(element => {
            
            Average1+=+element.Star
            
        })
        Star2.forEach(element => {
            
            Average2+=+element.Star
            
        })
        Star3.forEach(element => {
            
            Average3+=+element.Star
            
        })
        Average1/=Star1.length
        Average2/=Star2.length
        Average3/=Star3.length
        console.log(Average2);
        console.log(Average3);
        
        app.get('/info',function(req,res) {
            res.json({
            COACH1 : Coach1[0].Coach , COACHLENGTH1 : Coach1.length , STAR1 : Math.round(Average1),
            COACH2 : Coach2[0].Coach , COACHLENGTH2 : Coach2.length , STAR2 : Math.round(Average2),
            COACH3 : Coach3[0].Coach , COACHLENGTH3 : Coach3.length , STAR3 : Math.round(Average3)
        });
            
            
        })
        
    }
    run();

}
ViewStat();

function getReview()
{
    const MongoClient = require("mongodb").MongoClient
    const mongoClient = new MongoClient('mongodb+srv://ghostfed:Denis2003@cluster0.it104.mongodb.net/db_name.users?retryWrites=true&w=majority')
    async function run()
    {
        await mongoClient.connect();
        const db = mongoClient.db("db_name");
        const users = db.collection("reviews");
       
        const review = await users.find().toArray();
        console.log(review)
        review.forEach(element => {
            console.log(element.Name);
            console.log(element.Review);
        });
        app.get('/getreviews',function(req,res) {
            res.json({
            
            File: review
        });
            
            
        })
        
    }
    run();
}

getReview();