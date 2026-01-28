const typewriterElement = document.getElementById("pronouns");
typewriter();
async function typewriter() {
    while(true){
        await write("she/they",typewriterElement);
        await write("🏳️‍⚧️",typewriterElement);
        await write("she/her",typewriterElement);
        await write("she/nanigans",typewriterElement);
        await write("the hell if i know",typewriterElement);
    }
}
async function clockWrapper() {
    while(true){
        await clock(clockElement);
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//typewriter effect
async function write(text,element){
    var result = "";
    for(var i = 0; i < text.length; i++){
        await delay(100);
        result += text.charAt(i);
        element.textContent = result;
    }
    await delay(1000);
    result = "";
    for(var i = 0; i < text.length/2; i++){
        result += text.charAt(i);
        element.textContent = result;
    }
    await delay(50);
    element.textContent = "\u00A0";
}