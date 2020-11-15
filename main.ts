import * as Discord from "discord.js";

import {config} from "dotenv";
config();


const client = new Discord.Client();

console.log(process.env.SECRET);

client.once('ready', () => {
    console.log('Kádár is ready to fight')
})

console.log(process.env.SECRET);

client.login(process.env.SECRET).then(r => {
});
