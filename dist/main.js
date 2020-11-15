"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Discord = __importStar(require("discord.js"));
var express = require('express');
var app = express();
var dotenv_1 = require("dotenv");
dotenv_1.config();
var client = new Discord.Client();
console.log(process.env.SECRET);
var port = process.env.PORT;
console.log("Port is " + port);
client.once('ready', function () {
    console.log('Kádár is ready to fight');
});
client.login(process.env.SECRET).then(function (r) {
});
app.get('/', function (req, res) {
    res.send('Kedves elvtárs, ....');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
