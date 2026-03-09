import { useState } from "react";

const psychologyLayers = [
  {
    icon: "🧠",
    title: "الخوف من الغش",
    desc: "المستهلك العراقي يشك في جودة اللحوم المجمدة",
    trigger: "هل هذا حلال؟ هل هو طازج؟ هل نسبة اللحم حقيقية؟",
    solution: "فيديوهات المصنع + شهادات الجودة + عرض المكونات",
    color: "#FF6B6B",
  },
  {
    icon: "❤️",
    title: "الانتماء والهوية",
    desc: "الطعام العراقي مرتبط بالذاكرة العاطفية والعائلة",
    trigger: "هذا طعم البيت، طعم أمي، طعم العيد",
    solution: "محتوى عائلي دافئ + ربط المنتج بمناسبات عراقية",
    color: "#FF8E53",
  },
  {
    icon: "⏱️",
    title: "ضغط الوقت",
    desc: "المرأة العاملة تبحث عن حل سريع بدون تنازل عن الجودة",
    trigger: "ما عندي وقت أطبخ بس أريد أطعم عيلتي زين",
    solution: 'إبراز سرعة التحضير "جاهز بـ 10 دقائق" كرسالة أساسية',
    color: "#A855F7",
  },
  {
    icon: "💰",
    title: "الحساسية السعرية",
    desc: "المستهلك العراقي يقارن السعر بالكمية والجودة",
    trigger: "يسوى؟ غالي؟ أوفر من السوق؟",
    solution: "مقارنات قيمة لا سعر + باقات عائلية اقتصادية",
    color: "#3B82F6",
  },
  {
    icon: "👥",
    title: "الدليل الاجتماعي",
    desc: "العراقي يثق بتجربة الغير أكثر من الإعلان المباشر",
    trigger: "شلون يقولون؟ مجرب؟ المطعم الفلاني يستخدمه؟",
    solution: "شهادات زبائن حقيقية + تعاون مع مطاعم معروفة",
    color: "#10B981",
  },
  {
    icon: "🏆",
    title: "الفخر المحلي",
    desc: "موجة دعم المنتج العراقي في تصاعد مستمر",
    trigger: "صنع في العراق = دعم الاقتصاد = فخر وطني",
    solution: '"منتج عراقي أصيل" كرسالة تسويقية محورية',
    color: "#F59E0B",
  },
  {
    icon: "🎰",
    title: "الإثارة والمكافأة الآنية",
    desc: "عجلة الحظ تُشبع الحاجة النفسية للإثارة والمكافأة غير المتوقعة",
    trigger: "ممكن أربح؟ شنو ربح الثاني؟ خليني أجرب مرة ثانية!",
    solution: "محتوى يُظهر فرحة الفائزين + شهادات حقيقية + عد تنازلي للسحب",
    color: "#E879F9",
  },
  {
    icon: "🚗",
    title: "حلم الجائزة الكبرى",
    desc: "السيارة تمثل حلماً حقيقياً لشريحة واسعة من العراقيين",
    trigger: "بس بشرائي منتج ممكن أربح سيارة؟ هذا جدي؟",
    solution:
      "شفافية تامة في آلية السحب + فيديو تسليم السيارة = أقوى إعلان مجاني",
    color: "#F59E0B",
  },
  {
    icon: "🎁",
    title: "نفسية اشترِ 3 واربح 4",
    desc: "الزبون يشعر بالذكاء حين يحصل على قيمة إضافية مجانية",
    trigger: "الرابع مجاني؟ يعني أوفر من السوق بكثير، لازم أشتري الآن!",
    solution: "أبرز القيمة المكتسبة بالأرقام: وفّر X دينار + اربح منتج بقيمة Y",
    color: "#34D399",
  },
];

