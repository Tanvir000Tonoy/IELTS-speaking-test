// import cueCards from "./cueCards";
// Date 08/07/2024
// author : Tanvir Rahman Tonoy 
// I'm creating this so that i can practice my cue card which is one of the toughest part of ielts speaking module : )
let StartEverything = document.getElementById("BeginTheExam");
StartEverything.addEventListener('click',()=>{
    document.getElementsByClassName('bar')[0].style.display = "flex";
    document.getElementsByClassName('parts')[0].style.display = "flex";
    StartEverything.style.display = "none";
    activatePart1();
});
// Timer : 
let timer;
let timeLeft = 900; // 5 minutes in seconds

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 300; // Reset to 5 minutes
    updateDisplay();
}
StartEverything.addEventListener('click', startTimer);
startButton.addEventListener('click',()=>{
    startTimer()
    startButton.style.display = "none";
})
stopButton.addEventListener('click',()=>{
    startButton.style.display = "flex";    
    stopTimer();
});
resetButton.addEventListener('click',()=>{
    window.location.reload();
    resetTimer();
});

updateDisplay();



let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");

// bar buttons functions
let buttons = document.querySelectorAll("button");
buttons[0].addEventListener('click',()=>{   
    part1.style.display = "flex";
    part2.style.display = "none";
    part3.style.display = "none";
})
buttons[1].addEventListener('click',()=>{ 
    part1.style.display = "none";
    part2.style.display = "flex";
    part3.style.display = "none";
})
buttons[2].addEventListener('click',()=>{
    part1.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "flex";
})



//  Part >>>>>1<<<<<
//  I think I should plan few things let me think about this :)
/*
1. create a random function to choose a particular cue card, 
2. show the cue card on the screen 


*/
const ieltsQuestions = [
    // Warm-up
    "Does your name have any special meaning?",
    "Why do so many people change their names?",
    "Is your name important to you?",
    
    // Hometown or Birthplace
    "Where do you come from?",
    "Where do you live?",
    "Can you tell me something about your hometown?",
    "Can you tell me some famous landscapes or scenic spots in your hometown?",
    "Can you tell me some history of your hometown?",
    
    // Personal Background and Information
    "Are you a student or do you have a job?",
    "What do you like most about your study?",
    "What kind of job do you prefer after graduation?",
    "What is your major?",
    "What do you do for a living?",
    "Could you tell me a typical day of yours?",
    "How did you get your job?",
    "Are you satisfied with your job?",
    "What do you like most about your job?",
    "What kind of job will you prefer in the future?",
    
    // Hobby or Inclination
    "What do you usually do in your spare time?",
    "Do you prefer to stay alone or with your friends?",
    "What do you usually do on weekends and weekdays?",
    "What do you usually do when you go out?",
    "What do you usually do with your friends?",
    "Do you like reading?",
    "What kind of books do you like best?",
    "Do you like English? Why or why not?",
    "What do you think of the importance of English?",
    "What are some common good habits and bad habits? Why?",
    
    // Future Plan
    "Why are you taking the IELTS test?",
    "What are you planning to do in the next five years?",
    "What are you planning to do in the next ten years?",
    "What is the first thing you will do when you arrive at the new place?",
    
    // Traveling
    "Do you like traveling?",
    "Do you like travel alone or with friends?",
    "Have you traveled to other places? Where are they?",
    "What do you usually do when you first arrive in a new place?",
    "What are the benefits of traveling?",
    "Why do so many people like traveling nowadays?",
    
    // Friends
    "Do you have many friends? Are they casual acquaintances or close friends?",
    "Do you prefer to stay with your family or with your friends?",
    "Do you prefer one or two close friends or many friends?",
    "Can you talk about your best friend?",
    "How do you make friends?",
    "What do you usually do with your friends?",
    "Is the time you spend with your friends as much as that you spend with your family?",
    
    // Music
    "Do you like music?",
    "What are the benefits of listening to music?",
    "What kind of music do you like best?",
    "Why do you like this kind of music?",
    "Who is your favorite artist?",
    
    // Transportation
    "Can you say something about the transportation in your hometown?",
    "What is the common means of transport in your country?",
    "Which transport do you use for regular commute?",
    "Do traffic jams often occur in your hometown or in the city where you live?",
    "How can we solve the problem?",
    "What changes in transportation have taken place in the past several years in your country?"
  ];
  
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * ieltsQuestions.length);
    return ieltsQuestions[randomIndex];
  }
  
  // Example usage
  let part1Questions = document.getElementsByClassName("partOne");
  function activatePart1(){
    for(i=2;i<10;i++){
        part1Questions[i].innerHTML = (i+1)+". "+ getRandomQuestion();
      }    
  }
 

