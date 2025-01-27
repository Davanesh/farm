const enContent = {
  title: "MannMithra - Farming Guide",
  homeLink: "Home",
  newsLink: "News",
  schemeLink: "Schemes",
  guideLink: "Guide",
  step1Title: "Planting Guides",
  step1Desc: "Learn the best practices for planting and growing various crops, tailored to Tamil Nadu’s climate and soil conditions.",
  step2Title: "Modern Farming Techniques",
  step2Desc: "Boost your productivity with advanced and eco-friendly farming methods. Learn how to:",
  step3Title: "Pest & Disease Management",
  step3Desc: "Identify and control common pests and diseases that affect your crops.",
  step4Title: "Seasonal Farming Advice",
  step4Desc: "Get expert advice on how to prepare for each farming season in Tamil Nadu:",
  step5Title: " Animal Husbandry",
  step5Desc: "Healthy livestock means a prosperous farm. Explore guides on:",
  step6Title: "Sustainable Farming Practices",
  step6Desc: "Ensure long-term productivity and environmental health with these sustainable practices:",
  footerText: "&copy; 2025 MannMithra. All rights reserved.",
  buttonText: "ஆங்கிலத்திற்கு மாறவும்",
};

const taContent = {
  title: "மண் மித்ரா - விவசாய வழிகாட்டி",
  homeLink: "முகப்பு",
  newsLink: "செய்திகள்",
  schemeLink: "திட்டங்கள்",
  guideLink: "வழிகாட்டி",
  step1Title: "நடவு வழிகாட்டிகள்",
  step1Desc: "தமிழ்நாட்டின் தட்பவெப்ப நிலை மற்றும் மண் நிலைகளுக்கு ஏற்றவாறு பல்வேறு பயிர்களை நடவு செய்வதற்கும் வளர்ப்பதற்கும் சிறந்த நடைமுறைகளைக் கற்றுக்கொள்ளுங்கள்.",
  step2Title: "நவீன விவசாய நுட்பங்கள்",
  step2Desc: "மேம்பட்ட மற்றும் சுற்றுச்சூழல் நட்பு விவசாய முறைகள் மூலம் உங்கள் உற்பத்தித்திறனை அதிகரிக்கவும். எப்படி என்பதை அறிக:",
  step3Title: "பூச்சி மற்றும் நோய் மேலாண்மை",
  step3Desc: "உங்கள் பயிர்களைப் பாதிக்கும் பொதுவான பூச்சிகள் மற்றும் நோய்களைக் கண்டறிந்து கட்டுப்படுத்தவும்.",
  step4Title: "பருவகால விவசாய ஆலோசனை",
  step4Desc: "தமிழ்நாட்டின் ஒவ்வொரு விவசாயப் பருவத்திற்கும் எவ்வாறு தயாரிப்பது என்பது குறித்த நிபுணர் ஆலோசனையைப் பெறவும்:",
  step5Title: "கால்நடை பராமரிப்பு",
  step5Desc: "ஆரோக்கியமான கால்நடை என்றால் வளமான பண்ணை என்று பொருள். வழிகாட்டிகளை ஆராயுங்கள்:",
  step6Title: "நிலையான விவசாய நடைமுறைகள்",
  step6Desc: "இந்த நிலையான நடைமுறைகளுடன் நீண்ட கால உற்பத்தித்திறன் மற்றும் சுற்றுச்சூழல் ஆரோக்கியத்தை உறுதிப்படுத்தவும்:",
  footerText: "&copy; 2025 மண் மித்ரா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
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
  document.getElementById("step1Title").innerText = content.step1Title;
  document.getElementById("step1Desc").innerText = content.step1Desc;
  document.getElementById("step2Title").innerText = content.step2Title;
  document.getElementById("step2Desc").innerText = content.step2Desc;
  document.getElementById("step3Title").innerText = content.step3Title;
  document.getElementById("step3Desc").innerText = content.step3Desc;
  document.getElementById("step4Title").innerText = content.step4Title;
  document.getElementById("step4Desc").innerText = content.step4Desc;
  document.getElementById("step5Title").innerText = content.step5Title;
  document.getElementById("step5Desc").innerText = content.step5Desc;
  document.getElementById("step6Title").innerText = content.step6Title;
  document.getElementById("step6Desc").innerText = content.step6Desc;
  document.getElementById("step7Title").innerText = content.step7Title;
  document.getElementById("step7Desc").innerText = content.step7Desc;
  document.getElementById("step8Title").innerText = content.step8Title;
  document.getElementById("step8Desc").innerText = content.step8Desc;
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