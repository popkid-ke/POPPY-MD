const { popkid } = require("../framework/popkid");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


skipper({ nomCom: 'test',
    desc: 'To test the bot',
    Categorie: 'General',
    reaction: '🐐', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    return repondre('*POPPY-MD is Alive!!!!!!!*\n ```' + powered by + '``` *POPKID-KE*```') 
  }
)
 
