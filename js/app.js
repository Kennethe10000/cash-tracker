const csvInput = document.getElementById('csvInput');
const sampleBtn = document.getElementById('sampleBtn');
const message =  document.getElementById('message');

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const header = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return {
      date: values[header.indexOf('date')],
      description: values[header.indexOf('description')],
      amount: parseFloat(values[header.indexOf('amount')])
    };
  });
}

sampleBtn.addEventListener('click', async () => {
  const response = await fetch('data/sample-transactions.csv');
  const text = await response.text();
  const transactions = parseCSV(text);
  message.textContent = `Loaded ${transactions.length} transactions`;
  console.log(transactions);
});