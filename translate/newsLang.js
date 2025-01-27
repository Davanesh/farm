const translations = {
  en: {
      title: "Farmer's Hub - News",
      navHome: "Home",
      navNews: "News",
      navSchemes: "Schemes",
      navGuide: "Guide",
      news1Title: "Latest Agricultural News",
      news1Content: "Stay Updated on Agricultural Trends and Updates",
      news2Title: "Weather Updates",
      news2Content: "Plan Better with Real-Time Weather Reports",
      news3Title: " Market Price Updates",
      news3Content: "Stay Informed About Crop Market Trends",
      news4Title: " Success Stories",
      news4Content: " Learn from Farmers Who Made a Difference",
      news5Title: " Events and Workshops",
      news5Content: "Stay Connected with Farming Events Near You",
      news6Title: " Policy and Government Announcements",
      news6Content: "Stay Informed About Policies Affecting Farmers",
      news7Title: " Expert Opinions and Advice",
      news7Content: "Get Professional Insights to Improve Your Farm",
      footerText: "&copy; 2025 Mannmithra. All rights reserved.",
      buttonText: "ஆங்கிலத்திற்கு மாறவும்"
  },
  ta: {
    title: "மண் மித்ரா - செய்திகள்",
    navHome: "முகப்பு",
    navNews: "செய்திகள்",
    navSchemes: "திட்டங்கள்",
    navGuide: "வழிகாட்டி",
    news1Title: "சமீபத்திய விவசாய செய்திகள்",
    news1Content: "விவசாயப் போக்குகள் மற்றும் புதுப்பிப்புகள் குறித்து புதுப்பித்த நிலையில் இருங்கள்",
    news2Title: "வானிலை புதுப்பிப்புகள்",
    news2Content: "நிகழ்நேர வானிலை அறிக்கைகளுடன் சிறப்பாக திட்டமிடுங்கள்",
    news3Title: " சந்தை விலை புதுப்பிப்புகள்",
    news3Content: "பயிர் சந்தை போக்குகள் பற்றி தொடர்ந்து தெரிந்து கொள்ளுங்கள்",
    news4Title: " வெற்றிக் கதைகள்",
    news4Content: " ஒரு வித்தியாசத்தை ஏற்படுத்திய விவசாயிகளிடமிருந்து கற்றுக்கொள்ளுங்கள்",
    news5Title: " நிகழ்வுகள் மற்றும் பட்டறைகள்",
    news5Content: "உங்களுக்கு அருகிலுள்ள விவசாய நிகழ்வுகளுடன் இணைந்திருங்கள்",
    news6Title: " கொள்கை மற்றும் அரசு அறிவிப்புகள்",
    news6Content: "விவசாயிகளை பாதிக்கும் கொள்கைகள் பற்றி தொடர்ந்து தெரிந்து கொள்ளுங்கள்",
    news7Title: " நிபுணர் கருத்துக்கள் மற்றும் ஆலோசனை",
    news7Content: "உங்கள் பண்ணையை மேம்படுத்த தொழில்முறை நுண்ணறிவுகளைப் பெறுங்கள்",
    footerText: "&copy; 2025 மண் மித்ரா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    buttonText: "Switch to English"
  }
};

let currentLanguage = 'en';

const elements = {
  title: document.getElementById('title'),
  navHome: document.getElementById('navHome'),
  navNews: document.getElementById('navNews'),
  navSchemes: document.getElementById('navSchemes'),
  navGuide: document.getElementById('navGuide'),
  news1Title: document.getElementById('news1Title'),
  news1Content: document.getElementById('news1Content'),
  news2Title: document.getElementById('news2Title'),
  news2Content: document.getElementById('news2Content'),
  news3Title: document.getElementById('news3Title'),
  news3Content: document.getElementById('news3Content'),
  footerText: document.getElementById('footerText'),
  button: document.getElementById('languageToggle')
};

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