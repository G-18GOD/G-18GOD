import express from "express";
import mongoose from "mongoose";
import Cards from "./dbcards.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001
const connect_url = 'mongodb+srv://admin:abcd123456789@tinder-clone.7scc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connect_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/',(req,res) => res.status(200).send("hello"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err,data) => {
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port,() => console.log(`listening on localhost: ${port}`));