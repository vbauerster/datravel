System.register(['aurelia-framework', 'aurelia-templating-resources'], function (_export) {
  'use strict';

  var inject, bindable, BindingSignaler, ListManager;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaTemplatingResources) {
      BindingSignaler = _aureliaTemplatingResources.BindingSignaler;
    }],
    execute: function () {
      ListManager = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(ListManager, [{
          key: 'model',
          decorators: [bindable],
          initializer: function initializer() {
            return [];
          },
          enumerable: true
        }, {
          key: 'destList',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'feedbackTimeout',
          decorators: [bindable],
          initializer: function initializer() {
            return 100;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function ListManager(element, bindingSignaler) {
          _classCallCheck(this, _ListManager);

          _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'destList', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'feedbackTimeout', _instanceInitializers);

          this.element = element;
          this.redrawList = bindingSignaler.signal.bind(bindingSignaler, 're-list');
          this.redrawBtn = bindingSignaler.signal.bind(bindingSignaler, 're-btn');
        }

        _createDecoratedClass(ListManager, [{
          key: 'isButtonDisabled',
          value: function isButtonDisabled(list) {
            return list.id === this.destList.id ? 'pure-button-disabled' : '';
          }
        }, {
          key: 'destListChanged',
          value: function destListChanged() {
            this.redrawBtn();
          }
        }, {
          key: 'move',
          value: function move(item, index, list) {
            var _this = this;

            if (!this.destList.id) {
              alert('Select destination list first, please!');
              return;
            }

            if (this.destList.id === list.id) {
              return;
            }
            var srcItems = list.items;
            var destItems = this.destList.items;
            var copyTo = this.destList.redundantCopyTo;
            srcItems.splice(index, 1);
            destItems.push(item);
            if (Array.isArray(copyTo)) {
              var _loop = function (i) {
                var refId = copyTo[i];
                var copyToList = _this.model.find(function (list) {
                  return list.id === refId;
                });
                copyToList.items.push(item);
              };

              for (var i = copyTo.length; i--;) {
                _loop(i);
              }
            }
            this.showFeedback = true;
            this.redrawList();
            setTimeout(function () {
              _this.showFeedback = false;
              _this.redrawList();
            }, this.feedbackTimeout);
          }
        }, {
          key: 'listStyle',
          value: function listStyle(list) {
            if (this.destList.id !== list.id) {
              return;
            }
            if (this.showFeedback && list.feedback) {
              var classes = Object.keys(list.feedback).map(function (key) {
                return list.feedback[key] ? key : '';
              });
              return classes.join(' ');
            }
          }
        }], null, _instanceInitializers);

        var _ListManager = ListManager;
        ListManager = inject(Element, BindingSignaler)(ListManager) || ListManager;
        return ListManager;
      })();

      _export('ListManager', ListManager);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdC1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5Q0FJYSxXQUFXOzs7Ozs7Ozs7O2lDQUpoQixNQUFNO21DQUFFLFFBQVE7O29EQUNoQixlQUFlOzs7QUFHVixpQkFBVzs7Ozs4QkFBWCxXQUFXOzt1QkFDckIsUUFBUTs7bUJBQVMsRUFBRTs7Ozs7dUJBQ25CLFFBQVE7O21CQUFZLEVBQUU7Ozs7O3VCQUN0QixRQUFROzttQkFBbUIsR0FBRzs7Ozs7QUFFcEIsaUJBTEEsV0FBVyxDQUtWLE9BQU8sRUFBRSxlQUFlLEVBQUU7Ozs7Ozs7OztBQUNwQyxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxRSxjQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RTs7OEJBVFUsV0FBVzs7aUJBV04sMEJBQUMsSUFBSSxFQUFFO0FBQ3JCLG1CQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO1dBQ25FOzs7aUJBRWMsMkJBQUc7QUFDaEIsZ0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztXQUNsQjs7O2lCQUVHLGNBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7OztBQUV0QixnQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO0FBQ3JCLG1CQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUNoRCxxQkFBTzthQUNSOztBQUVELGdCQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDaEMscUJBQU87YUFDUjtBQUNELGdCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzFCLGdCQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNwQyxnQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDM0Msb0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFCLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JCLGdCQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0NBQ2hCLENBQUM7QUFDUixvQkFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLG9CQUFJLFVBQVUsR0FBRyxNQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO3lCQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSztpQkFBQSxDQUFDLENBQUM7QUFDNUQsMEJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7QUFIOUIsbUJBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRztzQkFBekIsQ0FBQztlQUlUO2FBQ0Y7QUFDRCxnQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsZ0JBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsQixzQkFBVSxDQUFDLFlBQU07QUFDZixvQkFBSyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzFCLG9CQUFLLFVBQVUsRUFBRSxDQUFDO2FBQ25CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1dBQzFCOzs7aUJBRVEsbUJBQUMsSUFBSSxFQUFFO0FBQ2QsZ0JBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUNoQyxxQkFBTzthQUNSO0FBQ0QsZ0JBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3RDLGtCQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO3VCQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7ZUFBQSxDQUFDLENBQUM7QUFDbkYscUJBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQjtXQUNGOzs7MkJBekRVLFdBQVc7QUFBWCxtQkFBVyxHQUR2QixNQUFNLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUNwQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoiY29tcG9uZW50cy9saXN0LW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QmluZGluZ1NpZ25hbGVyfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nU2lnbmFsZXIpXG5leHBvcnQgY2xhc3MgTGlzdE1hbmFnZXIge1xuICBAYmluZGFibGUgbW9kZWwgPSBbXTtcbiAgQGJpbmRhYmxlIGRlc3RMaXN0ID0ge307XG4gIEBiaW5kYWJsZSBmZWVkYmFja1RpbWVvdXQgPSAxMDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgYmluZGluZ1NpZ25hbGVyKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlZHJhd0xpc3QgPSBiaW5kaW5nU2lnbmFsZXIuc2lnbmFsLmJpbmQoYmluZGluZ1NpZ25hbGVyLCAncmUtbGlzdCcpO1xuICAgIHRoaXMucmVkcmF3QnRuID0gYmluZGluZ1NpZ25hbGVyLnNpZ25hbC5iaW5kKGJpbmRpbmdTaWduYWxlciwgJ3JlLWJ0bicpO1xuICB9XG5cbiAgaXNCdXR0b25EaXNhYmxlZChsaXN0KSB7XG4gICAgcmV0dXJuIGxpc3QuaWQgPT09IHRoaXMuZGVzdExpc3QuaWQgPyAncHVyZS1idXR0b24tZGlzYWJsZWQnIDogJyc7XG4gIH1cblxuICBkZXN0TGlzdENoYW5nZWQoKSB7XG4gICAgdGhpcy5yZWRyYXdCdG4oKTtcbiAgfVxuXG4gIG1vdmUoaXRlbSwgaW5kZXgsIGxpc3QpIHtcbiAgICAvLyB3YXJuIGlmIG5vIGxpc3Qgc2VsZWN0ZWRcbiAgICBpZiAoIXRoaXMuZGVzdExpc3QuaWQpIHtcbiAgICAgIGFsZXJ0KCdTZWxlY3QgZGVzdGluYXRpb24gbGlzdCBmaXJzdCwgcGxlYXNlIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyByZXR1cm4gb24gc3R1cGlkIGFjdGlvbnNcbiAgICBpZiAodGhpcy5kZXN0TGlzdC5pZCA9PT0gbGlzdC5pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3JjSXRlbXMgPSBsaXN0Lml0ZW1zO1xuICAgIHZhciBkZXN0SXRlbXMgPSB0aGlzLmRlc3RMaXN0Lml0ZW1zO1xuICAgIHZhciBjb3B5VG8gPSB0aGlzLmRlc3RMaXN0LnJlZHVuZGFudENvcHlUbztcbiAgICBzcmNJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGRlc3RJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvcHlUbykpIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb3B5VG8ubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGxldCByZWZJZCA9IGNvcHlUb1tpXTtcbiAgICAgICAgbGV0IGNvcHlUb0xpc3QgPSB0aGlzLm1vZGVsLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSByZWZJZCk7XG4gICAgICAgIGNvcHlUb0xpc3QuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zaG93RmVlZGJhY2sgPSB0cnVlO1xuICAgIHRoaXMucmVkcmF3TGlzdCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RmVlZGJhY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVkcmF3TGlzdCgpO1xuICAgIH0sIHRoaXMuZmVlZGJhY2tUaW1lb3V0KTtcbiAgfVxuXG4gIGxpc3RTdHlsZShsaXN0KSB7XG4gICAgaWYgKHRoaXMuZGVzdExpc3QuaWQgIT09IGxpc3QuaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0ZlZWRiYWNrICYmIGxpc3QuZmVlZGJhY2spIHtcbiAgICAgIHZhciBjbGFzc2VzID0gT2JqZWN0LmtleXMobGlzdC5mZWVkYmFjaykubWFwKGtleSA9PiBsaXN0LmZlZWRiYWNrW2tleV0gPyBrZXkgOiAnJyk7XG4gICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
