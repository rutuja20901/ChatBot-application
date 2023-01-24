const chatBody = document.querySelector(".bot");
const txtinput = document.querySelector("#msg_send");
const send = document.querySelector(".send-btn");

send.addEventListener("click" , () => renderUserMessage());

txtinput.addEventListener("keyup" , (event) => {
    if(event.keyCode === 13)
    {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = txtinput.value;
    renderMesssageEle(userInput , "user");
    txtinput.value = "";
    setTimeout(() => {
        renderChatBotResponse(userInput);
        setScroll();
    }, 600);
};


const renderChatBotResponse = (userInput) =>{
    const res = getChatResponse(userInput);
    renderMesssageEle(res);
}

const renderMesssageEle = (txt, type) => {
    let className = "user-message";
    if (type !== "user"){
        className = "chatbot-message";
    } 
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle);

};

const getChatResponse = (userInput) =>{
    return resObj[userInput] == undefined
    ? "Please try something else"
    : resObj[userInput];
};

const setScroll= () => {
    if (chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }

};

