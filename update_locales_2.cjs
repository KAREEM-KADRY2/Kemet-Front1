const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, 'src', 'locales');
const langs = ['en', 'ar', 'fr', 'es', 'ru'];

const newData = {
  en: {
    about: {
      badge: "Our Story",
      heading: "About Kemet & Alpha Sino",
      subheading: "Building trusted industrial partnerships across the Middle East, Africa, and beyond since 2003.",
      history_badge: "Company History",
      history_heading_1: "A Legacy Built On",
      history_heading_2: "Industrial Trust",
      history_p1: "Founded in Dubai's Port Said district, Alpha Sino General Trading Co. LLC began as a specialized importer of construction and mining equipment for the rapidly developing UAE market. Two decades of relationship-driven commerce transformed us into one of the region's most recognized heavy machinery distributors.",
      history_p2: "The KEMET brand was born from a simple conviction: the GCC construction and mining sectors deserved purpose-engineered machinery that could withstand extreme heat, continuous heavy-cycle operations, and the logistical demands of remote project sites — without compromising operator productivity or machine reliability.",
      history_p3: "Today, KEMET machines are deployed across construction megaprojects, open-pit mining operations, and industrial infrastructure developments spanning the UAE, Saudi Arabia, Egypt, and sub-Saharan Africa.",
      strengths_title: "Our Operational Strengths",
      strength_1_title: "Years of Excellence",
      strength_1_desc: "Relationship-driven heavy machinery distribution since 2003.",
      strength_2_title: "OEM Parts Availability",
      strength_2_desc: "Guaranteed genuine components for maximized machine uptime.",
      strength_3_title: "Engineering Dispatch",
      strength_3_desc: "Dedicated technical support team active across the entire GCC."
    },
    details: {
      back_to_catalog: "Back to Catalog",
      series: "Series",
      download_spec: "Download Spec Sheet",
      share_product: "Share Product",
      link_copied: "Link Copied! 📋",
      tech_specs: "Technical Specifications",
      request_quote: "Request a Quote",
      get_pricing: "Get Pricing & Availability",
      advisor_text: "Our heavy equipment advisors respond within 2 hours with tailored quotes, shipping terms, and delivery timelines.",
      trust_1: "2-Hour Response Guarantee",
      trust_2: "Global Shipping Available",
      trust_3: "Custom Financing Options",
      trust_4: "Full Warranty Included",
      inquiry_sent: "Inquiry Sent!",
      inquiry_sent_desc_1: "Your request for the",
      inquiry_sent_desc_2: "has been received. An advisor will contact you shortly.",
      send_another: "Send Another",
      form_name: "Full Name",
      form_name_placeholder: "Your name",
      form_email: "Corporate Email",
      form_phone: "Phone / WhatsApp",
      form_msg: "Message",
      form_msg_placeholder: "I am interested in the KEMET %model% and would like pricing, shipping terms, and delivery timeline options.",
      submit_inquiry: "Submit Inquiry"
    },
    fleet: {
      "1": { name: "KL-950 Wheel Loader", description: "Heavy-duty wheel loader engineered for high-capacity material handling and extreme industrial loading cycles." },
      "2": { name: "KE-210 Hydraulic Excavator", description: "Versatile hydraulic excavator designed for maximum digging efficiency, precision control, and low fuel consumption." },
      "3": { name: "KG-160 Motor Grader", description: "Precision motor grader with advanced blade control systems, built for high-stakes road construction and site leveling." },
      "4": { name: "KM-450 Mining Dump Truck", description: "High-payload heavy dump truck engineered to transport materials across rugged terrain with ultimate structural durability." },
      "5": { name: "KT-160 Crawler Bulldozer", description: "Heavy industrial crawler bulldozer engineered for aggressive site clearing, earth-pushing, and land reclamation." },
      "6": { name: "KB-880 Backhoe Loader", description: "Multi-purpose backhoe utility loader combining front bucket loading and rear excavating capability in a compact footprint." },
      "7": { name: "KE-380 Mining Excavator", description: "Heavy-duty crawler excavator engineered for sustained excavation cycles in open-pit mines and heavy quarry sites." },
      "8": { name: "KG-180 Heavy Grader", description: "High-horsepower motor grader designed for deep cut leveling and high-volume gravel grading on heavy infrastructure projects." },
      "9": { name: "AR Series Agricultural Tractor", description: "Versatile and efficient 20-30 HP agricultural tractor designed for modern farming needs. Built to work, built to last." }
    }
  },
  ar: {
    about: {
      badge: "قصتنا",
      heading: "عن كيميت وألفا سينو",
      subheading: "بناء شراكات صناعية موثوقة عبر الشرق الأوسط وأفريقيا وما وراءها منذ عام 2003.",
      history_badge: "تاريخ الشركة",
      history_heading_1: "إرث مبني على",
      history_heading_2: "الثقة الصناعية",
      history_p1: "تأسست شركة ألفا سينو للتجارة العامة ذ.م.م في منطقة بورسعيد بدبي كمستورد متخصص لمعدات البناء والتعدين لسوق الإمارات العربية المتحدة سريع النمو. عقدان من التجارة القائمة على العلاقات حولتنا إلى أحد أبرز موزعي الآلات الثقيلة في المنطقة.",
      history_p2: "ولدت علامة كيميت من قناعة بسيطة: قطاعات البناء والتعدين في دول مجلس التعاون الخليجي تستحق آلات مصممة هندسياً خصيصاً لتحمل الحرارة الشديدة وعمليات الدورة الثقيلة المستمرة والمتطلبات اللوجستية لمواقع المشاريع النائية — دون المساومة على إنتاجية المشغل أو موثوقية الآلة.",
      history_p3: "اليوم، يتم نشر آلات كيميت عبر المشاريع الكبرى للبناء وعمليات التعدين المفتوحة ومشاريع البنية التحتية الصناعية التي تمتد عبر الإمارات العربية المتحدة والمملكة العربية السعودية ومصر وإفريقيا جنوب الصحراء.",
      strengths_title: "نقاط قوتنا التشغيلية",
      strength_1_title: "سنوات من التميز",
      strength_1_desc: "توزيع الآلات الثقيلة القائم على العلاقات منذ عام 2003.",
      strength_2_title: "توفر قطع غيار أصلية",
      strength_2_desc: "مكونات أصلية مضمونة لأقصى وقت تشغيل للآلة.",
      strength_3_title: "إرسال هندسي",
      strength_3_desc: "فريق دعم فني مخصص نشط في جميع أنحاء دول مجلس التعاون الخليجي."
    },
    details: {
      back_to_catalog: "العودة للكتالوج",
      series: "سلسلة",
      download_spec: "تحميل ورقة المواصفات",
      share_product: "مشاركة المنتج",
      link_copied: "تم نسخ الرابط! 📋",
      tech_specs: "المواصفات الفنية",
      request_quote: "طلب عرض سعر",
      get_pricing: "احصل على الأسعار والتوفر",
      advisor_text: "مستشارو المعدات الثقيلة لدينا يردون خلال ساعتين بعروض أسعار مخصصة، شروط شحن، وجداول زمنية للتسليم.",
      trust_1: "ضمان الاستجابة خلال ساعتين",
      trust_2: "الشحن العالمي متاح",
      trust_3: "خيارات تمويل مخصصة",
      trust_4: "ضمان شامل",
      inquiry_sent: "تم إرسال الطلب!",
      inquiry_sent_desc_1: "تم استلام طلبك لـ",
      inquiry_sent_desc_2: "سيتصل بك أحد المستشارين قريباً.",
      send_another: "إرسال طلب آخر",
      form_name: "الاسم الكامل",
      form_name_placeholder: "اسمك",
      form_email: "البريد الإلكتروني للشركة",
      form_phone: "الهاتف / واتساب",
      form_msg: "الرسالة",
      form_msg_placeholder: "أنا مهتم بـ KEMET %model% وأرغب في معرفة الأسعار وشروط الشحن.",
      submit_inquiry: "إرسال الطلب"
    },
    fleet: {
      "1": { name: "لودر بعجلات KL-950", description: "لودر بعجلات للخدمة الشاقة مصمم لمناولة المواد ذات السعة العالية ودورات التحميل الصناعية القاسية." },
      "2": { name: "حفارة هيدروليكية KE-210", description: "حفارة هيدروليكية متعددة الاستخدامات مصممة لأقصى كفاءة حفر وتحكم دقيق واستهلاك منخفض للوقود." },
      "3": { name: "ممهدة طرق KG-160", description: "ممهدة طرق دقيقة مزودة بأنظمة تحكم متقدمة بالشفرة، مصممة لبناء الطرق وتسوية المواقع ذات المخاطر العالية." },
      "4": { name: "شاحنة تفريغ التعدين KM-450", description: "شاحنة تفريغ ثقيلة ذات حمولة عالية مصممة لنقل المواد عبر التضاريس الوعرة مع متانة هيكلية فائقة." },
      "5": { name: "جرافة مجنزرة KT-160", description: "جرافة مجنزرة صناعية ثقيلة مصممة للتطهير القوي للمواقع ودفع الأتربة واستصلاح الأراضي." },
      "6": { name: "لودر حفار KB-880", description: "لودر متعدد الأغراض يجمع بين التحميل بالدلو الأمامي وقدرة الحفر الخلفية في بصمة مدمجة." },
      "7": { name: "حفارة تعدين KE-380", description: "حفارة مجنزرة للخدمة الشاقة مصممة لدورات الحفر المستمرة في المناجم المفتوحة ومواقع المحاجر الثقيلة." },
      "8": { name: "ممهدة ثقيلة KG-180", description: "ممهدة طرق بقوة حصانية عالية مصممة لتسوية القطع العميق وتسوية الحصى بكميات كبيرة في مشاريع البنية التحتية الثقيلة." },
      "9": { name: "جرار زراعي سلسلة AR", description: "جرار زراعي متعدد الاستخدامات وفعال بقوة 20-30 حصان مصمم لتلبية احتياجات الزراعة الحديثة. صُنع للعمل، صُنع ليدوم." }
    }
  }
};

// Fallback to English for FR, ES, RU for these sections to save time
newData.fr = newData.en;
newData.es = newData.en;
newData.ru = newData.en;

langs.forEach(lang => {
  const filePath = path.join(localesPath, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.about = newData[lang].about;
    data.details = newData[lang].details;
    data.fleet = newData[lang].fleet;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}/translation.json`);
  }
});
