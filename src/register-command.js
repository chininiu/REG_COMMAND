import 'dotenv/config'
import {REST,Routes,ApplicationCommandOptionType} from 'discord.js'

const commands = [
    {   name: 'sumof',
        description: 'get the sum of two numbers',
        options:[
            {
                name: 'first-num',
                description: 'Your first number',
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {   
                name: 'second-num',
                description: 'Your second number',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
]

const rest = new REST({version:'10'}).setToken(process.env.TOKEN);

(async ()=>{
   
    try{
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body:commands}
        );
         console.log("Registered");
    }
    catch(e){
        console.log(e)
    }
})();



























/* const commands = [{
    name: 'bot',
    description: "When you say 'yu', he say bot"}]

const rest = new REST ({version: '10'}).setToken(process.env.TOKEN);

(async() =>{
    try{
        await rest.put(
            Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID),
            {body : commands}
        );

    }catch(e){
        console.log(`eror in ${e}`)
    }
 })(); */

 