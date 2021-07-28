<div align="center">
  <img src="assets/logo.svg" width=300 height=100>
    <h1>Guildcord</h1>
  <br />
  <p>
    <a href="https://discord.gg/b876586m6P"><img src="https://img.shields.io/discord/869516302581121025?color=5865F2&logo=discord&logoColor=white" alt="Guildcord server" /></a>
    <a href="https://www.npmjs.com/package/guildcord"><img src="https://img.shields.io/npm/v/guildcord.svg?maxAge=3600" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/guildcord"><img src="https://img.shields.io/npm/dt/guildcord.svg?maxAge=3600" alt="NPM Downloads" /></a>
  </p>
</div>

## About
### Guildcord is a simple [Node.js](https://nodejs.org/en/) module to interact with the [Guilded](https://www.guilded.gg/) Client API.
<br>

## Note ⚠️
### Using the API to 'bot' your user account is a gray area in Guilded terms of ToU compliance. Use it on your own risk.

<br>
<br>

## Installation

```
# NPM
npm install guildcord

# Yarn
yarn add guildcord
```

## Usage

### Basic Login
```js
const { Client } = require("guildcord");
const client = new Client();

client.login("email", "password"); // This connection won't stay long until next update.

client.on("ready", () => {
    console.log(client.user.id);
});
```

### Send Webhook
```js
const { Webhook, Embed } = require("guildcord");
const hook = new Webhook({
    url: "Guilded webhook url"
});

hook.send("Hello World");

// With embed
const Guildcord = new Embed()
    .assignTitle("Guildcord")
    .assignDescription("A simple library for interacting with the Client API")
    .assignColor(5814783)
    .assignTitleUrl("https://github.com/guildcord/guildcord");

hook.send({
  content: "About Guildcord",
  embeds: [Guildcord]
});
```

## License
Guildcord is licensed under [Apache-2.0](LICENSE)