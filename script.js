document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sendBtn").addEventListener("click", function () {
      const input = document.getElementById("userInput").value.toLowerCase();
      let reply = "";
  
      // Simple rules-based response system
      if (input.includes("hello") || input.includes("hi")) {
        reply = "Hey there! 👋 How can I help you today?";
      } else if (input.includes("weather")) {
        reply = "Sorry, I can't check weather locally, but you can look outside 😅";
      } else if (input.includes("your name")) {
        reply = "I’m just a humble local bot made by Sumayyah 😇";
      } else if (input.includes("help")) {
        reply = "Sure thing! Ask me anything about coding, community, or coffee ☕";
      } else if (input.includes("bye")) {
        reply = "See you later ✌️";
      } else {
        // Random fallback
        const randomResponses = [
          "Hmm, that's interesting.",
          "Can you tell me more?",
          "Let me think about that...",
          "I’m not sure, but I love your curiosity!",
          "Sounds deep. You journaling today? 📝"
        ];
        reply = randomResponses[Math.floor(Math.random() * randomResponses.length)];
      }
  
      // Show reply
      document.getElementById("chatOutput").innerText = `AI: ${reply}`;
    });
  });
  