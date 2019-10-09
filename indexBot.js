'use strict'

let Discord = require('discord.js')     //al ser una clase tenemos que instanciarla
let client = new Discord.Client()       //al instanciar una clase devuelve un objeto

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`)
    console.log(client)
  });

client.on('message', msg => {
    //receiving to message
    console.log(msg.content)
    if(msg.content === 'Hola'){
        msg.reply('Mucho gusto. Soy Dwigth Bot')
    }

    if(msg.content === 'SoaProfessionals'){
        msg.channel.send('http://soapros.pe/')
    }
})

client.login('NjMxMzI5NTg0ODU1NTE1MTM2.XZ1RrA.ctvOFSMsrSIA2qw2HBLfwGFHnC0')