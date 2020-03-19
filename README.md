<!DOCTYPE html>
<html lang="zh-Hant-TW">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>靖雯的網站</title>
    <link rel="stylesheet" href="首頁.css">
    <link rel="icon" href="icon.png">
</head>

<body>
    <div class="container">
        <header>
            <img src="logo.png" alt="logo">
        </header>

        <nav>
            <a id="home" href="index.html">首頁</a> &nbsp;&nbsp;
            <a href="關於我.html">關於我</a>&nbsp;&nbsp;
            <a href="聯絡.html">聯絡</a>
            <span id="icon" onclick="openNav()">&#9776; menu</span>
        </nav>

        <div id="responsiveNav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="index.html" style="color:white;">首頁</a>
            <a href="about.html">關於我</a>
            <a href="contact.html">聯絡</a>

            <script>

                function openNav() {
                    document.getElementById("responsiveNav").style.width="250px";
                }

                function closeNav() {
                    document.getElementById("responsiveNav").style.width="0";
                }

            </script>
        </div>

        <article>

            <img src="證書.jpg" alt="udemy結業證書" width="400px";>

            <div class="paragraph">

                <p>&nbsp;&nbsp;您好，我是國立交通大學 傳播與科技學系即將升大三的邱靖雯，自幼生長於苗栗縣，父母從小便教導我，遇到想學習的事情時，便要勇於去學習新知，因此從小不論我想要學習什麼，父母都會支持著我，這也造就了我自動自發去學習的個性。同時父母也告訴我，做事情要有責任心，不能輕易放棄，因此每當我碰到困難，我總會努力地找方法解決問題。
                </p>

                <p>&nbsp;&nbsp;在家庭中培養出的個性，讓我在學校都有著良好的表現，國小時拿過全校模範生，國中以班上第一名的成績畢業，並順利考上國立新竹女子高級中學。在高中階段，班上同學都是來自各個國中裡的菁英，與大家一同相處三年之後我發現，大家不僅是學業成績優秀，而且幾乎都有著自己的一技之長，這也使我開始思考，未來該往哪個方向前進。大學階段進入了交大傳科系，在這裡我學到了很多實際操作的技能，例如錄製新聞、綜藝節目、拍攝紀錄片以及劇情片。在其他課程中，也學習到了如何使用premiere、photoshop…等軟體，更於其中一門課程中，接觸到網頁程式html、css，因而產生興趣，並且開始自主學習。面對各式各樣的課程，皆保持著學而不厭的心態，在系上目前的排名也保持在第三名。
                </p>

                <p>&nbsp;&nbsp;雖說在學校的表現都還算能接受，但我並不想就此滿足於現況，對於我來說，最重要的是如何發揮在校所學，並在職場上能夠幫助到公司。因此希望能透過校外實習的機會，運用自己的技能幫助公司，同時觀察自己的能力到底有多少。
                </p>

                <p>&nbsp;&nbsp;在搜尋實習機會時，發現貴公司此職缺非常符合我的興趣與專長，我對網頁程式非常感興趣，覺得能透過一段程式碼，譜寫出網頁頁面以及動態效果，是件非常令人驚豔的事。結束學校相關課程後，我自己也有到網路上做進一步的學習，例如到udemy網站上買課程，自己也有做一些實際的練習。因此我非常期盼能夠到貴公司實習，同職場上資深的前輩們學習，更重要的是能夠運用在校所學，為貴公司盡一份力！
                </p>

            </div>
        </article>

        <footer>
            &copy;2020 wen website &nbsp; <span class="separator">|</span> Design by Ching-Wen Chiu
        </footer>

    </div>

</body>

</html>
