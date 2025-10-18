// بيانات متحف الإنترنت العشوائي
const museumData = [
    { 
        type: "image", 
        src: "https://cdn.pixabay.com/photo/2017/06/20/08/12/mainframe-2421769_1280.png", 
        caption: "A classic mainframe computer from the 1980s",
        year: "1985"
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
    }
];
