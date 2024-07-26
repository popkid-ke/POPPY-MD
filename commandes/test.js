"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { popkid } = require("../framework/popkid");
skipper({ nomCom: "repo", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello This is  *POPPY-MD* \n\n ' + "The Following is *POPPY-MD Repo.*";
    let d = ' https://github.com/popkid-ke/POPPY-MD';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/29ad5348203648a5ebad9.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *POPPY-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *POPKID-KE*'
      let varmess=z+d
      var img='https://telegra.ph/file/29ad5348203648a5ebad9.jpg';
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
