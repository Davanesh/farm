const enContent = {
  title: "MannMithra - Government Schemes",
  homeLink: "Home",
  newsLink: "News",
  schemeLink: "Schemes",
  guideLink: "Guide",
  scheme1Title: "Central Government Schemes",
  scheme1Desc: "Discover National-Level Benefits for Farmers",
  scheme2Title: "Tamil Nadu State Government Schemes",
  scheme2Desc: "Localized Solutions for Tamil Nadu Farmers",
  scheme3Title: "How to Apply for Schemes",
  scheme3Desc: "Step-by-Step Guide to Availing Benefits",
  scheme4Title: "Frequently Asked Questions (FAQs)",
  scheme4Desc: "Answers to Common Queries About Farming Schemes",
  scheme5Title: "Resources and Helplines",
  scheme5Desc: "Connect with Support Networks",
  footerText: "&copy; 2025 MannMithra. All rights reserved.",
  buttonText: "ஆங்கிலத்திற்கு மாறவும்",
};

const taContent = {
  title: "மண் மித்ரா - அரசாங்க திட்டங்கள்",
  homeLink: "முகப்பு",
  newsLink: "செய்திகள்",
  schemeLink: "திட்டங்கள்",
  guideLink: "வழிகாட்டி",
  scheme1Title: "மத்திய அரசின் திட்டங்கள்",
  scheme1Desc: "விவசாயிகளுக்கான தேசிய அளவிலான பலன்களைக் கண்டறியவும்",
  scheme2Title: "தமிழ்நாடு மாநில அரசின் திட்டங்கள்",
  scheme2Desc: "தமிழ்நாட்டு விவசாயிகளுக்கான உள்ளூர் தீர்வுகள்",
  scheme3Title: "திட்டங்களுக்கு எவ்வாறு விண்ணப்பிப்பது",
  scheme3Desc: "பலன்களைப் பெறுவதற்கான படிப்படியான வழிகாட்டி",
  scheme4Title: "அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQகள்)",
  scheme4Desc: "விவசாயத் திட்டங்கள் பற்றிய பொதுவான கேள்விகளுக்கான பதில்கள்",
  scheme5Title: "ஆதாரங்கள் மற்றும் ஹெல்ப்லைன்கள்",
  scheme5Desc: "ஆதரவு நெட்வொர்க்குகளுடன் இணைக்கவும்",
  footerText: "&copy; 2025 மண் மித்ரா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
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