function getBotResponse(input) {

    if (input == "I want help") {
        return "sure";
    } else if (input == "help me with anxiety") {
        return "Practice deep breathing exercises to help calm your mind"
       
    } else if (input == "thank you") {
        return "Please feel free to reach out!"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}