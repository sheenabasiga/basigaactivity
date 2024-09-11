const express = require('express');
const app = express();

const myData = {
    first_name: 'Sheena Mechaela',
    last_name: 'Basiga',
    age: 21,
    school_email: 'shee.basiga.swu@phinmaed.com',
};

app.get('/firstname', (req, res) => {
    res.send(myData.first_name.toUpperCase());
});

app.get('/lastname', (req, res) => {
    res.send(myData.last_name.toUpperCase());
});

app.get('/age', (req, res) => {
    res.send(myData.age.toString());
});

app.get('/schoolemail', (req, res) => {
    res.send(myData.school_email);
});

app.get('/mydata', (req, res) => {
    res.json({
        first_name: myData.first_name.toUpperCase(),
        last_name: myData.last_name.toUpperCase(),
        age: myData.age,
        school_email: myData.school_email,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});