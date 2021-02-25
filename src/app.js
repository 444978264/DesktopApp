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
    var listener1 = onMessage(function (_a) {
        var event = _a.event, message = _a.message;
        console.log(message, 'from hello');
        event.reply('world', 'from win:' + event.sender.id);
        listener1.dispose();
    });
    var listener2 = onMessage(function (_a) {
        var event = _a.event, message = _a.message;
        console.log(message, 'copy from hello');
        event.reply('cyf', { aa: 'cyf', bb: [1, 2, 3, 4] });
        listener2.dispose();
    });
    console.log('render index html:', path_1.join(__dirname, 'render', 'index.html'));
    win.loadFile(path_1.join(__dirname, 'render', 'index.html'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNEO0FBQ3RELDZCQUEyQjtBQUMzQix1Q0FBcUM7QUFDckMsY0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDZCxJQUFNLFNBQVMsR0FBRyxhQUFLLENBQUMsU0FBUyxDQUc5QixrQkFBTyxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxPQUFPO1FBQ2xDLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBTSxHQUFHLEdBQUcsSUFBSSx3QkFBYSxDQUFDO1FBQzVCLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLEdBQUc7UUFDWCxjQUFjLEVBQUU7WUFDZCxlQUFlLEVBQUUsSUFBSTtTQUN0QjtLQUNGLENBQUMsQ0FBQTtJQUVGLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQWtCO1lBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuRCxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFrQjtZQUFoQixLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUE7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtRQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ25ELFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUMxRSxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7QUFDdkQsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3csIGlwY01haW4gfSBmcm9tICdlbGVjdHJvbidcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi9jb3JlL0V2ZW50J1xuYXBwLm9uKCdyZWFkeScsICgpID0+IHtcbiAgY29uc3Qgb25NZXNzYWdlID0gRXZlbnQuZnJvbUV2ZW50PHtcbiAgICBldmVudDogRWxlY3Ryb24uSXBjTWFpbkV2ZW50XG4gICAgbWVzc2FnZTogYW55XG4gIH0+KGlwY01haW4sICdoZWxsbycsIChldmVudCwgbWVzc2FnZSkgPT4ge1xuICAgIHJldHVybiB7IGV2ZW50LCBtZXNzYWdlIH1cbiAgfSlcblxuICBjb25zdCB3aW4gPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA4MDAsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IGxpc3RlbmVyMSA9IG9uTWVzc2FnZShmdW5jdGlvbiAoeyBldmVudCwgbWVzc2FnZSB9KSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSwgJ2Zyb20gaGVsbG8nKVxuICAgIGV2ZW50LnJlcGx5KCd3b3JsZCcsICdmcm9tIHdpbjonICsgZXZlbnQuc2VuZGVyLmlkKVxuICAgIGxpc3RlbmVyMS5kaXNwb3NlKClcbiAgfSlcblxuICBjb25zdCBsaXN0ZW5lcjIgPSBvbk1lc3NhZ2UoZnVuY3Rpb24gKHsgZXZlbnQsIG1lc3NhZ2UgfSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsICdjb3B5IGZyb20gaGVsbG8nKVxuICAgIGV2ZW50LnJlcGx5KCdjeWYnLCB7IGFhOiAnY3lmJywgYmI6IFsxLCAyLCAzLCA0XSB9KVxuICAgIGxpc3RlbmVyMi5kaXNwb3NlKClcbiAgfSlcblxuICBjb25zb2xlLmxvZygncmVuZGVyIGluZGV4IGh0bWw6Jywgam9pbihfX2Rpcm5hbWUsICdyZW5kZXInLCAnaW5kZXguaHRtbCcpKVxuICB3aW4ubG9hZEZpbGUoam9pbihfX2Rpcm5hbWUsICdyZW5kZXInLCAnaW5kZXguaHRtbCcpKVxufSlcbiJdfQ==