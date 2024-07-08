// import cueCards from "./cueCards";
// Date 08/07/2024
// author : Tanvir Rahman Tonoy 
// I'm creating this so that i can practice my cue card which is one of the toughest part of ielts speaking module : )
let buttons = document.querySelectorAll("button");
let StartEverything = document.getElementById("BeginTheExam");
StartEverything.addEventListener('click',()=>{
    document.getElementsByClassName('bar')[0].style.display = "flex";
    document.getElementsByClassName('parts')[0].style.display = "flex";
    StartEverything.style.display = "none";
    activatePart1();
    document.getElementById("call").style.display = "block";
    document.getElementById("note").style.display= "block"
    buttons[1].style.opacity = ".1";
    buttons[2].style.opacity = ".1";
    buttons[0].style.opacity="1";
});
// Timer : 
let timer;
let timeLeft = 900; // 15 minutes in seconds

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
    timeLeft = 900; // Reset to 15 minutes
    updateDisplay();
}
StartEverything.addEventListener('click', startTimer);
startButton.addEventListener('click',()=>{
    startTimer()
    startButton.style.display = "none";
})
stopButton.addEventListener('click',()=>{
    startButton.style.display = "block";    
    stopTimer();
});
resetButton.addEventListener('click',()=>{
    window.location.reload();
    resetTimer();
});

updateDisplay();



// bar buttons functions
// let buttons = document.querySelectorAll("button");
buttons[0].addEventListener('click',()=>{   
    part1.style.display = "flex";
    part2.style.display = "none";
    part3.style.display = "none";
    buttons[1].style.opacity = ".1";
    buttons[2].style.opacity = ".1";
    buttons[0].style.opacity = "1";

})

