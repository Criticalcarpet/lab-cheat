let textObject = {
    "th": `<html><head>
    <title>
        Creating Paragraphs
    </title>
    <style type="text/css">
        body{background-color:RGB(255,251,214);}
    </style>
</head>
<body>
    <p style="text-align:center;color:blue"><b>THOUGHT OF THE DAY</b></p>
    <p style="text-align:justify">Each new day is a new challenge. To stay fresh and alive in spirit, there must be change. Find new tactics, methods, and modes of operation that are right for today's situation, otherwise you will be left behind and eventually forgotten.</p>
    <p style="text-align:right;color:red"><b>GHAYATHRI</b></p>
    <p style="text-slign:center;color:blue"> Always remeber: <br> <b> GOD HELPS THOSE WHO HELP THEMSELVES</b></p>
</body>
</html>`,
"thb": `<html>
    <head>
        <title>
            Creating Paragraphs
        </title>
        <style type="text/css">
            a:link, a:visited {background-color: pink;color:white;padding:14px 25px;text-align:center;text-decoration:none;display:inline-block;}
            a:hover, a:active {background-color: red;}
        </style>
    </head>
    <body>
        <a href="google.com">Thought of the day</a>
    </body>
</html>`,
"im": `<html>
<head><title>ADDING IMAGE LINK</title></head>
<body>
<img src="https://images.newscientist.com/wp-content/uploads/2023/04/03151144/SEI_150766882.jpg">
</body>
</html>
`,
"ia": `<html>
<head><title>Adding Audio Clip</title>
    <style type="text/css">
        body{background-color:RGB(255,214,229);}
        </style>
    </head>
<body>
    <audio controls
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    </body>
    </html>
    `,
"if": `<html>
<head>
    <title>Main Document</title>
    <style type="text/css">
        body{background-color:yellow;}
        </style>
</head>
<body>
    <h3>This is the main document containing below given inline frames</h3>
    <iframe src="https://en.wikipedia.org/wiki/HTML" width="200" height="200"></iframe>
    <iframe src="https://google.com" width="200" height="200"></iframe>
    </body>
    </html>
    `,
    "ph": `<html>
        <head>
            <title>PHP Hello World</title>
        </head>
        <body BGCOLOR="#F645">
            <?php
                echo "Hello World";
            ?>
        </body>
    </html>
    `,
    "pi": `<html>
        <head>
            <title>PHP Identifiers</title>
        </head>
        <body>
            <?php
                $name = "Ghayathri";
                echo $name;
            ?>
        </body>
    </html>
            `,

}

for (let i in textObject) {
    document.getElementById(i).addEventListener('click', (e => {
        prompt("Copy to clipboard: Ctrl+C, Enter", textObject[i])
    }))
}