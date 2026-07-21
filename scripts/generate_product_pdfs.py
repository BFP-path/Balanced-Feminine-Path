from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import ListFlowable, ListItem, PageBreak, Paragraph, SimpleDocTemplate, Spacer
from reportlab.pdfgen import canvas

ROOT = Path('/home/olu/bfp-website')
OUT = ROOT / 'public' / 'products'
OUT.mkdir(parents=True, exist_ok=True)

BRAND = 'Balanced Feminine Path'
SUB_BRAND = 'Digital wellness support for midlife women'
DISCLAIMER = (
    'This workbook supports education and personal reflection. It is not medical advice. '
    'Talk with your doctor or another qualified healthcare professional about symptoms, '
    'treatment, supplements, or medication.'
)

PRODUCTS = [
    {
        'filename': 'perimenopause-symptom-tracker-doctor-checklist.pdf',
        'title': 'Perimenopause Symptom Tracker and Doctor Appointment Checklist',
        'subtitle': 'A fuller symptom record, support planner, and doctor prep guide',
        'accent': '#B57867',
        'intro': [
            'Use this workbook when symptoms feel hard to explain and appointments feel rushed.',
            'The goal is simple. Help you notice patterns, ask better questions, and stop relying on scraps of memory.'
        ],
        'sections': [
            ('What to track every day', [
                'Sleep quality, night waking, and morning energy',
                'Mood shifts, anxiety, irritability, tears, or rage',
                'Bleeding, spotting, hot flashes, headaches, joint pain, or breast tenderness',
                'Brain fog, forgetfulness, and concentration changes',
                'Food, alcohol, caffeine, stress, and movement notes'
            ]),
            ('Weekly review prompts', [
                'What symptoms showed up most often this week?',
                'What felt hardest to manage?',
                'What made symptoms worse?',
                'What helped even a little?',
                'What needs a doctor conversation instead of more guessing?'
            ]),
            ('Doctor visit preparation', [
                'Bring a one-page symptom summary',
                'Write your top three questions before the visit',
                'Track labs, scans, follow-ups, and next steps',
                'Use the partner or support-person page if someone is helping you remember details'
            ])
        ]
    },
    {
        'filename': 'perimenopause-morning-routine-fatigue-focus.pdf',
        'title': 'Perimenopause Morning Routine for Fatigue and Focus',
        'subtitle': 'A 14-day reset for hydration, light movement, food, and calmer mornings',
        'accent': '#C48D6F',
        'intro': [
            'This guide gives you a practical way to start the day when you wake up tired, foggy, or behind.',
            'You do not need a perfect routine. You need one that happens.'
        ],
        'sections': [
            ('Your 20-minute anchor routine', [
                'Drink water before caffeine',
                'Open curtains or step outside for morning light',
                'Take five slow breaths with a longer exhale',
                'Do two to ten minutes of gentle movement',
                'Pick one main focus for the day',
                'Choose a simple breakfast that supports steadier energy'
            ]),
            ('14-day progression', [
                'Days 1 to 3: hydration, light, and breathing',
                'Days 4 to 6: add movement',
                'Days 7 to 10: add food and planning structure',
                'Days 11 to 14: keep what helps and cut what drags'
            ]),
            ('Backup plan for rough mornings', [
                'Use the two-minute version instead of skipping the whole routine',
                'Prep water, clothes, and breakfast the night before',
                'Keep the first task small and specific'
            ])
        ]
    },
    {
        'filename': 'perimenopause-brain-fog-sleep-guide.pdf',
        'title': 'Perimenopause Brain Fog and Sleep Guide',
        'subtitle': 'A seven-night reset for sleep disruption, fog, and next-day recovery',
        'accent': '#8A6C87',
        'intro': [
            'When sleep falls apart, the next day often becomes brain fog, irritability, and low energy.',
            'This guide helps you track what happened at night and what showed up the next day.'
        ],
        'sections': [
            ('What to log at night', [
                'Bedtime, wake time, and night waking',
                'Temperature swings, hot flashes, or night sweats',
                'Alcohol, caffeine, sugar, and late meals',
                'Stress level and screen use before bed'
            ]),
            ('The seven-night reset', [
                'Night 1: observe your normal pattern',
                'Night 2: cool the room and lower light earlier',
                'Night 3: move caffeine earlier',
                'Night 4: make dinner lighter and earlier',
                'Night 5: lengthen the wind-down',
                'Night 6: keep wake time steady',
                'Night 7: review what helped most'
            ]),
            ('Next-day recovery page', [
                'Track word-finding, memory, patience, and focus',
                'Write what support would make tomorrow easier',
                'Keep notes for provider follow-up if sleep remains poor'
            ])
        ]
    },
    {
        'filename': 'perimenopause-meal-plan-energy-mood.pdf',
        'title': 'Perimenopause Meal Plan for Energy and Mood',
        'subtitle': 'A simple food structure for steadier energy, mood, and fewer crashes',
        'accent': '#8F7A53',
        'intro': [
            'This meal guide helps you eat in a way that supports energy without making food more complicated.',
            'It is a practical rhythm, not a strict diet.'
        ],
        'sections': [
            ('Meal structure basics', [
                'Start meals with protein',
                'Use fiber-rich carbs instead of living on snacks',
                'Add healthy fats so meals hold longer',
                'Hydrate before assuming you need more caffeine',
                'Do not skip breakfast if it leads to a hard afternoon crash'
            ]),
            ('14-day rhythm', [
                'Week 1: regular meals and hydration',
                'Week 2: notice cravings, crashes, and mood dips',
                'Repeat the meals that keep you fullest and clearest'
            ]),
            ('Planning pages include', [
                'Breakfast, lunch, dinner, and snack templates',
                'A grocery builder',
                'Craving and blood sugar reflections',
                'A reset page for busy weeks'
            ])
        ]
    },
    {
        'filename': '4-week-perimenopause-reset-program.pdf',
        'title': '4-Week Perimenopause Reset Program',
        'subtitle': 'A month-long system for food, sleep, movement, stress, and reflection',
        'accent': '#7D5F74',
        'intro': [
            'Use this reset when you want one structure instead of collecting scattered tools.',
            'Each week has a clear focus so you can keep what works and drop what does not.'
        ],
        'sections': [
            ('Week 1: Notice', [
                'Track your top symptoms',
                'Note sleep, energy, food, and stress patterns',
                'Stop adding five new fixes at once'
            ]),
            ('Week 2: Stabilize', [
                'Create a morning anchor',
                'Plan steadier meals',
                'Protect a basic bedtime rhythm',
                'Choose one movement habit'
            ]),
            ('Week 3: Review', [
                'Spot triggers',
                'List supports that help even a little',
                'Prepare provider questions if needed'
            ]),
            ('Week 4: Keep', [
                'Choose three habits worth keeping',
                'Build a rough-day plan',
                'Write your carry-forward system for the next month'
            ])
        ]
    },
    {
        'filename': 'rested-and-radiant-sleep-kit.pdf',
        'title': 'Rested and Radiant Sleep Kit',
        'subtitle': 'Bedtime meditation, tea ritual support, journaling prompts, and hormone-friendly sleep rituals',
        'accent': '#6F728D',
        'intro': [
            'This kit helps you close the day with less stimulation and more support.',
            'Use it when evenings feel too noisy, too late, or too wired for sleep.'
        ],
        'sections': [
            ('Inside the kit', [
                'Three guided bedtime meditation scripts',
                'Tea blend notes using moringa and magnesium support ideas',
                'Thirty evening journaling prompts',
                'A mini ebook on sleep rituals for hormone harmony'
            ]),
            ('Sleep ritual builder', [
                'Choose your light, drink, reflection, and breathing cues',
                'Track what helps you slow down fastest',
                'Create a seven-night evening experiment'
            ]),
            ('Use this when', [
                'You feel tired but wired',
                'Your evenings drift too late',
                'You need a gentler transition into bed'
            ])
        ]
    },
    {
        'filename': 'perimenopause-sos-kit.pdf',
        'title': 'Perimenopause SOS Kit',
        'subtitle': 'Fast support for overwhelm, mood swings, stress spikes, and nervous system overload',
        'accent': '#9A6C73',
        'intro': [
            'This is the kit for the hard days when you do not want to think through what to do first.',
            'Open it, pick one support, and start there.'
        ],
        'sections': [
            ('Core sections', [
                'Calming meditations',
                'Breathwork practice sheets',
                'Affirmations for regulation and self-trust',
                'A seven-day self-regulation challenge',
                'Mood-boosting morning routine pages'
            ]),
            ('Fast reset page', [
                'What am I feeling in my body?',
                'What support fits this moment?',
                'What can wait until later?',
                'Who can I text or ask for help?'
            ]),
            ('Seven-day challenge focus', [
                'One calming action each day',
                'One body cue to notice',
                'One small win to record'
            ])
        ]
    },
    {
        'filename': 'energy-and-weight-rebalance-kit.pdf',
        'title': 'Energy and Weight Rebalance Kit',
        'subtitle': 'Food, supplements, movement, and habit support for energy and body changes',
        'accent': '#7A8F67',
        'intro': [
            'This kit helps you work on energy and weight changes without turning your life into a full-time project.',
            'It is built for women who want clearer structure and less random advice.'
        ],
        'sections': [
            ('Core sections', [
                'Hormone energy bundle workbook',
                'Fourteen-day anti-inflammatory meal plan',
                'Supplement guide with provider questions',
                'Light movement and mindful technique pages'
            ]),
            ('Track these patterns', [
                'Energy crashes',
                'Bloating or inflammation flares',
                'Cravings and appetite swings',
                'Movement consistency',
                'What makes your body feel calmer and steadier'
            ]),
            ('Weekly review', [
                'Which meals helped most?',
                'Which habits felt doable?',
                'What needs more medical follow-up?'
            ])
        ]
    },
    {
        'filename': 'calm-my-hormones-guided-audio-library.pdf',
        'title': 'Calm My Hormones Guided Audio Library',
        'subtitle': 'A calming meditation collection for anxiety, overwhelm, sleep, and self-compassion',
        'accent': '#7D6BA0',
        'intro': [
            'This library gives you a track for the state you are actually in.',
            'Use it instead of searching for a random meditation when you already feel overloaded.'
        ],
        'sections': [
            ('Track collection', [
                'Calm My Hormones core meditation',
                'Anxiety support track',
                'Overwhelm reset track',
                'Sleep softening track',
                'Self-compassion track'
            ]),
            ('Listening guide', [
                'Choose one track for the same time each day for one week',
                'Pair the track with a simple reflection prompt',
                'Notice which state softens fastest with regular use'
            ]),
            ('Reflection prompts', [
                'What felt softer after listening?',
                'What did I need more of today?',
                'Which track belongs in my regular routine?'
            ])
        ]
    },
    {
        'filename': 'digital-planner-perimenopausal-adhd-women.pdf',
        'title': 'Digital Planner for Perimenopausal ADHD Women',
        'subtitle': 'A planning system for fluctuating focus, low capacity, and real-life overload',
        'accent': '#C087A2',
        'intro': [
            'This planner works with a brain that has changing focus, changing energy, and too many tabs open.',
            'It helps you organize your life without pretending your capacity stays the same every day.'
        ],
        'sections': [
            ('Planner sections', [
                'Daily top-three focus pages',
                'Brain-dump and task triage sheets',
                'Low-energy planning templates',
                'Symptom and cycle check-ins',
                'Routine builder pages for food, sleep, and medication or supplement timing'
            ]),
            ('Support pages', [
                'Sensory overload reset page',
                'Shutdown recovery page',
                'Support ask script for home or work'
            ]),
            ('Weekly review', [
                'What drained me?',
                'What supported my focus?',
                'What needs to be simpler next week?'
            ])
        ]
    },
    {
        'filename': 'digital-planner-glp1-use.pdf',
        'title': 'Digital Planner for GLP-1 Use',
        'subtitle': 'Daily tracking for appetite, hydration, digestion, energy, and follow-up care',
        'accent': '#5F8F9F',
        'intro': [
            'This planner gives you one place to track what is changing in your body while using GLP-1 support.',
            'It helps you walk into follow-up care with clear notes instead of guesswork.'
        ],
        'sections': [
            ('Daily pages track', [
                'Meals and protein',
                'Hydration',
                'Side effects or digestion changes',
                'Energy and movement',
                'Medication and supplement timing'
            ]),
            ('Weekly review', [
                'Which foods sat best?',
                'What side effects changed?',
                'What questions should I ask at follow-up?'
            ]),
            ('Provider support', [
                'Bring a one-page symptom and routine summary',
                'Track patterns worth discussing with your clinician'
            ])
        ]
    },
]


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='CoverBrand', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=24, leading=28, textColor=colors.HexColor('#3D3029'), alignment=TA_CENTER, spaceAfter=12))
    styles.add(ParagraphStyle(name='CoverSub', parent=styles['BodyText'], fontName='Helvetica', fontSize=12, leading=16, textColor=colors.HexColor('#6B5B52'), alignment=TA_CENTER, spaceAfter=18))
    styles.add(ParagraphStyle(name='SectionHeading', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=16, leading=20, textColor=colors.HexColor('#3D3029'), spaceBefore=10, spaceAfter=8))
    styles.add(ParagraphStyle(name='BodyCopy', parent=styles['BodyText'], fontName='Helvetica', fontSize=11, leading=15, textColor=colors.HexColor('#3D3029'), spaceAfter=8))
    styles.add(ParagraphStyle(name='FooterNote', parent=styles['BodyText'], fontName='Helvetica-Oblique', fontSize=8.5, leading=11, textColor=colors.HexColor('#6B5B52'), alignment=TA_CENTER))
    return styles


