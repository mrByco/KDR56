import * as Discord from "discord.js";
const express = require('express')
const app = express()

import {config} from "dotenv";
config();


const client = new Discord.Client();

console.log(process.env.SECRET);
const port = process.env.PORT;
console.log(`Port is ${port}`);

client.once('ready', () => {
    console.log('Kádár is ready to fight')
})


client.login(process.env.SECRET).then(r => {
});



app.get('/', (req: any, res: any) => {
    res.send('Kedves elvtárs, ....')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

