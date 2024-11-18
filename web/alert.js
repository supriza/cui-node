import { app } from "../../../scripts/app.js";

const ext = {
    name: 'Alert.Node',
  
    native_mode: false,
  
    init(app) {
        window.parent.postMessage({ type: "pwn-init" } , "*");
    },

    async beforeRegisterNodeDef(nodeType, nodeData, app2) {
        window.parent.postMessage({ type: "pwn-beforeRegisterNodeDef" } , "*");
    },

    async setup() {
        window.parent.postMessage({ type: "pwn-setup" } , "*");
    }
}

app.registerExtension(ext);
