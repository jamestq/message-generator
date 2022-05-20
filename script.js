//Database of holidays in each season
const holidayDatabase = {
    Summer: ['New Year',  'Australia Day'],
    Autumn: ['Good Friday', 'Easter'],
    Winter: ['Christmas'],
    Spring: ['Lunar New Year']
}

//Database of greetings in each holiday
const holidayGreetings = {
    'New Year' : ['Happy', 'Blessed', 'Wonderful'],
    'Australia Day' : ['Not Forget', 'Remember', 'Be Proud'],
    'Good Friday' : ['Lovely', 'Blissful', 'Peaceful'],
    'Easter' : ['Fulfilled', 'Calm'],
    'Christmas' : ['Merry', 'Warm and Peaceful', 'Joyful'],
    'Lunar New Year' : ['Good Health and Fortune', 'Happy Family and Good Friends'],
    startingLine : ['I wish you a', 'I pray that you have a', 'I hope that you have a']
}

function seasonSelection(seasonChoice){
    switch(choice){
        case 'Summer' : return holidayDatabase.Summer;
        case 'Autumn' : return holidayDatabase.Autumn;
        case 'Winter' : return holidayDatabase.Winter;
        case 'Spring' : return holidayDatabase.Spring;
    }
}

function greetingConstructor(holidayChoice){
    let firstPart = "";
    if(holidayChoice === 'Australia Day'){
        firstPart = 'Let us';
    }else{
        firstPart = holidayGreetings.startingLine[Math.floor(Math.random()*holidayGreetings.startingLine.length)];
    }
    let secondPart = holidayGreetings[holidayChoice][Math.floor(Math.random()*holidayGreetings[holidayChoice].length)];
    return `${firstPart} ${secondPart} ${holidayChoice}`;
}





