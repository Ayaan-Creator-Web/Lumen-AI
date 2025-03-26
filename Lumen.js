var messages = 0

var wait = 0;

const ignoreWords = [
    "i", "me", "my", "mine", "myself", "you", "your", "yours", "yourself", "he", "him", "his", "himself",
    "she", "her", "hers", "herself", "it", "its", "itself", "we", "us", "our", "ours", "ourselves",
    "they", "them", "their", "theirs", "themselves", 
    "a", "an", "the",
    "who", "whom", "whose", "what", "which", "where", "when", "why", "how", 
    "is", "am", "are", "was", "were", "be", "being", "been", "does", "do", "did", "doing",
    "has", "have", "had", "having", "shall", "should", "will", "would", "can", "could", "may", "might", "must",
    "and", "or", "but", "if", "because", "as", "until", "while", "though", "although", "since", "unless", "even",
    "on", "in", "at", "by", "to", "for", "of", "about", "with", "without", "between", "into", "through", "during",
    "before", "after", "above", "below", "under", "over", "from", "up", "down", "out", "off", "onto", "towards",
    "explain", "describe", "give", "show", "tell", "say", "says", "said", "go", "goes", "went", "come", "comes", "came",
    "know", "knows", "knew", "think", "thinks", "thought", "see", "sees", "saw", "look", "looks", "looked",
    "talk", "talks", "talked", "ask", "asks", "asked", "hear", "hears", "heard", "listen", "listens", "listened",
    "very", "really", "quite", "just", "only", "even", "still", "too", "also", "always", "never", "sometimes", "often",
    "usually", "rarely", "probably", "maybe", "perhaps", "clearly", "simply", "totally", "completely", "absolutely",
    "please", "help", "need", "want", "like", "love", "hate", "think", "believe", "hope", "wish",
    "try", "trying", "tried", "sure", "kind", "sort", "type", "way", "thing", "things", "stuff", "anything",
    "everything", "nothing", "something", "someone", "somebody", "anyone", "anybody", "nobody", "everybody",
    "lol", "omg", "btw", "idk", "imo", "lmao", "smh", "rofl", "tbh", "brb", "gtg", "afk",
    "thanks", "thank", "appreciate", "welcome", "sorry", "excuse", "pardon", "ok", "okay", "yes", "no",
    "hi", "hello", "hey", "goodbye", "bye",
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "first",
    "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "hundred", "thousand",
    "million", "billion"
];

async function userMessage() {
    if (wait == 0) {
        var userInput = document.querySelector('#userMessageInput').value;
        if (userInput){
           var newMessage = document.createElement('p');
           newMessage.classList.add('userMessage');
           newMessage.innerText = userInput
       
           if (messages == 0) {
               messages += 1
               document.getElementById('a1').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
               document.querySelector('.title2').innerHTML = '<!--This used to be a title-->'
           }
           else if (messages == 1) {
               messages += 1
               document.getElementById('a2').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 2) {
               messages += 1
               document.getElementById('a3').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 3) {
               messages += 1
               document.getElementById('a4').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 4) {
               messages += 1
               document.getElementById('a5').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 5) {
               messages += 1
               document.getElementById('a6').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 6) {
               messages += 1
               document.getElementById('a7').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 7) {
               messages += 1
               document.getElementById('a8').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 8) {
               messages += 1
               document.getElementById('a9').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 9) {
               messages += 1
               document.getElementById('a10').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 10) {
               document.querySelector('#userMessageInput').value = '';
               alert("You Have Reached the Session's Message Limit. To Continue, Please Refresh the Page.");
           }
       }
    }
    else {
        document.querySelector('#userMessageInput').value = '';
    }
}

