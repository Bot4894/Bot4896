const fs = global.nodemodule["fs-extra"];

module.exports.config = {

 name: "caption",

 version: "1.0.1",

 hasPermssion: 0,

 credits: "Islamick Cyber Chat",

 description: "random caption",

 commandCategory: "caption",

 usages: "caption",

 cooldowns: 5,

};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {

 var { threadID, messageID, reason } = event;

 const moment = require("moment-timezone");

 const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");

 var idgr = `${event.threadID}`;

 var id = event.senderID;

 var name = await Users.getNameUser(event.senderID);


 var tl = ["- এক'ম།ত্র ভরস། (الله)🕋🪽" , "°\n\n -ভালো থাকুক ক্যাপশনে রিয়েক্ট না দেওয়া ব্রয়লার মুরগি'রা...!!🐸\n\n°" ,"বে্ঁয়া্ঁদ্ঁবি্ঁ মা্ঁপ্ঁ ক্ঁর্ঁবে্ঁন্ঁ🫡আ্ঁপ্ঁনা্ঁকে্ঁ এ্ঁক্ঁটা্ঁ থা্ঁপ্প্ঁর্ঁ মা্ঁর্ঁতে্ঁ চা্ঁই্ঁ⎯͢😑⎯⃝💙" ];


var rand = tl[Math.floor(Math.random() * tl.length)]


 mess = "{name}"


 if (event.body.indexOf("caption") == 0 || (event.body.indexOf("Caption") == 0)) {

 var msg = {

 body: `${rand}`

 }

 return api.sendMessage(msg, threadID, messageID);

 };


}


module.exports.run = function({ api, event, client, __GLOBAL }) { }
