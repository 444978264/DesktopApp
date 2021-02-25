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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBU0E7SUFBQTtJQXdFQSxDQUFDO0lBakVDLHNCQUFJLDBCQUFLO2FBQVQ7WUFBQSxpQkFpQ0M7WUFoQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFDWixRQUF1QixFQUN2QixHQUFRO2dCQUNSLDBCQUEwQjs7b0JBRTFCLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNwQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7cUJBQzVCO29CQUNELElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQTtvQkFDMUMsSUFBSSxPQUFPLElBQUksS0FBSSxDQUFDLGlCQUFpQixFQUFFO3dCQUNyQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtxQkFDekI7b0JBQ0QsSUFBTSxhQUFhLEdBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtvQkFDbkUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7b0JBQ2xDLElBQU0sTUFBTSxHQUFHO3dCQUNiLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUN2QyxDQUFDLENBQUE7b0JBQ0QsSUFBTSxNQUFNLEdBQUc7d0JBQ2IsT0FBTyxFQUFFOzRCQUNQLE1BQU0sRUFBRSxDQUFBOzRCQUNSLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQTs0QkFDekMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBOzRCQUM3QixJQUFJLE1BQU0sSUFBSSxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQ25DLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBOzZCQUN4Qjt3QkFDSCxDQUFDO3FCQUNGLENBQUE7b0JBQ0QsT0FBTyxNQUFNLENBQUE7Z0JBQ2YsQ0FBQyxDQUFBO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxHQUFKLFVBQUssS0FBUTtRQUFiLGlCQXdCQztRQXZCQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTthQUNoQztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDL0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUM1QyxDQUFDLENBQUMsQ0FBQTtZQUVGLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWlCO3dCQUFoQixRQUFRLFFBQUEsRUFBRSxLQUFLLFFBQUE7b0JBQzNDLElBQUk7d0JBQ0YsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7NEJBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO3lCQUNoQzs2QkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQzNCLElBQUEsTUFBTSxHQUFTLFFBQVEsR0FBakIsRUFBRSxHQUFHLEdBQUksUUFBUSxHQUFaLENBQVk7NEJBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO3lCQUN4QjtxQkFDRjtvQkFBQyxPQUFPLEtBQUssRUFBRTt3QkFDZCxtQkFBbUI7cUJBQ3BCO2dCQUNILENBQUMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEIsVUFBaUIsUUFBdUI7UUFBdkIseUJBQUEsRUFBQSxXQUFXLE9BQU8sQ0FBQyxJQUFJO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUE7SUFDbkMsQ0FBQztJQUNELGlDQUFlLEdBQWYsVUFBZ0IsUUFBdUI7UUFBdkIseUJBQUEsRUFBQSxXQUFXLE9BQU8sQ0FBQyxJQUFJO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUE7SUFDbEMsQ0FBQztJQXRFYyxZQUFJLEdBQUcsY0FBYSxDQUFDLENBQUE7SUF1RXRDLGNBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgTGlzdGVuZXI8VD4gPSBbKGU6IFQpID0+IHZvaWQsIGFueV0gfCAoKGU6IFQpID0+IHZvaWQpXG5leHBvcnQgdHlwZSBEaXNwb3NhYmxlID0ge1xuICBkaXNwb3NlKCk6IHZvaWRcbn1cbmV4cG9ydCB0eXBlIEVtaXR0ZXJFdmVudDxUPiA9IChcbiAgTGlzdGVuZXI6IChlOiBUKSA9PiBhbnksXG4gIGN0eD86IGFueSxcbiAgZGlzcG9zYWJsZXM/OiBhbnlcbikgPT4gRGlzcG9zYWJsZVxuZXhwb3J0IGNsYXNzIEVtaXR0ZXI8VD4ge1xuICBwcml2YXRlIHN0YXRpYyBub29wID0gZnVuY3Rpb24gKCkge31cbiAgcHJpdmF0ZSBfb25EaWRGaXJzdExpc3RlbjogRnVuY3Rpb25cbiAgcHJpdmF0ZSBfb25EaWRMYXN0UmVtb3ZlOiBGdW5jdGlvblxuICBwcml2YXRlIF9saXN0ZW5lcnM6IFNldDxMaXN0ZW5lcjxUPj5cbiAgcHJpdmF0ZSBfZGVsaXZlcnlRdWV1ZTogU2V0PFtMaXN0ZW5lcjxUPiwgVF0+XG4gIHByaXZhdGUgX2V2ZW50OiBFbWl0dGVyRXZlbnQ8VD5cbiAgZ2V0IGV2ZW50KCk6IEVtaXR0ZXJFdmVudDxUPiB7XG4gICAgaWYgKCF0aGlzLl9ldmVudCkge1xuICAgICAgdGhpcy5fZXZlbnQgPSAoXG4gICAgICAgIGxpc3RlbmVyOiAoZTogVCkgPT4gYW55LFxuICAgICAgICBjdHg6IGFueVxuICAgICAgICAvLyBkaXNwb3NhYmxlczogKCkgPT4gdm9pZFxuICAgICAgKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gbmV3IFNldCgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNGaXJzdCA9IHRoaXMuX2xpc3RlbmVycy5zaXplID09PSAwXG4gICAgICAgIGlmIChpc0ZpcnN0ICYmIHRoaXMuX29uRGlkRmlyc3RMaXN0ZW4pIHtcbiAgICAgICAgICB0aGlzLl9vbkRpZEZpcnN0TGlzdGVuKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0ZW5lckNhY2hlOiBMaXN0ZW5lcjxUPiA9IGN0eCA/IFtsaXN0ZW5lciwgY3R4XSA6IGxpc3RlbmVyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5hZGQobGlzdGVuZXJDYWNoZSlcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUobGlzdGVuZXJDYWNoZSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgZGlzcG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlKClcbiAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IHRoaXMuX2xpc3RlbmVycy5zaXplID09PSAwXG4gICAgICAgICAgICByZXN1bHQuZGlzcG9zZSA9IEVtaXR0ZXIubm9vcFxuICAgICAgICAgICAgaWYgKGlzTGFzdCAmJiB0aGlzLl9vbkRpZExhc3RSZW1vdmUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fb25EaWRMYXN0UmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50XG4gIH1cbiAgZmlyZShldmVudDogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIGlmICghdGhpcy5fZGVsaXZlcnlRdWV1ZSkge1xuICAgICAgICB0aGlzLl9kZWxpdmVyeVF1ZXVlID0gbmV3IFNldCgpXG4gICAgICB9XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgdGhpcy5fZGVsaXZlcnlRdWV1ZS5hZGQoW2xpc3RlbmVyLCBldmVudF0pXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5fZGVsaXZlcnlRdWV1ZS5zaXplID4gMCkge1xuICAgICAgICB0aGlzLl9kZWxpdmVyeVF1ZXVlLmZvckVhY2goKFtsaXN0ZW5lciwgZXZlbnRdKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh1bmRlZmluZWQsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICBjb25zdCBbbGlzdGVuLCBjdHhdID0gbGlzdGVuZXJcbiAgICAgICAgICAgICAgbGlzdGVuLmNhbGwoY3R4LCBldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gdG9kbyBjYXRjaCBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25EaWRGaXJzdExpc3RlbihjYWxsYmFjayA9IEVtaXR0ZXIubm9vcCkge1xuICAgIHRoaXMuX29uRGlkRmlyc3RMaXN0ZW4gPSBjYWxsYmFja1xuICB9XG4gIG9uRGlkTGFzdFJlbW92ZShjYWxsYmFjayA9IEVtaXR0ZXIubm9vcCkge1xuICAgIHRoaXMuX29uRGlkTGFzdFJlbW92ZSA9IGNhbGxiYWNrXG4gIH1cbn1cbiJdfQ==