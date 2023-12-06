const express = require('express')
const app = express()
const model = require('./model')
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/validate', async (req, res) => {
    const link = req.body.link
    const valid = await	 model.validate(link);
    // const preview = getPreview(link)

    res.send({
        valid,
        // preview,
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

// async function getPreview(link) {
//     const response = await fetch(link);
//     const document = await response.text()
//     const preview = document.substring(0, 500)

//     return preview
// }