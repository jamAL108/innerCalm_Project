const express = require("express");
const mongoose = require("mongoose")
const app = express();
const bodyParser = require('body-parser')
let port = 5000 || process.env.PORT;
const db = process.env.DB;
// const router = express.Router();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.set("strictQuery", true)
mongoose.connect(db).then(() => { console.log("Connection successful") }).catch((err) => { if (err) console.log(err) })


const postSchema = mongoose.Schema(
    {
        name: { type: String },
        story: { type: String, required: true }
    }
)

const post = mongoose.model("post", postSchema);

app.post('/newpost', (req, res) => {

    const { name, story } = req.body;

    const newpost = new post({
        name, story
    })

    newpost.save().then(() => {
        console.log("Post saved")
        res.status(200).json({ message: "Post added successfully" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ error: "Post not added" })
    })
})


app.get('/allposts', async (req, res) => {

    let posts = await post.find({})
    res.status(200).json(posts);
})






const contactSchema = mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        subject: { type: String },
        message: { type: String },
    }
)

const contact = mongoose.model("contact", contactSchema);

app.post('/newcontact', (req, res) => {

    const { name, email, phone, subject, message } = req.body;

    const newcontact = new contact({
        name, email, phone, subject, message
    })

    newcontact.save().then(() => {
        console.log("Post saved")
        res.status(200).json({ message: "Contacted successfully" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ error: "Not contacted" })
    })
})






//SERVER STARTED
app.listen(port, () => {
    console.log(`Listening at port : ${port}`)
})