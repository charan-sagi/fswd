var express = require("express")
var app = express()
var port = 8888

module.exports = app

app.get("/now", (req, res) => {
    
    let part = req.query.part 

    if (part == "time") {
        let date = new Date()
        let result = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        res.send(`<h1>${result}</h1>`)
    }

    else if (part == "date") {
        let date = new Date()
        let result = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
        res.send(`<h1>${result}</h1>`)
    }

    else {
        let result = new Date()
        res.send(`<h1>${result}</h1>`)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
