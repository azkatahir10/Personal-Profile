const portfolioData = {
    languages: ["Arabic", "Urdu", "French"],
    skills: {
      soft: ["Communication", "Teamwork", "Problem-solving"],
      hard: ["JavaScript", "React", "CSS"]
    },
    projects: [
      { name: "Project A", date: "2023-05-10", time: "2:00 PM" },
      { name: "Project B", date: "2024-01-15", time: "3:30 PM" }
    ],
    certifications: [
      { name: "Certification X", date: "2022-11-20" },
      { name: "Certification Y", date: "2023-03-30" }
    ],
    degrees: ["Bachelor in CS", "Master in IT"],
    hackathons: ["Hackathon 1", "Hackathon 2"],
    videoContent: "path/to/video.mp4",
    socialMediaFeed: ["Twitter", "LinkedIn"]
  };
  

// Display languages in a navigation bar
const langBar = document.getElementById('languageBar');
portfolioData.languages.forEach(lang => {
  langBar.innerHTML += `<li>${lang}</li>`;
});

// Populate skills section
const skillsSection = document.getElementById('skillsSection');
portfolioData.skills.soft.forEach(skill => {
  skillsSection.innerHTML += `<p>${skill}</p>`;
});
