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
    console.log('render index html:', path_1.join(__dirname, 'render', 'index.html'));
    win.loadFile(path_1.join(__dirname, 'render', 'index.html'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQTZDO0FBQzdDLDZCQUEyQjtBQUMzQixjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNkLElBQU0sR0FBRyxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUM1QixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLElBQUk7U0FDdEI7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDMUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFBO0FBQ3ZELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmFwcC5vbigncmVhZHknLCAoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDgwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc29sZS5sb2coJ3JlbmRlciBpbmRleCBodG1sOicsIGpvaW4oX19kaXJuYW1lLCAncmVuZGVyJywgJ2luZGV4Lmh0bWwnKSlcbiAgd2luLmxvYWRGaWxlKGpvaW4oX19kaXJuYW1lLCAncmVuZGVyJywgJ2luZGV4Lmh0bWwnKSlcbn0pXG4iXX0=