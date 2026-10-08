const csvInput = document.getElementById('csvInput');
const sampleBtn = document.getElementById('sampleBtn');
const message =  document.getElementById('message');

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const header = lines[0].split(',')
}