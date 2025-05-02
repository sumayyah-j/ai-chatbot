document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sendBtn").addEventListener("click", function () {
    const input = document.getElementById("userInput").value.toLowerCase();
    let reply = "";

    if (input.includes("hello") || input.includes("hi")) {
      reply = "Hi there, how can I support you today?";
    } 
    else if (
      input.includes("what is an api") || 
      input.includes("define api") || 
      input.includes("explain api")
    ) {
      reply = "An API (Application Programming Interface) is a tool that allows two systems to communicate. Think of it as a translator between your app and another service — like a weather site or payment processor.";
    }
    else if (
      input.includes("why use apis") || 
      input.includes("why are apis important") || 
      input.includes("benefits of apis")
    ) {
      reply = "APIs save time and resources by letting developers build on top of existing tools instead of starting from scratch. They’re how apps like DoorDash, Spotify, and even your smart home devices connect to real-time services.";
    }
    else if (
      input.includes("example of an api") || 
      input.includes("api example")
    ) {
      reply = "Example: When your phone’s weather app shows the forecast, it’s using a Weather API to fetch real-time data from a weather server. You send a city name → it sends back temperature, condition, etc.";
    }
    else if (
      input.includes("rest api") || 
      input.includes("what is rest")
    ) {
      reply = "REST is a popular API style that uses HTTP methods like GET and POST. It’s the most common structure for building APIs and is designed to be simple and scalable.";
    }
    else if (input.includes("json")) {
      reply = "JSON (JavaScript Object Notation) is the most common format used for data in APIs. It's lightweight, human-readable, and easy for apps to parse.";
    }
    else if (input.includes("your name")) {
      reply = "I’m your AI assistant, designed to reflect Sumayyah’s voice — tech-forward, intentional, and always focused on growth.";
    }
    else if (input.includes("help")) {
      reply = "Of course. What area are you looking to learn more about — tech concepts, tools, or something specific?";
    }
    else if (
      input.includes("tired") || 
      input.includes("burnt out") || 
      input.includes("overwhelmed")
    ) {
      reply = "It’s completely valid to feel that way. Take a breath. Rest is part of progress, and you’re still on the path.";
    }
    else if (input.includes("bye")) {
      reply = "Take care — and thank you for engaging. Let’s reconnect soon.";
    }
    else {
      const randomResponses = [
        "That's a great question — can you share a bit more context?",
        "Let’s work through that. What's your current understanding so far?",
        "Good inquiry. Would you like a technical breakdown or a real-world analogy?",
        "Let’s take that one step at a time. Where would you like to begin?",
        "Interesting thought — sounds like you're onto something."
      ];
      reply = randomResponses[Math.floor(Math.random() * randomResponses.length)];
    }

    document.getElementById("chatOutput").innerText = `AI: ${reply}`;
  });
});