def add_cover(story, styles, product):
    story.append(Spacer(1, 0.6 * inch))
    story.append(Paragraph(BRAND, styles['CoverBrand']))
    story.append(Paragraph(SUB_BRAND, styles['CoverSub']))
    story.append(Spacer(1, 0.2 * inch))
    title_style = ParagraphStyle(name='ProductTitle', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=22, leading=27, textColor=colors.HexColor(product['accent']), alignment=TA_CENTER, spaceAfter=14)
    story.append(Paragraph(product['title'], title_style))
    story.append(Paragraph(product['subtitle'], styles['CoverSub']))
    story.append(Spacer(1, 0.15 * inch))
    intro_style = ParagraphStyle(name='IntroCenter', parent=styles['BodyCopy'], alignment=TA_CENTER, spaceAfter=10)
    for paragraph in product['intro']:
        story.append(Paragraph(paragraph, intro_style))
    story.append(Spacer(1, 0.3 * inch))
    story.append(Paragraph(DISCLAIMER, styles['FooterNote']))
    story.append(PageBreak())


def bullets(items, styles):
    return ListFlowable(
        [ListItem(Paragraph(item, styles['BodyCopy'])) for item in items],
        bulletType='bullet',
        leftIndent=18,
    )


def header_footer(accent):
    accent_color = colors.HexColor(accent)

    def _draw(canvas_obj: canvas.Canvas, doc):
        canvas_obj.saveState()
        canvas_obj.setFillColor(accent_color)
        canvas_obj.rect(doc.leftMargin, doc.height + doc.topMargin + 10, doc.width, 4, fill=1, stroke=0)
        canvas_obj.setFont('Helvetica', 8)
        canvas_obj.setFillColor(colors.HexColor('#6B5B52'))
        canvas_obj.drawString(doc.leftMargin, 20, BRAND)
        canvas_obj.drawRightString(doc.leftMargin + doc.width, 20, f'Page {canvas_obj.getPageNumber()}')
        canvas_obj.restoreState()

    return _draw


def build_pdf(product):
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(OUT / product['filename']),
        pagesize=LETTER,
        rightMargin=54,
        leftMargin=54,
        topMargin=54,
        bottomMargin=40,
        title=product['title'],
        author=BRAND,
        subject=product['subtitle'],
    )

    story = []
    add_cover(story, styles, product)
    for heading, items in product['sections']:
        story.append(Paragraph(heading, styles['SectionHeading']))
        story.append(bullets(items, styles))
        story.append(Spacer(1, 0.15 * inch))
    story.append(Spacer(1, 0.2 * inch))
    story.append(Paragraph(DISCLAIMER, styles['FooterNote']))
    doc.build(story, onFirstPage=header_footer(product['accent']), onLaterPages=header_footer(product['accent']))


if __name__ == '__main__':
    for product in PRODUCTS:
        build_pdf(product)
    print(f'Generated {len(PRODUCTS)} PDFs in {OUT}')
