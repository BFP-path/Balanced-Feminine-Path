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
    slug: 'perimenopause-symptom-tracker',
    title: 'Perimenopause Symptom Tracker + Doctor Prep Kit',
    shortTitle: 'Symptom Tracker + Doctor Prep Kit',
    price: '$27',
    priceValue: 27,
    format: 'Digital workbook + printable tracker',
    audience: 'Women who feel off and want clear symptom patterns before their next appointment.',
    promise: 'Track what is changing, spot patterns, and walk into appointments with useful notes instead of guesswork.',
    intro: 'This kit gives you one place to track symptoms, cycles, sleep, mood, and questions for your provider.',
    description: 'Use this tracker when your body feels unfamiliar and you need clean notes, calm structure, and better language for what you are experiencing. The workbook keeps the important details in one place so you can notice patterns and advocate for yourself with confidence.',
    includes: [
      '30-day symptom tracker for sleep, mood, hot flashes, bleeding, energy, and brain fog',
      'Cycle and spotting log',
      'Food, stress, and trigger notes',
      'Doctor appointment planning pages',
      'Lab checklist and question prompts',
      'Weekly pattern review sheets'
    ],
    outcomes: [
      'Clearer symptom history',
      'Better appointment preparation',
      'Less second-guessing',
      'A practical record you can keep using month after month'
    ],
    perfectFor: [
      'Irregular cycles',
      'Night waking or hot flashes',
      'Mood shifts and brain fog',
      'Anyone preparing for a doctor visit'
    ],
    accent: '#b57867',
    icon: '✺',
    pdfPath: '/products/perimenopause-symptom-tracker.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'morning-ritual-reset',
    title: '14-Day Morning Ritual + Nervous System Reset',
    shortTitle: '14-Day Morning Ritual Reset',
    price: '$37',
    priceValue: 37,
    format: 'Digital guide + daily reset plan',
    audience: 'Women who want a calm, repeatable rhythm that supports energy, focus, and steadiness.',
    promise: 'Build a morning routine that feels grounding instead of overwhelming.',
    intro: 'This reset turns gentle structure into a daily practice you can actually keep.',
    description: 'The 14-day reset helps you move from scattered mornings to a calmer start. You get a short guided plan, simple reflection prompts, and a daily rhythm that supports your nervous system without asking for perfection.',
    includes: [
      '14-day morning reset plan',
      'Printable daily ritual sheets',
      'Breathwork and grounding prompts',
      'Evening wind-down notes to support the next day',
      'Space to track sleep, energy, and calm',
      'A simple routine builder for life after day 14'
    ],
    outcomes: [
      'A steadier start to the day',
      'More consistency',
      'Less rushed decision fatigue',
      'A morning practice you can keep using'
    ],
    perfectFor: [
      'Stress-heavy mornings',
      'Low energy on waking',
      'Women rebuilding habits',
      'Anyone who wants more calm before the day takes over'
    ],
    accent: '#c48d6f',
    icon: '☀️',
    pdfPath: '/products/morning-ritual-reset.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'sleep-brain-fog-relief-kit',
    title: 'Sleep, Brain Fog, and Hot Flash Relief Kit',
    shortTitle: 'Sleep + Brain Fog Relief Kit',
    price: '$29',
    priceValue: 29,
    format: 'Digital toolkit + symptom support planner',
    audience: 'Women who need a practical plan for restless nights, daytime fog, and sudden symptom spikes.',
    promise: 'Sort out what is disrupting sleep and build a steadier plan for the next week.',
    intro: 'This relief kit helps you log patterns, test simple changes, and build a better bedtime rhythm.',
    description: 'Use this kit when you wake up at 3 a.m., forget words in the middle of a sentence, or feel thrown off by hot flashes. It keeps your observations, your next steps, and your provider questions in one place.',
    includes: [
      '7-night sleep reset planner',
      'Brain fog pattern log',
      'Hot flash severity and trigger tracker',
      'Bedroom and evening routine audit',
      'Cooling and comfort checklist',
      'Provider conversation prompts'
    ],
    outcomes: [
      'Better symptom awareness',
      'Stronger bedtime routine',
      'Clearer notes on what helps',
      'A calmer plan for rough weeks'
    ],
    perfectFor: [
      'Night waking',
      'Daytime mental fog',
      'Hot flashes or night sweats',
      'Women who want structure before trying random fixes'
    ],
    accent: '#8a6c87',
    icon: '☾',
    pdfPath: '/products/sleep-brain-fog-relief-kit.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'food-energy-reset',
    title: 'Perimenopause Food + Energy Reset',
    shortTitle: 'Food + Energy Reset',
    price: '$47',
    priceValue: 47,
    format: 'Digital meal support guide + planning sheets',
    audience: 'Women who want a simple structure for meals, blood sugar support, and steadier energy.',
    promise: 'Take the guesswork out of what to eat when your energy, cravings, and mood feel unpredictable.',
    intro: 'This reset gives you a practical food plan you can use without turning your kitchen into a second job.',
    description: 'The guide walks you through a simple rhythm for meals, hydration, and supportive habits. It is built for women who want something practical they can follow during a busy week.',
    includes: [
      '14-day food and energy reset guide',
      'Simple meal planning pages',
      'Breakfast, lunch, dinner, and snack ideas',
      'Hydration and energy tracker',
      'Grocery list builder',
      'Craving and blood sugar reflection prompts'
    ],
    outcomes: [
      'More stable energy',
      'Less meal guesswork',
      'Stronger routine around food',
      'A plan that feels sustainable'
    ],
    perfectFor: [
      'Energy crashes',
      'Moody afternoons',
      'Stress eating and cravings',
      'Women who want supportive food structure'
    ],
    accent: '#8f7a53',
    icon: '❊',
    pdfPath: '/products/food-energy-reset.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'midlife-reset-program',
    title: '4-Week Midlife Reset Program',
    shortTitle: '4-Week Midlife Reset',
    price: '$97',
    priceValue: 97,
    format: 'Digital program + workbook',
    audience: 'Women who want one guided reset that brings symptoms, routines, food, and reflection together.',
    promise: 'Follow a clear month-long reset that helps you reconnect with your body and rebuild supportive habits.',
    intro: 'This four-week program gives you a practical structure for reset work without making the process feel rigid.',
    description: 'The program combines symptom awareness, gentle routine building, food support, sleep review, and weekly reflection. It works well for women who want a more complete reset instead of a single symptom tracker.',
    includes: [
      '4 weekly reset themes',
      'Weekly planning pages',
      'Daily check-in sheets',
      'Food, sleep, stress, and movement reflections',
      'Progress reviews at the end of each week',
      'A closing plan for what to keep going'
    ],
    outcomes: [
      'Stronger daily rhythm',
      'A better view of symptom patterns',
      'More confidence in what supports you',
      'A reset plan you can revisit anytime'
    ],
    perfectFor: [
      'Women who want a complete reset',
      'Those juggling multiple symptoms',
      'Anyone ready to rebuild habits over a month',
      'Women who want one product instead of several small tools'
    ],
    accent: '#7d5f74',
    icon: '✿',
    pdfPath: '/products/midlife-reset-program.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  }
];

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));
