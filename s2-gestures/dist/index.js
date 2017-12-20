'use strict';

var _draw = require('./draw');

var _dataset = require('./dataset');

var _dataset2 = _interopRequireDefault(_dataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $drawing = document.querySelector('#drawCan');

var dataset = new _dataset2.default();

// start when mouse is down
$drawing.addEventListener('mousedown', function (e) {
  var coordinates = (0, _draw.getMouseXYinCanvas)($drawing, e);
  (0, _draw.drawGesture)($drawing, 'down', e);
});

// start when mouse is down
$drawing.addEventListener('mousemove', function (e) {
  (0, _draw.drawGesture)($drawing, 'move', e);
  var coordinates = (0, _draw.getMouseXYinCanvas)($drawing, e);
  dataset.fillGesture(coordinates);
});

// stop when mouse is up
$drawing.addEventListener('mouseup', function (e) {
  (0, _draw.drawGesture)($drawing, 'up', e);
  dataset.addGestureWithLabel(1);
});

// const $show = document.querySelector('#show');
// $show.addEventListener('click', function(e) {
//   console.log('there are ' + String(dataset.getNumGestures()));
// })
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiRkcmF3aW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29vcmRpbmF0ZXMiLCJmaWxsR2VzdHVyZSIsImFkZEdlc3R1cmVXaXRoTGFiZWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7OztBQUdBLElBQU1BLFdBQVdDLFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7O0FBRUEsSUFBTUMsVUFBVSx1QkFBaEI7O0FBR0E7QUFDQUgsU0FBU0ksZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBU0MsQ0FBVCxFQUFZO0FBQ2pELE1BQU1DLGNBQWMsOEJBQW1CTixRQUFuQixFQUE2QkssQ0FBN0IsQ0FBcEI7QUFDQSx5QkFBWUwsUUFBWixFQUFzQixNQUF0QixFQUE4QkssQ0FBOUI7QUFDRCxDQUhEOztBQUtBO0FBQ0FMLFNBQVNJLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLFVBQVNDLENBQVQsRUFBWTtBQUNqRCx5QkFBWUwsUUFBWixFQUFzQixNQUF0QixFQUE4QkssQ0FBOUI7QUFDQSxNQUFNQyxjQUFjLDhCQUFtQk4sUUFBbkIsRUFBNkJLLENBQTdCLENBQXBCO0FBQ0FGLFVBQVFJLFdBQVIsQ0FBb0JELFdBQXBCO0FBQ0QsQ0FKRDs7QUFNQTtBQUNBTixTQUFTSSxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFTQyxDQUFULEVBQVk7QUFDL0MseUJBQVlMLFFBQVosRUFBc0IsSUFBdEIsRUFBNEJLLENBQTVCO0FBQ0FGLFVBQVFLLG1CQUFSLENBQTRCLENBQTVCO0FBQ0QsQ0FIRDs7QUFNQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEJveFRvQm9keSwgZHJhd0dlc3R1cmUsIGFkZEdlc3R1cmVUaHVtYm5haWwsIGdldE1vdXNlWFlpbkNhbnZhc30gZnJvbSAnLi9kcmF3JztcbmltcG9ydCBEYXRhc2V0IGZyb20gJy4vZGF0YXNldCc7XG5cblxuY29uc3QgJGRyYXdpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhd0NhbicpO1xuXG5jb25zdCBkYXRhc2V0ID0gbmV3IERhdGFzZXQoKTtcblxuXG4vLyBzdGFydCB3aGVuIG1vdXNlIGlzIGRvd25cbiRkcmF3aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRNb3VzZVhZaW5DYW52YXMoJGRyYXdpbmcsIGUpO1xuICBkcmF3R2VzdHVyZSgkZHJhd2luZywgJ2Rvd24nLCBlKTtcbn0pO1xuXG4vLyBzdGFydCB3aGVuIG1vdXNlIGlzIGRvd25cbiRkcmF3aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgZHJhd0dlc3R1cmUoJGRyYXdpbmcsICdtb3ZlJywgZSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0TW91c2VYWWluQ2FudmFzKCRkcmF3aW5nLCBlKTtcbiAgZGF0YXNldC5maWxsR2VzdHVyZShjb29yZGluYXRlcyk7XG59KTtcblxuLy8gc3RvcCB3aGVuIG1vdXNlIGlzIHVwXG4kZHJhd2luZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oZSkge1xuICBkcmF3R2VzdHVyZSgkZHJhd2luZywgJ3VwJywgZSk7XG4gIGRhdGFzZXQuYWRkR2VzdHVyZVdpdGhMYWJlbCgxKTtcbn0pO1xuXG5cbi8vIGNvbnN0ICRzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3cnKTtcbi8vICRzaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICBjb25zb2xlLmxvZygndGhlcmUgYXJlICcgKyBTdHJpbmcoZGF0YXNldC5nZXROdW1HZXN0dXJlcygpKSk7XG4vLyB9KVxuXG5cblxuIl19