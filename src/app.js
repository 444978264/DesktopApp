"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = require("path");
electron_1.app.on('ready', function () {
    var win = new electron_1.BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    electron_1.ipcMain.on('hello', function (e, message) {
        console.log(message, 'from ipcRender');
        e.reply('world', 'from hello');
    });
    console.log('render index html:', path_1.join(__dirname, 'render', 'index.html'));
    win.loadFile(path_1.join(__dirname, 'render', 'index.html'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNEO0FBQ3RELDZCQUEyQjtBQUUzQixjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNkLElBQU0sR0FBRyxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUM1QixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLElBQUk7U0FDdEI7S0FDRixDQUFDLENBQUE7SUFFRixrQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDLEVBQUUsT0FBTztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQzFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQTtBQUN2RCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgaXBjTWFpbiB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5cbmFwcC5vbigncmVhZHknLCAoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDgwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgIH0sXG4gIH0pXG5cbiAgaXBjTWFpbi5vbignaGVsbG8nLCAoZSwgbWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsICdmcm9tIGlwY1JlbmRlcicpXG4gICAgZS5yZXBseSgnd29ybGQnLCAnZnJvbSBoZWxsbycpXG4gIH0pXG5cbiAgY29uc29sZS5sb2coJ3JlbmRlciBpbmRleCBodG1sOicsIGpvaW4oX19kaXJuYW1lLCAncmVuZGVyJywgJ2luZGV4Lmh0bWwnKSlcbiAgd2luLmxvYWRGaWxlKGpvaW4oX19kaXJuYW1lLCAncmVuZGVyJywgJ2luZGV4Lmh0bWwnKSlcbn0pXG4iXX0=