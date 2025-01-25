const enContent = {
  title: "Farmer's Hub - Farming Guide",
  homeLink: "Home",
  newsLink: "News",
  schemeLink: "Schemes",
  guideLink: "Guide",
  step1Title: "Step 1: Soil Preparation",
  step1Desc: "Test the soil for nutrient content and pH levels. Remove weeds and debris. Add organic compost or fertilizers to enrich the soil and maintain its fertility.",
  step2Title: "Step 2: Seed Selection",
  step2Desc: "Choose high-quality seeds suitable for your region and crop type. Opt for disease-resistant varieties to ensure better yield.",
  step3Title: "Step 3: Sowing",
  step3Desc: "Plant seeds at the right depth and spacing. Follow recommended practices for the specific crop to maximize germination and growth.",
  step4Title: "Step 4: Irrigation",
  step4Desc: "Ensure timely and adequate watering. Use efficient methods like drip or sprinkler irrigation to save water and provide consistent moisture.",
  step5Title: "Step 5: Pest and Weed Management",
  step5Desc: "Use natural pesticides and herbicides to control pests and weeds. Regularly inspect crops for signs of infestation or disease.",
  step6Title: "Step 6: Fertilization",
  step6Desc: "Apply fertilizers based on soil test results. Follow recommended schedules and avoid over-fertilization to prevent soil degradation.",
  step7Title: "Step 7: Harvesting",
  step7Desc: "Harvest crops at the right maturity stage. Use proper tools and techniques to minimize damage and loss during harvesting.",
  step8Title: "Step 8: Post-Harvest Management",
  step8Desc: "Store harvested produce in clean and dry conditions. Use appropriate packaging to maintain freshness and quality during transportation.",
  footerText: "&copy; 2025 Farmer's Hub. All rights reserved.",
  buttonText: "ஆங்கிலத்திற்கு மாறவும்",
};

const taContent = {
  title: "கவனத்தைத் திருப்புங்கள் - விவசாய வழிகாட்டி",
  homeLink: "முகப்பு",
  newsLink: "செய்திகள்",
  schemeLink: "திட்டங்கள்",
  guideLink: "வழிகாட்டி",
  step1Title: "படம் 1: மண் தயாரிப்பு",
  step1Desc: "மண்ணின் ஊட்டச்சத்து உள்ளடக்கம் மற்றும் pH நிலைகளை சோதிக்கவும். புல் மற்றும் கழிவுகளை அகற்றவும். மண்ணை வளமாக்க மற்றும் அதன் பலத்தன்மையை பராமரிக்க காரிக காம்போஸ்ட் அல்லது உரங்களைச் சேர்க்கவும்.",
  step2Title: "படம் 2: விதை தேர்வு",
  step2Desc: "உங்கள் பகுதியில் மற்றும் பயிரின் வகைக்கேற்ற உயர் தரமான விதைகளைத் தேர்ந்தெடுங்கள். சிறந்த விளைவிற்கு நோய் எதிர்ப்பு வகைகளை தேர்வு செய்யவும்.",
  step3Title: "படம் 3: விதை நடவு",
  step3Desc: "விதைகளை சரியான ஆழம் மற்றும் இடைவெளியில் நடவும். அதிகமான உருவாக்கம் மற்றும் வளர்ச்சிக்கான குறிப்பிட்ட பயிர்களுக்கு பரிந்துரைக்கப்பட்ட நடைமுறைகளைப் பின்பற்றவும்.",
  step4Title: "படம் 4: நீர்க்கட்டி",
  step4Desc: "சமயம் மற்றும் போதுமான நீரிடலுக்கு கவனம் செலுத்தவும். நீரை மிச்சப்படுத்த மற்றும் ஒரே அளவு ஈரப்பதத்தை வழங்க குறைந்த நேர்த்தியான முறைகளைப் பயன்படுத்தவும்.",
  step5Title: "படம் 5: பூச்சிகள் மற்றும் புல் மேலாண்மை",
  step5Desc: "பூச்சிகள் மற்றும் புல்களை கட்டுப்படுத்த இயற்கை பூச்சிக்கொல்லிகள் மற்றும் மூலிகைகள் பயன்படுத்தவும். பயிர்களை பூச்சிகள் அல்லது நோய்க்கான அழற்சிகள் இருப்பதாக பின் பின்னர் சரிபார்க்கவும்.",
  step6Title: "படம் 6: உரம்",
  step6Desc: "மண் சோதனை முடிவுகளைப் பொருத்து உரங்களை பயன்படுத்தவும். பரிந்துரைக்கப்பட்ட அட்டவணைகளை பின்பற்றவும், அதிகமான உரத்தை தவிர்க்கவும், இல்லையெனில் மண் அழிப்பைத் தவிர்க்கவும்.",
  step7Title: "படம் 7: அறுவடை",
  step7Desc: "பயிர்களை சரியான வயதில் அறுவடை செய்யவும். அறுவடை செய்யும் போது சேதங்கள் மற்றும் இழப்புகளைக் குறைக்க சரியான கருவிகள் மற்றும் தொழில்நுட்பங்களைப் பயன்படுத்தவும்.",
  step8Title: "படம் 8: அறுவடை பின்னர் மேலாண்மை",
  step8Desc: "அறுவடை செய்யப்பட்ட உற்பத்தி சுத்தமான மற்றும் உலர்ந்த நிலைகளில் சேமிக்கவும். போக்குவரத்துக்கான மேம்பட்ட மற்றும் தரமான பேக்கேஜிங் பயன்படுத்தவும்.",
  footerText: "&copy; 2025 கவனத்தைத் திருப்புங்கள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
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