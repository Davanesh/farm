const enContent = {
  title: "Welcome to Farmer's Hub",
  homeLink: "Home",
  newsLink: "News",
  schemeLink: "Schemes",
  guideLink: "Guide",
  welcomeTitle: "Empowering Tamil Nadu Farmers",
  welcomeDesc: "Farmer's Hub is dedicated to supporting the agricultural community by providing timely news, government schemes, and expert guides to enhance productivity and sustainability in farming.",
  feature1Title: "Stay Updated",
  feature1Desc: "Access the latest news and updates relevant to farmers in Tamil Nadu.",
  feature2Title: "Government Schemes",
  feature2Desc: "Learn about government initiatives and subsidies designed to benefit farmers.",
  feature3Title: "Farming Guides",
  feature3Desc: "Step-by-step guides to help you with planting, harvesting, and farm health management.",
  footerText: "&copy; 2025 Farmer's Hub. Empowering Farmers, Building Futures.",
  buttonText: "ஆங்கிலத்திற்கு மாறவும்",
};

const taContent = {
  title: "கவனத்தைத் திருப்புங்கள் - அரசாங்க திட்டங்கள்",
  homeLink: "முகப்பு",
  newsLink: "செய்திகள்",
  schemeLink: "திட்டங்கள்",
  guideLink: "வழிகாட்டி",
  welcomeTitle: "தமிழ்நாடு விவசாயிகளுக்கு சக்தி புகட்டுவது",
  welcomeDesc: "கவனத்தைத் திருப்புங்கள் விவசாயிகளுக்கு நேரத்தில் செய்தி, அரசாங்க திட்டங்கள் மற்றும் தொழில்நுட்ப வழிகாட்டிகளை வழங்குவதன் மூலம் விவசாய உற்பத்தி மற்றும் நிலைத்தன்மை மேம்படுத்துவதை நோக்கமாகக் கொண்டுள்ளது.",
  feature1Title: "புதியதைக் காண்க",
  feature1Desc: "தமிழ்நாட்டில் விவசாயிகளுக்கான சமீபத்திய செய்திகளையும் புதுப்பிப்புகளையும் அணுகவும்.",
  feature2Title: "அரசாங்க திட்டங்கள்",
  feature2Desc: "விவசாயிகளுக்கு பயனளிக்கும் அரசு முயற்சிகள் மற்றும் சலுகைகள் பற்றி கற்றுக்கொள்ளவும்.",
  feature3Title: "விவசாய வழிகாட்டிகள்",
  feature3Desc: "விதை நடவு, அறுவடை மற்றும் பண்ணை ஆரோக்கிய மேலாண்மைக்கு வழிகாட்டி படி படி உதவிக்குறிப்புகள்.",
  footerText: "&copy; 2025 கவனத்தைத் திருப்புங்கள். விவசாயிகளுக்கு சக்தி புகட்டுகிறது, எதிர்காலங்களை கட்டுகிறது.",
  buttonText: "Switch to Tamil",
};

function switchLanguage() {
  const currentLang = document.documentElement.lang === "en" ? "en" : "ta";
  const newLang = currentLang === "en" ? "ta" : "en";

  document.documentElement.lang = newLang;

  const content = newLang === "en" ? enContent : taContent;

  document.getElementById("title").innerText = content.title;
  document.getElementById("homeLink").innerText = content.homeLink;
  document.getElementById("newsLink").innerText = content.newsLink;
  document.getElementById("schemeLink").innerText = content.schemeLink;
  document.getElementById("guideLink").innerText = content.guideLink;
  document.getElementById("welcomeTitle").innerText = content.welcomeTitle;
  document.getElementById("welcomeDesc").innerText = content.welcomeDesc;
  document.getElementById("feature1Title").innerText = content.feature1Title;
  document.getElementById("feature1Desc").innerText = content.feature1Desc;
  document.getElementById("feature2Title").innerText = content.feature2Title;
  document.getElementById("feature2Desc").innerText = content.feature2Desc;
  document.getElementById("feature3Title").innerText = content.feature3Title;
  document.getElementById("feature3Desc").innerText = content.feature3Desc;
  document.getElementById("footerText").innerHTML = content.footerText;
  document.getElementById("languageToggle").innerText = content.buttonText;
}

// Toggle button text
document.getElementById('languageToggle').addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ta' : 'en';

  Object.keys(elements).forEach(key => {
    if (key === 'button') {
        elements[key].textContent = translations[currentLanguage].buttonText;
    } else {
        elements[key].textContent = translations[currentLanguage][key];
    }
  });
});