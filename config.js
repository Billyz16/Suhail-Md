const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260979599974";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_42_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYlhjbUNicU9DNTZKTThOSTNwTDJvS1phOHBqcjhiYnBNTm55amZFZzA1az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib19PU0VYRE1TRjZsZDhEanJESC1KQVwiLFxuICBcInBob25lSWRcIjogXCI5OWY4ZDkxNC1lMmU4LTQ1OTAtOTI0MS0zOTdkM2M2NTY0MWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDI0MyxcbiAgICAgIDIxMixcbiAgICAgIDE1MyxcbiAgICAgIDI0MyxcbiAgICAgIDc2LFxuICAgICAgMTE5LFxuICAgICAgMTQyLFxuICAgICAgMjI1LFxuICAgICAgMTY0LFxuICAgICAgMTAwLFxuICAgICAgMjQ4LFxuICAgICAgMTY1LFxuICAgICAgMTM3LFxuICAgICAgNjUsXG4gICAgICAyMzYsXG4gICAgICAxNTEsXG4gICAgICAxMDIsXG4gICAgICA3MyxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDIzNyxcbiAgICAgIDE2NSxcbiAgICAgIDcsXG4gICAgICAzMixcbiAgICAgIDE3OSxcbiAgICAgIDEwNyxcbiAgICAgIDc3LFxuICAgICAgMTAwLFxuICAgICAgMTgsXG4gICAgICAxMjUsXG4gICAgICAzNyxcbiAgICAgIDE3OSxcbiAgICAgIDk1LFxuICAgICAgMjQzLFxuICAgICAgMTE5LFxuICAgICAgMTYzLFxuICAgICAgMjksXG4gICAgICAyMDMsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzRRNzRWSEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3OTU5OTk3NDo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE0MDA1OTMwNjkyNzM2OjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxRmh1QURFSVN6OGJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTzh2WVN6ZmdUOG9IUmV1d2ZhSy9uV3RiRWtUNEloMTN6Ui9kanh5VUxHZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1OE1UMW9kdTBRdnd4a3FrcDI5NE9BUGlzcTZjdW51Nm9pQmJYWmZZTis3WVBQc3Z0bjN0eUJFRXZWbnVueVZadExqbXY4ZXVRemVadm5SSW5QK0pEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZK0p1S1ZZTUM0V01JU3FXdktOc09MN05ocUtqbzJ5a1dqLzNkRGNjZXZwSVQ2alhoMlZLSkpMamxJNDV3NGc1K09yRXVqTTdHSmpoWGxGYnJXOVZndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5Nzk1OTk5NzQ6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MjI1NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLNW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs1bS5qc29uIjogIntcImtleURhdGFcIjpcIk5EZGJoUDJ6b005VG5QZ1VOTEcvSXhoY2ZsdmczalBQd1dMa1lYYlRHMjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNjczMTkyOSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Billy",
  botname : process.env.BOT_NAME  || "Bilyy 16",
  ownername:process.env.OWNER_NAME|| "Billy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
