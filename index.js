// // var fs = require('fs');

// // fs.readFile('./students.txt', 'utf-8', function(err, data) {
// //   if (err) throw err;
// //   var names = data.split('\n'); // turn string into array of names
// //   names.pop(); // remove empty ''
// //   var randomIndex = Math.floor( Math.random() * names.length );
// //   var name = names[randomIndex];
// //   d = new Date();
// //   fs.writeFile('randomStudent' + d + '.txt', name, function(err) {
// //     if (err) throw err;
// //     console.log('saved');
// //   });
// // });

// // // Read in the data from students.txt and
// // // return groups of two. If there's an odd number
// // // create a group of 3.
// // fs.readFile('./students.txt', 'utf-8', function(err, data) {
// //   if (err) throw err;
// //   var names = data.split('\n');
// //   names.pop();
// //   var groups = [];
// //   while (names.length) {
// //     var group = names.splice(0, 2);
// //     groups.push(group);
// //   }
// //   var lastGroup = groups.pop();
// //   if (lastGroup.length != 2) {
// //     var qian = lastGroup.pop();
// //     lastGroup = groups.pop();
// //     lastGroup.push(qian);
// //     groups.push(lastGroup);
// //   }
// //   fs.writeFile('groups.txt', groups.join('\n'), function(err) {
// //     if (err) throw err;
// //     console.log('saved the file of groups');
// //   });
// // });

// // Create Checkins
var fs = require('fs');
fs.readFile('./students.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  var students = data.split('\n');
  students.pop();
  var filename = 'checkins.md';
  var filecontents = 'These are the checkins:\n';
  var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  dayNames.forEach(function(day) {
    filecontents += '\n';
    filecontents += '# ' + day;
    filecontents += '\n';
    filecontents += students.splice(0, 4).join('\n');
  });
  fs.writeFile(filename, filecontents, function(err) {
    if (err) throw err;
    console.log('saved file ' + filename);
  });
});












