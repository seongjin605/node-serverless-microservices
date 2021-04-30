function func(callback) {
  process.nextTick(callback, 'callback!!!');
}

try {
  func(param => {
    a.a = 0;
  });
} catch (e) {
  console.error('Exception');
}

process.on('uncaughtException', error => {
  console.error('uncaughtException!');
});
