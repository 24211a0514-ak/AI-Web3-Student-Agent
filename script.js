function sendMessage(){

let input=document.getElementById("userInput").value.toLowerCase();

if(input==="") return;

let chatBox=document.getElementById("chatBox");

let userMessage=document.createElement("div");
userMessage.className="user";
userMessage.innerText="You: "+input;

chatBox.appendChild(userMessage);

let response="I will help you with student resources.";

if(input.includes("hackathon")){
response="You can find hackathons on Devfolio, ETHGlobal and college communities.";
}
else if(input.includes("clubs")){
response="You can join coding, robotics, AI, or entrepreneurship clubs in your college.";
}
else if(input.includes("course")){
response="You can start learning AI, Web3, Full Stack Development and Data Science.";
}
else if(input.includes("internship")){
response="Look for internships on LinkedIn, Internshala and company career pages.";
}
else if(input.includes("hello") || input.includes("hi")){
response="Hello! I am your AI student support assistant. Ask me about hackathons, clubs or learning resources.";
}

let botMessage=document.createElement("div");
botMessage.className="bot";
botMessage.innerText="AI: "+response;

chatBox.appendChild(botMessage);

document.getElementById("userInput").value="";
}

async function connectWallet(){

if(window.ethereum){

try{

const accounts=await window.ethereum.request({
method:"eth_requestAccounts"
});

document.getElementById("walletAddress").innerText=
"Connected: "+accounts[0];

document.getElementById("walletStatus").innerText=
"Wallet Connected Successfully";

}catch(error){

console.log("Connection rejected");

}

}else{

alert("Please install MetaMask wallet");

}

}