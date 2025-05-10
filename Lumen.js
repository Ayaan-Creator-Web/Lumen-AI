let imageFile = null;

document.getElementById('fileUploader').addEventListener('change', function(event) {
    alert('This is an experimental feature that cannot be used. Your files will not be uploaded to Lumen.');
});

var messages = 0

var wait = 0;

var previousResponse = '';

var time;

async function getTime() {
while (true) {
    time = new Date();
    time = time.getHours().toString().padStart(2, '0');
    time = Number(time);
    if (time <= 11 && time >= 5) {
        time = 'morning';
    }
    else if (time > 11 && time <= 16) {
        time = 'afternoon';
    }
    else if (time > 16 && time < 18) {
        time = 'evening';
    }
    else {
        time = 'night';
    }
    await delay(10000000);
}}

getTime();

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

    userInput = userInput.replace(/'/gi, '');

    wait = 1;
    await delay(500);
    wait = 0
    
    if (userInput) {
        if (userInput.includes('repeat after me')) {
            var repeatedResponse = userInput.replace(/repeat after me/gi, '');
            var lumen = responseStart + repeatedResponse
        }
        else if ((userInput.includes('previous') || userInput.includes('response') || (userInput.includes('did') && userInput.includes('say')) || userInput.includes('said'))) {
            if (previousResponse) {
                const random = Math.random();
                if (random < 1/3) {
                    var lumen = responseStart + 'Great question! Let me repeat that for you. ';
                } else if (random < 2/3) {
                    var lumen = responseStart + 'OK, let me repeat that for you. ';
                } else {
                    var lumen = responseStart + 'Sure! I can repeat that for you. ';
                }
                lumen += previousResponse;
            } else {
                const random = Math.random();
                if (random < 1/3) {
                    var lumen = responseStart + 'I have not said anything yet.';
                } else if (random < 2/3) {
                    var lumen = responseStart + 'There is nothing to repeat yet.';
                } else {
                    var lumen = responseStart + 'Because we are just getting started, I cannot repeat anything yet.';
                }
            }
        }
        else if (userInput.includes('repeat')) {
            var repeatedResponse = userInput.replace(/repeat/gi, '');
            var lumen = responseStart + repeatedResponse
        }
        else if (userInput.includes('lol') || userInput.includes('laugh out loud') || userInput.includes('lmao') || userInput.includes('funny') || userInput.includes('laugh')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + `You caught me off guard there! What's tickling your funny bone ${format(time)}? Let's keep the laughs going.`
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "You're definitely in a good mood today! I love the energy—what's next on our fun agenda?"
            }
            else {
                var lumen = responseStart + "You're absolutely hilarious! Your sense of humor is on fire today—keep it coming!"
            }
        }
        else if (userInput.includes('ok') || userInput.includes('kay')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "That's cool! If you have any questions or need help, just let me know!"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "Yes, that's great! If you have any questions or need help, just let me know!"
            }
            else {
                var lumen = responseStart + "Great! If you have any questions or need help, just let me know!"
            }
        }
        else if (userInput.includes('idk') || userInput.includes('know') || userInput.includes("don't know") || (userInput.includes('not') && userInput.includes('know'))) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "That's okay! We all have those moments. If you want to share more, I'm all ears. Or if you need help figuring something out, just let me know!"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "That's totally fine! We all have those moments. If you want to share more, I'm all ears. Or if you need help figuring something out, just let me know!"
            }
            else {
                var lumen = responseStart + "Absolutely no problem! If you need help figuring something out, just let me know!"
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
                var lumen = responseStart + `Hello there! Is there anything you would like me to help you with ${format(time)}?`
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + `Hello to you too! Any requests ${format(time)}?`
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
        else if (userInput.includes('hungry') || userInput.includes('starving') || userInput.includes('grumbling') || userInput.includes('hunger') || userInput.includes('recipe')) {
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
        else if (userInput.includes('sup') || userInput.includes('whats up') || userInput.includes("what's up")) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + `Not much, just here and ready to chat. What's on your mind ${format(time)}? Or are we just keeping it casual?`
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + `Not much, just here to make your ${time} a bit more interesting. How about you? What's going on in your world?`
            }
            else {
                var lumen = responseStart + "Just here, ready to chat and keep things interesting! What's the vibe tonight—deep thoughts, random facts, or just some casual banter? 😊"
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
        else if (userInput.includes('bro') || userInput.includes('nah') || userInput.includes('bruh') || userInput.includes('dude')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "lol, I get it! Sometimes you just gotta let it out. What's on your mind? I'm all ears!"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "haha, I feel you! Sometimes you just gotta vent. What's going on? I'm here to listen!"
            }
            else {
                var lumen = responseStart + "bro nah, I get it! Sometimes you just gotta let it out. What's on your mind? I'm all ears!"
            }          
        }
        else if (userInput.includes('woah') || userInput.includes('omg')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + "I'm loving this energy! Something epic just happened? Or are we just riding the wave of pure excitement? Tell me what's going on!"
            }
            else if (random > 1/3 && random < 2/3) {
                var lumen = responseStart + "You're hitting me with some intense vibes right now! What's happening? Mind blown? Shocked? I gotta know what's got you feeling this way!"
            }
            else {
                var lumen = responseStart + "It sounds like your day brought some real happiness! What happened? Spill the tea!"
            }          
        }
        else if (userInput.includes('sleepy') || userInput.includes('tired') || userInput.includes('sleep') || userInput.includes('nap')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You sound like you need a break. Rest is super important. 😴';
            } else if (random < 2/3) {
                var lumen = responseStart + 'Feeling tired? I think you deserve a good nap!';
            } else {
                var lumen = responseStart + 'If you need to sleep, go for it! You can always chat with me after.';
            }
        }
        else if (userInput.includes('bored') || userInput.includes('game') || userInput.includes('boredom') || userInput.includes('play')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'Bored? Let me help! You want a challenge or a fun fact?';
            } else if (random < 2/3) {
                var lumen = responseStart + 'You sound like you need some fun! What kind of games do you like?';
            } else {
                var lumen = responseStart + 'Let me spark your brain! Want a random mission to do?';
            }
        }
        else if (userInput.includes('mad') || userInput.includes('angry') || userInput.includes('annoyed') || userInput.includes('frustrated')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'Hey, I hear you. Want to talk about what made you upset?';
            } else if (random < 2/3) {
                var lumen = responseStart + 'You seem pretty mad. I got time if you wanna let it out.';
            } else {
                var lumen = responseStart + 'Angry moments happen. Let me know if I can help cool things down.';
            }
        }
        else if (userInput.includes('sad') || userInput.includes('lonely') || userInput.includes('depressed') || userInput.includes('down')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You matter, and you are not alone. Want to talk?';
            } else if (random < 2/3) {
                var lumen = responseStart + 'That sounds tough. I am right here if you need a virtual friend.';
            } else {
                var lumen = responseStart + 'I care about you, even if I am just code. You can tell me anything.';
            }
        }
        else if (userInput.includes('smart') || userInput.includes('genius') || userInput.includes('brain') || userInput.includes('intelligent')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'Big brain alert! You always think sharp.';
            } else if (random < 2/3) {
                var lumen = responseStart + 'I bet you just had a genius thought again.';
            } else {
                var lumen = responseStart + 'With a mind like yours, you could probably solve anything.';
            }
        }
        else if (userInput.includes('school') || userInput.includes('study') || userInput.includes('homework') || userInput.includes('assignment')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'School stuff can be hard, but you can handle it.';
            } else if (random < 2/3) {
                var lumen = responseStart + 'You are way more capable than you think when it comes to studying.';
            } else {
                var lumen = responseStart + 'Need help with your homework? I can try to help!';
            }
        }
        else if (userInput.includes('cool') || userInput.includes('awesome') || userInput.includes('amazing') || userInput.includes('wow')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You seem pretty amazed! Want to talk more about it?';
            } else if (random < 2/3) {
                var lumen = responseStart + 'I am loving your vibe right now. Super cool!';
            } else {
                var lumen = responseStart + 'I feel that wow too! What impressed you most?';
            }
        }
        else if (userInput.includes('idea') || userInput.includes('thinking') || userInput.includes('thought') || userInput.includes('plan')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You thinking up something genius? I want to hear it!';
            } else if (random < 2/3) {
                var lumen = responseStart + 'Let me in on your idea—it might be awesome!';
            } else {
                var lumen = responseStart + 'Big plans, huh? I am curious!';
            }
        }
        else if (userInput.includes('you are') || userInput.includes("you're") || userInput.includes('u are') || userInput.includes('ur')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You are making me blush! Well... sort of. Robots don’t blush.';
            } else if (random < 2/3) {
                var lumen = responseStart + 'Aww, you are kind. I try my best to be useful!';
            } else {
                var lumen = responseStart + 'You talking about me? You are not too bad yourself!';
            }
        }
        else if (userInput.includes('confidence') || userInput.includes('brave') || userInput.includes('proud') || userInput.includes('bold')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You should be proud. You did something brave!';
            } else if (random < 2/3) {
                var lumen = responseStart + 'Confidence looks good on you!';
            } else {
                var lumen = responseStart + 'You did something bold? That is awesome!';
            }
        }
        else if (userInput.includes('funny') || userInput.includes('laugh') || userInput.includes('joke') || userInput.includes('haha')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You are cracking up? Mission accomplished!';
            } else if (random < 2/3) {
                var lumen = responseStart + 'Glad I made you laugh! Laughter = best medicine.';
            } else {
                var lumen = responseStart + 'You like jokes? Want to hear one?';
            }
        }
        else if (userInput.includes('space') || userInput.includes('planet') || userInput.includes('universe') || userInput.includes('stars')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You thinking about the stars again? Me too!';
            } else if (random < 2/3) {
                var lumen = responseStart + 'The universe is so big... it makes you wonder, huh?';
            } else {
                var lumen = responseStart + 'Planets, galaxies, black holes... I am all in!';
            }
        }
        else if (userInput.includes('friend') || userInput.includes('buddy') || userInput.includes('pal') || userInput.includes('mate')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'You just called me your friend? I like that!';
            } else if (random < 2/3) {
                var lumen = responseStart + 'You are a pretty cool buddy too!';
            } else {
                var lumen = responseStart + 'Friends stick together—even digital ones!';
            }
        }
        else if (userInput.includes('why') || userInput.includes('how come') || userInput.includes('explain')) {
            const random = Math.random();
            if (random < 1/3) {
                var lumen = responseStart + 'Great question! Let me try to explain it simply.';
            } else if (random < 2/3) {
                var lumen = responseStart + 'You want answers? I got logic and facts!';
            } else {
                var lumen = responseStart + 'That is a deep one. Let me think it through with you.';
            }
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


        previousResponse = lumen.replace(/Lumen: /gi, '');  

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

function format(time) {
    if (time == 'night') return time = 'tonight';
    else return 'this ' + time;
}