const gamificationFeatures = [
  {
    id: "wheel",
    icon: "🎰",
    title: "عجلة الحظ",
    subtitle: "Spin & Win",
    color: "#E879F9",
    gradient: "linear-gradient(135deg, #7c3aed, #e879f9)",
    psycho: "الدوبامين + الإثارة + FOMO",
    psychoDetail:
      "كل دورة للعجلة تُطلق دوبامين في دماغ المستخدم — نفس مبدأ ألعاب الكازينو ولكن بشكل حلال. الزبون يعود للتطبيق بانتظام لأنه يتوقع مكافأة.",
    platforms: [
      {
        name: "🔵 فيسبوك",
        tactics: [
          "فيديو Screen Recording لشخص يدور العجلة ويربح — بدون تعليق — فقط ردة الفعل الحقيقية",
          'منشور أسبوعي ثابت: "اليوم حظنا معاك — حمّل التطبيق ودوّر العجلة الآن"',
          "Live أسبوعي: دوران العجلة مباشر وإعلان الفائزين على الهواء في الوقت الفعلي",
          "إعلان Re-targeting: استهداف من حمّل التطبيق ولم يشترِ بعد بصورة عجلة الحظ",
        ],
      },
      {
        name: "📸 إنستغرام",
        tactics: [
          "Reel: slow-motion لعجلة تدور + صوت نغمة الفوز + المكافأة تظهر",
          "Stories يومية: Countdown للفرصة القادمة للدوران بـ Sticker العد التنازلي",
          "Highlight مخصص: أرشيف جميع الفائزين بعجلة الحظ + صور المكافآت",
          'Story Poll: "شنو تتمنى تربح من عجلة الحظ؟" لزيادة التفاعل وفهم الجمهور',
        ],
      },
      {
        name: "🎵 تيك توك",
        tactics: [
          'تحدي: "شوف شنو ربحت" — كل مستخدم يصور لحظة دوران عجلته ويشارك ردة فعله',
          "فيديو ASMR: صوت العجلة تدور ببطء + صوت الفوز المفاجئ",
          'Hook قوي في أول ثانيتين: "هذا الشخص اشترى كبة وربح مجاناً بدون ما يعرف!"',
          "Duet مع فيديوهات الفائزين لتضاعف الانتشار العضوي",
        ],
      },
      {
        name: "💬 واتساب",
        tactics: [
          "Broadcast يومي للمشتركين: تذكير بعجلة الحظ + رابط مباشر للتطبيق",
          "Status يومي: صورة الفائز اليوم + اسمه (بإذنه) + ما ربحه",
          "مجموعة VIP للمشترين: أول من يعرف نتائج السحوبات وأسماء الفائزين",
        ],
      },
    ],
    mistakes: [
      {
        m: "عدم نشر أسماء الفائزين علناً",
        fix: "الشفافية = ثقة = مزيد من المشاركة والتحميل",
      },
      {
        m: "لا يوجد محتوى يشرح آلية العجلة",
        fix: "فيديو تعليمي واحد يُزيل الشك ويحفز التجربة",
      },
      {
        m: "الترويج غير منتظم أو عشوائي",
        fix: "جدول أسبوعي ثابت للتذكير — الانتظام يبني التوقع",
      },
    ],
  },
  {
    id: "car",
    icon: "🚗",
    title: "السحب على السيارة",
    subtitle: "Grand Prize Raffle",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #b45309, #f59e0b)",
    psycho: "حلم التغيير + الطموح + FOMO + الدليل الاجتماعي",
    psychoDetail:
      "السيارة في العقل العراقي لا تعني فقط وسيلة نقل — تعني ارتقاء اجتماعي وتحقيق حلم. ربط الشراء البسيط بهذا الحلم هو أقوى محرك للقرار الشرائي.",
    platforms: [
      {
        name: "🔵 فيسبوك",
        tactics: [
          "منشور Pinned ثابت: صورة السيارة + عداد المشاركين الحاليين يُحدَّث أسبوعياً",
          "عد تنازلي أسبوعي بحجم كبير: X يوم تبقى على السحب الكبير",
          "إعلان مدفوع مستهدف: الذكور 25-45 اهتمام سيارات + العائلات في بغداد والبصرة",
          "Live تسليم السيارة للفائز: هذا وحده يُولد آلاف المشاركات العضوية المجانية",
          'شهادة الفائز بالفيديو فوراً: "ما صدقت بالبداية!"',
        ],
      },
      {
        name: "📸 إنستغرام",
        tactics: [
          "Story Series أسبوعية: جولة حول السيارة الجائزة (داخلها، مواصفاتها، لونها)",
          "Reel مونتاج: اشترِ → دوّر → اربح → سيارة بانتظارك — 30 ثانية",
          "Highlight كامل: كل شيء عن السحب (الشروط، المشاركين، التاريخ، الفائزين السابقين)",
          "Countdown Sticker في Stories: يُنبه المتابعين تلقائياً لحظة بدء السحب",
        ],
      },
      {
        name: "🎵 تيك توك",
        tactics: [
          'Hook مباشر: "هذا الشخص اشترى كبة وربح سيارة — هذا ليس نكتة بل حدث حقيقي"',
          "فيديو تسليم السيارة: يجب أن يكون بجودة سينمائية — سيُشارَك آلاف المرات",
          "Interview مع الفائز: ردة فعله الحقيقية + قصته الكاملة + دموع الفرح",
          "Behind the Scenes: كيف تمت عملية السحب بشفافية كاملة أمام الكاميرا",
        ],
      },
      {
        name: "💬 واتساب",
        tactics: [
          "تحديث أسبوعي لعدد المشاركين في السحب — الأرقام المتزايدة تخلق ضغط FOMO",
          "Broadcast قبل 24 ساعة: غداً موعد السحب الكبير — هل أنت مشارك؟",
          "فيديو حصري للمجموعة VIP: لحظة السحب قبل أي منصة أخرى بساعة",
        ],
      },
    ],
    mistakes: [
      {
        m: "عدم توثيق عملية السحب بشفافية كاملة",
        fix: "Live السحب = الدليل الأقوى على المصداقية ويُزيل أي شك",
      },
      {
        m: "غياب صورة السيارة من المنشورات الترويجية",
        fix: "السيارة = المحفز البصري الأول — يجب أن تكون دائماً مرئية",
      },
      {
        m: "لا يُحدَّث عدد المشاركين",
        fix: "عداد متزايد يُنشئ ضغطاً اجتماعياً إيجابياً ويحفز على المشاركة",
      },
    ],
  },
  {
    id: "bundle",
    icon: "🎁",
    title: "اشترِ 3 واربح 4",
    subtitle: "Buy 3 Get 1 Free",
    color: "#34D399",
    gradient: "linear-gradient(135deg, #065f46, #34d399)",
    psycho: "الذكاء الاقتصادي + التحكم بالقرار + الخوف من تفويت الفرصة",
    psychoDetail:
      'الزبون يشعر أنه "ذكي" حين يحصل على شيء مجاناً. مبدأ Anchoring — يقارن سعر 4 منتجات بسعر 3 ويرى التوفير بوضوح، فيقرر الشراء الأكثر بدون تردد.',
    platforms: [
      {
        name: "🔵 فيسبوك",
        tactics: [
          'منشور ثابت بصورة واضحة: 3 منتجات + سهم + "=" + منتج رابع مجاناً — مفهوم في 3 ثوان',
          "فيديو بائع يشرح العرض بالعامية العراقية — أصدق وأقوى من أي تصميم جميل",
          "إعلان Carousel: كل بطاقة = منتج من الثلاثة + البطاقة الأخيرة = الهدية المجانية",
          'Re-marketing: من زار التطبيق ولم يكمل: "بقي لك خطوة واحدة لتأخذ رابعك مجاناً"',
        ],
      },
      {
        name: "📸 إنستغرام",
        tactics: [
          "Reel مرئي: يد تضع 3 منتجات في السلة ثم الرابع يظهر تلقائياً بكلمة مجاناً",
          "Stories تفاعلية: صوّت — أي 3 منتجات تختار؟ وماذا تريد كهدية رابعة؟",
          'Quiz Sticker: "اختبر معرفتك — أي المنتجات يدخل في عرض الـ 3+1؟"',
          'Countdown Story: "العرض ينتهي بعد X ساعة" لخلق urgency حقيقي',
        ],
      },
      {
        name: "🎵 تيك توك",
        tactics: [
          'Hook: "اشترينا من التطبيق وحصلنا على منتج رابع مجاناً — هذا ليس إعلاناً، شوف بنفسك"',
          "Unboxing فيديو: شخص يفتح طلبه ويفاجأ بالمنتج الرابع داخل الصندوق",
          "Tutorial سريع 30 ثانية: كيف تختار المنتجات الثلاثة الصح لتحصل على أفضل هدية",
          "Comparison مرئي: سعر 4 منتجات عادي مقابل سعرها بالعرض — الفرق بالأرقام",
        ],
      },
      {
        name: "💬 واتساب",
        tactics: [
          "Catalog مُرتَّب: المنتجات المشمولة بالعرض مجمّعة في قائمة خاصة سهلة الطلب",
          "Broadcast أسبوعي: تغيير المنتجات المشمولة = سبب جديد للشراء كل أسبوع",
          "Quick Replies جاهزة: رد جاهز يشرح العرض كاملاً في ثانية واحدة عند أي سؤال",
        ],
      },
    ],
    mistakes: [
      {
        m: "تصميم معقد لا يوضح العرض في 3 ثوان",
        fix: "قاعدة 3 ثوان: المتابع يفهم العرض كاملاً من نظرة واحدة وإلا يتجاوز",
      },
      {
        m: "لا يُذكر المنتج الرابع بالاسم والصورة",
        fix: "حدد الهدية بوضوح تام — الغموض يقتل قرار الشراء فوراً",
      },
      {
        m: "العرض دائم بدون urgency أو deadline",
        fix: '"العرض حتى نهاية الأسبوع" حتى لو جُدِّد — الضغط الزمني يُسرّع القرار',
      },
    ],
  },
];

