const fs = require('fs');

// Read the file asynchronously
fs.readFile('C:\\Users\\somes\\Desktop\\wpt\\Node\\Project1\\numbers.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Split the file content by lines or spaces (depending on how the numbers are separated)
    const numbers = data.split(/\s+/).map(Number).filter(Boolean);  // Convert to numbers and remove invalid entries

    // Calculate squares of the numbers
    const squares = numbers.map(num => num * num);

    // Display the squares
    console.log('Original Numbers:', numbers);
    console.log('Squares:', squares);
});