// Part >>>>>2<<<<<<<
// what is the problem ?
/*
the object will be random but the points will be constant 
create a random function for the object number 

*/
let cueCards =[
    {
        id:1,
        title:"Describe a new skill you would like to learn:",
        points:[
            "what skill?(what you would like to learn to do)",
            "where you would learn it?( or where you think would be the best place to learn it",
            "How difficult you think it would be?",
            "and explain why you would like to learn this skill?"
        ],
        answer:"I'd like to talk about a new skill that I want to learn. I'm the kind of adventurous person who enjoys the challenge of learning new things. Whether it is a new sport or a skill that would be useful to me. I would like to have the skills to set up my own website.Probably the best place to learn to do this would be online, using a distance-learning course run by a university, which I could take free of charge. I wouldn't need to travel and I could complete the course at my own pace in my spare time . Although there would be a lot to learn, I already use computers all the time, so I think that I could pick up the basics quite quickly with practice, I would become more creative and able to incorporate new features on my website. Of course, I imagine that I would find the course interesting , but I have a practical reason for wanting to master this skill. I have recently started my own company, selling sports goods, so it would be a reall ycost-effective and attractive way to advertise my products "
    },
    {
        id:2,
        title:"Describe a person(you know),much older than you, who you admire you should say : ",
        points:[
            "Who this person is?",
            "how you know this person?",
            "how this person has influenced you ?",
            "and explain why you admire this person"
        ],
        answer:"The senior person whome I really respect and like is my grandmother. From my childhood, she has been a caring person for me. Still she is a good friend of mine whome I share many things. She is a benevolent and good person who possesses a good heart. She tries to help others with her highest efforts.I Know her from my childhood as she lives with us and we have a lot of happy memories together. She is a successful mother of 3 people including my father. She has devoted all her life to her kids and made them educated . She possesses a nice and charming personality that illuminates the people around her. I love and respect her for many different reasons . The most important reason is because of her unconditional love and affection for me. She is a good mentor who can show me positive ways and guide me in amy depressed time. Talking to her is a soothing experience and the story she tells is always attractive and full of morality . I have learned many positive attitudes and good thinking from her."
    },
    {
        id:3,
        title:"Describe one of your best ( one of your close , or good) friends you should say :",
        points:[
            "who this person is ?",
            "How long you have known them ( him or her)?",
            "Or, HOw you first met?",
            "what you do together?",
            "and explain why you think this person is a good friend?"
        ],
        answer: "when it comes to talking about my friends, I'd like to talk about mess. SHe is my best friend. We are the same age and she is only two days older than me. We studied in the same school , so we had many poortunities to communicate with each other. She is a good looking and outgoing person. We have many of the same hobbies. We both like reading books and watching films , then we exchange our own opinions about the books and films. We had many fun times together . She is good at cooking . Every time I went to her home , shw would cook many tasty dishes for me . She likes to research all kinds of cookbooks and cook programs, while I don't like to cood at all . She is patient to play with kids and help them.she takes part in a charity organization , she regularly goes to the disabled children schoool to read all kinds of fairy tale book sto children. I feel proud of her. Although both of us are pretty busy with our jobs, we still meet each other once in a while. Whenever I am in trouble or in hardship, she is always there with a helping hand and encouraging words. I do appreciate having this friend."
    },
    {
        id:4,
        title:"Describe a photo of yourself that you like you should say :",
        points:[
            "when the photo was taken?",
            "Where the photo was taken?",
            "Who took the photo?",
            "and explain why the photo was taken or why you think it is a good photo?"
        ],
        answer:"The photo I would like to describe is a scenic, which was just taken by my phone. Although This photo is just a normal scenic, It was taken in a special place, which is on helicopter. In the summer holiday last year, my roommate and I decide to go to America for a one-month trabeling. When we arrived there, we heard from local that grand canyon is the most famous attraction in california, People living these suggested that viewing canyon scenery from sky was the best choice. And we felt really moved and interested in their words. So we immediately booked tickets for sky tour of Grand canyon. Originally , I planned to enjoy the first time of the sky our, but actually the helicopter shaked heavily and it was difficult to take any photos during flying. This made me dizzy. you know, I looked outside the window and enjoyed views my eyes without taking any photos. Luckily ,after we got off from the helicopter, my roommate told me that she used her phone , taking a photo for me, The photo was the splendid background of the whole grand canyon and I was looking at the window. I love this photo and use it as my desktop wallpaper until now."
    },
    {
        id:5,
        title:"Describe a time when you saw an interesting animal you should say:",
        points:[
            "What animal it was?",
            "Where you saw it?",
            "What happened & felling worked when you saw it?",
            "And explain why you thought it was interesting?"
        ],
        answer:"I found there was a bat nest in my balcony recently , and one night I happened to see they flew across the patio under our apartment and hover  in the sky. I was shocked , because it was dark outside but they knew exactly where to got without mistakes. Moreover, they went out only at night. I thought bats are interesting not because they can fly in the dark since I know they are nocturnal animals.I always think the eye-sight, like another nocturnal animal , owls. But the truth is because of their echolocation. Bat echolocation is a perceptual system where ultrasonic sounds are emitted specifically to produce echoes. By pomparing the outgoing pulse with the returning echoes the brain and auditory nervous system can produce detailed image of the bat's surroundings. This allows bats to detect, localize and even classify their prey in complete darkness."
    },
    {
        id:6,
        title:"Describe an item of clothing that someone (recently) gave to you , You should say : ",
        points:[
            "what it was?",
            "who gave it to you ?",
            "what it looked like and why they gave it to you ?",
            "and explain how you felt about this gift?"
        ],
        answer:"It just happened in the last year of my birthday. My sister bought e a strapless dress as a present. I felt surprised because this dress is not my taste. My sister said she bought it for me because she has never seen i wore any this kind of dress. she told me, girls should have to care for your appearance and the strapless dress is one of the most vital items in my wardrobe. The dress comes from a famous luxury brand and I know lots of my friends dream for it . you know , the dresss is black with understated decoration on the hemline. Although I love this gorgeous dream . It could be worn only on formal occasions. So I wore this dress at my draduation ceremony party. A lot of my classmates were fascinated by it and came to ask me where they could buy it? You know , as I said I had never dressed like that before. But after thaat time, became more confident and changed my dressing style"
    },
    {
        id:7,
        title:"Describe some local news that people in your locality are interested in you Should say : ",
        points:[
            "What the news is ?",
            "how you know about this news?",
            "Who is involved in this news ?",
            "And explain why it is interested to people"
        ],
        answer:"last summer I saw a news on the net which is very interesting and encourageing. In my hometown surrounded with some rural area where is very poor. The young man in there are not satisfied wither living condition, so they move to a big city looking for good employment opportunities, but they don't have any skills to earn money.so they study electrical weld in a vocational school. After they graduate they came to Australia by labor service export. They are hard-working , energetic, and gradually received faith form their local employer. Finally they become the Australian permanent resident. the salary they earn is enough to afford thir house ownership and they have extra money monthly send back to china for their parents. When this news first appears in china. , tat coational school become very popular, and many people want to study in it. Now these guys working and living happily in australian. when the first time I heard this news . I felt very interesting but felt more encouragement from it, they cam e from poor family but had changed thier life through their effort, their spirit deserves all of us to learn it."
    },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
    // {
    //     id:,
    //     title:"",
    //     points:[
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     answer:""
    // },
]

let title = document.getElementById("Title");
let items = document.getElementsByClassName("partTwo");
function randomCueCard(){
    const randomIndex = Math.floor(Math.random() * cueCards.length);
    return randomIndex;
}
let x = cueCards[randomCueCard()];
title.innerHTML = x.title;
let pointArray = x.points;
for(let i=0;i<4;i++){
    items[i].innerHTML = (i+1) + ". " +pointArray[i]
}
