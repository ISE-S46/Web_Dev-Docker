let input = prompt("Insert your lottery number");

let Wnum = Math.floor(Math.random() * 100);

const lottery = document.getElementById("lotteryNum");
lottery.innerHTML = Wnum;

let message = document.getElementById("message");
if (parseInt(input) === Wnum) {
    message.innerHTML = `
        <p>Your lottery number is ${input}</p>
        <p>Congratulations W</p>
    `;

} else {
    message.innerHTML = `
        <p>Your lottery number is ${input}</p>
        <p>L</p>
    `;
}
