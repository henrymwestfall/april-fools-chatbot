'use strict'

class ChatApp {
    constructor() {
        this.window = null;
        this.mlResponses = [
            "I too have bad grades!",
            "Remember, PE waivers are not a guarantee!",
            "Join the Web Team to see how I was made smart!",
            "Exactly!",
            "Senior parking permits will go on sale in April or early May.",
            "I love Fairview too!"
        ];
    }

    init() {
        this.window = document.querySelector("#chatwindow");
        this.putBotText("Good morning! I'm Freddy the Knight! Ask me anything!");
    }

    putBotText(text="") {
        if (text == "") {
            text = this.mlResponses[Math.floor(Math.random() * this.mlResponses.length)];
        }
        const previous = document.getElementById("last");
        previous.insertAdjacentHTML("afterend", "<p class='botText' id='last'>" + text + "</p>");
        previous.removeAttribute("id");
    }

    putUserText(text) {
        const previous = document.getElementById("last");
        previous.insertAdjacentHTML("afterend", "<p class='userText' id='last'>" + text + "</p>");
        previous.removeAttribute("id");
        const inputBox = document.getElementById("input-box");
        inputBox.value = "";
        this.putBotText();
    }
}

const chatApp = new ChatApp();

document.addEventListener("DOMContentLoaded", () => {
    chatApp.init();
});

$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        var inputVal = $(this).val();
        chatApp.putUserText(inputVal);
    }
});