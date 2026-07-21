export interface LifestyleMedicinePillar {
  key: string;
  name: string;
  summary: string;
}

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
  primaryPillar: string;
  supportPillars: string[];
  accent: string;
  icon: string;
  pdfPath: string;
  paymentLink: string | null;
  statusNote: string;
}

export const lifestyleMedicinePillars: LifestyleMedicinePillar[] = [
  {
    key: 'nutrition',
    name: 'Nutrition',
    summary: 'Products that support steadier meals, blood sugar awareness, food planning, and nourishment during midlife changes.'
  },
  {
    key: 'physical-activity',
    name: 'Physical Activity',
    summary: 'Products that build gentle movement, morning activation, daily rhythm, and sustainable energy support.'
  },
  {
    key: 'restorative-sleep',
    name: 'Restorative Sleep',
    summary: 'Products for bedtime rituals, night waking, nervous system settling, and better sleep patterns.'
  },
  {
    key: 'stress-management',
    name: 'Stress Management',
    summary: 'Products that support self-regulation, breathwork, grounding, meditation, and calmer daily recovery.'
  },
  {
    key: 'social-connection',
    name: 'Social Connection',
    summary: 'Products that help women prepare for doctor conversations, ask for support, and feel less alone in what they are tracking.'
  },
  {
    key: 'avoidance-of-risky-substances',
    name: 'Avoidance of Risky Substances',
    summary: 'Products that help women spot triggers like alcohol, excess caffeine, skipped meals, and other habits that intensify symptoms.'
  }
];

