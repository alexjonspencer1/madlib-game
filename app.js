// Reference Needed Elements
const presentTense1 = document.getElementById('present-tense-1');
const adjective1 = document.getElementById('adjective-1');
const noun1 = document.getElementById('noun-1');
const pastTenseVerb1 = document.getElementById('past-tense-1');
const adjective2 = document.getElementById('adjective-2');
const pastTenseVerb2 = document.getElementById('past-tense-2');
const numberHigher1 = document.getElementById('number-1');
const adjective3 = document.getElementById('adjective-3');

const presentVerbSpan = document.getElementById('present-verb-span');
const adjectiveOneSpan = document.getElementById('adjective-1-span');
const nounOneSpan = document.getElementById('noun-1-span');
const pastTenseVerbOneSpan = document.getElementById('past-tense-1-span');
const adjectiveTwoSpan = document.getElementById('adjective=2-span');
const pastTenseVerbTwoSpan = document.getElementById('past-tense-2-span');
const numberSpan = document.getElementById('number-1-span');
const adjectiveThreeSpan = document.getElementById('adjective-3-span');

const madLibSection = document.getElementById('mad-lib');

function makeMadLib () {
    presentVerbSpan.textContent = presentTense1.value;
    adjectiveOneSpan.textContent = adjective1.value;
    nounOneSpan.textContent = noun1.value;


}