const appFunnelSteps = [
  {
    step: "01",
    label: "الوعي",
    action: "الزبون يرى فيديو عجلة الحظ أو جائزة السيارة في فيده",
    channel: "فيسبوك / تيك توك",
    color: "#E879F9",
  },
  {
    step: "02",
    label: "الاهتمام",
    action: "يتفاعل ويسأل في التعليقات: كيف أشارك؟ وين أحمل؟",
    channel: "تعليقات + ماسنجر",
    color: "#A855F7",
  },
  {
    step: "03",
    label: "القرار",
    action: "يضغط الرابط في Bio أو Story ويحمّل التطبيق",
    channel: "Bio Link / Story",
    color: "#3B82F6",
  },
  {
    step: "04",
    label: "الشراء",
    action: "يختار 3 منتجات للحصول على الرابع مجاناً",
    channel: "التطبيق",
    color: "#10B981",
  },
  {
    step: "05",
    label: "المكافأة",
    action: "يدور عجلة الحظ ويحصل على نقاط للمشاركة بسحب السيارة",
    channel: "التطبيق",
    color: "#34D399",
  },
  {
    step: "06",
    label: "المشاركة",
    action: "يصور تجربته وينشرها ويُحضر أصدقاءه = تسويق مجاني",
    channel: "كل المنصات",
    color: "#F59E0B",
  },
];

