var speechElement;
var originalData = {};
var currentWord;

function generateSpeech() {
    var newSpeech = "";
    for (var i = 0; i < 100; i++) {
        newSpeech += currentWord;
        if (i < 99) {
            newSpeech += " ";
        }
        var words = originalData[currentWord];
        currentWord = words[Math.floor(Math.random()*words.length)];
    }
    speechElement.innerHTML += newSpeech;
}

function getDocHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 24) {
        speechElement.innerHTML += " ";
        generateSpeech();
    }
};

function initializeLuckySpeech() {
    speechElement = document.getElementById("lucky_speech");
    var speech = "Given the existence as uttered forth in the public works of Puncher and Wattmann of a personal God quaquaquaqua with white beard quaquaquaqua outside time without extension who from the heights of divine apathia divine athambia divine aphasia loves us dearly with some exceptions for reasons unknown but time will tell and suffers like the divine Miranda with those who for reasons unknown but time will tell are plunged in torment plunged in fire whose fire flames if that continues and who can doubt it will fire the firmament that is to say blast hell to heaven so blue still and calm so calm with a calm which even though intermittent is better than nothing but not so fast and considering what is more that as a result of the labors left unfinished crowned by the Acacacacademy of Anthropopopometry of Essy-in-Possy of Testew and Cunard it is established beyond all doubt all other doubt than that which clings to the labors of men that as a result of the labors unfinished of Testew and Cunard it is established as hereinafter but not so fast for reasons unknown that as a result of the public works of Puncher and Wattmann it is established beyond all doubt that in view of the labors of Fartov and Belcher left unfinished for reasons unknown of Testew and Cunard left unfinished it is established what many deny that man in Possy of Testew and Cunard that man in Essy that man in short that man in brief in spite of the strides of alimentation and defecation wastes and pines wastes and pines and concurrently simultaneously what is more for reasons unknown in spite of the strides of physical culture the practice of sports such as tennis football running cycling swimming flying floating riding gliding conating camogie skating tennis of all kinds dying flying sports of all sorts autumn summer winter winter tennis of all kinds hockey of all sorts penicillin and succedanea in a word I resume flying gliding golf over nine and eighteen holes tennis of all sorts in a word for reasons unknown in Feckham Peckham Fulham Clapham namely concurrently simultaneously what is more for reasons unknown but time will tell fades away I resume Fulham Clapham in a word the dead loss per head since the death of Bishop Berkeley being to the tune of one inch four ounce per head approximately by and large more or less to the nearest decimal good measure round figures stark naked in the stockinged feet in Connemara in a word for reasons unknown no matter what matter the facts are there and considering what is more much more grave that in the light of the labors lost of Steinweg and Peterman it appears what is more much more grave that in the light the light the light of the labors lost of Steinweg and Peterman that in the plains in the mountains by the seas by the rivers running water running fire the air is the same and then the earth namely the air and then the earth in the great cold the great dark the air and the earth abode of stones in the great cold alas alas in the year of their Lord six hundred and something the air the earth the sea the earth abode of stones in the great deeps the great cold on sea on land and in the air I resume for reasons unknown in spite of the tennis the facts are there but time will tell I resume alas alas on on in short in fine on on abode of stones who can doubt it I resume but not so fast I resume the skull fading fading fading and concurrently simultaneously what is more for reasons unknown in spite of the tennis on on the beard the flames the tears the stones so blue so calm alas alas on on the skull the skull the skull the skull in Connemara in spite of the tennis the labors abandoned left unfinished graver still abode of stones in a word I resume alas alas abandoned unfinished the skull the skull in Connemara in spite of the tennis the skull alas the stones Cunard".split(" ");
    currentWord = speech[0];
    var word = speech[0];
    for (var i = 1; i < speech.length; i++) {
        var nextWord = speech[i];
        if (!(word in originalData)) {
            originalData[word] = [];
        }
        originalData[word].push(nextWord);
        word = nextWord;
    }
    if (!(word in originalData)) {
        originalData[word] = ["the"];
    }
    generateSpeech();
}