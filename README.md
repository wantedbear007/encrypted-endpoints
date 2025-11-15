

<h1>🔐 Encrypted Endpoint Demo (AES-256-CBC + Express)</h1>

<p>
This project demonstrates how to <strong>encrypt and decrypt API endpoints</strong> using 
<strong>AES-256-CBC</strong> in Node.js.  
It uses encrypted URL paths to validate access to secure routes.
</p>

<hr />

<h2>🚀 Features</h2>
<ul>
    <li>AES-256-CBC encryption & decryption</li>
    <li>Encrypted API endpoint routing</li>
    <li>Express middleware for handling encrypted paths</li>
    <li>Fully working demonstration server</li>
</ul>

<h2>📦 Installation</h2>
<pre><code>npm install
node index.js
</code></pre>

<p>Server runs at: <code>http://localhost:3000</code></p>

<h2>🔧 Encryption Details</h2>
<pre><code>const algorithm = 'aes-256-cbc';
const secretKey = Buffer.from('12345678901234567890123456789012'); // 32 chars
const iv = Buffer.from('1234567890123456'); // 16 chars
</code></pre>

<h2>🔐 How It Works</h2>

<h3>Encrypting:</h3>
<pre><code>encrypt("/testing");</code></pre>

<h3>Decrypting:</h3>
<pre><code>decrypt(encryptedText);</code></pre>

<p>Encryption output is Base64 + URL encoded.</p>

<h2>🛠 Example Flow</h2>

<p>The server prints:</p>
<ul>
    <li>Encrypted version of <code>/testing</code></li>
    <li>Decrypted version</li>
    <li>Incoming encrypted path</li>
</ul>

<div class="box">
If decrypted endpoint matches <code>/testing</code>, response is:<br />
<strong>"hello from bhanu"</strong>
</div>

<h2>📡 Testing the Encrypted Endpoint</h2>
<ol>
    <li>Start the server with <code>node index.js</code></li>
    <li>Copy the printed encrypted value (e.g. <code>jsk93SD%2FJsd...</code>)</li>
    <li>Open in browser:<br />
        <code>http://localhost:3000/jsk93SD%2FJsd...</code>
    </li>
</ol>

<p>You should see:<br /><strong>hello from bhanu</strong></p>

<h2>🧩 Default Route</h2>
<pre><code>GET /</code></pre>
<p>Response: <strong>Hello, World!</strong></p>

<h2>⚠️ Security Notes</h2>
<ul>
    <li>Never hardcode keys in production.</li>
    <li>Use environment variables for <code>SECRET_KEY</code> and <code>IV</code>.</li>
    <li>Rotate keys regularly.</li>
    <li>AES-256-CBC requires secure IV handling for real systems.</li>
</ul>

<h2>📄 License</h2>
<p>Free to use and modify.</p>

</body>
</html>
