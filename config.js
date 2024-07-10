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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_17_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjExLFxuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnR0VvODBEM2ZmckhqY0psQjc0NS9mOVhXWWg2THBlK29XQzJhaHQ2QURzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1blZDU0FtQVNwU3hPTEpFNzVubzFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2YTY3N2ZlLTUyMGEtNGIzYi1hMmI0LTM4YWMwZjFiZjQ5MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICA0MCxcbiAgICAgIDEzNCxcbiAgICAgIDIwNSxcbiAgICAgIDEyNixcbiAgICAgIDI3LFxuICAgICAgNTQsXG4gICAgICAxMjQsXG4gICAgICAyMTgsXG4gICAgICAxMjIsXG4gICAgICA3NyxcbiAgICAgIDI1MyxcbiAgICAgIDI5LFxuICAgICAgMTQ0LFxuICAgICAgNzksXG4gICAgICAxNzYsXG4gICAgICAxOTAsXG4gICAgICAxNyxcbiAgICAgIDIwNyxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICA1NixcbiAgICAgIDIwMixcbiAgICAgIDE4MixcbiAgICAgIDE4OSxcbiAgICAgIDM0LFxuICAgICAgMTUwLFxuICAgICAgMTE4LFxuICAgICAgMTUwLFxuICAgICAgMjMsXG4gICAgICA1NyxcbiAgICAgIDY0LFxuICAgICAgMTksXG4gICAgICAxNyxcbiAgICAgIDU4LFxuICAgICAgMjQ4LFxuICAgICAgMjAyLFxuICAgICAgMTA1LFxuICAgICAgNDAsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHMUJRQzJQR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTc5NTk5OTc0OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQwMDU5MzA2OTI3MzY6NDdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm1GaHVBREVQS2x0N1FHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPOHZZU3pmZ1Q4b0hSZXV3ZmFLL25XdGJFa1Q0SWgxM3pSL2RqeHlVTEdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNsaUJ4WFZOeTNGQ0M0TS9iUmpoYWdDbnVnUE0rTXE5SjdFTEpKVjVnckdrWjRXb0N5VjdlTjNPK3BFZXNTekIvRjlEeE1vR2RIdzVHT0ZwdTZOZ0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJVY2cvUU9nQ29sYWVIbXdtd1Y5N21JaExUZWVVdXNMM3l2YUVkZXZhTG5zWnc5TzdBdFFZQUxkYnVzZ0hzTWdhV2V0cmYyR2dEM3M5UWhxTnJsMUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDk3OTU5OTk3NDo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU3MDYxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs1bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzVsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTHR2emtRcFl5U0tVVFNhaENKOGFndXpndWd0Q2JIL0U5OE03Q2NrRmhMND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA2NzMxOTI5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NTYyNTI5NDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
