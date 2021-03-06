require("dotenv").config()
const Discord = require("discord.js");
const token = require("./config/auth").token;

const client = new Discord.Client();

//Log do bot ao ser iniciado
client.on("ready" , () => {
  console.log("Estou aqui!");
});
//Log do bot ao entrar em um servidor
client.on("guildCreat", guild => {
    console.log(`BoostBot entrou no servidor! Nome: ${guild.name} (ID: ${guild.id}). Total de membros: ${guild.memberCount}`);
    client.user.setActivity(`Estou em um total de ${client.guilds.size} servidores!`);
});
//Log do bot ao ser expulso/banido de um servidor
client.on("gulidDelete", guild => {
    console.log(`BoostBot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servidores!`);
});

console.log(process.env.TOKEN)
client.login(token);