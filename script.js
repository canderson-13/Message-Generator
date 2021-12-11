

function quoteFactory (id, mood, colors, isQuote, text){
    return {
        id,
        mood,
        colors,
        isQuote,
        text
    };
};

// create quote objects
const quote1 = quoteFactory(1, 'sad', ['yellow','green'], 0, 'Don\'t forget that you are loved:)');
const quote2 = quoteFactory(2, 'sad', ['red','orange'], 0, 'Reach out to someone and ask how they are, tell them how you feel. Never be afraid to be vulnerable and ask for help.');
const quote3 = quoteFactory(3, 'sad', ['red','orange','yellow'], 0, 'Carve out some time today to do something special just for you, maybe cooking your favourite meal.');
const quote4 = quoteFactory(4, 'sad', ['yellow','green'], 1, '“Keep your face always toward the sunshine, and shadows will fall behind you.”— Walt Whitman');
const quote5 = quoteFactory(5, 'sad', ['red','orange'], 1, '“I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it\'s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.” — Taylor Swift');
const quote6 = quoteFactory(6, 'sad', ['red','orange'],1, '“It is during our darkest moments that we must focus to see the light.” — Aristotle');
const quote7 = quoteFactory(7, 'happy', ['yellow','green'], 1, '“Spread love everywhere you go.” — Mother Teresa');
const quote8 = quoteFactory(8, 'happy', ['orange', 'yellow','green'],1, '"When you are joyful, when you say yes to life and have fun and project positivity all around you, you become a sun in the center of every constellation, and people want to be near you." - Shannon L. Alder');
const quote9 = quoteFactory(9, 'happy', ['orange','yellow','green'], 1, '"Dwell on the beauty of life. Watch the stars, and see yourself running with them." - Marcus Aurelius');
const quote10 = quoteFactory(10, 'happy', ['yellow','green'], 0, 'Do one small kind thing today, just to make someone smile.');
const quote11 = quoteFactory(11, 'happy', ['orange','yellow','green'],0, 'Think of 5 things you are grateful for today');
const quote12 = quoteFactory(12, 'happy', ['yellow','green'], 0, 'Tell someone you love one thing you appreciate about them - spread the happiness:)');
const quote13 = quoteFactory(13, 'relaxed', ['orange','yellow','green'],0, 'Why don\'t you do something today that you\'ve been wanting to do or putting off for a while.');
const quote14 = quoteFactory(14, 'relaxed', ['orange','yellow','green'],0, 'See how good it feels to do something active today - move and stretch your body!');
const quote15 = quoteFactory(15, 'relaxed', ['yellow','green'],0, 'What is something you\'ve always dreamed of doing? Write it down');
const quote16 = quoteFactory(16, 'relaxed', ['orange','yellow','green'],1,'"The power for creating a better future is contained in the present moment: You create a good future by creating a good present." - Eckhart Tolle');
const quote17 = quoteFactory(17, 'relaxed', ['yellow','green'],1,'"We can complain because rose bushes have thorns, or rejoice because thorns have roses." - Alphonse Karr');
const quote18 = quoteFactory(18, 'relaxed', ['yellow','green'],1,'“Try to be a rainbow in someone\'s cloud.”— Maya Angelou');
const quote19 = quoteFactory(19, 'tense', ['red','orange','yellow','green'],0, 'Listen to a song that you love');
const quote20 = quoteFactory(20, 'tense', ['red','orange','yelllow'],0, 'Drink plenty of water today!');
const quote21 = quoteFactory(21, 'tense', ['red','orange','yellow'],0, 'Do some gentle stretching - release some of that tension.');
const quote22 = quoteFactory(22, 'tense', ['red','orange','yellow','green'],1, '"How wild it was to let it be" - Cheryl Strayed');
const quote23 = quoteFactory(23, 'tense', ['red','orange','yellow'],1, '“Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.” - Deepak Chopra');
const quote24 = quoteFactory(24, 'tense', ['red','orange'],1, '“You don\'t have to control your thoughts. You just have to stop letting them control you.” - Dan Millman');
const quote25 = quoteFactory(25, 'calm', ['orange','yellow','green'],1,'“If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.” — Roald Dahl');
const quote26 = quoteFactory(26, 'calm', ['orange','yellow','green'],0,'Take 3 deep breaths and notice how you feel today');
const quote27 = quoteFactory(27, 'calm', ['orange','yellow','green'],0,'Pay attention to your surroundings and notice something small you might usually miss - maybe a nice colour, sound or smell.');
const quote28 = quoteFactory(28, 'calm', ['yellow','green'],1, '"In order to carry a positive action we must develop here a positive vision." - Dalai Lama');
const quote29 = quoteFactory(29, 'calm', ['yellow','green'],0, 'Notice your thoughts today, and try to speak to yourself the way you would speak to a friend - in a kind, supportive and positive way');
const quote30 = quoteFactory(30, 'calm', ['orange','yellow','green'],1, '"The only place where your dreams become impossible is in your own thinking." - Robert H. Shuller');
const quote31 = quoteFactory(31, 'restless', ['red','orange','yellow'],0, 'Do a 5 minute meditation to steady your mind');
const quote32 = quoteFactory(32, 'restless', ['red','orange','yellow','green'],0, 'Get outside, go on a walk to get some fresh air and clear your head.');
const quote33 = quoteFactory(33, 'restless', ['red','orange'],0, 'Write a list of things you need to do (don\'t overcomplicate it), and start by doing the easiest thing on the list.');
const quote34 = quoteFactory(34, 'restless', ['red','orange'],1,'“Sometimes the most important thing in a whole day is the rest taken between two deep breaths.” - Etty Hillesum');
const quote35 = quoteFactory(35, 'restless', ['red','orange','yellow'],1,'“Present fears are less than horrible imaginings.” - William Shakespeare');
const quote36 = quoteFactory(36, 'restless', ['red','orange','yellow','green'],1,'“Smile, breathe, and go slowly.” - Thich Nhat Hanh');
const quote37 = quoteFactory(37, 'high energy', ['yellow','green'],0,'Find a way to channel your energy in a positive way today - how could you help someone?');
const quote38 = quoteFactory(38, 'high energy', ['yellow','green'],0, 'Make use of all this energy you have! Do something productive that you\'ll really appreciate when you\'re next busy');
const quote39 = quoteFactory(39, 'high energy', ['red','orange','yellow','green'],0,'Do something today just for fun!');
const quote40 = quoteFactory(40, 'high energy', ['red','orange','yellow','green'],1, '“Dreams don\'t have to just be dreams. You can make it a reality; if you just keep pushing and keep trying, then eventually you\'ll reach your goal. And if that takes a few years, then that\'s great, but if it takes 10 or 20, then that\'s part of the process.” — Naomi Osaka');
const quote41 = quoteFactory(41, 'high energy', ['orange','yellow','green'],1, '“When it comes to luck, you make your own.” — Bruce Springsteen');
const quote42 = quoteFactory(42, 'high energy', ['yellow','green'],1, '“If you don\'t like the road you\'re walking, start paving another one!” — Dolly Parton');
const quote43 = quoteFactory(43, 'low energy', ['red','orange','yellow','green'],0,'Today, think about all the activities that energise or drain you, maybe write them down');
const quote44 = quoteFactory(44, 'low energy', ['red','orange','yellow'],0,'Do something relaxing to restore your energy balance');
const quote45 = quoteFactory(45, 'low energy', ['red','orange'],0,'Remember you don\'t need to do everything today, get all the rest you need.');
const quote46 = quoteFactory(46, 'low energy', ['red','orange','yellow','green'],1,'"My dear friend, clear your mind of can\'t." - Samuel Johnson');
const quote47 = quoteFactory(47, 'low energy', ['red','orange','yellow'],1,'"Believe you can and you\'re halfway there." - Teddy Roosevelt');
const quote48 = quoteFactory(48, 'low energy', ['red','orange'],1,'“When I look back on all these worries, I remember the story of the old man who said on his deathbed that he had had a lot of trouble in his life, most of which had never happened.” - Winston Churchill');

let quoteArray = [quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9,quote10,quote11,quote12,quote13,quote14,quote15,quote16,quote17,quote18,quote19,quote20,quote21,quote22,quote23,quote24,quote25,quote26,quote27,quote28,quote29,quote30,quote31,quote32,quote33,quote34,quote35,quote36,quote37,quote38,quote39,quote40,quote41,quote42,quote43,quote44,quote45,quote46,quote47,quote48];