export const products: Product[] = [
  {
    slug: 'perimenopause-symptom-tracker-doctor-checklist',
    title: 'Perimenopause Symptom Tracker and Doctor Appointment Checklist',
    shortTitle: 'Symptom Tracker + Doctor Checklist',
    price: '$27',
    priceValue: 27,
    format: 'Digital workbook + printable tracker bundle',
    audience: 'Women who want clear symptom patterns, stronger notes, and calmer doctor appointments.',
    promise: 'Track symptoms, spot patterns, and walk into your next appointment with a practical record instead of scattered notes.',
    intro: 'This upgraded tracker keeps symptoms, cycle changes, sleep notes, mood shifts, trigger patterns, and appointment prep in one place.',
    description: 'Use this workbook when symptoms feel hard to explain, appointments feel rushed, and you want a clearer story of what your body is doing. It gives you daily logs, weekly reviews, lab prompts, support-circle planning, and appointment pages you can keep using month after month.',
    includes: [
      '30-day symptom tracker for sleep, mood, hot flashes, bleeding, fatigue, joint pain, headaches, and brain fog',
      'Cycle, spotting, and heavy-flow log',
      'Stress, food, alcohol, and caffeine trigger notes',
      'Medication, supplement, and symptom timing tracker',
      'Doctor appointment checklist and question builder',
      'Lab checklist and follow-up note pages',
      'Weekly symptom pattern review sheets',
      'Support-circle page for partner, family, or friend updates'
    ],
    outcomes: [
      'A clearer symptom history',
      'Better doctor appointment preparation',
      'Less second-guessing about what is changing',
      'Better language for asking for care and support'
    ],
    perfectFor: [
      'Irregular cycles or spotting changes',
      'Night waking or hot flashes',
      'Mood shifts, fatigue, and brain fog',
      'Anyone preparing for a doctor visit'
    ],
    primaryPillar: 'social-connection',
    supportPillars: ['stress-management', 'avoidance-of-risky-substances'],
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
    price: '$37',
    priceValue: 37,
    format: 'Digital guide + 14-day routine workbook',
    audience: 'Women who wake up tired, foggy, and scattered and need a steadier start to the day.',
    promise: 'Build a realistic morning rhythm that supports energy, focus, movement, and a calmer nervous system during perimenopause.',
    intro: 'This expanded guide gives you a repeatable morning structure with hydration, light movement, food support, breathing, and planning pages.',
    description: 'Use this guide when low energy, brain fog, and stressful mornings keep shaping the rest of your day. It helps you create a 14-day reset, a gentle movement anchor, a focus routine, and a fallback plan for rough mornings instead of asking your body for perfection.',
    includes: [
      '14-day perimenopause morning routine plan',
      'Three 10-minute movement flow options',
      'Breathwork and grounding prompts',
      'Morning nourishment checklist for hydration, protein, and blood sugar support',
      'Sleep-to-morning handoff pages for the night before',
      'Focus planning sheets for top priorities and brain-dump cleanup',
      'Low-energy backup routine for difficult mornings',
      'Weekly consistency review pages'
    ],
    outcomes: [
      'A steadier start to the day',
      'More consistent movement and hydration habits',
      'Less rushed decision fatigue',
      'A morning rhythm you can keep using after the reset'
    ],
    perfectFor: [
      'Low energy on waking',
      'Brain fog first thing in the morning',
      'Stress-heavy mornings',
      'Women rebuilding supportive habits'
    ],
    primaryPillar: 'physical-activity',
    supportPillars: ['stress-management', 'restorative-sleep'],
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
    price: '$29',
    priceValue: 29,
    format: 'Digital toolkit + sleep reset planner',
    audience: 'Women who need a practical plan for restless nights, mental fog, and next-day fatigue.',
    promise: 'Track sleep disruption, brain fog, and hot flash patterns so you can build a steadier bedtime plan and notice what helps.',
    intro: 'This revised guide combines a sleep tracker, night-waking review, cooling checklist, brain fog notes, and recovery prompts for the next day.',
    description: 'Use this toolkit when you wake up at 3 a.m., forget words mid-sentence, or feel wiped out after another rough night. It gives you a seven-night reset, a bedroom audit, nervous system settling prompts, alcohol and caffeine awareness pages, and provider notes in one place.',
    includes: [
      '7-night sleep reset planner',
      'Brain fog pattern log and trigger review',
      'Hot flash and night sweat tracker',
      'Bedroom, light, and temperature audit',
      'Evening routine checklist and wind-down prompts',
      'Alcohol, caffeine, sugar, and late-meal sleep review page',
      'Day-after recovery plan for rough nights',
      'Provider conversation notes and summary sheet'
    ],
    outcomes: [
      'Better symptom awareness',
      'A stronger bedtime routine',
      'Clearer notes on what helps and what disrupts sleep',
      'A calmer plan for rough weeks'
    ],
    perfectFor: [
      'Night waking',
      'Daytime brain fog',
      'Hot flashes or night sweats',
      'Women who want structure before trying random fixes'
    ],
    primaryPillar: 'restorative-sleep',
    supportPillars: ['stress-management', 'avoidance-of-risky-substances'],
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
    price: '$47',
    priceValue: 47,
    format: 'Digital meal guide + planning workbook',
    audience: 'Women who want simpler meals, steadier energy, and less guessing around cravings and mood dips.',
    promise: 'Take the guesswork out of what to eat in perimenopause with a food plan that supports steadier energy, mood, and appetite patterns.',
    intro: 'This expanded meal plan gives you a 14-day structure, grocery support, meal templates, snack ideas, craving reflections, and routine pages.',
    description: 'Use this guide when perimenopause leaves you with energy crashes, afternoon irritability, or constant food guesswork. It helps you simplify meals, build blood sugar awareness, reduce decision fatigue, and notice when caffeine, skipped meals, or alcohol make symptoms worse.',
    includes: [
      '14-day perimenopause meal plan',
      'Breakfast, lunch, dinner, and snack templates',
      'Protein, fiber, and hydration planning pages',
      'Grocery list builder and prep guide',
      'Craving, energy, and mood reflection prompts',
      'Simple anti-inflammatory meal ideas',
      'Blood sugar support reminders for busy days',
      'Weekend reset page for planning the next week'
    ],
    outcomes: [
      'More stable energy',
      'Less meal guesswork',
      'A stronger routine around food',
      'A meal plan that feels sustainable'
    ],
    perfectFor: [
      'Energy crashes',
      'Mood dips and cravings',
      'Stress eating',
      'Women who want supportive food structure'
    ],
    primaryPillar: 'nutrition',
    supportPillars: ['avoidance-of-risky-substances', 'stress-management'],
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
    price: '$97',
    priceValue: 97,
    format: 'Digital program + workbook bundle',
    audience: 'Women who want one guided reset for symptoms, routines, food, sleep, and reflection.',
    promise: 'Follow a clear four-week reset that helps you rebuild supportive habits, notice symptom patterns, and keep what works.',
    intro: 'This upgraded month-long program combines symptom tracking, food support, sleep review, movement planning, and reflection into one structure.',
    description: 'Use this program when one worksheet is not enough and you need a fuller plan for the month ahead. It gives you weekly themes, daily check-ins, movement goals, food reviews, support pages, and habit carry-forward planning that feels organized instead of overwhelming.',
    includes: [
      'Four weekly reset themes with daily prompts',
      'Weekly planning and review pages',
      'Daily check-in sheets for symptoms, sleep, food, movement, and mood',
      'Simple habit tracker for hydration, walking, and wind-down rhythm',
      'Trigger review pages for caffeine, alcohol, skipped meals, and overload',
      'Reflection prompts for identity, support, and self-trust',
      'Rough-day plan and bounce-back worksheet',
      'Closing plan for what to keep, drop, and discuss with a provider'
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
    primaryPillar: 'avoidance-of-risky-substances',
    supportPillars: ['nutrition', 'physical-activity', 'restorative-sleep', 'stress-management', 'social-connection'],
    accent: '#7d5f74',
    icon: '✿',
    pdfPath: '/products/4-week-perimenopause-reset-program.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'rested-and-radiant-sleep-kit',
    title: 'Rested and Radiant Sleep Kit',
    shortTitle: 'Rested + Radiant Sleep Kit',
    price: '$34',
    priceValue: 34,
    format: 'Digital sleep kit + ritual workbook',
    audience: 'Women who want a gentler evening routine, better sleep preparation, and support for hormone-friendly rest.',
    promise: 'Create a calming bedtime rhythm with guided meditation scripts, tea blend ideas, journaling prompts, and a sleep ritual ebook.',
    intro: 'This kit brings your evening routine into one simple bundle so you can stop ending the day scattered and overstimulated.',
    description: 'Use this sleep kit when you need help slowing down at night, settling your mind, and preparing your body for deeper rest. It includes a bedtime ritual map, tea blend guide, journaling prompts, and a mini ebook on sleep rituals for hormone harmony.',
    includes: [
      'Three guided bedtime meditation scripts',
      'Moringa and magnesium evening tea blend guide',
      '30 evening journaling prompts',
      'Mini ebook on sleep rituals for hormone harmony',
      'Bedroom reset checklist',
      'Seven-night sleep reflection page',
      'Light, screen, and stimulation wind-down audit',
      'A gentle plan for nights when sleep feels far away'
    ],
    outcomes: [
      'A calmer bedtime routine',
      'Better awareness of what unsettles your evenings',
      'A steadier transition from busy day to rest',
      'More confidence around sleep support habits'
    ],
    perfectFor: [
      'Women with busy, overstimulated evenings',
      'Night owls trying to rebuild a sleep rhythm',
      'Anyone craving a softer bedtime ritual',
      'Women who want hormone-aware sleep support'
    ],
    primaryPillar: 'restorative-sleep',
    supportPillars: ['stress-management', 'avoidance-of-risky-substances'],
    accent: '#6f728d',
    icon: '🌙',
    pdfPath: '/products/rested-and-radiant-sleep-kit.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'perimenopause-sos-kit',
    title: 'Perimenopause SOS Kit',
    shortTitle: 'Perimenopause SOS Kit',
    price: '$39',
    priceValue: 39,
    format: 'Digital regulation kit + challenge workbook',
    audience: 'Women who need fast support for overwhelm, stress spikes, mood swings, and nervous system overload.',
    promise: 'Reach for calming meditations, breathwork prompts, affirmations, and a seven-day self-regulation challenge when you feel stretched too thin.',
    intro: 'This kit is built for the days when you need support quickly and do not want to think too hard about what to do first.',
    description: 'Use this regulation kit when perimenopause symptoms, stress, and emotional overload make it hard to settle yourself. It includes calming meditation scripts, breathwork routines, affirmations, a seven-day challenge, and mood-boosting morning routine pages that work together.',
    includes: [
      'Three calming meditation scripts',
      'Breathwork video storyboard and guided practice sheets',
      '40 printable affirmations for regulation and self-trust',
      'Seven-day self-regulation challenge',
      'Mood-boosting morning routine pages',
      'Rapid reset page for difficult moments',
      'Body cue tracker for overwhelm patterns',
      'Support plan for what to do before, during, and after a flare'
    ],
    outcomes: [
      'A faster way to regulate stress spikes',
      'Better awareness of your overwhelm cues',
      'A repeatable calming toolkit',
      'More confidence on hard days'
    ],
    perfectFor: [
      'Mood swings and overwhelm',
      'Stress-heavy weeks',
      'Women who need a reset plan they can grab fast',
      'Anyone craving more nervous system support'
    ],
    primaryPillar: 'stress-management',
    supportPillars: ['restorative-sleep', 'physical-activity'],
    accent: '#9a6c73',
    icon: '🕊️',
    pdfPath: '/products/perimenopause-sos-kit.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'energy-and-weight-rebalance-kit',
    title: 'Energy and Weight Rebalance Kit',
    shortTitle: 'Energy + Weight Rebalance Kit',
    price: '$49',
    priceValue: 49,
    format: 'Digital wellness kit + planning workbook',
    audience: 'Women who want support for energy dips, weight changes, inflammation, and steadier daily habits.',
    promise: 'Support energy and weight balance with a hormone-aware meal plan, supplement notes, movement tools, and mindful habit support.',
    intro: 'This kit pulls food, energy, movement, and habit support into one place so you can stop piecing together random advice.',
    description: 'Use this kit when weight changes feel confusing, inflammation feels high, and your energy drops keep knocking you off course. It gives you a hormone energy bundle, anti-inflammatory meal structure, supplement guide prompts, and gentle movement tools you can actually repeat.',
    includes: [
      'Hormone energy bundle workbook',
      '14-day anti-inflammatory meal plan',
      'Supplement guide with provider discussion prompts',
      'Light movement and mindful technique pages',
      'Craving and energy tracker',
      'Inflammation trigger audit',
      'Weekly habit reset pages',
      'Simple progress review for what feels better in your body'
    ],
    outcomes: [
      'More consistent energy',
      'Less food and supplement guesswork',
      'Better awareness of inflammation triggers',
      'A calmer plan for weight and wellness support'
    ],
    perfectFor: [
      'Energy crashes',
      'Weight changes during perimenopause',
      'Women who want an anti-inflammatory structure',
      'Anyone rebuilding food and movement habits'
    ],
    primaryPillar: 'nutrition',
    supportPillars: ['physical-activity', 'avoidance-of-risky-substances'],
    accent: '#7a8f67',
    icon: '🍃',
    pdfPath: '/products/energy-and-weight-rebalance-kit.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'calm-my-hormones-guided-audio-library',
    title: 'Calm My Hormones Guided Audio Library',
    shortTitle: 'Calm My Hormones Audio Library',
    price: '$24',
    priceValue: 24,
    format: 'Digital meditation library + script guide',
    audience: 'Women who want short guided tracks for anxiety, overwhelm, sleep, and self-compassion support.',
    promise: 'Keep a calming library of hormone-supportive meditation scripts for anxiety, overwhelm, sleep, and self-compassion nearby.',
    intro: 'This library gives you a set of guided track outlines and scripts you can return to when your body and mind need a softer landing.',
    description: 'Use this collection when you want a simple meditation option for the exact state you are in instead of digging through random videos online. It includes the Calm My Hormones collection plus track guides for anxiety, overwhelm, sleep, and self-compassion.',
    includes: [
      'Calm My Hormones core meditation script',
      'Anxiety support meditation script',
      'Overwhelm reset meditation script',
      'Sleep softening meditation script',
      'Self-compassion meditation script',
      'Track guide for when to use each meditation',
      'Reflection prompts after listening',
      'Seven-day calm practice planner'
    ],
    outcomes: [
      'A small library of calming support tools',
      'Less scrambling when you feel dysregulated',
      'A softer response to overwhelm and stress',
      'A repeatable listening and reflection routine'
    ],
    perfectFor: [
      'Anxiety and inner pressure',
      'Overwhelm and shutdown',
      'Trouble settling before sleep',
      'Women who need more self-compassion'
    ],
    primaryPillar: 'stress-management',
    supportPillars: ['restorative-sleep'],
    accent: '#7d6ba0',
    icon: '🎧',
    pdfPath: '/products/calm-my-hormones-guided-audio-library.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'digital-planner-perimenopausal-adhd-women',
    title: 'Digital Planner for Perimenopausal ADHD Women',
    shortTitle: 'ADHD Planner for Perimenopause',
    price: '$19',
    priceValue: 19,
    format: 'Digital planner + printable support pages',
    audience: 'Women who are juggling perimenopause, ADHD-style symptoms, brain fog, and low executive function.',
    promise: 'Plan your days with less overload using routines, brain-dump pages, symptom notes, and support tools built for perimenopausal ADHD women.',
    intro: 'This planner helps you organize your life without pretending your brain has unlimited focus or energy.',
    description: 'Use this planner when perimenopause and ADHD-style symptoms collide and make everything feel harder to hold together. It includes focus pages, body check-ins, planning spreads, reset pages, and support prompts that account for fluctuating energy and concentration.',
    includes: [
      'Daily planning pages with top-three focus system',
      'Brain-dump and task triage sheets',
      'Symptom and cycle check-in section',
      'Low-energy planning templates',
      'Routine builder for meals, sleep, and meds or supplements',
      'Sensory overload and shutdown reset pages',
      'Weekly review and carry-forward pages',
      'Support ask script for home or work'
    ],
    outcomes: [
      'Less planning overwhelm',
      'Better visibility into symptom and focus patterns',
      'More realistic routines',
      'A system that works with fluctuating capacity'
    ],
    perfectFor: [
      'Women with ADHD or ADHD-like symptoms in midlife',
      'Brain fog and executive function struggles',
      'Overloaded schedules',
      'Anyone who needs simpler planning tools'
    ],
    primaryPillar: 'social-connection',
    supportPillars: ['stress-management', 'restorative-sleep'],
    accent: '#c087a2',
    icon: '🧠',
    pdfPath: '/products/digital-planner-perimenopausal-adhd-women.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  },
  {
    slug: 'digital-planner-glp1-use',
    title: 'Digital Planner for GLP-1 Use',
    shortTitle: 'GLP-1 Wellness Planner',
    price: '$17',
    priceValue: 17,
    format: 'Digital planner + tracking workbook',
    audience: 'Women using GLP-1 medication who want clearer tracking for food, hydration, energy, side effects, and routines.',
    promise: 'Track meals, hydration, side effects, routine changes, and weekly patterns with a GLP-1 planner built for real life.',
    intro: 'This planner gives you a clean way to track what is changing in your body while using GLP-1 support.',
    description: 'Use this planner when you want better notes on your appetite, hydration, digestion, energy, mood, and routine while using GLP-1 medication. It helps you prepare for follow-up care, notice side effect patterns, and build more supportive daily structure.',
    includes: [
      'Daily GLP-1 check-in pages',
      'Meal, protein, and hydration tracker',
      'Side effect and digestion review sheets',
      'Movement and energy notes',
      'Supplement and medication timing page',
      'Weekly progress review',
      'Provider follow-up notes and question prompts',
      'Habit builder for routine consistency'
    ],
    outcomes: [
      'Cleaner tracking for GLP-1 support',
      'Better awareness of side effect patterns',
      'Stronger follow-up notes for healthcare visits',
      'More consistent daily routines'
    ],
    perfectFor: [
      'Women using GLP-1 medication',
      'Anyone tracking appetite, hydration, and side effects',
      'Women who want more structure with follow-up care',
      'Busy users who need one place for their notes'
    ],
    primaryPillar: 'avoidance-of-risky-substances',
    supportPillars: ['nutrition', 'physical-activity'],
    accent: '#5f8f9f',
    icon: '📋',
    pdfPath: '/products/digital-planner-glp1-use.pdf',
    paymentLink: null,
    statusNote: 'Stripe checkout link will go live as soon as checkout is connected.'
  }
];

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));
