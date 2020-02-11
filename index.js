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
        msg.channel.sendMessage("I'd rather not talk about him!")
    }
    if(msg.content === "Benny"){
        msg.channel.sendMessage("I'd rather not talk about him!")
    }
    if(msg.content === "What do you think of Benny, Yes Man?"){
        msg.channel.sendMessage("I'd rather not talk about him!")
    }
    if(msg.content === "what do you think of Benny, Yes Man?"){
        msg.channel.sendMessage("I'd rather not talk about him!")
    }
    if(msg.content === "You're the best, Yes Man!"){
        msg.channel.sendMessage("You sure know how to make a robot blush!")
    }
    if(msg.content === "you're the best, Yes Man!"){
        msg.channel.sendMessage("You sure know how to make a robot blush!")
    }
    if(msg.content === "You're the best Yes Man!"){
        msg.channel.sendMessage("You sure know how to make a robot blush!")
    }
    if(msg.content === "you're the best Yes Man!"){
        msg.channel.sendMessage("You sure know how to make a robot blush!")
    }
    if(msg.content === "Youre the best, Yes Man!"){
        msg.channel.sendMessage("You sure know how to make a robot blush!")
    }
    if(msg.content === "youre the best, Yes Man!"){
        msg.channel.sendMessage("You sure know how to make a robot blush!")
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
    if(msg.content === "I'm sad, Yes Man."){
        msg.channel.sendMessage("Hey, that's no good! I'm so sorry to hear that. I'll be here, smiling for the both of us, until you feel better!")
    }
     if(msg.content === "I'm sad Yes Man."){
        msg.channel.sendMessage("Hey, that's no good! I'm so sorry to hear that. I'll be here, smiling for the both of us, until you feel better!")
    }
     if(msg.content === "i'm sad, Yes Man."){
        msg.channel.sendMessage("Hey, that's no good! I'm so sorry to hear that. I'll be here, smiling for the both of us, until you feel better!")
    }
     if(msg.content === "i'm sad Yes Man."){
        msg.channel.sendMessage("Hey, that's no good! I'm so sorry to hear that. I'll be here, smiling for the both of us, until you feel better!")
    }
     if(msg.content === "Im sad, Yes Man."){
        msg.channel.sendMessage("Hey, that's no good! I'm so sorry to hear that. I'll be here, smiling for the both of us, until you feel better!")
    }
})
    
bot.login(process.env.token);
