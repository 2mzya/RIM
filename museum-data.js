// بيانات متحف الإنترنت الشامل - 1000 عنصر
const museumData = generateMuseumData(1000);

function generateMuseumData(count) {
    const data = [];
    const types = ['image', 'quote', 'code', 'ascii'];
    const years = generateYears(1980, 2010);
    
    const imageTemplates = [
        { src: "https://cdn.pixabay.com/photo/2017/06/20/08/12/mainframe-2421769_1280.png", caption: "Mainframe computer from the {year}s" },
        { src: "https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png", caption: "Mobile phone with early internet" },
        { src: "https://cdn.pixabay.com/photo/2015/09/21/14/24/supercomputer-949072_1280.jpg", caption: "Supercomputer processing data" },
        { src: "https://cdn.pixabay.com/photo/2016/11/19/20/55/apple-1841552_1280.jpg", caption: "Personal computer revolution" },
        { src: "https://cdn.pixabay.com/photo/2017/05/29/18/22/robot-2354686_1280.jpg", caption: "Early AI and robotics concept" },
        { src: "https://cdn.pixabay.com/photo/2016/11/21/16/21/board-1846276_1280.jpg", caption: "Internet server room equipment" },
        { src: "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg", caption: "Typical internet user's desk" },
        { src: "https://cdn.pixabay.com/photo/2017/05/29/15/34/computer-2353960_1280.jpg", caption: "Vintage computer with CRT monitor" },
        { src: "https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg", caption: "Cloud computing early concept" },
        { src: "https://cdn.pixabay.com/photo/2016/11/29/12/54/code-1869503_1280.jpg", caption: "Web development environment" }
    ];

    const quoteTemplates = [
        { text: "The internet is becoming the town square for the global village of tomorrow.", author: "Bill Gates" },
        { text: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.", author: "Tim Berners-Lee" },
        { text: "We are all now connected by the Internet, like neurons in a giant brain.", author: "Stephen Hawking" },
        { text: "The internet is the first thing that humanity has built that humanity doesn't understand.", author: "Eric Schmidt" },
        { text: "The internet could be a very positive step towards education, organization and participation.", author: "Noam Chomsky" },
        { text: "Information wants to be free.", author: "Stewart Brand" },
        { text: "On the internet, nobody knows you're a dog.", author: "Peter Steiner" },
        { text: "The internet is just a world passing around notes in a classroom.", author: "Jon Stewart" },
        { text: "The internet is the most important single development in human communication.", author: "Dave Barry" },
        { text: "The internet is a great way to get on the net.", author: "Bob Dole" }
    ];

    const codeTemplates = [
        { text: "<html>\n<head>\n<title>My First Website</title>\n</head>\n<body>\n<h1>Welcome!</h1>\n<p>Under construction...</p>\n</body>\n</html>", lang: "html" },
        { text: "// JavaScript validation\nfunction validateForm() {\n  if (document.forms[0].elements[0].value == '') {\n    alert('Please fill all fields!');\n    return false;\n  }\n  return true;\n}", lang: "javascript" },
        { text: "<!-- Blink and marquee tags -->\n<blink>Look at me!</blink>\n<marquee>Scrolling text!</marquee>", lang: "html" },
        { text: "// Early AJAX\nvar xmlhttp;\nif (window.XMLHttpRequest) {\n  xmlhttp = new XMLHttpRequest();\n}", lang: "javascript" },
        { text: "#!/usr/bin/perl\nprint \"Content-type: text/html\\n\\n\";\nprint \"<h1>Hello World!</h1>\";", lang: "perl" },
        { text: "// Early CSS alternative\n<font face=\"Arial\" size=\"2\" color=\"blue\">Styled text</font>", lang: "html" },
        { text: "<!-- Webring navigation -->\n<a href=\"prev.html\">← Previous</a>\n<a href=\"next.html\">Next →</a>", lang: "html" },
        { text: "// Early PHP\n<?php\necho \"<h1>Welcome to my site!</h1>\";\n?>", lang: "php" },
        { text: "// Cookie implementation\ndocument.cookie = \"user=John; expires=Thu, 18 Dec 2003 12:00:00 UTC\";", lang: "javascript" },
        { text: "<!-- Guestbook entry -->\n<strong>Name:</strong> User\n<strong>Comment:</strong> Great site!", lang: "html" }
    ];

    const asciiTemplates = [
        { text: "   _____\n  /     \\\n /       \\\n|  O   O  |\n|    ∆    |\n \\  ---  /\n  \\_____/\n   COMPUTER", caption: "Computer ASCII art" },
        { text: "  /\\_/\\\n ( o.o )\n  > ^ <\n INTERNET CAT", caption: "Internet cat ASCII" },
        { text: "  ______\n /      \\\n|  .  .  |\n|   __   |\n \\______/\n  MODEM", caption: "Dial-up modem" },
        { text: "   @@@@\n  @    @\n @  @@  @\n@   @@   @\n@        @\n @      @\n  @@@@@@\n   FLOPPY", caption: "Floppy disk" },
        { text: "  .-.\n (o o)\n | O |\n |   |\n '~~~'\n  BBS", caption: "Bulletin Board System" },
        { text: "   /\\\n  /  \\\n /____\\\n|      |\n|  OK  |\n|______|\n BUTTON", caption: "Web button" },
        { text: "  .-^-.\n /     \\\n|       |\n| 404   |\n| ERROR |\n \\_____/", caption: "404 Error" },
        { text: "   ___   \n  /   \\  \n |  .  | \n | / \\ | \n | \\_/ | \n  \\___/  \n  GLOBE", caption: "Internet globe" },
        { text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  ROUTER", caption: "Network router" },
        { text: "   ___   \n  /   \\  \n |  O  | \n |     | \n |  O  | \n  \\___/  \n  BINARY", caption: "Binary code" }
    ];

    const additionalQuotes = [
        "The internet is the new frontier.",
        "Cyberspace: where you are when you're on the phone.",
        "The net is a waste of time, and that's exactly what's right about it.",
        "The internet is the fabric of our lives.",
        "We are the web and the web is us.",
        "The internet is the world's largest library.",
        "Online is the ultimate democracy.",
        "The web does not just connect machines, it connects people.",
        "In the future, everyone will be world-famous for 15 minutes on the internet.",
        "The internet is the great equalizer of our time.",
        "Digital technology is changing how we live and work.",
        "The network is more important than the computer.",
        "We shape our tools and thereafter our tools shape us.",
        "The internet is like a giant international plumbing system.",
        "Information at your fingertips.",
        "The web is humanity connected.",
        "Technology is a useful servant but a dangerous master.",
        "The internet is the modern agora.",
        "Connectivity is productivity.",
        "The digital revolution is far more significant than the invention of writing or even of printing.",
        "The internet is the first medium that allows people to both consume and produce content.",
        "We are moving from a world of atoms to a world of bits.",
        "The net interprets censorship as damage and routes around it.",
        "The internet is the most powerful tool we have for creating a more open and connected world.",
        "The web is a social creation, not a technical one.",
        "In the information age, the barriers just aren't there anymore.",
        "The internet is the new printing press.",
        "We are all authors now.",
        "The network is the computer.",
        "The internet is the ultimate marketplace of ideas.",
        "Digital literacy is the new literacy.",
        "The web is what you make of it.",
        "The internet never forgets.",
        "We are living in the age of information overload.",
        "The speed of change is accelerating.",
        "The internet is the great disruptor.",
        "Online communities are the new neighborhoods.",
        "The digital divide is the new class divide.",
        "The internet is the ultimate equal opportunity employer.",
        "We are all connected in the great web of life.",
        "The future is already here — it's just not evenly distributed.",
        "The internet is the most democratic media environment we've ever had.",
        "The web is a reflection of our society.",
        "Technology is nothing. What's important is that you have faith in people.",
        "The internet is the largest experiment in anarchy that we have ever had.",
        "The net is a mirror of our collective consciousness.",
        "We are the architects of the digital world.",
        "The internet is the new public square.",
        "Information wants to be shared.",
        "The web is a conversation, not a lecture."
    ];

    const additionalAuthors = [
        "Al Gore", "Steve Jobs", "Larry Page", "Sergey Brin", "Jeff Bezos", 
        "Mark Zuckerberg", "Jack Dorsey", "Evan Williams", "Marc Andreessen",
        "Jim Clark", "John Doerr", "John Perry Barlow", "Esther Dyson", 
        "Nicholas Negroponte", "Ray Kurzweil", "Kevin Kelly", "Clay Shirky",
        "Douglas Rushkoff", "Jaron Lanier", "Tim O'Reilly", "Jimmy Wales",
        "Craig Newmark", "Pierre Omidyar", "Meg Whitman", "Carly Fiorina",
        "Michael Dell", "Scott McNealy", "Andy Grove", "Gordon Moore",
        "Robert Metcalfe", "Vint Cerf", "Bob Kahn", "Len Kleinrock",
        "Lawrence Roberts", "Paul Baran", "Donald Davies", "Ted Nelson",
        "Alan Kay", "Douglas Engelbart", "Grace Hopper", "Ada Lovelace",
        "Alan Turing", "John McCarthy", "Marvin Minsky", "Ray Tomlinson",
        "Brian Kernighan", "Dennis Ritchie", "Ken Thompson", "Bjarne Stroustrup",
        "James Gosling", "Brendan Eich", "Guido van Rossum", "Linus Torvalds",
        "Richard Stallman", "Larry Wall", "Rasmus Lerdorf", "Anders Hejlsberg"
    ];

    const additionalCodeSnippets = [
        "// DOM manipulation\nif (document.all) {\n  document.all.myDiv.innerHTML = 'Hello!';\n}",
        "<!-- Frameset -->\n<frameset cols=\"20%,80%\">\n  <frame src=\"menu.html\">\n</frameset>",
        "// Flash ActionScript\nonClipEvent (load) {\n  this._x = 100;\n}",
        "<!-- MIDI music -->\n<embed src=\"music.mid\" autostart=true hidden=true>",
        "// Mobile detection\nif (screen.width < 480) {\n  // mobile site\n}",
        "<!-- RSS feed -->\n<link rel=\"alternate\" type=\"application/rss+xml\" href=\"rss.xml\">",
        "// JSON parsing\nvar data = eval('(' + response + ')');",
        "<!-- Favicon -->\n<link rel=\"icon\" href=\"favicon.ico\">",
        "// Web standards\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\">",
        "<!-- Hit counter -->\n<script src=\"counter.php\"></script>",
        "// Browser detection\nif (navigator.userAgent.indexOf('MSIE') != -1) {\n  // IE specific code\n}",
        "<!-- Semantic HTML -->\n<div class=\"header\">\n  <div class=\"nav\">Menu</div>\n</div>",
        "// Early jQuery\n$('div').hide().show('slow');",
        "<!-- Meta tags -->\n<meta name=\"keywords\" content=\"web, internet, tech\">",
        "// XML processing\nvar parser = new DOMParser();\nvar xmlDoc = parser.parseFromString(text,\"text/xml\");",
        "<!-- Web 2.0 -->\n<div class=\"social-share\">\n  <a href=\"#share\">Share</a>\n</div>",
        "// AJAX call\nxmlhttp.open(\"GET\",\"data.txt\",true);\nxmlhttp.send();",
        "<!-- Blog comment -->\n<div class=\"comment\">\n  <p>Great post!</p>\n</div>",
        "// Cookie reader\nfunction getCookie(name) {\n  var value = \"; \" + document.cookie;\n  var parts = value.split(\"; \" + name + \"=\");\n  if (parts.length == 2) return parts.pop().split(\";\").shift();\n}",
        "<!-- Early responsive -->\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
    ];

    const additionalASCIITypes = [
        { text: "  .-----.\n /       \\\n|  .---.  |\n|  |   |  |\n|  '---'  |\n \\_______/\n  BROWSER", caption: "Web browser" },
        { text: "   ___   \n  /   \\  \n |  @  | \n |     | \n |  @  | \n  \\___/  \n  EMAIL", caption: "Email symbol" },
        { text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  SERVER", caption: "Server rack" },
        { text: "   /\\\n  /  \\\n /    \\\n|  ||  |\n|  ||  |\n \\____/\n  WIFI", caption: "WiFi symbol" },
        { text: "  .-.-.-.\n ( C O D E )\n  '-'-'-'\n DEVELOPER", caption: "Programmer" },
        { text: "   ___   \n  /   \\  \n |  -  | \n |     | \n |  -  | \n  \\___/  \n  SIGNAL", caption: "Internet signal" },
        { text: "  .-.-.-.\n ( B L O G )\n  '-'-'-'\n BLOGGER", caption: "Blogger" },
        { text: "   ___   \n  /   \\  \n |  #  | \n |     | \n |  #  | \n  \\___/  \n  HASHTAG", caption: "Hashtag" },
        { text: "  .-.-.-.\n ( A P P S )\n  '-'-'-'\n  WEB APPS", caption: "Web applications" },
        { text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  FIREWALL", caption: "Firewall" },
        { text: "   ___   \n  /   \\  \n |  @  | \n |     | \n |  @  | \n  \\___/  \n  SOCIAL", caption: "Social media" },
        { text: "  ______\n /  __  \\\n|  |  |  |\n|  |  |  |\n|  |__|  |\n \\______/\n  CLOUD", caption: "Cloud computing" },
        { text: "   ___   \n  /   \\  \n |  ?  | \n |     | \n |  ?  | \n  \\___/  \n  SEARCH", caption: "Search engine" },
        { text: "  .-.-.-.\n ( G A M E )\n  '-'-'-'\n  WEB GAME", caption: "Online game" },
        { text: "   ___   \n  /   \\  \n |  $  | \n |     | \n |  $  | \n  \\___/  \n  E-COMMERCE", caption: "E-commerce" }
    ];

    for (let i = 0; i < count; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const year = years[Math.floor(Math.random() * years.length)];
        
        let item = { type, year };
        
        switch(type) {
            case 'image':
                const imgTemplate = imageTemplates[Math.floor(Math.random() * imageTemplates.length)];
                item.src = imgTemplate.src;
                item.caption = imgTemplate.caption.replace('{year}', year.substring(0, 3));
                break;
                
            case 'quote':
                if (Math.random() > 0.3) {
                    const quoteTemplate = quoteTemplates[Math.floor(Math.random() * quoteTemplates.length)];
                    item.text = quoteTemplate.text;
                    item.author = quoteTemplate.author;
                } else {
                    item.text = additionalQuotes[Math.floor(Math.random() * additionalQuotes.length)];
                    item.author = additionalAuthors[Math.floor(Math.random() * additionalAuthors.length)];
                }
                break;
                
            case 'code':
                if (Math.random() > 0.4) {
                    const codeTemplate = codeTemplates[Math.floor(Math.random() * codeTemplates.length)];
                    item.text = codeTemplate.text;
                    item.language = codeTemplate.lang;
                } else {
                    item.text = additionalCodeSnippets[Math.floor(Math.random() * additionalCodeSnippets.length)];
                    item.language = "mixed";
                }
                break;
                
            case 'ascii':
                if (Math.random() > 0.3) {
                    const asciiTemplate = asciiTemplates[Math.floor(Math.random() * asciiTemplates.length)];
                    item.text = asciiTemplate.text;
                    item.caption = asciiTemplate.caption;
                } else {
                    const additionalAscii = additionalASCIITypes[Math.floor(Math.random() * additionalASCIITypes.length)];
                    item.text = additionalAscii.text;
                    item.caption = additionalAscii.caption;
                }
                break;
        }
        
        // Add some variations
        if (type === 'image' && Math.random() > 0.7) {
            item.variant = `variant_${Math.floor(Math.random() * 5) + 1}`;
        }
        
        if (type === 'quote' && Math.random() > 0.8) {
            item.context = `From ${['a conference', 'an interview', 'a book', 'a speech'][Math.floor(Math.random() * 4)]} in ${year}`;
        }
        
        data.push(item);
    }
    
    return data;
}

function generateYears(start, end) {
    const years = [];
    for (let year = start; year <= end; year++) {
        years.push(year.toString());
    }
    return years;
}

// دالة مساعدة للبحث في البيانات
function searchMuseumData(query) {
    return museumData.filter(item => 
        JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
    );
}

// دالة للحصول على البيانات حسب السنة
function getDataByYear(year) {
    return museumData.filter(item => item.year === year);
}

// دالة للحصول على البيانات حسب النوع
function getDataByType(type) {
    return museumData.filter(item => item.type === type);
}

// دالة للحصول على إحصائيات
function getMuseumStats() {
    const stats = {
        total: museumData.length,
        byType: {},
        byYear: {},
        byAuthor: {},
        byLanguage: {}
    };
    
    museumData.forEach(item => {
        // إحصائيات النوع
        stats.byType[item.type] = (stats.byType[item.type] || 0) + 1;
        
        // إحصائيات السنة
        stats.byYear[item.year] = (stats.byYear[item.year] || 0) + 1;
        
        // إحصائيات المؤلف (للاقتباسات)
        if (item.author) {
            stats.byAuthor[item.author] = (stats.byAuthor[item.author] || 0) + 1;
        }
        
        // إحصائيات اللغة (للأكواد)
        if (item.language) {
            stats.byLanguage[item.language] = (stats.byLanguage[item.language] || 0) + 1;
        }
    });
    
    return stats;
}

// أمثلة على استخدام الدوال المساعدة
console.log('إحصائيات المتحف:', getMuseumStats());
console.log('بيانات سنة 1995:', getDataByYear('1995').length);
console.log('جميع الصور:', getDataByType('image').length);
console.log('نتائج البحث عن "internet":', searchMuseumData('internet').length);
