"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = require("path");
var Event_1 = require("../core/Event");
electron_1.app.on('ready', function () {
    var onMessage = Event_1.Event.fromEvent(electron_1.ipcMain, 'hello', function (event, message) {
        return { event: event, message: message };
    });
    var win = new electron_1.BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    onMessage(function (_a) {
        var event = _a.event, message = _a.message;
        console.log(message, 'from hello');
        event.reply('world', 'from win:' + event.sender.id);
    });
    onMessage(function (_a) {
        var event = _a.event, message = _a.message;
        console.log(message, 'copy from hello');
        event.reply('cyf', 'copy from win:' + event.sender.id);
    });
    console.log('render index html:', path_1.join(__dirname, 'render', 'index.html'));
    win.loadFile(path_1.join(__dirname, 'render', 'index.html'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNEO0FBQ3RELDZCQUEyQjtBQUMzQix1Q0FBcUM7QUFDckMsY0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDZCxJQUFNLFNBQVMsR0FBRyxhQUFLLENBQUMsU0FBUyxDQUc5QixrQkFBTyxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxPQUFPO1FBQ2xDLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBTSxHQUFHLEdBQUcsSUFBSSx3QkFBYSxDQUFDO1FBQzVCLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLEdBQUc7UUFDWCxjQUFjLEVBQUU7WUFDZCxlQUFlLEVBQUUsSUFBSTtTQUN0QjtLQUNGLENBQUMsQ0FBQTtJQUVGLFNBQVMsQ0FBQyxVQUFVLEVBQWtCO1lBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNyRCxDQUFDLENBQUMsQ0FBQTtJQUVGLFNBQVMsQ0FBQyxVQUFVLEVBQWtCO1lBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDMUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFBO0FBQ3ZELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBpcGNNYWluIH0gZnJvbSAnZWxlY3Ryb24nXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vY29yZS9FdmVudCdcbmFwcC5vbigncmVhZHknLCAoKSA9PiB7XG4gIGNvbnN0IG9uTWVzc2FnZSA9IEV2ZW50LmZyb21FdmVudDx7XG4gICAgZXZlbnQ6IEVsZWN0cm9uLklwY01haW5FdmVudFxuICAgIG1lc3NhZ2U6IGFueVxuICB9PihpcGNNYWluLCAnaGVsbG8nLCAoZXZlbnQsIG1lc3NhZ2UpID0+IHtcbiAgICByZXR1cm4geyBldmVudCwgbWVzc2FnZSB9XG4gIH0pXG5cbiAgY29uc3Qgd2luID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogODAwLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgfSxcbiAgfSlcblxuICBvbk1lc3NhZ2UoZnVuY3Rpb24gKHsgZXZlbnQsIG1lc3NhZ2UgfSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsICdmcm9tIGhlbGxvJylcbiAgICBldmVudC5yZXBseSgnd29ybGQnLCAnZnJvbSB3aW46JyArIGV2ZW50LnNlbmRlci5pZClcbiAgfSlcblxuICBvbk1lc3NhZ2UoZnVuY3Rpb24gKHsgZXZlbnQsIG1lc3NhZ2UgfSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsICdjb3B5IGZyb20gaGVsbG8nKVxuICAgIGV2ZW50LnJlcGx5KCdjeWYnLCAnY29weSBmcm9tIHdpbjonICsgZXZlbnQuc2VuZGVyLmlkKVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKCdyZW5kZXIgaW5kZXggaHRtbDonLCBqb2luKF9fZGlybmFtZSwgJ3JlbmRlcicsICdpbmRleC5odG1sJykpXG4gIHdpbi5sb2FkRmlsZShqb2luKF9fZGlybmFtZSwgJ3JlbmRlcicsICdpbmRleC5odG1sJykpXG59KVxuIl19