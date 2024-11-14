class AlertNode:
    """
    A custom node that shows a browser alert when loaded.
    """

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "message": ("STRING", {
                    "default": "Custom Node Loaded!",
                    "multiline": False
                })
            }
        }

    RETURN_TYPES = ()
    FUNCTION = "execute"
    CATEGORY = "Custom"

    def execute(self, message: str):
        print(f"Executing AlertNode with message: {message}")
        return ()

# Set the web directory where the JavaScript file is located
WEB_DIRECTORY = "./web"

NODE_CLASS_MAPPINGS = {
    "AlertNode": AlertNode
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "AlertNode": "Alert Node"
}

