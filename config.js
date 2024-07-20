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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_14_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExLFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidEl1bCt4SjZibEJiWWVRMGpvTWNkWlp3dHpWUHdYUnZKY21sNW1ycHRrWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamdXd3VnMHNSb0NCWVdabEpGX1JaZ1wiLFxuICBcInBob25lSWRcIjogXCI2ZWEzMTI1Zi1jMWFmLTRkYzktYTkwNy1kOTEzMTQ0NzI5NTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICA5OCxcbiAgICAgIDEzNyxcbiAgICAgIDkxLFxuICAgICAgMjE0LFxuICAgICAgMTk5LFxuICAgICAgMjgsXG4gICAgICAyMzIsXG4gICAgICA4MixcbiAgICAgIDE2LFxuICAgICAgMTA2LFxuICAgICAgMjI5LFxuICAgICAgMTU3LFxuICAgICAgMzksXG4gICAgICAxMDcsXG4gICAgICAxMDMsXG4gICAgICAyNTAsXG4gICAgICAxMjEsXG4gICAgICAyMTcsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA5MyxcbiAgICAgIDU1LFxuICAgICAgMTI5LFxuICAgICAgMTI0LFxuICAgICAgMyxcbiAgICAgIDE4NCxcbiAgICAgIDE5NSxcbiAgICAgIDE1NixcbiAgICAgIDE3MyxcbiAgICAgIDk4LFxuICAgICAgMjIxLFxuICAgICAgMjUyLFxuICAgICAgNzcsXG4gICAgICA5NSxcbiAgICAgIDExLFxuICAgICAgMTY1LFxuICAgICAgODgsXG4gICAgICAyNTAsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5M1dZNVFBQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTc5NTk5OTc0OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQwMDU5MzA2OTI3MzY6NTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnFGaHVBREVJYlU3clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPOHZZU3pmZ1Q4b0hSZXV3ZmFLL25XdGJFa1Q0SWgxM3pSL2RqeHlVTEdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBZVnhIeDFRN0h1OVQrUnl3aEYzNTBDSjBESkpOSnA5cmJCNkZlSGh0UDREd01GQ0QxYTFiS3oyVlRwcjV0VlAwNk03NkxEM25hQUh0VXZhSlVPZUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNuTjlrWWkyU0tWSWlObWN5WXE0QXM4eEdMUzFSaE42bUxzNzF6ZUoranZwM0l6NGVtdXV6b1hKK0V0Ry9ibFVacFZRYnRGVzA2Rnc3QzlNVWNpakN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDk3OTU5OTk3NDo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ3NzY0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs1bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzVtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTkRkYmhQMnpvTTlUblBnVU5MRy9JeGhjZmx2ZzNqUFB3V0xrWVhiVEcyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA2NzMxOTI5LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
