const enContent = {
  title: "Welcome to MannMithra",
  homeLink: "Home",
  newsLink: "News",
  schemeLink: "Schemes",
  guideLink: "Guide",
  welcomeTitle: "Empowering Tamil Nadu Farmers",
  welcomeDesc: "Welcome to a platform built exclusively for the hardworking farmers of Tamil Nadu. Our mission is to empower you with the tools, knowledge, and resources you need to succeed in agriculture.Here, you'll find daily updates on farming news,  and market prices to help you make informed decisions. Explore government schemes designed to benefit farmers and access step-by-step guides on modern farming techniques, crop care, and pest management.We believe in the strength of our farming community and are committed to supporting you every step of the way. Whether you're looking for advice, solutions, or simply the latest information, this portal is your one-stop destination to enhance your productivity and grow your income. Let’s work together to cultivate a brighter future for Tamil Nadu’s agriculture!" ,
  feature1Title: "Stay Updated",
  feature1Desc: " Here’s what’s happening right now:",
  feature2Title: "Government Schemes",
  feature2Desc: "Learn about government initiatives and subsidies designed to benefit farmers.",
  feature3Title: "Farming Guides",
  feature3Desc: "Step-by-step guides to help you with planting, harvesting, and farm health management.",
  footerText: "&copy; 2025 MannMithra. Empowering Farmers, Building Futures.",
  buttonText: "ஆங்கிலத்திற்கு மாறவும்",
};

const taContent = {
  title: "மண் மித்ரா - அரசாங்க திட்டங்கள்",
  homeLink: "முகப்பு",
  newsLink: "செய்திகள்",
  schemeLink: "திட்டங்கள்",
  guideLink: "வழிகாட்டி",
  welcomeTitle: "தமிழ்நாடு விவசாயிகளுக்கு சக்தி புகட்டுவது",
  welcomeDesc: "தமிழ்நாட்டின் கடின உழைப்பாளி விவசாயிகளுக்காக பிரத்யேகமாக கட்டப்பட்ட மேடைக்கு வரவேற்கிறோம். விவசாயத்தில் வெற்றிபெற உங்களுக்கு தேவையான கருவிகள், அறிவு மற்றும் வளங்களை உங்களுக்கு வழங்குவதே எங்கள் நோக்கம் இங்கே, விவசாயச் செய்திகள் மற்றும் சந்தை விலைகள் குறித்த தினசரி அறிவிப்புகள் மற்றும் தகவலறிந்த முடிவுகளை எடுக்க உங்களுக்கு உதவும். விவசாயிகளுக்கு பயனளிக்கும் வகையில் வடிவமைக்கப்பட்ட அரசாங்க திட்டங்களை ஆராய்ந்து, நவீன விவசாய நுட்பங்கள், பயிர் பராமரிப்பு மற்றும் பூச்சி மேலாண்மை குறித்த படிப்படியான வழிகாட்டிகளை அணுகவும்.எங்கள் விவசாய சமூகத்தின் வலிமையை நாங்கள் நம்புகிறோம், மேலும் ஒவ்வொரு அடியிலும் உங்களுக்கு ஆதரவளிக்க உறுதிபூண்டுள்ளோம். நீங்கள் ஆலோசனைகள், தீர்வுகள் அல்லது சமீபத்திய தகவல்களைத் தேடுகிறீர்களானாலும், உங்கள் உற்பத்தித்திறனை அதிகரிக்கவும், உங்கள் வருமானத்தை அதிகரிக்கவும் இந்த போர்ட்டல் உங்களின் ஒரே இடத்தில் இருக்கும்.தமிழ்நாட்டின் விவசாயத்திற்கு ஒளிமயமான எதிர்காலத்தை உருவாக்க ஒன்றிணைவோம்!",
  feature1Title: "புதியதைக் காண்க",
  feature1Desc: "தமிழ்நாட்டில் விவசாயிகளுக்கான சமீபத்திய செய்திகளையும் புதுப்பிப்புகளையும் அணுகவும்.",
  feature2Title: "அரசாங்க திட்டங்கள்",
  feature2Desc: "விவசாயிகளுக்கு பயனளிக்கும் அரசு முயற்சிகள் மற்றும் சலுகைகள் பற்றி கற்றுக்கொள்ளவும்.",
  feature3Title: "விவசாய வழிகாட்டிகள்",
  feature3Desc: "விதை நடவு, அறுவடை மற்றும் பண்ணை ஆரோக்கிய மேலாண்மைக்கு வழிகாட்டி படி படி உதவிக்குறிப்புகள்.",
  footerText: "&copy; 2025 மண் மித்ரா. விவசாயிகளுக்கு சக்தி புகட்டுகிறது, எதிர்காலங்களை கட்டுகிறது.",
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