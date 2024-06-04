const randomNumber = () => {
    return Math.floor(Math.random() * 4);
}

const messages = {
    attributes: ['smart', 'weak', 'strong', 'dumb'],
    lucky: ['great lucky', 'good lucky', 'normal lucky', 'bad lucky'],
    advice: ['trust no one', 'ignore', 'get want you want', 'get over']
}

let randomMessage = [];

for(let attribute in messages){
    switch(attribute){
        case 'attributes':
            randomMessage.push(`You are ${messages.attributes[randomNumber()]}`);
            break;
        case 'lucky':
            randomMessage.push(`You will have ${messages.lucky[randomNumber()]}`);
            break;
        case 'advice':
            randomMessage.push(`You should ${messages.advice[randomNumber()]}`);
            break;
        default:
            randomMessage.push('Lack of informations!');
            break;
    }
}

let finalMessage = randomMessage.join('\n');
console.log(finalMessage);
