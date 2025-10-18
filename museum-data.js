const museumData = [
    { 
        type: "quote", 
        text: "The internet? We are not interested in it.", 
        author: "Bill Gates",
        year: "1993"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/06/20/08/12/mainframe-2421769_1280.png", 
        caption: "A classic mainframe computer from the 1980s",
        year: "1985"
    },
    { 
        type: "code", 
        text: "// ARPANET - The Beginning\nCONNECT 134.68.0.1\nLOGIN: guest\nPASSWORD: ****", 
        year: "1969"
    },
    { 
        type: "quote", 
        text: "The internet is becoming the town square for the global village of tomorrow.", 
        author: "Bill Gates",
        year: "1999"
    },
    { 
        type: "code", 
        text: "<html>\n<head>\n<title>My First Website</title>\n</head>\n<body>\n<h1>Welcome to my site!</h1>\n<p>Under construction...</p>\n</body>\n</html>", 
        year: "1995"
    },
    { 
        type: "ascii", 
        text: "   _____\n  /     \\\n /       \\\n|  O   O  |\n|    ∆    |\n \\  ---  /\n  \\_____/\n   COMPUTER",
        caption: "Early computer ASCII art",
        year: "1990"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png", 
        caption: "Early mobile phone with internet capability",
        year: "2000"
    },
    { 
        type: "quote", 
        text: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.", 
        author: "Tim Berners-Lee",
        year: "2005"
    },
    { 
        type: "code", 
        text: "// JavaScript in the early days\nfunction validateForm() {\n  if (document.forms[0].elements[0].value == '') {\n    alert('Please fill all fields!');\n    return false;\n  }\n  return true;\n}", 
        year: "1998"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2015/09/21/14/24/supercomputer-949072_1280.jpg", 
        caption: "Supercomputer processing data in the 1990s",
        year: "1993"
    },
    { 
        type: "quote", 
        text: "We are all now connected by the Internet, like neurons in a giant brain.", 
        author: "Stephen Hawking",
        year: "2001"
    },
    { 
        type: "ascii", 
        text: "  /\\_/\\\n ( o.o )\n  > ^ <\n INTERNET CAT",
        caption: "Classic internet cat ASCII art",
        year: "1998"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/19/20/55/apple-1841552_1280.jpg", 
        caption: "Early personal computers revolutionized home computing",
        year: "1984"
    },
    { 
        type: "quote", 
        text: "The internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.", 
        author: "Eric Schmidt",
        year: "2008"
    },
    { 
        type: "code", 
        text: "<!-- The infamous blink tag -->\n<blink>Look at me! I'm blinking!</blink>\n\n<!-- The marquee tag -->\n<marquee>Scrolling text was so cool!</marquee>", 
        year: "1997"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/05/29/18/22/robot-2354686_1280.jpg", 
        caption: "Early concepts of AI and robotics on the internet",
        year: "2002"
    },
    { 
        type: "quote", 
        text: "The internet could be a very positive step towards education, organization and participation in a meaningful society.", 
        author: "Noam Chomsky",
        year: "2003"
    },
    { 
        type: "ascii", 
        text: " _______  \n|       | \n| ?   ? | \n|   +   | \n|  ___  | \n|_______| \n  MYSTERY BOX",
        caption: "ASCII art representing the mystery of early internet",
        year: "1994"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/21/16/21/board-1846276_1280.jpg", 
        caption: "Early internet server room with network equipment",
        year: "1999"
    },
    { 
        type: "quote", 
        text: "The internet is so big, so powerful and pointless that for some people it is a complete substitute for life.", 
        author: "Andrew Brown",
        year: "2006"
    },
    { 
        type: "code", 
        text: "// Early AJAX implementation\nvar xmlhttp;\nif (window.XMLHttpRequest) {\n  xmlhttp = new XMLHttpRequest();\n} else {\n  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');\n}", 
        year: "2005"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg", 
        caption: "A typical internet user's desk in the early 2000s",
        year: "2003"
    },
    { 
        type: "quote", 
        text: "Information wants to be free.", 
        author: "Stewart Brand",
        year: "1984"
    },
    { 
        type: "code", 
        text: "// Perl CGI script from the 90s\n#!/usr/bin/perl\nprint \"Content-type: text/html\\n\\n\";\nprint \"<h1>Hello World!</h1>\";", 
        year: "1996"
    },
    { 
        type: "ascii", 
        text: "  ______\n /      \\\n|  .  .  |\n|   __   |\n \\______/\n  MODEM",
        caption: "Dial-up modem ASCII art",
        year: "1992"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/05/29/15/34/computer-2353960_1280.jpg", 
        caption: "Vintage computer with CRT monitor",
        year: "1988"
    },
    { 
        type: "quote", 
        text: "The internet is a telephone system that's gotten uppity.", 
        author: "Clifford Stoll",
        year: "1995"
    },
    { 
        type: "code", 
        text: "<!-- Guestbook entry -->\n<strong>Name:</strong> WebSurfer99\n<strong>Email:</strong> coolguy@aol.com\n<strong>Comment:</strong> Awesome site! Visit mine too!", 
        year: "1998"
    },
    { 
        type: "ascii", 
        text: "   @@@@\n  @    @\n @  @@  @\n@   @@   @\n@        @\n @      @\n  @@@@@@\n   FLOPPY",
        caption: "3.5 inch floppy disk ASCII art",
        year: "1991"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg", 
        caption: "Early concept of cloud computing",
        year: "2007"
    },
    { 
        type: "quote", 
        text: "On the internet, nobody knows you're a dog.", 
        author: "Peter Steiner",
        year: "1993"
    },
    { 
        type: "code", 
        text: "// Early CSS\n<font face=\"Arial\" size=\"2\" color=\"blue\">\nThis is how we styled text before CSS\n</font>", 
        year: "1996"
    },
    { 
        type: "ascii", 
        text: "  .-.\n (o o)\n | O |\n |   |\n '~~~'\n  BBS",
        caption: "Bulletin Board System ASCII art",
        year: "1989"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/29/12/54/code-1869503_1280.jpg", 
        caption: "Early web development environment",
        year: "1997"
    },
    { 
        type: "quote", 
        text: "The internet is just a world passing around notes in a classroom.", 
        author: "Jon Stewart",
        year: "2004"
    },
    { 
        type: "code", 
        text: "<!-- Webring navigation -->\n<a href=\"http://webring.com/prev\">← Previous Site</a>\n<a href=\"http://webring.com/next\">Next Site →</a>", 
        year: "1999"
    },
    { 
        type: "ascii", 
        text: "   /\\\n  /  \\\n /____\\\n|      |\n|  OK  |\n|______|\n BUTTON",
        caption: "Classic web button ASCII",
        year: "1995"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/06/28/10/56/network-2450280_1280.jpg", 
        caption: "Network infrastructure diagram",
        year: "2001"
    },
    { 
        type: "quote", 
        text: "The internet is the most important single development in the history of human communication since the invention of call waiting.", 
        author: "Dave Barry",
        year: "2000"
    },
    { 
        type: "code", 
        text: "// Early PHP\n<?php\necho \"<center><h1>Welcome to my PHP site!</h1></center>\";\n?>", 
        year: "2000"
    },
    { 
        type: "ascii", 
        text: "  .-^-.\n /     \\\n|       |\n| 404   |\n| ERROR |\n \\_____/",
        caption: "404 Error ASCII art",
        year: "1996"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2015/07/17/20/02/computer-849384_1280.jpg", 
        caption: "Early laptop computer with internet access",
        year: "1994"
    },
    { 
        type: "quote", 
        text: "The internet is a great way to get on the net.", 
        author: "Bob Dole",
        year: "1996"
    },
    { 
        type: "code", 
        text: "<!-- Animated GIF counter -->\n<img src=\"counter.gif\" width=\"88\" height=\"31\" border=\"0\">\n<br>\n<small>Visitors since 1998</small>", 
        year: "1998"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |     | \n | www | \n |     | \n  \\___/  \n  WORLD",
        caption: "World Wide Web ASCII art",
        year: "1993"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/19/15/32/code-1839877_1280.jpg", 
        caption: "Early HTML code editor",
        year: "1995"
    },
    { 
        type: "quote", 
        text: "The internet is like a giant jellyfish. You can't step on it. You can't go around it. You've got to get through it.", 
        author: "John Evans",
        year: "1997"
    },
    { 
        type: "code", 
        text: "// Early Java Applet\n<applet code=\"MyApplet.class\" width=\"300\" height=\"200\">\nYour browser doesn't support Java!\n</applet>", 
        year: "1997"
    },
    { 
        type: "ascii", 
        text: "  .-----.\n /       \\\n|  .---.  |\n|  |   |  |\n|  '---'  |\n \\_______/\n  BROWSER",
        caption: "Web browser ASCII art",
        year: "1994"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png", 
        caption: "Early HTML5 logo and standards",
        year: "2008"
    },
    { 
        type: "quote", 
        text: "I think there is a world market for maybe five computers.", 
        author: "Thomas Watson",
        year: "1943"
    },
    { 
        type: "code", 
        text: "<!-- Frameset example -->\n<frameset cols=\"20%,80%\">\n  <frame src=\"menu.html\">\n  <frame src=\"content.html\">\n</frameset>", 
        year: "1998"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  / _ \\  \n | | | | \n | |_| | \n  \\___/  \n  EMAIL",
        caption: "Email symbol ASCII art",
        year: "1992"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg", 
        caption: "Early search engine interface",
        year: "1999"
    },
    { 
        type: "quote", 
        text: "The internet is the largest library in the world, but all the books are on the floor.", 
        author: "John Allen Paulos",
        year: "2002"
    },
    { 
        type: "code", 
        text: "// Early Flash ActionScript\nonClipEvent (load) {\n  this._x = 100;\n  this._y = 200;\n}", 
        year: "2000"
    },
    { 
        type: "ascii", 
        text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  SERVER",
        caption: "Server rack ASCII art",
        year: "1995"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152_1280.jpg", 
        caption: "Early social media concept",
        year: "2004"
    },
    { 
        type: "quote", 
        text: "The internet is the first thing that humanity has built that humanity doesn't understand.", 
        author: "Eric Schmidt",
        year: "2007"
    },
    { 
        type: "code", 
        text: "<!-- MIDI background music -->\n<embed src=\"background.mid\" autostart=\"true\" loop=\"true\" hidden=\"true\">", 
        year: "1999"
    },
    { 
        type: "ascii", 
        text: "   /\\\n  /  \\\n /    \\\n|  ||  |\n|  ||  |\n \\____/\n  WIFI",
        caption: "WiFi symbol ASCII art",
        year: "2003"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg", 
        caption: "Early programming documentation",
        year: "1996"
    },
    { 
        type: "quote", 
        text: "The internet is a virtual space that is as real as physical space.", 
        author: "John Perry Barlow",
        year: "1996"
    },
    { 
        type: "code", 
        text: "// Early XMLHttpRequest\nif (window.ActiveXObject) {\n  xmlHttp = new ActiveXObject(\"Microsoft.XMLHTTP\");\n}", 
        year: "2001"
    },
    { 
        type: "ascii", 
        text: "  .-.-.-.\n ( C O D E )\n  '-'-'-'\n DEVELOPER",
        caption: "Programmer ASCII art",
        year: "1997"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/31/15/33/chat-2025546_1280.png", 
        caption: "Early instant messaging interface",
        year: "1999"
    },
    { 
        type: "quote", 
        text: "The internet is not just one thing, it's a collection of things - of numerous communications networks that all speak the same digital language.", 
        author: "James H. Clark",
        year: "1996"
    },
    { 
        type: "code", 
        text: "<!-- Under construction GIF -->\n<img src=\"under_construction.gif\" width=\"400\" height=\"100\" alt=\"Under Construction\">", 
        year: "1997"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  .  | \n | / \\ | \n | \\_/ | \n  \\___/  \n  GLOBE",
        caption: "Internet globe ASCII art",
        year: "1994"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/06/10/07/18/processor-2389653_1280.jpg", 
        caption: "Microprocessor development",
        year: "2000"
    },
    { 
        type: "quote", 
        text: "The internet is like a giant international plumbing system.", 
        author: "John Gage",
        year: "1994"
    },
    { 
        type: "code", 
        text: "// Early cookie usage\ndocument.cookie = \"username=JohnDoe; expires=Thu, 18 Dec 2003 12:00:00 UTC\";", 
        year: "1997"
    },
    { 
        type: "ascii", 
        text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  ROUTER",
        caption: "Network router ASCII art",
        year: "1996"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/19/14/30/computer-1839559_1280.jpg", 
        caption: "Early e-commerce website",
        year: "1999"
    },
    { 
        type: "quote", 
        text: "The internet is the most democratic media environment we've ever had.", 
        author: "Arianna Huffington",
        year: "2005"
    },
    { 
        type: "code", 
        text: "<!-- Early meta tags -->\n<meta name=\"keywords\" content=\"cool, website, awesome, internet\">\n<meta name=\"description\" content=\"The best website ever!\">", 
        year: "1998"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  / _ \\  \n | (_) | \n  > _ <  \n | (_) | \n  \\___/  \n  CHAT",
        caption: "Chat room ASCII art",
        year: "1995"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/05/29/18/27/robot-2354691_1280.jpg", 
        caption: "Early web crawler concept",
        year: "2001"
    },
    { 
        type: "quote", 
        text: "The internet is the fabric of our lives.", 
        author: "Nicholas Negroponte",
        year: "1995"
    },
    { 
        type: "code", 
        text: "// Early DOM manipulation\nif (document.all) {\n  // Internet Explorer\n  document.all.myDiv.innerHTML = \"Hello IE!\";\n}", 
        year: "1999"
    },
    { 
        type: "ascii", 
        text: "  .-----.\n /       \\\n|  .---.  |\n|  |   |  |\n|  '---'  |\n \\_______/\n  DATABASE",
        caption: "Database server ASCII art",
        year: "1998"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/25/17/48/background-2008593_1280.jpg", 
        caption: "Early website background patterns",
        year: "1997"
    },
    { 
        type: "quote", 
        text: "The internet is the world's largest copy machine.", 
        author: "Kevin Kelly",
        year: "2008"
    },
    { 
        type: "code", 
        text: "<!-- Early website hit counter -->\n<script src=\"http://www.counter.com/counter.php?page=mywebsite\"></script>", 
        year: "2000"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  O  | \n |     | \n |  O  | \n  \\___/  \n  BINARY",
        caption: "Binary code ASCII art",
        year: "1993"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/06/21/16/14/blockchain-2428149_1280.jpg", 
        caption: "Early blockchain concept art",
        year: "2009"
    },
    { 
        type: "quote", 
        text: "The internet is the new town square.", 
        author: "Meg Whitman",
        year: "2000"
    },
    { 
        type: "code", 
        text: "// Early web security\nif (navigator.userAgent.indexOf(\"MSIE\") != -1) {\n  alert(\"Please use a better browser!\");\n}", 
        year: "2002"
    },
    { 
        type: "ascii", 
        text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  FIREWALL",
        caption: "Firewall protection ASCII art",
        year: "1997"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg", 
        caption: "Early responsive design concept",
        year: "2006"
    },
    { 
        type: "quote", 
        text: "The internet is the great equalizer.", 
        author: "Bill Gates",
        year: "2000"
    },
    { 
        type: "code", 
        text: "<!-- Early RSS feed -->\n<link rel=\"alternate\" type=\"application/rss+xml\" title=\"RSS\" href=\"rss.xml\">", 
        year: "2002"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  -  | \n |     | \n |  -  | \n  \\___/  \n  SIGNAL",
        caption: "Internet signal ASCII art",
        year: "1999"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png", 
        caption: "CSS3 early adoption",
        year: "2005"
    },
    { 
        type: "quote", 
        text: "640K ought to be enough for anybody.", 
        author: "Bill Gates",
        year: "1981"
    },
    { 
        type: "code", 
        text: "// Early mobile detection\nif (screen.width < 480) {\n  document.write(\"Mobile site\");\n}", 
        year: "2007"
    },
    { 
        type: "ascii", 
        text: "  .-.-.-.\n ( B L O G )\n  '-'-'-'\n BLOGGER",
        caption: "Blogger ASCII art",
        year: "1999"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/13/15/27/background-1978240_1280.jpg", 
        caption: "Early web design templates",
        year: "2001"
    },
    { 
        type: "quote", 
        text: "The internet is the most powerful tool we have for creating a more open and connected world.", 
        author: "Mark Zuckerberg",
        year: "2009"
    },
    { 
        type: "code", 
        text: "<!-- Early favicon -->\n<link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\">", 
        year: "1999"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  @  | \n |     | \n |  @  | \n  \\___/  \n  SOCIAL",
        caption: "Social media ASCII art",
        year: "2004"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/13/01/22/security-1975427_1280.jpg", 
        caption: "Early internet security concepts",
        year: "2003"
    },
    { 
        type: "quote", 
        text: "Computers in the future may weigh no more than 1.5 tons.", 
        author: "Popular Mechanics",
        year: "1949"
    },
    { 
        type: "code", 
        text: "// Early JSON usage\nvar data = eval('(' + responseText + ')');", 
        year: "2003"
    },
    { 
        type: "ascii", 
        text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  CLOUD",
        caption: "Cloud computing ASCII art",
        year: "2008"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989151_1280.jpg", 
        caption: "Early viral content concept",
        year: "2006"
    },
    { 
        type: "quote", 
        text: "The internet is the new printing press.", 
        author: "Esther Dyson",
        year: "1998"
    },
    { 
        type: "code", 
        text: "<!-- Early semantic web -->\n<div class=\"header\">\n  <div class=\"nav\">\n    <ul class=\"menu\">...</ul>\n  </div>\n</div>", 
        year: "2004"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  #  | \n |     | \n |  #  | \n  \\___/  \n  HASHTAG",
        caption: "Hashtag ASCII art",
        year: "2007"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/31/15/33/chat-2025545_1280.png", 
        caption: "Early video conferencing software",
        year: "2005"
    },
    { 
        type: "quote", 
        text: "The internet is the first medium that allows people to both consume and produce content.", 
        author: "Tim O'Reilly",
        year: "2005"
    },
    { 
        type: "code", 
        text: "// Early web standards\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\">", 
        year: "2002"
    },
    { 
        type: "ascii", 
        text: "  .-.-.-.\n ( A P P S )\n  '-'-'-'\n  WEB APPS",
        caption: "Web applications ASCII art",
        year: "2006"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/31/15/34/chat-2025548_1280.png", 
        caption: "Early mobile app development",
        year: "2008"
    },
    { 
        type: "quote", 
        text: "The internet is the most important human invention since fire.", 
        author: "Vint Cerf",
        year: "2007"
    },
    { 
        type: "code", 
        text: "// Telnet protocol\nTrying 192.168.1.1...\nConnected to host\nEscape character is '^]'", 
        year: "1983"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/21/13/29/old-1845712_1280.jpg", 
        caption: "Vintage computer terminal",
        year: "1978"
    },
    { 
        type: "quote", 
        text: "Where a calculator on the ENIAC is equipped with 18,000 vacuum tubes and weighs 30 tons, computers in the future may have only 1,000 vacuum tubes and weigh only 1.5 tons.", 
        author: "Popular Mechanics",
        year: "1949"
    },
    { 
        type: "code", 
        text: "// FTP protocol\nftp> open ftp.example.com\nName: anonymous\nPassword: guest@", 
        year: "1985"
    },
    { 
        type: "ascii", 
        text: "  .-.-.\n (IRC)\n  '-'-'\nCHAT ROOM",
        caption: "IRC chat ASCII art",
        year: "1988"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg", 
        caption: "Early network cables and connectors",
        year: "1991"
    },
    { 
        type: "quote", 
        text: "The internet is not about technology, it's about communication and connection.", 
        author: "Unknown",
        year: "1995"
    },
    { 
        type: "code", 
        text: "// Gopher protocol\n1. About this server\n2. Search this server\n3. View documentation\n4. Download files", 
        year: "1991"
    },
    { 
        type: "ascii", 
        text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  HUB",
        caption: "Network hub ASCII art",
        year: "1993"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989153_1280.jpg", 
        caption: "Early online community interface",
        year: "1996"
    },
    { 
        type: "quote", 
        text: "The internet is like alcohol in some sense. It accentuates what you would do anyway.", 
        author: "Esther Dyson",
        year: "1998"
    },
    { 
        type: "code", 
        text: "// Usenet post\nFrom: user@domain.com\nNewsgroups: comp.sys.ibm.pc\nSubject: Help with my new computer!\n\nI just bought a new PC and need help...", 
        year: "1986"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  U  | \n |  S  | \n |  E  | \n  \\___/  \n  NET",
        caption: "Usenet ASCII art",
        year: "1987"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2016/11/19/15/32/code-1839878_1280.jpg", 
        caption: "Early programming books and manuals",
        year: "1992"
    },
    { 
        type: "quote", 
        text: "The internet is the most important technological development of our lifetime.", 
        author: "Al Gore",
        year: "1998"
    },
    { 
        type: "code", 
        text: "// Early DNS lookup\nnslookup www.example.com\nServer: 8.8.8.8\nAddress: 8.8.8.8#53\n\nNon-authoritative answer:\nName: www.example.com\nAddress: 93.184.216.34", 
        year: "1987"
    },
    { 
        type: "ascii", 
        text: "  .-.-.-.\n (P2P)\n  '-'-'-'\nSHARING",
        caption: "Peer-to-peer ASCII art",
        year: "1999"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/31/15/34/technology-2025549_1280.png", 
        caption: "Early file sharing interface",
        year: "2000"
    },
    { 
        type: "quote", 
        text: "The internet is the great equalizer of our time.", 
        author: "John Doerr",
        year: "2001"
    },
    { 
        type: "code", 
        text: "// Early SSL certificate\n-----BEGIN CERTIFICATE-----\nMIIDXTCCAkWgAwIBAgIJAKL7wQ8O3uB7MA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV\n...\n-----END CERTIFICATE-----", 
        year: "1995"
    },
    { 
        type: "ascii", 
        text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  VPN",
        caption: "VPN connection ASCII art",
        year: "1996"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/31/15/33/chat-2025547_1280.png", 
        caption: "Early online gaming interface",
        year: "1997"
    },
    { 
        type: "quote", 
        text: "The internet is the most powerful democratizing tool ever created.", 
        author: "Jimmy Wales",
        year: "2004"
    },
    { 
        type: "code", 
        text: "// Early Bitcoin transaction\n{\n  \"hash\": \"4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b\",\n  \"ver\": 1,\n  \"vin_sz\": 1,\n  \"vout_sz\": 1,\n  \"lock_time\": 0\n}", 
        year: "2009"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  B  | \n |  T  | \n |  C  | \n  \\___/  \n  COIN",
        caption: "Bitcoin ASCII art",
        year: "2009"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/31/15/34/technology-2025550_1280.png", 
        caption: "Early cryptocurrency wallet",
        year: "2010"
    },
    { 
        type: "quote", 
        text: "The internet is no longer a luxury, it's a necessity.", 
        author: "Barack Obama",
        year: "2015"
    },
    { 
        type: "code", 
        text: "// Early responsive design\n@media only screen and (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}", 
        year: "2012"
    },
    { 
        type: "ascii", 
        text: "  .-.-.-.\n (IoT)\n  '-'-'-'\n  THINGS",
        caption: "Internet of Things ASCII art",
        year: "2011"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/01/31/15/34/technology-2025551_1280.png", 
        caption: "Smart home internet connectivity",
        year: "2013"
    },
    { 
        type: "quote", 
        text: "The internet is the foundation of the Fourth Industrial Revolution.", 
        author: "Klaus Schwab",
        year: "2016"
    },
    { 
        type: "code", 
        text: "// Early machine learning API\nconst vision = require('@google-cloud/vision');\nconst client = new vision.ImageAnnotatorClient();\nconst [result] = await client.labelDetection(image);", 
        year: "2017"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  AI  | \n |  &   | \n |  ML  | \n  \\___/  \n  FUTURE",
        caption: "AI and ML ASCII art",
        year: "2018"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2019/04/06/06/44/artificial-intelligence-4106760_1280.jpg", 
        caption: "Artificial intelligence and internet integration",
        year: "2019"
    },
    { 
        type: "quote", 
        text: "The internet has become the city square for the global village of tomorrow.", 
        author: "Satya Nadella",
        year: "2020"
    },
    { 
        type: "code", 
        text: "// Web3 and blockchain\nconst Web3 = require('web3');\nconst web3 = new Web3('ws://localhost:8546');\nconst contract = new web3.eth.Contract(abi, address);", 
        year: "2021"
    },
    { 
        type: "ascii", 
        text: "  .-.-.-.\n (WEB3)\n  '-'-'-'\n FUTURE",
        caption: "Web3 ASCII art",
        year: "2022"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-development-6521720_1280.jpg", 
        caption: "Metaverse and virtual reality integration",
        year: "2022"
    },
    { 
        type: "quote", 
        text: "The internet is evolving into a more decentralized and user-owned ecosystem.", 
        author: "Vitalik Buterin",
        year: "2023"
    },
    { 
        type: "code", 
        text: "// Quantum computing simulation\nconst quantumCircuit = new QuantumCircuit(2);\nquantumCircuit.h(0);\nquantumCircuit.cx(0, 1);\nconst result = quantumCircuit.execute();", 
        year: "2024"
    },
    { 
        type: "ascii", 
        text: "   ___   \n  /   \\  \n |  Q  | \n |  U  | \n |  A  | \n  \\___/  \n  N T U M",
        caption: "Quantum computing ASCII art",
        year: "2025"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/quantum-6980007_1280.jpg", 
        caption: "Quantum internet concept",
        year: "2026"
    },
    { 
        type: "quote", 
        text: "The future of the internet lies in seamless integration of physical and digital realities.", 
        author: "Tim Cook",
        year: "2027"
    },
    { 
        type: "code", 
        text: "// Neural interface API\nconst neuralNet = new NeuralInterface();\nneuralNet.connect('brain-computer-interface');\nconst thought = neuralNet.readCognitivePattern();", 
        year: "2028"
    },
    { 
        type: "ascii", 
        text: "  .-.-.-.\n (BCI)\n  '-'-'-'\n BRAIN",
        caption: "Brain-Computer Interface ASCII art",
        year: "2029"
    },
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2023/03/15/10/04/neural-network-7854134_1280.jpg", 
        caption: "Neural network and brain interface",
        year: "2030"
    }
];