const reportSections = [
  {
    num: "01",
    title: "ملخص تنفيذي",
    desc: "نقاط القوة والضعف الرئيسية في 5 أسطر — للمدير الذي لا يملك وقتاً",
    icon: "📋",
  },
  {
    num: "02",
    title: "تحليل الهوية البصرية",
    desc: "هل الألوان والخطوط والتصميم يعكسان ثقة وجودة؟",
    icon: "🎨",
  },
  {
    num: "03",
    title: "تحليل المحتوى",
    desc: "ماذا ينشرون؟ كيف؟ ومتى؟ وأي نوع يحصل على أعلى تفاعل؟",
    icon: "📊",
  },
  {
    num: "04",
    title: "تحليل الجمهور والتفاعل",
    desc: "من يتفاعل؟ ما أسئلتهم؟ ما مخاوفهم؟ ما تعليقاتهم السلبية؟",
    icon: "👥",
  },
  {
    num: "05",
    title: "سايكولوجية المستهلك",
    desc: "تحليل نفسي عميق: ما الذي يدفع الزبون للشراء أو التردد؟",
    icon: "🧠",
  },
  {
    num: "06",
    title: "تحليل أداء التطبيق على السوشل ميديا",
    desc: "هل يُروَّج للتطبيق بفاعلية؟ كم تحميل جاء من السوشل ميديا؟",
    icon: "📱",
  },
  {
    num: "07",
    title: "المشاكل والفجوات",
    desc: "قائمة مرقمة بالمشاكل مع تصنيف الأولوية: عالي / متوسط / منخفض",
    icon: "🔍",
  },
  {
    num: "08",
    title: "خطة العلاج والتوصيات",
    desc: "حلول عملية مرحلية: الشهر الأول، الثاني، الثالث — مع ربط التطبيق بكل منصة",
    icon: "💡",
  },
  {
    num: "09",
    title: "مؤشرات القياس (KPIs)",
    desc: "تحميلات التطبيق + دوران العجلة + مشاركي السحب + مبيعات 3+1 خلال 90 يوماً",
    icon: "🎯",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("gamification");
  const [activePlatform, setActivePlatform] = useState("facebook");
  const [activeFeature, setActiveFeature] = useState("wheel");
  const [expandedProb, setExpandedProb] = useState(null);
  const [expandedPsycho, setExpandedPsycho] = useState(null);
  const [activePlatformTactic, setActivePlatformTactic] = useState(0);

  const currentFeature = gamificationFeatures.find(
    (f) => f.id === activeFeature
  );

  const facebookMetrics = [
    {
      label: "معدل التفاعل الطبيعي",
      benchmark: "1% - 5%",
      warning: "أقل من 1% = محتوى ميت",
    },
    {
      label: "أفضل وقت نشر",
      benchmark: "9ص، 1ظ، 8م",
      warning: "النشر الليلي ضعيف",
    },
    {
      label: "نسبة الفيديو للصور",
      benchmark: "60% فيديو",
      warning: "الصور فقط = وصول محدود",
    },
    {
      label: "الرد على التعليقات",
      benchmark: "خلال ساعة",
      warning: "التجاهل يقتل الثقة",
    },
  ];
  const facebookProblems = [
    {
      prob: "صفحة بدون هوية بصرية واضحة",
      impact: "عالي",
      fix: "بناء هوية بصرية موحدة (ألوان + خطوط + لوغو)",
    },
    {
      prob: "نشر بدون جدول زمني منتظم",
      impact: "عالي",
      fix: "جدول نشر أسبوعي ثابت 4-5 مرات/أسبوع",
    },
    {
      prob: "لا يُروَّج للتطبيق وعجلة الحظ",
      impact: "عالي",
      fix: "منشور أسبوعي: فيديو شخص يدور العجلة + رابط التحميل",
    },
    {
      prob: "لا يُعلَن عن السحب على السيارة بشكل احترافي",
      impact: "عالي",
      fix: "منشور Pinned + عداد المشاركين + عد تنازلي",
    },
    {
      prob: "إعلانات بدون استهداف دقيق",
      impact: "متوسط",
      fix: "استهداف ربات البيوت + الشيفات + تجار الجملة",
    },
    {
      prob: "التفاعل مع التعليقات ضعيف",
      impact: "عالي",
      fix: "رد + سؤال + تشجيع في كل تعليق",
    },
  ];
  const igMetrics = [
    {
      label: "Engagement Rate المثالي",
      benchmark: "3% - 8%",
      warning: "أقل من 2% = محتوى ضعيف",
    },
    {
      label: "Stories يومياً",
      benchmark: "3-5 قصص",
      warning: "الغياب يُفقدك الخوارزمية",
    },
    {
      label: "Reels في الأسبوع",
      benchmark: "3-4 ريلز",
      warning: "بدون ريلز = وصول محدود جداً",
    },
    {
      label: "Hashtags لكل منشور",
      benchmark: "5-10 هاشتاق",
      warning: "أكثر من 15 = يبدو سبام",
    },
  ];
  const igProblems = [
    {
      prob: "فيد (Feed) غير منظم بصرياً",
      impact: "عالي",
      fix: "تصميم Grid موحد: صف لحم، صف وصفة، صف خلف الكواليس",
    },
    {
      prob: "عدم استخدام Reels",
      impact: "عالي",
      fix: "3 ريلز أسبوعياً بموسيقى ترند عراقي",
    },
    {
      prob: "Bio غير محسّن",
      impact: "متوسط",
      fix: "Bio يحتوي: من أنتم + رابط تحميل التطبيق + رقم واتساب",
    },
    {
      prob: "لا يوجد Countdown للسحب على السيارة",
      impact: "عالي",
      fix: "Story عد تنازلي أسبوعي + Highlight مخصص للسحوبات",
    },
    {
      prob: "غياب UGC (محتوى الزبائن)",
      impact: "عالي",
      fix: '"صوّر طبختك وتاغنا واربح هدية" — تحدي شهري',
    },
  ];
  const ttMetrics = [
    {
      label: "مشاهدة أول 3 ثوان",
      benchmark: "أعلى من 50%",
      warning: "أقل = الفيديو لن ينتشر",
    },
    {
      label: "معدل الإكمال",
      benchmark: "أعلى من 40%",
      warning: "الفيديوهات الطويلة تُعاقَب",
    },
    {
      label: "نسبة الحفظ (Save Rate)",
      benchmark: "أعلى من 3%",
      warning: "دليل على قيمة المحتوى",
    },
    {
      label: "تكرار النشر",
      benchmark: "يومياً مثالياً",
      warning: "أقل من 4/أسبوع = ضعف الوصول",
    },
  ];
  const ttProblems = [
    {
      prob: "فيديوهات طويلة أكثر من دقيقتين",
      impact: "عالي",
      fix: "15-45 ثانية هو المثالي لتيك توك",
    },
    {
      prob: "لا يوجد Hook قوي في أول 2 ثانية",
      impact: "عالي",
      fix: '"هل تعرف إنك ممكن تربح سيارة بشراء منتج واحد؟"',
    },
    {
      prob: "عدم تصوير لحظات الفوز بعجلة الحظ",
      impact: "عالي",
      fix: "Screen Recording + ردة فعل الفائز = محتوى ينتشر بسرعة",
    },
    {
      prob: "لا يوجد تحدي مرتبط بالتطبيق",
      impact: "متوسط",
      fix: '"شوف شنو ربحت من عجلة الحظ" — تحدي يشارك فيه الزبائن',
    },
    {
      prob: "عدم استخدام الترندات والأصوات",
      impact: "متوسط",
      fix: "تابع trending sounds عراقية وعربية أسبوعياً",
    },
  ];

  const metricsMap = {
    facebook: facebookMetrics,
    instagram: igMetrics,
    tiktok: ttMetrics,
  };
  const problemsMap = {
    facebook: facebookProblems,
    instagram: igProblems,
    tiktok: ttProblems,
  };
  const platformColors = {
    facebook: "#1877F2",
    instagram: "#E1306C",
    tiktok: "#69C9D0",
  };

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Cairo', 'Segoe UI', Arial, sans-serif",
        background:
          "linear-gradient(160deg, #070b14 0%, #0d1b2a 60%, #0a1628 100%)",
        minHeight: "100vh",
        color: "#f0f0f0",
        paddingBottom: 60,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(90deg, #0d1117, #0f2027, #0d1117)",
          borderBottom: "2px solid #e94560",
          padding: "26px 18px 16px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(233,69,96,0.13) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            fontSize: 10,
            color: "#e94560",
            letterSpacing: 4,
            marginBottom: 7,
          }}
        >
          إطار التحليل التسويقي المتكامل
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(18px, 4vw, 30px)",
            fontWeight: 900,
            lineHeight: 1.3,
            background:
              "linear-gradient(90deg, #fff 0%, #e94560 50%, #f5a623 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          مركز تحليل السوشل ميديا + التطبيق
        </h1>
        <p style={{ color: "#8892b0", margin: "7px 0 12px", fontSize: 12 }}>
          مصانع اللحوم المجمدة والفلافل والكبة — العراق
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🎰", label: "عجلة الحظ", color: "#E879F9" },
            { icon: "🚗", label: "السحب على سيارة", color: "#F59E0B" },
            { icon: "🎁", label: "اشترِ 3 واربح 4", color: "#34D399" },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                background: `${b.color}15`,
                border: `1px solid ${b.color}40`,
                borderRadius: 20,
                padding: "3px 12px",
                fontSize: 11,
              }}
            >
              <span>{b.icon}</span>
              <span style={{ color: b.color, fontWeight: 700 }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          background: "#050810",
          borderBottom: "1px solid #151f2e",
          padding: "0 10px",
        }}
      >
        {[
          { id: "gamification", label: "🎮 الألعاب والمكافآت" },
          { id: "funnel", label: "🔄 رحلة الزبون" },
          { id: "psychology", label: "🧠 السايكولوجية" },
          { id: "platforms", label: "📱 تحليل المنصات" },
          { id: "report", label: "📋 هيكل التقرير" },
          { id: "positioning", label: "⭐ كيف تظهر كخبير" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "13px 14px",
              background: "none",
              border: "none",
              color: activeTab === tab.id ? "#e94560" : "#8892b0",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #e94560"
                  : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontSize: 11,
              fontFamily: "inherit",
              fontWeight: activeTab === tab.id ? 700 : 400,
              transition: "all 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "22px 14px" }}>
        {/* GAMIFICATION */}
        {activeTab === "gamification" && (
          <div>
            <SH
              title="استراتيجية تسويق مزايا التطبيق"
              subtitle="عجلة الحظ + السيارة + اشترِ 3 واربح 4 — محركات نفسية قوية يجب استغلالها بشكل صحيح"
            />
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 22,
                flexWrap: "wrap",
              }}
            >
              {gamificationFeatures.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActiveFeature(f.id);
                    setActivePlatformTactic(0);
                  }}
                  style={{
                    padding: "11px 18px",
                    borderRadius: 12,
                    border: `2px solid ${f.color}`,
                    background:
                      activeFeature === f.id ? f.gradient : "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: 700,
                    fontSize: 13,
                    transition: "all 0.2s",
                    boxShadow:
                      activeFeature === f.id ? `0 0 18px ${f.color}35` : "none",
                  }}
                >
                  {f.icon} {f.title}
                </button>
              ))}
            </div>

            {currentFeature && (
              <>
                <div
                  style={{
                    background: `linear-gradient(135deg, ${currentFeature.color}12, ${currentFeature.color}04)`,
                    border: `1px solid ${currentFeature.color}35`,
                    borderRadius: 16,
                    padding: 22,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ fontSize: 44 }}>{currentFeature.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 6,
                          flexWrap: "wrap",
                        }}
                      >
                        <h2
                          style={{
                            margin: 0,
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: 900,
                          }}
                        >
                          {currentFeature.title}
                        </h2>
                        <span
                          style={{
                            background: currentFeature.gradient,
                            color: "#fff",
                            borderRadius: 20,
                            padding: "2px 10px",
                            fontSize: 10,
                          }}
                        >
                          {currentFeature.subtitle}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "inline-block",
                          background: `${currentFeature.color}18`,
                          border: `1px solid ${currentFeature.color}35`,
                          borderRadius: 8,
                          padding: "5px 12px",
                          marginBottom: 10,
                        }}
                      >
                        <span
                          style={{ fontSize: 11, color: currentFeature.color }}
                        >
                          🧠 المحرك النفسي:{" "}
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            color: "#ccd6f6",
                            fontWeight: 700,
                          }}
                        >
                          {currentFeature.psycho}
                        </span>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 13,
                          color: "#8892b0",
                          lineHeight: 1.8,
                        }}
                      >
                        {currentFeature.psychoDetail}
                      </p>
                    </div>
                  </div>
                </div>

                <h3
                  style={{
                    color: currentFeature.color,
                    fontSize: 12,
                    letterSpacing: 2,
                    marginBottom: 12,
                  }}
                >
                  📱 تكتيكات كل منصة
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginBottom: 14,
                    flexWrap: "wrap",
                  }}
                >
                  {currentFeature.platforms.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePlatformTactic(i)}
                      style={{
                        padding: "7px 14px",
                        borderRadius: 20,
                        border: `1px solid ${
                          activePlatformTactic === i
                            ? currentFeature.color
                            : "#1e2a3a"
                        }`,
                        background:
                          activePlatformTactic === i
                            ? `${currentFeature.color}18`
                            : "transparent",
                        color:
                          activePlatformTactic === i
                            ? currentFeature.color
                            : "#8892b0",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        fontSize: 12,
                        transition: "all 0.2s",
                      }}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
                <div style={{ display: "grid", gap: 9, marginBottom: 20 }}>
                  {currentFeature.platforms[activePlatformTactic]?.tactics.map(
                    (tactic, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "flex-start",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid #161f2c",
                          borderRadius: 10,
                          padding: "11px 15px",
                          borderRight: `3px solid ${currentFeature.color}`,
                        }}
                      >
                        <div
                          style={{
                            minWidth: 22,
                            height: 22,
                            background: `${currentFeature.color}28`,
                            borderRadius: 6,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 10,
                            fontWeight: 900,
                            color: currentFeature.color,
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#ccd6f6",
                            lineHeight: 1.7,
                          }}
                        >
                          {tactic}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div
                  style={{
                    background: "rgba(255,107,107,0.07)",
                    border: "1px solid rgba(255,107,107,0.18)",
                    borderRadius: 14,
                    padding: 16,
                  }}
                >
                  <h3
                    style={{
                      color: "#ff6b6b",
                      margin: "0 0 12px",
                      fontSize: 12,
                      letterSpacing: 2,
                    }}
                  >
                    ⚠️ أكثر الأخطاء الشائعة
                  </h3>
                  <div style={{ display: "grid", gap: 9 }}>
                    {currentFeature.mistakes.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 9,
                          background: "rgba(0,0,0,0.2)",
                          borderRadius: 10,
                          padding: "11px 13px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: 10,
                              color: "#ff6b6b",
                              marginBottom: 3,
                            }}
                          >
                            ❌ الخطأ:
                          </div>
                          <div style={{ fontSize: 12, color: "#ccd6f6" }}>
                            {item.m}
                          </div>
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: 10,
                              color: "#34D399",
                              marginBottom: 3,
                            }}
                          >
                            ✅ الحل:
                          </div>
                          <div style={{ fontSize: 12, color: "#e0e0e0" }}>
                            {item.fix}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* FUNNEL */}
        {activeTab === "funnel" && (
          <div>
            <SH
              title="رحلة الزبون — من الإعلان للشراء والولاء"
              subtitle="السوشل ميديا نقطة الدخول — التطبيق هو المحوّل الحقيقي للمبيعات"
            />
            <div
              style={{
                background: "rgba(100,255,218,0.05)",
                border: "1px solid rgba(100,255,218,0.2)",
                borderRadius: 14,
                padding: 16,
                marginBottom: 22,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "#ccd6f6",
                  lineHeight: 1.9,
                }}
              >
                <strong style={{ color: "#64ffda" }}>💡 المبدأ:</strong> كل
                محتوى على السوشل ميديا يجب أن يكون له هدف واحد:{" "}
                <strong style={{ color: "#f5a623" }}>
                  تحميل التطبيق + الشراء
                </strong>
                . عجلة الحظ والسيارة وعرض الرابع المجاني هي المطعم الذي يجذب
                الزبون للشراء بدل التردد.
              </p>
            </div>
            <div style={{ marginBottom: 26 }}>
              {appFunnelSteps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 10,
                    alignItems: "stretch",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 11,
                        background: `${step.color}20`,
                        border: `2px solid ${step.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 900,
                        color: step.color,
                        flexShrink: 0,
                      }}
                    >
                      {step.step}
                    </div>
                    {i < appFunnelSteps.length - 1 && (
                      <div
                        style={{
                          width: 2,
                          flex: 1,
                          minHeight: 16,
                          background: `${step.color}25`,
                          margin: "3px 0",
                        }}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${step.color}20`,
                      borderRadius: 11,
                      padding: "11px 15px",
                      marginBottom: 3,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: 7,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontWeight: 800,
                            color: step.color,
                            fontSize: 12,
                            marginBottom: 3,
                          }}
                        >
                          {step.label}
                        </div>
                        <div style={{ fontSize: 13, color: "#ccd6f6" }}>
                          {step.action}
                        </div>
                      </div>
                      <div
                        style={{
                          background: `${step.color}12`,
                          border: `1px solid ${step.color}28`,
                          borderRadius: 20,
                          padding: "3px 10px",
                          fontSize: 10,
                          color: step.color,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {step.channel}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3
              style={{
                color: "#e94560",
                fontSize: 12,
                letterSpacing: 2,
                marginBottom: 12,
              }}
            >
              🔗 مصفوفة التكامل — كيف تتعاون المنصات مع التطبيق
            </h3>
            <div style={{ display: "grid", gap: 9 }}>
              {[
                {
                  platform: "فيسبوك",
                  role: "توليد الوعي والإثارة",
                  cta: "اضغط هنا لتحميل التطبيق وتدور العجلة",
                  kpi: "تحميلات + نقرات الرابط",
                  color: "#1877F2",
                },
                {
                  platform: "إنستغرام",
                  role: "الإلهام البصري والتفاعل",
                  cta: "رابط في Bio + Story → صفحة التطبيق",
                  kpi: "Story Views + Link Clicks",
                  color: "#E1306C",
                },
                {
                  platform: "تيك توك",
                  role: "الانتشار الفيروسي للعروض",
                  cta: "فيديو فائز → تعليق: رابط التحميل",
                  kpi: "مشاهدات + مشاركات + تحميلات",
                  color: "#69C9D0",
                },
                {
                  platform: "واتساب",
                  role: "الإغلاق والتحويل للشراء",
                  cta: "رابط مباشر للتطبيق + كود خصم حصري",
                  kpi: "فتح الرسائل + إتمام الطلبات",
                  color: "#25D366",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${item.color}25`,
                    borderRadius: 12,
                    padding: "13px 16px",
                    borderRight: `4px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "90px 1fr 1fr 1fr",
                      gap: 10,
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        color: item.color,
                        fontSize: 13,
                      }}
                    >
                      {item.platform}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#8892b0",
                          marginBottom: 2,
                        }}
                      >
                        الدور
                      </div>
                      <div style={{ fontSize: 12, color: "#ccd6f6" }}>
                        {item.role}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#8892b0",
                          marginBottom: 2,
                        }}
                      >
                        CTA
                      </div>
                      <div style={{ fontSize: 11, color: "#e0e0e0" }}>
                        {item.cta}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#8892b0",
                          marginBottom: 2,
                        }}
                      >
                        KPI
                      </div>
                      <div style={{ fontSize: 11, color: item.color }}>
                        {item.kpi}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PSYCHOLOGY */}
        {activeTab === "psychology" && (
          <div>
            <SH
              title="سايكولوجية المستهلك العراقي"
              subtitle="يشمل الآن سيكولوجية الألعاب والجوائز والعروض الخاصة"
            />
            <div style={{ display: "grid", gap: 12 }}>
              {psychologyLayers.map((item, i) => (
                <div
                  key={i}
                  onClick={() =>
                    setExpandedPsycho(expandedPsycho === i ? null : i)
                  }
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${item.color}30`,
                    borderRadius: 13,
                    padding: "14px 18px",
                    borderRight: `4px solid ${item.color}`,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{ display: "flex", gap: 10, alignItems: "center" }}
                  >
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: 12, color: "#8892b0" }}>
                        {item.desc}
                      </div>
                    </div>
                    <span style={{ color: "#8892b0", fontSize: 11 }}>
                      {expandedPsycho === i ? "▲" : "▼"}
                    </span>
                  </div>
                  {expandedPsycho === i && (
                    <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                      <div
                        style={{
                          background: "rgba(0,0,0,0.3)",
                          borderRadius: 8,
                          padding: "9px 13px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: "#f5a623",
                            marginBottom: 3,
                          }}
                        >
                          💬 ما يدور في ذهن الزبون:
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#ccd6f6",
                            fontStyle: "italic",
                          }}
                        >
                          "{item.trigger}"
                        </div>
                      </div>
                      <div
                        style={{
                          background: `${item.color}10`,
                          borderRadius: 8,
                          padding: "9px 13px",
                          border: `1px solid ${item.color}25`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: item.color,
                            marginBottom: 3,
                          }}
                        >
                          ✅ استراتيجية المحتوى:
                        </div>
                        <div style={{ fontSize: 13, color: "#e0e0e0" }}>
                          {item.solution}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLATFORMS */}
        {activeTab === "platforms" && (
          <div>
            <SH
              title="تحليل المنصات"
              subtitle="المعايير + المشاكل + الحلول — مع دمج التطبيق في كل منصة"
            />
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 18,
                flexWrap: "wrap",
              }}
            >
              {[
                { id: "facebook", label: "🔵 فيسبوك" },
                { id: "instagram", label: "📸 إنستغرام" },
                { id: "tiktok", label: "🎵 تيك توك" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePlatform(p.id)}
                  style={{
                    padding: "9px 16px",
                    borderRadius: 22,
                    border: `2px solid ${platformColors[p.id]}`,
                    background:
                      activePlatform === p.id
                        ? platformColors[p.id]
                        : "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: 700,
                    fontSize: 12,
                    transition: "all 0.2s",
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 9,
                marginBottom: 18,
              }}
            >
              {metricsMap[activePlatform].map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid #1a2230",
                    borderRadius: 12,
                    padding: 13,
                  }}
                >
                  <div
                    style={{ fontSize: 11, color: "#8892b0", marginBottom: 5 }}
                  >
                    {m.label}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#64ffda",
                      marginBottom: 7,
                    }}
                  >
                    {m.benchmark}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#ff6b6b",
                      background: "rgba(255,107,107,0.1)",
                      borderRadius: 6,
                      padding: "3px 7px",
                    }}
                  >
                    ⚠️ {m.warning}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {problemsMap[activePlatform].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setExpandedProb(expandedProb === i ? null : i)}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid #161f2c",
                    borderRadius: 10,
                    padding: "11px 15px",
                    cursor: "pointer",
                    borderRight: `3px solid ${
                      item.impact === "عالي" ? "#ff6b6b" : "#f5a623"
                    }`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 9 }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          padding: "2px 7px",
                          borderRadius: 20,
                          background:
                            item.impact === "عالي"
                              ? "rgba(255,107,107,0.12)"
                              : "rgba(245,166,35,0.12)",
                          color: item.impact === "عالي" ? "#ff6b6b" : "#f5a623",
                        }}
                      >
                        {item.impact === "عالي" ? "🔴" : "🟡"} {item.impact}
                      </span>
                      <span style={{ fontSize: 13, color: "#ccd6f6" }}>
                        {item.prob}
                      </span>
                    </div>
                    <span style={{ color: "#8892b0", fontSize: 10 }}>
                      {expandedProb === i ? "▲" : "▼"}
                    </span>
                  </div>
                  {expandedProb === i && (
                    <div
                      style={{
                        marginTop: 9,
                        padding: "9px 12px",
                        background: "rgba(100,255,218,0.06)",
                        borderRadius: 8,
                        border: "1px solid rgba(100,255,218,0.18)",
                      }}
                    >
                      <span style={{ fontSize: 11, color: "#64ffda" }}>
                        ✅ الحل:{" "}
                      </span>
                      <span style={{ fontSize: 12, color: "#e0e0e0" }}>
                        {item.fix}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REPORT */}
        {activeTab === "report" && (
          <div>
            <SH
              title="هيكل تقرير التحليل الاحترافي"
              subtitle="9 أقسام تُحوّلك من مسوق عادي إلى مستشار استراتيجي"
            />
            <div style={{ display: "grid", gap: 11, marginBottom: 22 }}>
              {reportSections.map((sec, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid #1a2230",
                    borderRadius: 12,
                    padding: "14px 16px",
                    display: "flex",
                    gap: 13,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #e94560, #0f3460)",
                      borderRadius: 8,
                      width: 38,
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 900,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {sec.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ fontSize: 15 }}>{sec.icon}</span>
                      <span
                        style={{ fontWeight: 800, fontSize: 13, color: "#fff" }}
                      >
                        {sec.title}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#8892b0",
                        lineHeight: 1.7,
                      }}
                    >
                      {sec.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "rgba(100,255,218,0.04)",
                border: "1px solid rgba(100,255,218,0.18)",
                borderRadius: 14,
                padding: 18,
              }}
            >
              <h3
                style={{ color: "#64ffda", margin: "0 0 14px", fontSize: 13 }}
              >
                🎯 KPIs مقترحة لـ 90 يوم
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: 9,
                }}
              >
                {[
                  { metric: "تحميلات التطبيق", target: "+300/شهر" },
                  { metric: "دوران عجلة الحظ", target: "+500 مرة/شهر" },
                  { metric: "متوسط قيمة الطلب", target: "ارتفاع 25%" },
                  { metric: "مبيعات عرض 3+1", target: "30% من الطلبات" },
                  { metric: "مشاركين السحب", target: "+1000 مشارك" },
                  { metric: "معدل التفاعل", target: "أعلى من 3%" },
                ].map((kpi, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(0,0,0,0.28)",
                      borderRadius: 10,
                      padding: "11px 13px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        color: "#8892b0",
                        marginBottom: 4,
                      }}
                    >
                      {kpi.metric}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 900,
                        color: "#64ffda",
                      }}
                    >
                      {kpi.target}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* POSITIONING */}
        {activeTab === "positioning" && (
          <div>
            <SH
              title="كيف تظهر كخبير لا يُستغنى عنه"
              subtitle="الطريقة التي تتحدث بها عن عملك تُحدد قيمتك في السوق"
            />
            <div style={{ display: "grid", gap: 13 }}>
              {[
                {
                  icon: "🎰",
                  title: "استخدم بيانات التطبيق كسلاح تحليلي",
                  bad: '"التطبيق عنده ميزات زينة"',
                  good: '"كم زبون فتح التطبيق ولم يشترِ؟ هذا الرقم هو فرصة ذهبية ضائعة — أنا أعرف كيف نحوّله لمبيعات بالسوشل ميديا"',
                  color: "#E879F9",
                },
                {
                  icon: "🚗",
                  title: "ربط جائزة السيارة بمنظومة تسويقية متكاملة",
                  bad: '"السيارة جائزة كبيرة، نعلن عنها"',
                  good: '"فيديو تسليم السيارة — إذا صُوِّر بشكل صحيح — يُغني عن إعلانات بعشرات الملايين. أنا أعرف كيف نحوّله لأقوى محتوى في تاريخ الشركة"',
                  color: "#F59E0B",
                },
                {
                  icon: "🎁",
                  title: "أبرز الفرص غير المستغلة في التطبيق",
                  bad: '"لازم تعلنون أكثر عن العروض"',
                  good: '"عرض 3+1 هو أقوى محرك لزيادة متوسط الطلب — لكنه حالياً غير مرئي على السوشل ميديا. أنا أقدر أحوّله لمحتوى ينتشر عضوياً بدون دفع"',
                  color: "#34D399",
                },
                {
                  icon: "📊",
                  title: "اعرض أرقاماً لا آراء",
                  bad: '"منشوراتكم عن عجلة الحظ ضعيفة"',
                  good: '"منشوراتكم عن عجلة الحظ حصلت على 0.3% تفاعل — المعيار 2.5% — تخسرون 88% من الوصول الممكن"',
                  color: "#3B82F6",
                },
                {
                  icon: "🗣️",
                  title: "تحدث بلغة المشكلة والخسارة",
                  bad: '"أقدم خدمة إدارة السوشل ميديا"',
                  good: '"صفحتكم تخسر 3,000 زبون محتمل شهرياً وعجلة الحظ في تطبيقكم لم تُستغل لجلب ولا تحميل واحد من السوشل ميديا"',
                  color: "#e94560",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${item.color}28`,
                    borderRadius: 13,
                    padding: 17,
                    borderRight: `4px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 9,
                      alignItems: "center",
                      marginBottom: 11,
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <span
                      style={{ fontWeight: 800, fontSize: 13, color: "#fff" }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 9,
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(255,107,107,0.09)",
                        borderRadius: 9,
                        padding: "9px 11px",
                        border: "1px solid rgba(255,107,107,0.13)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 10,
                          color: "#ff6b6b",
                          marginBottom: 4,
                        }}
                      >
                        ❌ لا تقل:
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#ccd6f6",
                          fontStyle: "italic",
                          lineHeight: 1.6,
                        }}
                      >
                        "{item.bad}"
                      </div>
                    </div>
                    <div
                      style={{
                        background: `${item.color}0d`,
                        borderRadius: 9,
                        padding: "9px 11px",
                        border: `1px solid ${item.color}22`,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 10,
                          color: item.color,
                          marginBottom: 4,
                        }}
                      >
                        ✅ قل بدلاً عنه:
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#e0e0e0",
                          fontStyle: "italic",
                          lineHeight: 1.6,
                        }}
                      >
                        "{item.good}"
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 22,
                background:
                  "linear-gradient(135deg, rgba(233,69,96,0.11), rgba(15,52,96,0.22))",
                border: "1px solid rgba(233,69,96,0.3)",
                borderRadius: 16,
                padding: 22,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 34, marginBottom: 9 }}>🏆</div>
              <h3 style={{ color: "#fff", margin: "0 0 9px", fontSize: 15 }}>
                جملتك السحرية في أول اجتماع
              </h3>
              <div
                style={{
                  background: "rgba(0,0,0,0.28)",
                  borderRadius: 12,
                  padding: "15px 18px",
                  border: "1px solid rgba(233,69,96,0.25)",
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                <p
                  style={{
                    color: "#f5a623",
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 2,
                    fontStyle: "italic",
                  }}
                >
                  "عندكم تطبيق بعجلة حظ وسحب على سيارة وعرض 3+1 — هذه ثروة
                  تسويقية حقيقية. المشكلة أن السوشل ميديا الحالية لا تحوّل أي
                  متابع لمستخدم للتطبيق. أنا لدي خطة تربط الاثنين معاً وتحوّل كل
                  منشور لتحميل ولشراء."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SH({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <h2
        style={{
          margin: "0 0 5px",
          fontSize: "clamp(15px, 3vw, 20px)",
          fontWeight: 900,
          color: "#fff",
        }}
      >
        {title}
      </h2>
      <p style={{ margin: 0, color: "#8892b0", fontSize: 12, lineHeight: 1.7 }}>
        {subtitle}
      </p>
      <div
        style={{
          height: 3,
          width: 46,
          borderRadius: 2,
          marginTop: 11,
          background: "linear-gradient(90deg, #e94560, #0f3460)",
        }}
      />
    </div>
  );
}
