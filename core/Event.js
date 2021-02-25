"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Emitter_1 = require("./Emitter");
var Event = /** @class */ (function () {
    function Event() {
    }
    Event.fromEvent = function (emitter, eventName, map) {
        if (map === void 0) { map = function (id) { return id; }; }
        var eventEmitter = new Emitter_1.Emitter();
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return eventEmitter.fire(map.apply(null, args));
        };
        eventEmitter.onDidFirstListen(function () {
            console.log('onDidFirstListen', eventName);
            emitter.on(eventName, fn);
        });
        eventEmitter.onDidLastRemove(function () {
            console.log('onDidLastRemove', eventName);
            emitter.removeListener(eventName, fn);
        });
        return eventEmitter.event;
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBaUQ7QUFPakQ7SUFBQTtJQWtCQSxDQUFDO0lBakJRLGVBQVMsR0FBaEIsVUFDRSxPQUFvQixFQUNwQixTQUFpQixFQUNqQixHQUF1QztRQUF2QyxvQkFBQSxFQUFBLGdCQUE4QixFQUFFLElBQUssT0FBQSxFQUFFLEVBQUYsQ0FBRTtRQUV2QyxJQUFNLFlBQVksR0FBRyxJQUFJLGlCQUFPLEVBQUssQ0FBQTtRQUNyQyxJQUFNLEVBQUUsR0FBRztZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFBSyxPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFBeEMsQ0FBd0MsQ0FBQTtRQUN2RSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUMxQyxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtRQUNGLFlBQVksQ0FBQyxlQUFlLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUN6QyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQTtJQUMzQixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbWl0dGVyLCBFbWl0dGVyRXZlbnQgfSBmcm9tICcuL0VtaXR0ZXInXG5cbmludGVyZmFjZSBOb2RlRW1pdHRlciB7XG4gIG9uKGV2ZW50OiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiBGdW5jdGlvbik6IHVua25vd25cbiAgcmVtb3ZlTGlzdGVuZXIoZXZlbnQ6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6IEZ1bmN0aW9uKTogdW5rbm93blxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnQge1xuICBzdGF0aWMgZnJvbUV2ZW50PFQ+KFxuICAgIGVtaXR0ZXI6IE5vZGVFbWl0dGVyLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1hcDogKC4uLmFyZ3M6IGFueVtdKSA9PiBUID0gKGlkKSA9PiBpZFxuICApOiBFbWl0dGVyRXZlbnQ8VD4ge1xuICAgIGNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBFbWl0dGVyPFQ+KClcbiAgICBjb25zdCBmbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gZXZlbnRFbWl0dGVyLmZpcmUobWFwLmFwcGx5KG51bGwsIGFyZ3MpKVxuICAgIGV2ZW50RW1pdHRlci5vbkRpZEZpcnN0TGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkRpZEZpcnN0TGlzdGVuJywgZXZlbnROYW1lKVxuICAgICAgZW1pdHRlci5vbihldmVudE5hbWUsIGZuKVxuICAgIH0pXG4gICAgZXZlbnRFbWl0dGVyLm9uRGlkTGFzdFJlbW92ZShmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25EaWRMYXN0UmVtb3ZlJywgZXZlbnROYW1lKVxuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGZuKVxuICAgIH0pXG4gICAgcmV0dXJuIGV2ZW50RW1pdHRlci5ldmVudFxuICB9XG59XG4iXX0=