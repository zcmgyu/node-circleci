(() => {
  process.argv.forEach(function(val, key, array) {
    console.log(key + ': ' + val);
    console.log('DEBUG typeof val', typeof val);
  });
})();