let nextButtion = document.getElementById("next");
let countTap =0;
nextButtion.addEventListener('click',()=>{
    countTap++;
    if(countTap==1){
        part1.style.display = "none";
        part2.style.display = "flex";
        part3.style.display = "none";
        oneMinuteRule();
        buttons[0].style.opacity = ".1";
        buttons[2].style.opacity = ".1";
        buttons[1].style.opacity = "1"; 
    }else if(countTap ==2){
        part1.style.display = "none";
        part2.style.display = "none";
        part3.style.display = "flex";
        buttons[1].style.opacity = ".1";
        buttons[0].style.opacity = ".1";
        buttons[2].style.opacity = "1";
    }else{
        part1.style.display = "flex";
        part2.style.display = "none";
        part3.style.display = "none";
        buttons[1].style.opacity = ".1";
        buttons[2].style.opacity = ".1";
        buttons[0].style.opacity = "1";
    }
});
// part2 button click event
function oneMinuteRule(){
    let timer1;
    let timeLeft1 = 200;
    let youHave = 60;
    if (!timer1) {
        timer1 = setInterval(() => {
            if (timeLeft1 > 140) {
                timeLeft1--;
                document.getElementById("oneMin").innerHTML = youHave;
                youHave --;
            }else if(timeLeft1 <141 && timeLeft1 >0){
                timeLeft1--;
                document.getElementById("oneMin").style.display = "none";
                document.getElementById("Title").style.filter  = "blur(5px)";
                document.getElementsByClassName("points")[0].style.filter = "blur(5px)";
            } else {
                console.log("else")
                clearInterval(timer1);
                timer1 = null;
                document.getElementById("Title").style.filter  = "none";
                document.getElementsByClassName("points")[0].style.filter = "none";
            }
        }, 1000);
    }

}
buttons[1].addEventListener('click',()=>{ 
    part1.style.display = "none";
    part2.style.display = "flex";
    part3.style.display = "none";
    oneMinuteRule();
    buttons[0].style.opacity = ".1";
    buttons[2].style.opacity = ".1";
    buttons[1].style.opacity = "1";

})
buttons[2].addEventListener('click',()=>{
    part1.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "flex";
    buttons[1].style.opacity = ".1";
    buttons[0].style.opacity = ".1";
    buttons[2].style.opacity = "1";
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
    {
        id : 21,
        title:"Describe a time when you sued the internet to solve a problem you should say:",
        points:[
            "what problem it was",
            "when you did this",
            "how long it took you",
            "and explain why you used the internet to solve this problem"
        ],
        answer:"So i'm going to talk about this time when I needed a foreign book for my studies. I was in my junior year in university and we had this assignment that required us to find the latest statistics, Some of which are very hard to come by. Apparently in order to get access to new data you must know the right source and pay some fees. I found out that the statistics that I needed were published in a book but unfortunately it was not available for sales in my country. And even if I'd had it delivered , by the time it arrived it'd have been too late. So I had to contact a friend in America and  asked him to buy a hard copy then have the statistics pages scanned and emailed to me. It took some time but eventually I got the data in time. It was a bit of a hassle for my friend so I decided to buy him a small gift in return"
    },
    {
        id:22,
        title:"Describe an unforgettable advertisement that you saw or heard you should say:",
        points:[
            "where you saw or heard it",
            "what kind of advertisement it was",
            "what the contents of the advertismement were and",
            "explain why this advertisement is so unforgettable"
        ],
        answer:"while waiting for my boyfriend to pick me up for work,i was watching advertisements on the TV in the lobby. That night I saw an advertisement that has forever stuck in my mind. It was a commercial for Nike shoes with Michael Jordan.In it he said, I've missed more than nine thousand shots in my career.I've lost almost hree hundred games. Twenty-six times I've been trusted to take the game winning shot but missed . I've failded over and over and over again in my life, and that is why I succeed.I couldn't get that commercial out of my mind, not because I thought buying Nike shoes would make me as successful as Michael Jordan, but because of his unflinching determination and perseverance. Life is full of challenges and difficulties that test our level of commitment. I believe having determination divides the winners from the losers. Successful people are not ones who have never faild, but those who kept trying. As simple as this may sound, it is the one ingredient that separates the winners from the losers"
    },
    {
        id: 23,
        title: "Describe a practical skill you learned You should say :",
        points: [
            "what this skill is",
            "how you learned it",
            "when you use this skill",
            "and explain how this skill is useful to you"
        ],
        answer:"Here is the sample answer for 'describe a practical skill you learned' topic. Well one skill that I have is playing the guitar. I learned it when I was young. I learned how to play because I had many friends that played the guiter and when they played and sang, I knew I just had to learn. At first it was a little difficult because to be quite frank , I really didn't see myself as someone who was musically inclined. I had to tell myself that I could do it and little by tittle, a note here and a chord there, I managed to pick it up. Even now I have a long way to go with playing but I have found it enjoyable not just for myself, for others have said they enjoy it as well. I have had a few guitars and although there are different styles and qualities, to me it seeems that as long as they have strings on them and you can tune them they are fine. I use the guitar to cheer myself up when I am feelinga a little down and also use it to teach songs to others. I have never made money teaching guiter but I have made a little money playing and singing. I don't know if I would want to pursue this skill as a career but as long as I still enjoy it , I am going to do it"
    },
    {
        id: 24,
        title: "Describe a place you visited that was full of color You should say :",
        points: [
            "What place it was",
            "why you went there",
            "what you did there",
            "and explain why you think it was full of colour"
        ],
        answer:"I would like to share my impressions of a garden that I visited last summer, full of colour: Claude Monet's house and garden in Giverny, France. As a fan of monet's paintings, especially the famous 'Water Lilies',I had always dreamt of seeing them in real life.So when some friends suggested a visit last year, I jumped at the chance. After a journey of about an hour by train from our hotel , we arrived at giverny. The Garder was exactly as he had painted it - it was a riot of colour, from the peaceful white of the water lilies to the striking reds and oranges which filled some of the flowerbeds. The two parts of the garden complemented each other perfectly . We first admired the array of bringt flowers and truit trees in the clos Normand, but my favorite part was the water garden and we enjoyed a stroll, taking in all the colorrs , smells, and bird songs. Monet avidly collected prints of Japanese gardens. These inspired the Japanese bridges covered with wisterias, the pond's water lilies, and the bamboo and weeping willows he planted."
    },
    {
        id: 25,
        title: "Describe a situation when a child made you laugh You should say ",
        points: [
            "who the child was",
            "When and where it happend",
            "what he or she did to make you laugh",
            "and explain why you laughed"
        ],
        answer:"One of my best friends has a 3-year-old baby girl; so every time we went out, she would take her with us.Her daugher is such a witty kid, and she is always full of energy. As she begins to be aware of the outside world, she asks a lot of questions just to satisfy her curiosity. One day , we went out shopping. While her mother and I took turns trying clothes on , she was sitting quietly on the bench. Then she looked at me and her mother and started to express her opinions on our clothes. The was she talked was so funny that we couldn't stop laughing. She was so used to playin g with her barbie doll that she suggested we should dress like one of her dolls."
    },
    {
        id: 26,
        title: "Describe a time that you got up early in the morning you should say :",
        points: [
            "When it happened",
            "why you got up early",
            "who you were with",
            "and explain how you felt about getting up early"
        ],
        answer:"The first thing I want to say in that I hardly ever wake up early , so when I do it is for something important. So the moset recent occasion when I had to be up early was last year when I toook the IELTS test . It started at 8 in the morning so Naturally I had to get up at 6.when I got out of the house it was still dark outside. It took me 20 minutes by motorbike to arrive at the hotel where the test was going to take place. Some other test takers ahd already come and were stitting inside the lounge , all looking quite drowsy and nervous.I found myself a seat and started taking out a book to read . I normally find it useless to cram right before a test so I just do something to relax. At 8 everyone was called into a large meeting room where the organisers would have a short presentation on the test process. we were all required to leave our personal belongings outside the exam room . Anyway, the test went well and I got the result I needed. I think I could've done better if I hadn't been sleepy at the start of the test"
    },
    {
        id: 27,
        title: "Describe a live sports match that you watched you Should say:",
        points: [
            "what is is ",
            "when you watched it",
            "How was it",
            "And explain why you liked watching it"
        ],
        answer:"Well, football is the only sport that I ususally watch with my brother. I'm terrible at playing football but I love watching a football match. Both hom eand away games cause high levels of emotion in me. Today, however, I would like to talk about a match where I did not care about the score.There was an occasion a few years ago when I went to watch a football match in a town about half an hour from where I live by bike. It was a charity match to collect funds for the local school - and it was very well attended. I think there must have been over 5,000 people there. which isn't bad because there weren't  any star players. The atmosphere was so exciting that it encouraged the players a lot as soon as they came into the football pitch with the referee. My brother and I were 100 percent focused on the match and provoked the players in two teams for their fair play. I am really deep into this football match for a number of reasons . Firstly , the playeers in two teams are not the professionals , but they really ensured fair play and no red and yellow cards were released."
    },
    {
        id: 28,
        title: "Describe a skill you learned when you were a child you should say:",
        points: [
            "What skill it was",
            "who taught you this skill",
            "how you learned it",
            "and explain why you learned this skill"
        ],
        answer:"Typing on a keyboard without looking at this is a special skill and recently I have learnt to type by not looking at the keyboard.When I was 10 years old, my father bought me a computer, it was impossible for me to type without looking at the keys. It took long hours for me to type a single page by searching the ltters on the keys.It was a troublesome task for me and most of the time I had to type different topics on computer. But I could not complete the tasks in due time for my lack of skills in typing. When I started to type, It appeared to me that The letters should be placed on the keyboared alphabetically for better use. but gradually I learnt that this way is better than the alphabetical letters. Besically I learnt the skill at my home using my personal computer. In the very beginning, it was tougher for me to compose anything on the computer with the keyboard attached with it and it took longer hours for me to compose a documents of three or four pages. so I started using internet to get some ways to learn typing . I found few special applications that allow the users to get the desired typing skill"
    },
    {
        id: 29,
        title: "Describe a language other than English that you would like to learn , YOu should say :",
        points: [
            "What the language is ",
            "where it is spoken",
            "what you think would be difficult ",
            "what would be easy about learning the languages and explain why you would like to learn it "
        ],
        answer:"Learning a second language not only adds up your skills but also offers enormous benefits for your brain and personal growth. Additionally , being bilingual or multilingual expands your knowledge across the country's border and provides you easy access to the understanding of other cultures.Therefore, beside English, Spanish sits high in my must-learn list due to its wide application and beautiful culture. Needless to say, spanish is one of the most spoken language in the world and one of the six official languages used in United Nations conferences and statements. Spanish is spoken in most countriesin south and central america and in the US , over 50 million people are using spanish either as their mother tongue or second language. As a result, knowing spanish would absolutely widen your horizon , develop your sense of appreciation for Hispanic culture as well as transform your travel experience as who knows when you would bump into some spanish friends on your adventure. Many have said that spanish is one of the easiest languages to learn thanks to its phonetic pronunciation and its similarity with English , in terms of vocabulary."
    },
    {
        id: 30,
        title: "Describe a Movie you recently Watched",
        points: [
            "what was the movie",
            "when and where did you watch it",
            "who was the main actor",
            "did you like it ? Why ?"
        ],
        answer:"Lately, I haven't had muc htime to go out for a movie since I've been up to my eyeballs in reports and presentations. Hence, to relax and boost my mood, I rented some good old movies and made myself som ehealthy snacks for late night treat.`silver Linings playbook` is one of my all-time' Favorite and I've lost count how many times I replayed it. THe last time I watched it was a week ago on saturday night.Oscar nominated movies were usually not my taste due to their compleity and lack of entertainment but silver linings playbook awas an exception . I've always preferred something a little sentimental , light-hearted, Yet meaningful and this movvie had it all. Silver Lining Playbook was an adaptation from the novel written by Matthew Quick, starring two incredibly talented actors Cooper and jennifer Jawrence . this romantic comedy movie was about two wounded souls who once again found beauty in that most unexpected place. Pat(bradley), a former teacher was just released from a mental institution and trying to reconcile with his cheated wife despite his family's protest."
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



const twoWayConversations = [
    {
        id:0,
        question:"Is it better to make important life decisions on your own or is it better to consult other people",
        answer:"There are good reasons for both, I suppose. Ultimately, it's our life so I suppose we should make the decisions. On the other hand, any decisions we make can affect other people - so it seems only right to discuss things with others first . Like many philosophical questions, there's no simple answer , i'm afraid."
    },
    {
        id:1,
        question:"Do you think good decision-making can be tought",
        answer: "Well, if we go to a bookstore, we'll see lots of self-help books that claim to teach decision making. I'm not sure any of them affective though.I suppose a s if it depends on the type of decision we mean . If it's a business strategy, then I'm sure some decisions are better than others and business schools teach this. But if its a moral issue then I'm not sure anyone can claim to know the right decision. So how could anyone teach it?"
    },
    {
        id:2,
        question:"Is watching TV a good way of torgetting about work or study",
        answer:""
    },
    {
        id:3,
        question: "Shouldd coworkers also spend their leisure time together",
        answer:""
    },
    {
        id:4,
        question: "Do you agree that English should be the main language of international exchange",
        answer:""
    },
    {
        id: 5,
        question:"What are the difficulties in creating a universal language",
        answer:""
    },
    {
        id:6,
        question:"Do you think that you speaks well in English",
        answer:""
    },
    
]

let array = twoWayConversations;
// console.log(array);
console.log(array.length);
let partThreeQuestions = document.getElementsByClassName("partThree");

function randomNumberForTwoWays(){
    const randomIndex = Math.floor(Math.random() * twoWayConversations.length);
    return randomIndex;
}

for(i=0;i<6;i++){
    partThreeQuestions[i].innerHTML= (i+1)+" "+ array[randomNumberForTwoWays()].question + "?";
}
