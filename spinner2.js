let array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let timer = 100;
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + array.shift());
  }, timer);
  timer += 200;
}