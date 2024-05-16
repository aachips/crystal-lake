function showInvestigation() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("investigation").style.display = "block";
  }
  
  function showCharacter(character) {
    // Implement logic to show character information page based on the argument
  }
  
  // ... (More JavaScript functions for other interactions)

  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".container");
    sections.forEach(section => section.classList.remove("active"));
  
    // Show the clicked section
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add("active");
  }

  const playerChoices = {
    talkedTo: "", // Sheriff, Doctor, or Store Owner
    confronted: null, // Factory or Other (later)
    evidenceFound: [], // Array of evidence IDs
  };
  
  function updateChoice(choice) {
    playerChoices[choice.property] = choice.value;
  }
  
  function takeQuiz(sectionId, questions) {
    // Display quiz questions and options
    // Use JavaScript to evaluate answers and provide feedback
  }

  function getRandomSocialPost() {
    const posts = [
      // ... Define different social media post options
    ];
    const randomIndex = Math.floor(Math.random() * posts.length);
    return posts[randomIndex];
  }

  function startGame() {
    // Hide the intro section (optional)
    const intro = document.getElementById("intro");
    intro.style.display = "none";
  
    // Show the first investigation section (e.g., character_choice.html content)
    const investigationChoice = document.getElementById("investigation_choice");
    investigationChoice.style.display = "block";
  }