const enContent = {
  title: "MannMithra - Government Schemes",
  homeLink: "Home",
  newsLink: "News",
  schemeLink: "Schemes",
  guideLink: "Guide",
  scheme1Title: "PM Kisan Samman Nidhi Yojana",
  scheme1Desc: "This scheme provides income support to farmers by transferring Rs. 6,000 annually directly to their bank accounts in three installments.",
  scheme2Title: "Sub-Mission on Agroforestry (SMAF)",
  scheme2Desc: "SMAF aims to encourage farmers to plant trees along with crops to enhance income and environmental benefits.",
  scheme3Title: "Fasal Bima Yojana",
  scheme3Desc: "Pradhan Mantri Fasal Bima Yojana provides crop insurance against unforeseen events like natural calamities and pests.",
  scheme4Title: "Soil Health Card Scheme",
  scheme4Desc: "The scheme provides soil health cards to farmers, offering information on soil nutrient status and recommendations for better farming practices.",
  footerText: "&copy; 2025 MannMithra. All rights reserved.",
  buttonText: "ஆங்கிலத்திற்கு மாறவும்",
};

const taContent = {
  title: "கவனத்தைத் திருப்புங்கள் - அரசாங்க திட்டங்கள்",
  homeLink: "முகப்பு",
  newsLink: "செய்திகள்",
  schemeLink: "திட்டங்கள்",
  guideLink: "வழிகாட்டி",
  scheme1Title: "பிஎம் கிசான் சம்மான் நிதி யோஜனா",
  scheme1Desc: "இந்த திட்டம் விவசாயிகளுக்கு 6,000 ரூபாய் வருமான ஆதரவினை மூன்று தவணைகளில் நேரடியாக அவர்களது வங்கி கணக்குகளுக்கு பரிமாற்றுகிறது.",
  scheme2Title: "அக்ரோபெரிஸ்டி குறித்த துணை இயக்கம் (SMAF)",
  scheme2Desc: "SMAF விவசாயிகளுக்கு மரங்கள் செடிக்காக வளர்க்க உதவி செய்யும் திட்டம்.",
  scheme3Title: "பசல் பிமா யோஜனா",
  scheme3Desc: "பிரதான் மந்திரி பசல் பிமா யோஜனா இயற்கை பேரழிவுகள் மற்றும் பூச்சிகளை எதிர்கொள்ளும் போது மானியத்தை வழங்குகிறது.",
  scheme4Title: "மண் ஆரோக்கிய அட்டை திட்டம்",
  scheme4Desc: "இந்த திட்டம் விவசாயிகளுக்கு மண் ஆரோக்கிய அட்டைகள் வழங்குகிறது, மண் ஊட்டச்சத்து நிலையை அறிவித்து தரமான விவசாய நடவடிக்கைகளுக்கான பரிந்துரைகளை வழங்குகிறது.",
  footerText: "&copy; 2025 கவனத்தைத் திருப்புங்கள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  buttonText: "Switch to English",
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
  document.getElementById("scheme1Title").innerText = content.scheme1Title;
  document.getElementById("scheme1Desc").innerText = content.scheme1Desc;
  document.getElementById("scheme2Title").innerText = content.scheme2Title;
  document.getElementById("scheme2Desc").innerText = content.scheme2Desc;
  document.getElementById("scheme3Title").innerText = content.scheme3Title;
  document.getElementById("scheme3Desc").innerText = content.scheme3Desc;
  document.getElementById("scheme4Title").innerText = content.scheme4Title;
  document.getElementById("scheme4Desc").innerText = content.scheme4Desc;
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