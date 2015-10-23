cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/plugin.socket.io/www/socketio.js",
        "id": "plugin.socket.io.SocketIO",
        "clobbers": [
            "plugin.socket.io"
        ]
    },
    {
        "file": "plugins/com.ququplay.websocket.WebSocket/www/phonegap-websocket.js",
        "id": "com.ququplay.websocket.WebSocket.websocket",
        "clobbers": [
            "WebSocket"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "phonegap-plugin-barcodescanner": "4.1.0",
    "plugin.socket.io": "1.0.0",
    "com.ququplay.websocket.WebSocket": "0.1.0"
}
// BOTTOM OF METADATA
});