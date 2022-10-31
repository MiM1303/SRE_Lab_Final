const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const db = require('./models')
const Sequelize = require('Sequelize')

app.use(express.json());

app.use(cors())

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body
    db.Users.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(user => {
        if (user) {
            res.json(user)
        } else {
            res.json({ error: 'Incorrect username or password' })
        }

})})

app.post('/api/adminlogin', async (req, res) => {
    const { username, password } = req.body
    db.Admin.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(user => {
        if (user) {
            res.send(user)
        } else {
            res.json({ error: 'Incorrect username or password' })
        }

})})

app.get('/api/application',async (req,res) => {
    await db.Users.findAll({ 
        limit: 2 ,
        order: [['total', 'DESC']]
    })
    .then(users => {
        res.json(users)
    })  
})

app.get('/api/viva', async (req, res) => {
    await db.Users.findAll({ 
        limit: 10 ,
        order: [['total', 'DESC']]
    })
    .then(users => {
        res.json(users)
    })  
})


app.post("/api/profile",async(req,res) => {
    const {user} = req.body
    if (user!="admin"){
        db.Users.findOne({
            where: {
                username: user
            }
        }).then(user => {
            if (user) {
                res.json(user)
            } else {
                res.json({ error: 'Incorrect username or password' })
            }
    
    })}
    }
)

app.post("/api/adminprofile",async(req,res) => {
    const {user} = req.body
        db.Admin.findOne({
            where: {
                username: user
            }
        }).then(user => {
            if (user) {
                res.json(user)
            } else {
                res.json({ error: 'Incorrect username or password' })
            }
    
    })}
)

app.get('/api/marks',async(req, res) => {
    db.Marks.findAll()
    .then(marks => {
        res.json(marks)
    })
})

app.post('/api/newmarks',async(req, res) => {
    const {userid,english,mathematics,physics,chemistry,biology,gk,hsc,ssc,viva,total,quota} = req.body
    db.Marks.create({
        userid: userid,
        english: english,
        mathematics: mathematics,
        physics: physics,
        chemistry: chemistry,
        biology: biology,
        gk: gk,
        HSC: hsc,
        SSC: ssc,
        Viva: viva,
        total: total,
        quota: quota
    }).then(marks => {
        res.json(marks)
    })
})


app.post('/api/marks',async(req, res) => {
    const {userid,english,mathematics,physics,chemistry,biology,gk,hsc,ssc,viva,total,quota} = req.body
    //update where userid is userid
    db.Marks.update({
        english: english,
        mathematics: mathematics,
        physics: physics,
        chemistry: chemistry,
        biology: biology,
        gk: gk,
        HSC: hsc,
        SSC: ssc,
        Viva: viva,
        total: total,
        quota: quota
    },{
        where: {
            userid: userid
        }
    }).then(marks => {
        res.json(marks)
    })
})

app.post('/api/total',async(req, res) => {
    const {userid,total} = req.body
    //update where userid is userid
    db.Users.update({
        total: total
    },{
        where: {
            id: userid
        }
    }).then(marks => {
        res.json(marks)
    })
})


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});