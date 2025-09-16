
const http = require('http');


function testBackend() {
  const options = {
    hostname: 'localhost',
    port: 5001,
    path: '/',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log(`Backend status: ${res.statusCode}`);
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('Backend response:', data);
    });
  });

  req.on('error', (error) => {
    console.error('Backend connection error:', error.message);
  });

  req.end();
}


function testAPI() {
  const options = {
    hostname: 'localhost',
    port: 5001,
    path: '/api/jobs',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log(`API status: ${res.statusCode}`);
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        console.log('API response: Jobs endpoint working, found', json.length, 'jobs');
      } catch (e) {
        console.log('API response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('API connection error:', error.message);
  });

  req.end();
}

console.log('Testing backend connection...');
testBackend();
setTimeout(testAPI, 1000);
