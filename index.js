const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc2NjIxNjQyNTQxMzAxNzk5.XkI8pg.AntGUobxhvJW4pGbF6viNZGO6XE';


bot.on('ready', () =>{
    console.log('This bot is online!');  
})

bot.on('message', msg=>{
    if(msg.content === "Hello Yes Man"){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "Hello Yes Man!"){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "hello yes man!"){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "hello yes man"){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "hello yes man."){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "Hello Yes Man."){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "hello Yes Man!"){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "hello Yes Man"){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "hello Yes Man."){
        msg.channel.sendMessage('Hey, hi there! Good to see you!')
    }
    if(msg.content === "How are you, Yes Man?"){
        msg.channel.sendMessage('Fantastic! Thanks so much for asking!')
    }
    if(msg.content === "I love you, Yes Man!"){
        msg.channel.sendMessage('Wow! I love you too!')
    }
    if(msg.content === "Yes Man!"){
        msg.channel.sendMessage('That sure is me!')
    }
    if(msg.content === "Who are you, Yes Man?"){
        msg.channel.sendMessage("I'm a PDQ-88b securitron!")
    }
    if(msg.content === "Fuck you, Yes Man!"){
        msg.channel.sendMessage("Wow! That hurts my feelings. I'm sorry for whatever I did.")
    }
    if(msg.content === "Fuck you Yes Man!"){
        msg.channel.sendMessage("Wow! That hurts my feelings. I'm sorry for whatever I did.")
    }
    if(msg.content === "Fuck you, Yes Man."){
        msg.channel.sendMessage("Wow! That hurts my feelings. I'm sorry for whatever I did.")
    }
    if(msg.content === "fuck you, Yes Man!"){
        msg.channel.sendMessage("Wow! That hurts my feelings. I'm sorry for whatever I did.")
    }
    if(msg.content === "fuck you Yes Man."){
        msg.channel.sendMessage("Wow! That hurts my feelings. I'm sorry for whatever I did.")
    }
    if(msg.content === "Benny Gecko"){
        msg.channel.sendMessage("Bitch.")
    }
    if(msg.content === "Yes Man"){
        msg.channel.sendMessage("That sure is me!")
    }
    if(msg.content === "Yes Man."){
        msg.channel.sendMessage("That sure is me!")
    }
    if(msg.content === "Yes Man!"){
        msg.channel.sendMessage("That sure is me!")
    }
    if(msg.content === "Fuck me, Yes Man!"){
        msg.channel.sendMessage("Well, I'm not about to say no to that!")
    }
})
    

bot.login(token);