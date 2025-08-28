// http://127.0.0.1:3000/Virtual_Assistant/index.html
let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice = document.querySelector('#voice')

// function that takes text as argument and speak the text. 
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

// function that wishes whenever application is loaded
function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=5 && hours<12){
        speak("Good Morning Sir")
    } else if (hours>=12 && hours<17){
        speak("Good Afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

// speechRecognition class to listen the voice
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let transcript = event.results[event.resultIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(command){
    btn.style.display="flex"
    voice.style.display="none"
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if(command.includes("hello") || command.includes("hey")){
        speak("Hello Sir , How can I help you")
    } else if(command.includes("who are you")){
        speak("I'm Shifra , Your Virtual Assistant")
    } else if(command.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    } else if(command.includes("day") || command.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    } else if(command.includes("open youtube") || command.includes("youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    } else if(command.includes("open google") || command.includes("google")){
        speak("opening google")
        window.open("https://www.google.com/")
    } else if(command.includes("open instagram") || command.includes("instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    } else if(command.includes("open facebook") || command.includes("facebook")){
        speak("opening facebook")    
        window.open("https://www.facebook.com/")
    } else if(command.includes("open whatsapp") || command.includes("whatsapp")){
        speak("opening whatsapp")    
        if(isMobile){
            window.open("https://wa.me")
        } else {
            window.open("whatsapp://")
        }
    } else if(command.includes("open telegram") || command.includes("telegram")){
        speak("opening telegram")    
        window.open("https://t.me/Rastogi_23")
    } else if(command.includes("open calculator") || command.includes("calculator")){
        speak("opening calculator")
        window.open("calculator://")
    } else if(command.includes("open calendar") || command.includes("calendar")){
        speak("opening calendar")    
        window.open("https://www.timeanddate.com/calendar/monthly.html")      
    } else if(command.includes("open vscode") || command.includes("open vs code") || command.includes("vs code")){
        speak("opening vscode")
        window.open("vscode://")
    } else {
        let final = (command.replace("zia","")||command.replace("ziya","")||command.replace("jiya","")||command.replace("jia",""))
        speak(`Here what I found on internet regarding ${final}`)
        window.open(`https://www.google.com/search?q=${final}`)
    }
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  const particleNum = 200;

  for (let i = 0; i < particleNum; i++) {
    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circle-container');

    const size = Math.floor(Math.random() * 8) + 2;
    circleContainer.style.width = `${size}px`;
    circleContainer.style.height = `${size}px`;

    const startX = Math.random() * 100;
    circleContainer.style.left = `${startX}vw`;

    const duration = 7000 + Math.random() * 4000;
    circleContainer.style.animationDuration = `${duration}ms`;

    const delay = Math.random() * 11000;
    circleContainer.style.animationDelay = `${delay}ms`;

    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.animationDelay = `${Math.random() * 4000}ms`;

    circleContainer.appendChild(circle);
    container.appendChild(circleContainer);
  }
});
