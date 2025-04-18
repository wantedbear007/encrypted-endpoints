const express = require('express');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const secretKey = Buffer.from('12345678901234567890123456789012');  // 32 chars
const iv = Buffer.from('1234567890123456');                        // 16 chars

console.log("secret key is ", secretKey.toString());

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encodeURIComponent(encrypted);  // Make it URL-safe!
}

function decrypt(encryptedText) {
  const decoded = decodeURIComponent(encryptedText);
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  let decrypted = decipher.update(decoded, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


const myData = 'Hello, from bhanu';
const encryptedData = encrypt(myData);
const decryptedData = decrypt(encryptedData);

console.log("Encrypted Example:", encryptedData);
console.log("Decrypted Example:", decryptedData);

// Create an Express application
const app = express();

app.use((req, res, next) => {
  const encryptedData = encrypt("/testing");
  console.log("Encrypted Data:", encryptedData);

  const decryptedData = decrypt(encryptedData);
  console.log("Decrypted Data:", decryptedData);

  const endpoint = String(req.url.slice(1));
  console.log("Incoming Encrypted Endpoint:", endpoint);

  try {
    const decryptedEndpoint = decrypt(endpoint);
    console.log("Decrypted Endpoint:", decryptedEndpoint);

    if (decryptedEndpoint === "/testing") {
      console.log("hello, this is a match!");
      return res.status(200).json("hello from bhanu");
    }
  } catch (error) {
    console.log("Error decrypting:", error.message);
  }

  next();
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
