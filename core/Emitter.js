"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
var Emitter = /** @class */ (function () {
    function Emitter() {
    }
    Object.defineProperty(Emitter.prototype, "event", {
        get: function () {
            var _this = this;
            if (!this._event) {
                this._event = function (listener, ctx
                // disposables: () => void
                ) {
                    if (!_this._listeners) {
                        _this._listeners = new Set();
                    }
                    var isFirst = _this._listeners.size === 0;
                    console.log('####_event', isFirst);
                    if (isFirst && _this._onDidFirstListen) {
                        _this._onDidFirstListen();
                    }
                    var listenerCache = ctx ? [listener, ctx] : listener;
                    _this._listeners.add(listenerCache);
                    var remove = function () {
                        _this._listeners.delete(listenerCache);
                    };
                    var result = {
                        dispose: function () {
                            remove();
                            var isLast = _this._listeners.size === 0;
                            result.dispose = Emitter.noop;
                            if (isLast && _this._onDidLastRemove) {
                                _this._onDidLastRemove();
                            }
                        },
                    };
                    return result;
                };
            }
            return this._event;
        },
        enumerable: false,
        configurable: true
    });
    Emitter.prototype.fire = function (event) {
        var _this = this;
        if (this._listeners) {
            if (!this._deliveryQueue) {
                this._deliveryQueue = new Set();
            }
            this._listeners.forEach(function (listener) {
                _this._deliveryQueue.add([listener, event]);
            });
            if (this._deliveryQueue.size > 0) {
                this._deliveryQueue.forEach(function (_a) {
                    var listener = _a[0], event = _a[1];
                    try {
                        if (typeof listener === 'function') {
                            listener.call(undefined, event);
                        }
                        else if (Array.isArray(listener)) {
                            var listen = listener[0], ctx = listener[1];
                            listen.call(ctx, event);
                        }
                    }
                    catch (error) {
                        // todo catch error
                    }
                });
            }
        }
    };
    Emitter.prototype.onDidFirstListen = function (callback) {
        if (callback === void 0) { callback = Emitter.noop; }
        this._onDidFirstListen = callback;
    };
    Emitter.prototype.onDidLastRemove = function (callback) {
        if (callback === void 0) { callback = Emitter.noop; }
        this._onDidLastRemove = callback;
    };
    Emitter.noop = function () { };
    return Emitter;
}());
exports.Emitter = Emitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBU0E7SUFBQTtJQXlFQSxDQUFDO0lBbEVDLHNCQUFJLDBCQUFLO2FBQVQ7WUFBQSxpQkFrQ0M7WUFqQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFDWixRQUF1QixFQUN2QixHQUFRO2dCQUNSLDBCQUEwQjs7b0JBRTFCLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNwQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7cUJBQzVCO29CQUNELElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQTtvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQ2xDLElBQUksT0FBTyxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsRUFBRTt3QkFDckMsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7cUJBQ3pCO29CQUNELElBQU0sYUFBYSxHQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7b0JBQ25FLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUNsQyxJQUFNLE1BQU0sR0FBRzt3QkFDYixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtvQkFDdkMsQ0FBQyxDQUFBO29CQUNELElBQU0sTUFBTSxHQUFHO3dCQUNiLE9BQU8sRUFBRTs0QkFDUCxNQUFNLEVBQUUsQ0FBQTs0QkFDUixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUE7NEJBQ3pDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQTs0QkFDN0IsSUFBSSxNQUFNLElBQUksS0FBSSxDQUFDLGdCQUFnQixFQUFFO2dDQUNuQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTs2QkFDeEI7d0JBQ0gsQ0FBQztxQkFDRixDQUFBO29CQUNELE9BQU8sTUFBTSxDQUFBO2dCQUNmLENBQUMsQ0FBQTthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3BCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksR0FBSixVQUFLLEtBQVE7UUFBYixpQkF3QkM7UUF2QkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7YUFDaEM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQy9CLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDNUMsQ0FBQyxDQUFDLENBQUE7WUFFRixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFpQjt3QkFBaEIsUUFBUSxRQUFBLEVBQUUsS0FBSyxRQUFBO29CQUMzQyxJQUFJO3dCQUNGLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFOzRCQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTt5QkFDaEM7NkJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUMzQixJQUFBLE1BQU0sR0FBUyxRQUFRLEdBQWpCLEVBQUUsR0FBRyxHQUFJLFFBQVEsR0FBWixDQUFZOzRCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTt5QkFDeEI7cUJBQ0Y7b0JBQUMsT0FBTyxLQUFLLEVBQUU7d0JBQ2QsbUJBQW1CO3FCQUNwQjtnQkFDSCxDQUFDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsa0NBQWdCLEdBQWhCLFVBQWlCLFFBQXVCO1FBQXZCLHlCQUFBLEVBQUEsV0FBVyxPQUFPLENBQUMsSUFBSTtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFBO0lBQ25DLENBQUM7SUFDRCxpQ0FBZSxHQUFmLFVBQWdCLFFBQXVCO1FBQXZCLHlCQUFBLEVBQUEsV0FBVyxPQUFPLENBQUMsSUFBSTtRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFBO0lBQ2xDLENBQUM7SUF2RWMsWUFBSSxHQUFHLGNBQWEsQ0FBQyxDQUFBO0lBd0V0QyxjQUFDO0NBQUEsQUF6RUQsSUF5RUM7QUF6RVksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIExpc3RlbmVyPFQ+ID0gWyhlOiBUKSA9PiB2b2lkLCBhbnldIHwgKChlOiBUKSA9PiB2b2lkKVxuZXhwb3J0IHR5cGUgRGlzcG9zYWJsZSA9IHtcbiAgZGlzcG9zZSgpOiB2b2lkXG59XG5leHBvcnQgdHlwZSBFbWl0dGVyRXZlbnQ8VD4gPSAoXG4gIExpc3RlbmVyOiAoZTogVCkgPT4gYW55LFxuICBjdHg/OiBhbnksXG4gIGRpc3Bvc2FibGVzPzogYW55XG4pID0+IERpc3Bvc2FibGVcbmV4cG9ydCBjbGFzcyBFbWl0dGVyPFQ+IHtcbiAgcHJpdmF0ZSBzdGF0aWMgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG4gIHByaXZhdGUgX29uRGlkRmlyc3RMaXN0ZW46IEZ1bmN0aW9uXG4gIHByaXZhdGUgX29uRGlkTGFzdFJlbW92ZTogRnVuY3Rpb25cbiAgcHJpdmF0ZSBfbGlzdGVuZXJzOiBTZXQ8TGlzdGVuZXI8VD4+XG4gIHByaXZhdGUgX2RlbGl2ZXJ5UXVldWU6IFNldDxbTGlzdGVuZXI8VD4sIFRdPlxuICBwcml2YXRlIF9ldmVudDogRW1pdHRlckV2ZW50PFQ+XG4gIGdldCBldmVudCgpOiBFbWl0dGVyRXZlbnQ8VD4ge1xuICAgIGlmICghdGhpcy5fZXZlbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50ID0gKFxuICAgICAgICBsaXN0ZW5lcjogKGU6IFQpID0+IGFueSxcbiAgICAgICAgY3R4OiBhbnlcbiAgICAgICAgLy8gZGlzcG9zYWJsZXM6ICgpID0+IHZvaWRcbiAgICAgICkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IG5ldyBTZXQoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzRmlyc3QgPSB0aGlzLl9saXN0ZW5lcnMuc2l6ZSA9PT0gMFxuICAgICAgICBjb25zb2xlLmxvZygnIyMjI19ldmVudCcsIGlzRmlyc3QpXG4gICAgICAgIGlmIChpc0ZpcnN0ICYmIHRoaXMuX29uRGlkRmlyc3RMaXN0ZW4pIHtcbiAgICAgICAgICB0aGlzLl9vbkRpZEZpcnN0TGlzdGVuKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0ZW5lckNhY2hlOiBMaXN0ZW5lcjxUPiA9IGN0eCA/IFtsaXN0ZW5lciwgY3R4XSA6IGxpc3RlbmVyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5hZGQobGlzdGVuZXJDYWNoZSlcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUobGlzdGVuZXJDYWNoZSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgZGlzcG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlKClcbiAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IHRoaXMuX2xpc3RlbmVycy5zaXplID09PSAwXG4gICAgICAgICAgICByZXN1bHQuZGlzcG9zZSA9IEVtaXR0ZXIubm9vcFxuICAgICAgICAgICAgaWYgKGlzTGFzdCAmJiB0aGlzLl9vbkRpZExhc3RSZW1vdmUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fb25EaWRMYXN0UmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50XG4gIH1cbiAgZmlyZShldmVudDogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIGlmICghdGhpcy5fZGVsaXZlcnlRdWV1ZSkge1xuICAgICAgICB0aGlzLl9kZWxpdmVyeVF1ZXVlID0gbmV3IFNldCgpXG4gICAgICB9XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgdGhpcy5fZGVsaXZlcnlRdWV1ZS5hZGQoW2xpc3RlbmVyLCBldmVudF0pXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5fZGVsaXZlcnlRdWV1ZS5zaXplID4gMCkge1xuICAgICAgICB0aGlzLl9kZWxpdmVyeVF1ZXVlLmZvckVhY2goKFtsaXN0ZW5lciwgZXZlbnRdKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh1bmRlZmluZWQsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICBjb25zdCBbbGlzdGVuLCBjdHhdID0gbGlzdGVuZXJcbiAgICAgICAgICAgICAgbGlzdGVuLmNhbGwoY3R4LCBldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gdG9kbyBjYXRjaCBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25EaWRGaXJzdExpc3RlbihjYWxsYmFjayA9IEVtaXR0ZXIubm9vcCkge1xuICAgIHRoaXMuX29uRGlkRmlyc3RMaXN0ZW4gPSBjYWxsYmFja1xuICB9XG4gIG9uRGlkTGFzdFJlbW92ZShjYWxsYmFjayA9IEVtaXR0ZXIubm9vcCkge1xuICAgIHRoaXMuX29uRGlkTGFzdFJlbW92ZSA9IGNhbGxiYWNrXG4gIH1cbn1cbiJdfQ==