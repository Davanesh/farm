const translations = {
  en: {
      title: "Farmer's Hub - News",
      navHome: "Home",
      navNews: "News",
      navSchemes: "Schemes",
      navGuide: "Guide",
      news1Title: "New Subsidy Announced for Organic Farming",
      news1Content: "The government has introduced a new subsidy scheme to encourage organic farming practices, providing financial assistance for farmers adopting sustainable methods.",
      news2Title: "National Agriculture Expo 2025",
      news2Content: "The National Agriculture Expo is scheduled to take place in Chennai on February 15th, featuring the latest technologies and innovations in agriculture.",
      news3Title: "Farmer Ramesh's Success Story",
      news3Content: "Ramesh, a farmer from Tamil Nadu, has successfully doubled his crop yield using innovative irrigation techniques. Learn more about his journey.",
      footerText: "&copy; 2025 Farmer's Hub. All rights reserved.",
      buttonText: "ஆங்கிலத்திற்கு மாறவும்"
  },
  ta: {
    title: "விவசாயிகளின் மையம் - செய்திகள்",
    navHome: "முகப்பு",
    navNews: "செய்திகள்",
    navSchemes: "திட்டங்கள்",
    navGuide: "வழிகாட்டி",
    news1Title: "உயிரியல் விவசாயத்துக்கான புதிய மானியம் அறிவிப்பு",
    news1Content: "உயிரியல் விவசாய முறைகளை ஊக்குவிக்க அரசு புதிய மானிய திட்டத்தை அறிமுகப்படுத்தியுள்ளது, நிலையான முறைகளை ஏற்கும் விவசாயிகளுக்கு நிதி உதவி வழங்குகிறது.",
    news2Title: "தேசிய வேளாண்மை கண்காட்சி 2025",
    news2Content: "தேசிய வேளாண்மை கண்காட்சி பிப்ரவரி 15 அன்று சென்னையில் நடைபெற உள்ளது, விவசாயத்தில் புதிய தொழில்நுட்பங்கள் மற்றும் புதுமைகளை வழங்குகிறது.",
    news3Title: "விவசாயி ரமேஷின் வெற்றிக்கதை",
    news3Content: "தமிழ்நாட்டைச் சேர்ந்த விவசாயி ரமேஷ் புதுமையான பாசன நுட்பங்களைப் பயன்படுத்தி தனது பயிர்த் தொகையை இரட்டிப்பாக வெற்றிகரமாக அதிகரித்துள்ளார். அவரது பயணத்தைப் பற்றி மேலும் அறியவும்.",
    footerText: "&copy; 2025 விவசாயிகளின் மையம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    buttonText: "Switch to Tamil"
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


