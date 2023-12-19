const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const port = 3000
const supabaseClient = require('@supabase/supabase-js')
const supabaseUrl = 'https://aflspjztszvkibymavgq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbHNwanp0c3p2a2lieW1hdmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2MDQ4ODcsImV4cCI6MjAxODE4MDg4N30.LHTLG1gGkkZ803apB-2MIuJpQaj7ZrUwQagy4-7M9Ys"
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.get("/", (req,res) => {
    res.sendFile("public/index.html", { roots: __dirname})
})

app.get("/about", (req, res) => {
    res.sendFile("public/about.html", { root: __dirname })
})
app.post("/buttons", async (req, res) => {
    const button_name = req.headers.button_name
    console.log(button_name)
    let response = await supabase
        .from('counts')
        .select()
    const row = response.data[0] // get current row data

    // update clicks per button
    response = await supabase
        .from('counts')
        .update({
            [button_name]: row[button_name] !== null ? row[button_name] + 1 : 1,
        })
        .eq('id', 1)
        .select()
})
app.listen(port)