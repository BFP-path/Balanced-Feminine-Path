export interface Product {
  slug: string;
  title: string;
  shortTitle: string;
  price: string;
  priceValue: number;
  format: string;
  audience: string;
  promise: string;
  intro: string;
  description: string;
  includes: string[];
  outcomes: string[];
  perfectFor: string[];
  accent: string;
  icon: string;
  pdfPath: string;
  paymentLink: string | null;
  statusNote: string;
}

export const products: Product[] = [
  {
    slug: 'perimenopause-symptom-tracker-doctor-checklist',
    title: 'Perimenopause Symptom Tracker and Doctor Appointment Checklist',
    shortTitle: 'Symptom Tracker + Doctor Checklist',
    price: '$17',
    priceValue: 17,
    format: 'Digital workbook + printable tracker',
    audience: 'Women who want clear symptom patterns, cleaner notes, and better doctor appointments.',
    promise: 'Track symptoms, spot patterns, and bring a clear checklist into your next doctor appointment.',
    intro: 'This workbook keeps your symptoms, cycle changes, sleep notes, mood shifts, and doctor questions in one place.',
    description: 'Use this tracker when perimenopause symptoms feel hard to explain and you need a practical record you can actually use. It helps you log changes, review patterns, and prepare for doctor visits with less guesswork.',
    includes: [
      '30-day perimenopause symptom tracker for sleep, mood, hot flashes, bleeding, fatigue, and brain fog',
      'Cycle and spotting log',
      'Food, stress, and trigger notes',
      'Doctor appointment checklist',
      'Lab checklist and question prompts',
      'Weekly pattern review sheets'
    ],
    outcomes: [
      'A clearer symptom history',
      'Better doctor appointment preparation',
      'Less second-guessing',
      'A practical record you can keep using month after month'
    ],
    perfectFor: [
      'Irregular cycles',
      'Night waking or hot flashes',
      'Mood shifts, fatigue, and brain fog',
      'Anyone preparing for a doctor visit'
    ],
    accent: '#b57867',
    icon: '✺',
    pdfPath: '/products/perimenopause-symptom-tracker-doctor-checklist.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'perimenopause-morning-routine-fatigue-focus',
    title: 'Perimenopause Morning Routine for Fatigue and Focus',
    shortTitle: 'Morning Routine for Fatigue + Focus',
    price: '$21',
    priceValue: 21,
    format: 'Digital guide + 14-day morning plan',
    audience: 'Women who wake up tired, foggy, and scattered and need a simpler start to the day.',
    promise: 'Build a morning routine that supports energy, focus, and a calmer nervous system during perimenopause.',
    intro: 'This 14-day plan gives you a repeatable morning rhythm that feels supportive instead of demanding.',
    description: 'Use this guide when low energy, brain fog, and stressful mornings keep setting the tone for your day. It gives you a realistic plan for hydration, grounding, light movement, and a steadier start you can keep using.',
    includes: [
      '14-day perimenopause morning routine plan',
      'Printable daily routine sheets',
      'Breathwork and grounding prompts',
      'Evening wind-down notes to support the next morning',
      'Space to track sleep, energy, and focus',
      'A simple routine builder for life after day 14'
    ],
    outcomes: [
      'A steadier start to the day',
      'More consistent mornings',
      'Less rushed decision fatigue',
      'A morning rhythm you can keep using'
    ],
    perfectFor: [
      'Low energy on waking',
      'Brain fog first thing in the morning',
      'Stress-heavy mornings',
      'Women rebuilding supportive habits'
    ],
    accent: '#c48d6f',
    icon: '☀️',
    pdfPath: '/products/perimenopause-morning-routine-fatigue-focus.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'perimenopause-brain-fog-sleep-guide',
    title: 'Perimenopause Brain Fog and Sleep Guide',
    shortTitle: 'Brain Fog + Sleep Guide',
    price: '$19',
    priceValue: 19,
    format: 'Digital toolkit + symptom support planner',
    audience: 'Women who need a practical plan for restless nights, mental fog, and fatigue the next day.',
    promise: 'Track sleep disruption, brain fog, and hot flash patterns so you can build a steadier plan for the week ahead.',
    intro: 'This guide helps you log patterns, test simple changes, and build a bedtime rhythm that makes more sense for your symptoms.',
    description: 'Use this toolkit when you wake up at 3 a.m., forget words mid-sentence, or feel wiped out after another rough night. It keeps your observations, likely triggers, and provider questions in one place.',
    includes: [
      '7-night sleep reset planner',
      'Brain fog pattern log',
      'Hot flash and night sweat trigger tracker',
      'Bedroom and evening routine audit',
      'Cooling and comfort checklist',
      'Provider conversation prompts'
    ],
    outcomes: [
      'Better symptom awareness',
      'A stronger bedtime routine',
      'Clearer notes on what helps',
      'A calmer plan for rough weeks'
    ],
    perfectFor: [
      'Night waking',
      'Daytime brain fog',
      'Hot flashes or night sweats',
      'Women who want structure before trying random fixes'
    ],
    accent: '#8a6c87',
    icon: '☾',
    pdfPath: '/products/perimenopause-brain-fog-sleep-guide.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'perimenopause-meal-plan-energy-mood',
    title: 'Perimenopause Meal Plan for Energy and Mood',
    shortTitle: 'Meal Plan for Energy + Mood',
    price: '$27',
    priceValue: 27,
    format: 'Digital meal guide + planning sheets',
    audience: 'Women who want simpler meals, steadier energy, and less guessing around cravings and mood dips.',
    promise: 'Take the guesswork out of what to eat in perimenopause when energy, cravings, and mood feel unpredictable.',
    intro: 'This guide gives you a practical meal structure you can use during a busy week without overcomplicating food.',
    description: 'Use this meal plan when perimenopause leaves you with energy crashes, afternoon irritability, or constant food guesswork. It helps you plan meals, notice patterns, and build a more supportive rhythm around food.',
    includes: [
      '14-day perimenopause meal plan',
      'Simple meal planning pages',
      'Breakfast, lunch, dinner, and snack ideas',
      'Hydration and energy tracker',
      'Grocery list builder',
      'Craving and blood sugar reflection prompts'
    ],
    outcomes: [
      'More stable energy',
      'Less meal guesswork',
      'A stronger routine around food',
      'A plan that feels sustainable'
    ],
    perfectFor: [
      'Energy crashes',
      'Mood dips and cravings',
      'Stress eating',
      'Women who want supportive food structure'
    ],
    accent: '#8f7a53',
    icon: '❊',
    pdfPath: '/products/perimenopause-meal-plan-energy-mood.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: '4-week-perimenopause-reset-program',
    title: '4-Week Perimenopause Reset Program',
    shortTitle: '4-Week Perimenopause Reset',
    price: '$47',
    priceValue: 47,
    format: 'Digital program + workbook',
    audience: 'Women who want one guided reset for symptoms, routines, food, sleep, and reflection.',
    promise: 'Follow a clear four-week perimenopause reset that helps you rebuild supportive habits and understand your symptoms better.',
    intro: 'This month-long program brings symptom tracking, food support, sleep review, and habit-building into one practical structure.',
    description: 'Use this program when you want more than a single worksheet and need a fuller perimenopause reset plan. It gives you weekly themes, daily check-ins, and reflection pages that help you notice what supports your body now.',
    includes: [
      '4 weekly perimenopause reset themes',
      'Weekly planning pages',
      'Daily check-in sheets',
      'Food, sleep, stress, and movement reflections',
      'End-of-week progress reviews',
      'A closing plan for what to keep going'
    ],
    outcomes: [
      'A stronger daily rhythm',
      'A better view of symptom patterns',
      'More confidence in what supports you',
      'A reset plan you can revisit anytime'
    ],
    perfectFor: [
      'Women who want a complete reset',
      'Those juggling multiple symptoms',
      'Anyone ready to rebuild habits over a month',
      'Women who want one product instead of several smaller tools'
    ],
    accent: '#7d5f74',
    icon: '✿',
    pdfPath: '/products/4-week-perimenopause-reset-program.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  }
];

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));