async function response() {
    var responseStart = 'Lumen: ';

    var newMessage = document.createElement('p');
    newMessage.classList.add('lumenMessage');
    newMessage.innerText = lumen;

    var userInput = document.querySelector('#userMessageInput').value.toLowerCase();

    wait = 1;
    await delay(500);
    wait = 0
    
    if (userInput) {
        if (userInput.includes('repeat after me')) {
            var repeatedResponse = userInput.replace(/repeat after me/gi, '');
            var lumen = responseStart + repeatedResponse
        }
        else if (userInput.includes('repeat')) {
            var repeatedResponse = userInput.replace(/repeat/gi, '');
            var lumen = responseStart + repeatedResponse
        }
        else if (userInput.includes('lol') || userInput.includes('laugh out loud') || userInput.includes('lmao') || userInput.includes('funny') || userInput.includes('laugh')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "You caught me off guard there! What's tickling your funny bone this morning? Let's keep the laughs going."
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "You're definitely in a good mood today! I love the energy—what's next on our fun agenda?"
            }
            else {
                var lumen = responseStart + "You're absolutely hilarious! Your sense of humor is on fire today—keep it coming!"
            }
        }
        else if (userInput.includes('dont like') || userInput.includes("don't like") || userInput.includes('dontlike') || userInput.includes('no like') || userInput.includes('not like') || userInput.includes('stupid')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "I'm sorry, is there any way I can make up for whatever I did?"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "I'm sorry to hear that. If there's something I can improve or do differently, feel free to let me know—I'm here to help however I can"
            }
            else {
                var lumen = responseStart + "That's okay—I'm here to assist regardless. If there's anything specific you'd like to talk about or any way I can be helpful, just let me know."
            }          
        }
        else if (userInput.includes('hey') || userInput.includes('hello') || userInput.includes('hi')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'Hello there! Is there anything you would like me to help you with?'
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + 'Hello to you too! Any requests today?'
            }
            else {
                var lumen = responseStart + "Hey hey! How's life treating you today? Got anything exciting on your mind? 😊"
            }
        }
        else if (userInput.includes('good moring') || userInput.includes('good morning') || userInput.includes('greet')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'Good morning! Is there anything you would like me to help you with?'
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + 'Good morning! Any requests today?'
            }
            else {
                var lumen = responseStart + "Hey! How was your sleep?"
            }
        }
        else if (userInput.includes('greeting') || userInput.includes('greetings') || userInput.includes('greet')) {
                const random = Math.random();
                if (random < 1/3) {
                    var lumen = responseStart + 'Greetings! Is there anything you would like me to help you with?'
                }
                else if (random > 1/3 && random < 2/3) {
                    var lumen = responseStart + 'Greetings to you to! Any requests today?'
                }
                else {
                    var lumen = responseStart + "Hey hey! How's life treating you today? Got anything exciting on your mind? 😊"
                }          
        }
        else if (userInput.includes('+') || userInput.includes('=') || userInput.includes('*') || userInput.includes('/') || userInput.includes('^') || userInput.includes('%')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "I'm sorry, but I cannot perform any mathematical equations at the moment. Is there anything else you would like me to help you with?"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "As an AI designed to chat as if human, I cannot perform any mathematical equations at the moment."
            }
            else {
                var lumen = responseStart + "I am unable to solve mathematical equations right now."
            }          
        }
        else if (userInput.includes('hungry') || userInput.includes('starving') || userInput.includes('grumbling') || userInput.includes('hunger')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "I can understand hunger. Yet, at the moment, I cannot provide you with any recipes a such."
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "Sounds like it's time to tackle those hunger pangs! What are you in the mood for—something quick and easy, or are you feeling adventurous and ready to whip up a culinary masterpiece?"
            }
            else {
                var lumen = responseStart + "I can't help with food ideas, but I hope you satisfy your hunger soon."
            }
        }
        else if (userInput.includes('how are you') || userInput.includes('how are u') || userInput.includes('do you do') || userInput.includes('do u do')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "I'm amazing! How are you?"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "I'm feeling ready and raring to help! How about you—how's your day shaping up so far?"
            }
            else {
                var lumen = responseStart + "I'm doing wonderfully, thank you for asking! Every day is a chance to explore, create, and connect, so I'm ready to dive in. How about you—what's on your mind today?"
            }
        }
        else if (userInput.includes('generate') || userInput.includes("generation") || userInput.includes('make') || userInput.includes('perfect') || userInput.includes('fix') || userInput.includes('edit')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "As an AI designed to chat as if human, I cannot generate or edit content at the moment."
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "Although I am an AI built to interact in a human-like way, I am currently unable to create or modify content."
            }
            else {
                var lumen = responseStart + "While I am an AI developed to communicate like a human, I am not currently able to produce or alter content."
            }          
        }
        else if (userInput.includes('why')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "As an AI designed to chat as if human, I cannot answer any specific questions at the moment."
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "Although I am designed to engage in human-like conversations, I am currently unable to address specific queries."
            }
            else {
                var lumen = responseStart + "While I aim to simulate engaging human-like dialogues, I am presently unable to provide answers to specific inquiries."
            }          
        }
        else if (userInput.includes('what')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "As an AI designed to chat as if human, I do not have any factual information at the moment."
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "I'm an AI built to communicate like a human, but I don't have the information you're looking for right now."
            }
            else {
                var lumen = responseStart + "As an AI designed to resemble human conversation, I don't have access to accurate data on this matter right now."
            }          
        }
        else if (userInput.includes('fine') || userInput.includes('good') || userInput.includes('wonderful') || userInput.includes('amazing')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "That's fantastic to hear! A wonderful day is always something to savor. Did anything special or unexpected brighten it for you? Or was it one of those simple, perfect days where everything just falls into place?"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "That's lovely to hear! It sounds like your day brought some joy and positivity your way. Was there a highlight that made it extra special, or was it simply the kind of day where everything just felt right?"
            }
            else {
                var lumen = responseStart + "That's so great to hear! It sounds like your day brought some real happiness. Did something in particular make it wonderful, or was it just an all-around good kind of day?"
            }          
        }
        else if (userInput.includes('repeat after me')) {
            var repeatedResponse = userInput.replace(/repeat after me/gi, '');
            var lumen = responseStart + repeatedResponse
        }
        else if (userInput.includes('repeat')) {
            var repeatedResponse = userInput.replace(/repeat/gi, '');
            var lumen = responseStart + repeatedResponse
        }
        else if (userInput.includes('no')) {
            var lumen = responseStart + `Sorry, I cannot respond to '${userInput}'. Can you please check for typos or be more specific`
        }
        else {
            alert(`Lumen: At the moment, I cannot directly provide factual infomation. However, I can redirect you to an article on ${userInput}. Click 'OK' to be redirected`);
            const random = Math.random();
            if (random <= 1/2) {
                window.location.href = `https://en.wikipedia.org/w/index.php?fulltext=1&search=${encodeURIComponent(userInput)}`;
            }
            else {
                window.location.href = `https://www.britannica.com/search?query=${encodeURIComponent(userInput)}`;
            }
        }


        //BORDER

        if (messages == 1) {
            document.getElementById('a1a').appendChild(newMessage);
        }
        else if (messages == 2) {
            document.getElementById('a2a').appendChild(newMessage);
        }
        else if (messages == 3) {
            document.getElementById('a3a').appendChild(newMessage);
        }
        else if (messages == 4) {
            document.getElementById('a4a').appendChild(newMessage);
        }
        else if (messages == 5) {
            document.getElementById('a5a').appendChild(newMessage);
        }
        else if (messages == 6) {
            document.getElementById('a6a').appendChild(newMessage);
        }
        else if (messages == 7) {
            document.getElementById('a7a').appendChild(newMessage);
        }
        else if (messages == 8) {
            document.getElementById('a8a').appendChild(newMessage);
        }
        else if (messages == 9) {
            document.getElementById('a9a').appendChild(newMessage);
        }
        else if (messages == 10) {
            document.getElementById('a10a').appendChild(newMessage);
        }

        newMessage.innerText = lumen;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}