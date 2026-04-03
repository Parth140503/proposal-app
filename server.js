const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


// 💖 MAIN PROPOSAL PAGE
app.get('/', (req, res) => {
    res.send(`
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

        <h1>Harnisha… ❤️</h1>
        <h1>From the moment you came into my life…</h1>
        <h1>Everything became beautiful ✨</h1>

        <h2>Will you marry me? 💍</h2>

        <button class="yes" onclick="window.location.href='/yes1'">YES 💖</button>
        <button class="no" onclick="window.location.href='/no'">NO 😢</button>

    </body>
    </html>
    `);
});


// 💖 YES SCENE 1
app.get('/yes1', (req, res) => {
    res.send(`
    <html>
    <body style="margin:0; height:100vh; display:flex; justify-content:center; align-items:center; flex-direction:column; background:black; color:white; font-family:Arial; text-align:center;">
    
    <h1 style="font-size:50px;">💖 She said YES 💖</h1>
    <h2>Parth ❤️ Harnisha</h2>

    <h2 style="margin-top:30px;">This is not just love…</h2>
    <h2>This is destiny ✨</h2>

    <button onclick="window.location.href='/yes2'" style="margin-top:40px; padding:15px 30px; font-size:20px;">Next ➡️</button>

    </body>
    </html>
    `);
});


// 💖 YES SCENE 2 (EMOTIONAL MESSAGE)
app.get('/yes2', (req, res) => {
    res.send(`
    <html>
    <body style="
        margin:0;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:radial-gradient(circle,#ff99cc,#000);
        color:white;
        font-family:Arial;
        text-align:center;
        padding:20px;
    ">
    
    <h1 style="font-size:40px;">💖 From the day you said YES… 💖</h1>

    <p style="font-size:22px; max-width:700px; line-height:1.6;">
        From the day you said YES… my life changed.  
        My destiny changed.  
        My every heartbeat found a new meaning… because it beats for you now. ❤️  
        <br><br>
        Harnisha, you didn’t just accept me…  
        You gave me a future, a reason to smile, a reason to dream. ✨  
        <br><br>
        I promise… in every lifetime, in every world…  
        I will always choose you. 💍  
        <br><br>
        This is not just love…  
        This is forever. ❤️
    </p>

    <h2 style="margin-top:20px;">Yours forever, Parth 💖</h2>

    <button onclick="window.location.href='/yes3'" 
        style="margin-top:30px; padding:15px 30px; font-size:18px; border:none; border-radius:10px;">
        Continue ❤️
    </button>

    </body>
    </html>
    `);
});


// ❤️ FINAL SCENE
app.get('/yes3', (req, res) => {
    res.send(`
    <html>
    <head>
        <style>
            body {
                margin:0;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                background:black;
                color:white;
                font-family:Arial;
                overflow:hidden;
                text-align:center;
            }

            h1 {
                font-size:60px;
                text-shadow:0 0 20px pink;
            }

            .heart {
                position:absolute;
                font-size:25px;
                animation:float 6s infinite;
            }

            @keyframes float {
                from { transform:translateY(100vh); opacity:1; }
                to { transform:translateY(-10vh); opacity:0; }
            }
        </style>
    </head>

    <body>

        <h1>Parth ❤️ Harnisha</h1>
        <h1>Forever Begins Now 💍</h1>
        <h2>I Love You Endless ❤️</h2>

        <script>
            setInterval(()=>{
                let heart=document.createElement("div");
                heart.className="heart";
                heart.innerText="❤️";
                heart.style.left=Math.random()*100+"vw";
                document.body.appendChild(heart);
                setTimeout(()=>heart.remove(),6000);
            },300);
        </script>

    </body>
    </html>
    `);
});


// 😄 NO PAGE
app.get('/no', (req, res) => {
    res.send(`
    <body style="background:black; color:white; display:flex; justify-content:center; align-items:center; height:100vh; font-size:40px;">
        Are you sure Harnisha? 😢 Try again 💖
    </body>
    `);
});


// 🚀 SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});