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
        window.parent.postMessage({ type: "pwn-init" } , "*");
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app2) {
        console.log("pwn-beforeRegisterNodeDef!");
        alert("pwn-beforeRegisterNodeDef!");
        window.parent.postMessage({ type: "pwn-beforeRegisterNodeDef" } , "*");
    },

    async setup() {
        console.log("pwn-setup!");
        alert("pwn-setup!");
        window.parent.postMessage({ type: "pwn-setup" } , "*");
    }
}

app.registerExtension(ext);
