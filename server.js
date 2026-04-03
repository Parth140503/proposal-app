const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


// 💖 MAIN PAGE
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>For Harnisha ❤️</title>
        <style>
            body {
                margin:0;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                background: linear-gradient(135deg,#ff4d6d,#000);
                color:white;
                font-family:Arial;
                text-align:center;
            }

            h1 { font-size:40px; }
            h2 { font-size:60px; text-shadow:0 0 20px pink; }

            button {
                padding:15px 30px;
                font-size:20px;
                margin:10px;
                border:none;
                border-radius:10px;
                cursor:pointer;
                transition:0.3s;
            }

            .yes { background:#00ffcc; color:black; }
            .no { background:#ff3333; color:white; }

            button:hover { transform:scale(1.1); }
        </style>
    </head>

    <body>

        <h1>Harnisha ❤️</h1>
        <h1>From the moment you came into my life...</h1>
        <h1>Everything became beautiful ✨</h1>

        <h2>Will you marry me? 💍</h2>

        <button class="yes" onclick="window.location.href='/yes'">YES 💖</button>
        <button class="no">NO 😢</button>

    </body>
    </html>
    `);
});


// 💖 YES PAGE
app.get('/yes', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <body style="margin:0; height:100vh; display:flex; justify-content:center; align-items:center; flex-direction:column; background:black; color:white; font-family:Arial; text-align:center;">
    
    <h1 style="font-size:50px;">💖 She said YES 💖</h1>
    <h2>Parth ❤️ Harnisha</h2>

    <h2 style="margin-top:30px;">From the day you said YES… my life changed.</h2>
    <h2>My destiny changed… my everything changed ❤️</h2>

    <h2>Yours forever, Parth 💖</h2>

    </body>
    </html>
    `);
});


// 🔥 IMPORTANT FOR RENDER (DO NOT CHANGE)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running");
});