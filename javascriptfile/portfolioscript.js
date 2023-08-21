  document.addEventListener("DOMContentLoaded", function () {
    const occupations = ["Learner","Software Developer", "Web Developer", "Java Developer"];
    let currentOccupationIndex = 0;
    const cardOccupation = document.querySelector(".card-occupation");
    const cardInfo = "Smile,I'm Subhash Chavan,excited to collaborate with a dynamic team and make meaningful contributions to projects that drive technological advancements. Let's connect and explore how I can be an asset to your team's success.";
    const cardInfoElement = document.querySelector(".card-info");
    let infoIndex = 0;
    let typingInterval;

    function changeOccupation() {
      currentOccupationIndex = (currentOccupationIndex + 1) % occupations.length;
      cardOccupation.textContent = occupations[currentOccupationIndex];
    }

    function startTyping() {
      clearInterval(typingInterval);
      cardInfoElement.innerHTML = ""; // Clear existing text
      infoIndex = 0;
      typingInterval = setInterval(typeInfo, 50); // Type info with 50ms interval
    }

    function typeInfo() {
      cardInfoElement.textContent += cardInfo.charAt(infoIndex);
      infoIndex++;

      if (infoIndex >= cardInfo.length) {
        clearInterval(typingInterval);
      }
    }

    setInterval(changeOccupation, 2000);

    const card = document.querySelector(".card");
    card.addEventListener("click", function (event) {
      if (!event.target.classList.contains("button")) {
        this.classList.toggle("flipped");
        if (this.classList.contains("flipped")) {
          cardInfoElement.innerHTML = "";
          setTimeout(startTyping, 500);
        } else {
          cardInfoElement.innerHTML = "";
        }
      }
    });
  });