const fs = require('fs');

// Read the file asynchronously
fs.readFile('C:\\Users\\somes\\Desktop\\wpt\\Node\\Project1\\Para.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Display the paragraph content
    console.log('Paragraph from file:');
    console.log(data);
});
