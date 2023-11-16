const express = require('express')
const app = express()
const db = require('./connection')
const postModel = require('./postModel')
const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())


app.post('/', async(req, res)=> {
    const {username, password, email, solved} = req.body;
    try{
        const newPost = await postModel.create({username, password, email, solved});
        res.json(newPost)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/', async(req, res) => {
    try{
        const posts = await postModel.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error)
    }
})


app.get('/:username', async(req, res) => {
    const {username} = req.params
    try{
        const post = await postModel.findOne({username:username})
        res.json(post);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.put(':/SearchUsername', async(req, res) => {
    const {SearchUsername} = req.params;
    const {username, password, email, solved} = req.body;
    try {
        const result = await postModel.deleteOne({username:SearchUsername});
        const newPost = await postModel.create({username, password, email, solved});
        res.json(newPost)   
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete('/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const result = await postModel.deleteOne({username:username});
        if (result) {
            res.json('Deleted successfully');
        } else {
            res.status(404).json('Post not found');
        }
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json('Internal Server Error');
    }
});


app.listen(3001, () => {
    console.log('listening to port 3001')
})
