from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import ListFlowable, ListItem, PageBreak, Paragraph, SimpleDocTemplate, Spacer
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from pathlib import Path

ROOT = Path('/home/olu/bfp-website')
OUT = ROOT / 'public' / 'products'
OUT.mkdir(parents=True, exist_ok=True)

BRAND = 'Balanced Feminine Path'
SUB_BRAND = 'Practical digital support for perimenopause'
DISCLAIMER = (
    'This workbook supports education and personal reflection. It is not medical advice. '
    'Talk with your doctor or another qualified healthcare professional about symptoms, '
    'treatment, supplements, or medication.'
)

PRODUCTS = [
    {
        'filename': 'perimenopause-symptom-tracker-doctor-checklist.pdf',
        'title': 'Perimenopause Symptom Tracker and Doctor Appointment Checklist',
        'subtitle': 'A printable tracker for symptoms, cycle changes, sleep, mood, fatigue, and doctor visits',
        'accent': '#B57867',
        'intro': [
            'Use this workbook when your body feels different and you need better notes than the scraps in your phone.',
            'The goal is simple: help you notice patterns, describe symptoms clearly, and walk into your next appointment prepared.'
        ],
        'sections': [
            {
                'heading': 'What to track every day',
                'bullets': [
                    'Bleeding or spotting changes',
                    'Hot flashes, night sweats, or temperature swings',
                    'Sleep quality, night waking, and early waking',
                    'Mood shifts, irritability, anxiety, or tears',
                    'Brain fog, focus issues, or forgetfulness',
                    'Energy dips, headaches, cravings, joint pain, or breast tenderness'
                ]
            },
            {
                'heading': '30-day tracker layout',
                'paragraphs': [
                    'For each day, write the date, cycle day if known, and your top three symptoms. Rate each symptom from 1 to 5. Add short notes for sleep, stress, food triggers, movement, and anything that felt unusual.',
                    'Use these prompts as your daily lines:'
                ],
                'bullets': [
                    'Symptoms today: _________________________________________________',
                    'Sleep last night: ________________________________________________',
                    'Energy and focus: _______________________________________________',
                    'Mood and stress load: ____________________________________________',
                    'Possible triggers or supports: ____________________________________'
                ]
            },
            {
                'heading': 'Weekly review',
                'bullets': [
                    'What symptoms showed up most often this week?',
                    'What time of day felt hardest?',
                    'Did sleep make the next day worse?',
                    'Did stress, alcohol, sugar, or skipped meals affect symptoms?',
                    'What helped even a little?'
                ]
            },
            {
                'heading': 'Doctor appointment checklist',
                'bullets': [
                    'How have my cycles changed in timing, flow, or spotting?',
                    'Could these symptoms fit perimenopause?',
                    'Which symptoms need more evaluation right now?',
                    'What labs, screenings, or follow-up would make sense?',
                    'What are my options for sleep, mood, hot flashes, or heavy bleeding?',
                    'When should I come back or seek urgent care?'
                ]
            },
            {
                'heading': 'Bring this summary with you',
                'paragraphs': [
                    'Main symptoms: _________________________________________________',
                    'How long this has been happening: _________________________________',
                    'What is affecting daily life most: ________________________________',
                    'What I want help with first: ______________________________________'
                ]
            }
        ]
    },
    {
        'filename': 'perimenopause-morning-routine-fatigue-focus.pdf',
        'title': 'Perimenopause Morning Routine for Fatigue and Focus',
        'subtitle': 'A 14-day plan for tired mornings, brain fog, and a calmer start to the day',
        'accent': '#C48D6F',
        'intro': [
            'This guide gives you a simple morning structure when you wake up tired, foggy, and already behind.',
            'You do not need a perfect ritual. You need a short routine that helps your body feel safer, steadier, and easier to start.'
        ],
        'sections': [
            {
                'heading': 'Your 20-minute anchor routine',
                'bullets': [
                    'Drink water before caffeine',
                    'Open curtains or step outside for morning light',
                    'Take five slow breaths with a longer exhale',
                    'Do two to five minutes of gentle movement',
                    'Write your top one or two priorities for the day',
                    'Choose a simple breakfast that supports steadier energy'
                ]
            },
            {
                'heading': '14-day progression',
                'bullets': [
                    'Days 1 to 3: hydration, light, and breathing only',
                    'Days 4 to 6: add movement and a written focus plan',
                    'Days 7 to 9: add a simple breakfast check-in',
                    'Days 10 to 12: notice what makes mornings harder',
                    'Days 13 to 14: keep only the parts that help'
                ]
            },
            {
                'heading': 'Morning check-in page',
                'paragraphs': [
                    'Use one page each morning with these prompts:'
                ],
                'bullets': [
                    'How tired do I feel right now? _________________________________',
                    'What feels foggy or heavy today? ________________________________',
                    'What support do I need first? __________________________________',
                    'What is my main priority today? _________________________________',
                    'What can wait until later? _____________________________________'
                ]
            },
            {
                'heading': 'When mornings keep falling apart',
                'bullets': [
                    'Shorten the routine instead of quitting it',
                    'Prep water, clothes, and breakfast the night before',
                    'Keep your first task small and specific',
                    'Delay doom-scrolling until after your anchor routine',
                    'Notice whether poor sleep, alcohol, stress, or late eating is wrecking the next morning'
                ]
            },
            {
                'heading': 'Keep list',
                'paragraphs': [
                    'At the end of 14 days, keep the two or three steps that made the biggest difference. Drop the rest. A routine that happens beats a routine that looks impressive.'
                ]
            }
        ]
    },
    {
        'filename': 'perimenopause-brain-fog-sleep-guide.pdf',
        'title': 'Perimenopause Brain Fog and Sleep Guide',
        'subtitle': 'A practical workbook for night waking, mental fog, fatigue, and symptom patterns',
        'accent': '#8A6C87',
        'intro': [
            'When sleep breaks down, the next day often turns into brain fog, irritability, and low energy.',
            'This guide helps you track what is happening at night and what shows up the next day so you can stop guessing.'
        ],
        'sections': [
            {
                'heading': 'What to log at night',
                'bullets': [
                    'Time you got into bed',
                    'How long it took to fall asleep',
                    'Night waking times',
                    'Hot flashes, night sweats, or feeling too warm',
                    'Alcohol, caffeine, sugar, or late meals',
                    'Stress level before bed'
                ]
            },
            {
                'heading': 'What to log the next day',
                'bullets': [
                    'Brain fog or word-finding issues',
                    'Focus and working memory',
                    'Mood and patience',
                    'Headaches or body heaviness',
                    'Energy dips and crash times',
                    'What helped you function anyway'
                ]
            },
            {
                'heading': '7-night sleep reset',
                'bullets': [
                    'Night 1: note your normal pattern without changing anything',
                    'Night 2: cool the room and lower light earlier',
                    'Night 3: stop caffeine earlier in the day',
                    'Night 4: eat dinner earlier and lighter if possible',
                    'Night 5: try a longer wind-down before bed',
                    'Night 6: keep your wake time steady',
                    'Night 7: review which change helped most'
                ]
            },
            {
                'heading': 'Questions to ask when brain fog spikes',
                'bullets': [
                    'Did I sleep badly or wake repeatedly?',
                    'Did I eat in a way that led to a crash?',
                    'Did stress overload my working memory?',
                    'Did heat, bleeding, or pain make the night worse?',
                    'What support would make tomorrow easier?'
                ]
            },
            {
                'heading': 'Provider notes',
                'paragraphs': [
                    'Bring a one-week summary with: average sleep hours, number of night wakings, top symptoms, and the hardest impact on work, mood, or memory.'
                ]
            }
        ]
    },
    {
        'filename': 'perimenopause-meal-plan-energy-mood.pdf',
        'title': 'Perimenopause Meal Plan for Energy and Mood',
        'subtitle': 'A 14-day food guide for steadier energy, fewer crashes, and easier meals',
        'accent': '#8F7A53',
        'intro': [
            'This meal guide is built for real life. It helps you eat in a way that supports steadier energy and fewer mood and craving crashes.',
            'It is not a strict diet. It is a practical structure you can repeat during busy weeks.'
        ],
        'sections': [
            {
                'heading': 'Your meal plan basics',
                'bullets': [
                    'Start meals with protein',
                    'Add fiber-rich carbs instead of living on snacks',
                    'Include healthy fats so meals hold longer',
                    'Hydrate before assuming you need more caffeine',
                    'Do not skip breakfast if it leads to a hard afternoon crash'
                ]
            },
            {
                'heading': 'Simple 14-day rhythm',
                'bullets': [
                    'Week 1: regular meals and hydration',
                    'Week 2: notice cravings, crashes, and mood dips',
                    'Repeat the meals that keep you fullest and clearest',
                    'Reduce food decisions by planning two breakfast options, two lunches, and three dinners'
                ]
            },
            {
                'heading': 'Meal planning page',
                'bullets': [
                    'Breakfast options: ____________________________________________',
                    'Lunch options: ________________________________________________',
                    'Dinner options: _______________________________________________',
                    'Supportive snacks: ____________________________________________',
                    'Water goal: _________________________________________________'
                ]
            },
            {
                'heading': 'Notice these patterns',
                'bullets': [
                    'Do high-sugar meals lead to a crash?',
                    'Do long gaps between meals make you shaky or irritable?',
                    'Does caffeine on an empty stomach worsen anxiety?',
                    'Does poor sleep change what you crave the next day?',
                    'Which meals leave you clearer and more even?'
                ]
            },
            {
                'heading': 'One-week grocery builder',
                'bullets': [
                    'Proteins: eggs, yogurt, fish, chicken, tofu, beans',
                    'Fiber-rich carbs: oats, rice, potatoes, fruit, lentils',
                    'Fats: nuts, seeds, olive oil, avocado',
                    'Easy produce: berries, greens, carrots, cucumbers, frozen vegetables'
                ]
            }
        ]
    },
    {
        'filename': '4-week-perimenopause-reset-program.pdf',
        'title': '4-Week Perimenopause Reset Program',
        'subtitle': 'A month-long workbook for symptoms, sleep, food, stress, and steadier daily habits',
        'accent': '#7D5F74',
        'intro': [
            'Use this reset when one symptom tracker is not enough and you want a fuller structure for the month ahead.',
            'Each week has a clear focus so you can pay attention, make fewer random changes, and keep what actually helps.'
        ],
        'sections': [
            {
                'heading': 'Week 1: Notice what is happening',
                'bullets': [
                    'Track your top symptoms',
                    'Note sleep, energy, mood, and bleeding changes',
                    'Write the daily moments that feel hardest',
                    'Stop adding five new fixes at once'
                ]
            },
            {
                'heading': 'Week 2: Stabilize your day',
                'bullets': [
                    'Choose a simple morning anchor',
                    'Plan steadier meals',
                    'Protect a basic bedtime routine',
                    'Reduce one avoidable stressor'
                ]
            },
            {
                'heading': 'Week 3: Review triggers and supports',
                'bullets': [
                    'What makes symptoms flare?',
                    'What reduces the load even a little?',
                    'What patterns show up around sleep, food, and stress?',
                    'What needs a doctor conversation instead of more self-experimenting?'
                ]
            },
            {
                'heading': 'Week 4: Keep what works',
                'bullets': [
                    'Choose three habits worth keeping',
                    'Write a short plan for rough symptom days',
                    'Prepare your notes for appointments or follow-up care',
                    'Keep your system small enough to repeat'
                ]
            },
            {
                'heading': 'Daily reset page',
                'bullets': [
                    'Main symptom today: __________________________________________',
                    'Energy today: _________________________________________________',
                    'Sleep last night: ______________________________________________',
                    'Best support today: ____________________________________________',
                    'What I will repeat tomorrow: __________________________________'
                ]
            }
        ]
    }
]


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='CoverBrand', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=24, leading=28, textColor=colors.HexColor('#3D3029'), alignment=TA_CENTER, spaceAfter=12))
    styles.add(ParagraphStyle(name='CoverSub', parent=styles['BodyText'], fontName='Helvetica', fontSize=12, leading=16, textColor=colors.HexColor('#6B5B52'), alignment=TA_CENTER, spaceAfter=20))
    styles.add(ParagraphStyle(name='SectionHeading', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=16, leading=20, textColor=colors.HexColor('#3D3029'), spaceBefore=12, spaceAfter=8))
    styles.add(ParagraphStyle(name='BodyCopy', parent=styles['BodyText'], fontName='Helvetica', fontSize=11, leading=15, textColor=colors.HexColor('#3D3029'), spaceAfter=8))
    styles.add(ParagraphStyle(name='FooterNote', parent=styles['BodyText'], fontName='Helvetica-Oblique', fontSize=8.5, leading=11, textColor=colors.HexColor('#6B5B52'), alignment=TA_CENTER))
    return styles


def add_cover(story, styles, product):
    story.append(Spacer(1, 0.6 * inch))
    story.append(Paragraph(BRAND, styles['CoverBrand']))
    story.append(Paragraph(SUB_BRAND, styles['CoverSub']))
    story.append(Spacer(1, 0.3 * inch))
    story.append(Paragraph(product['title'], ParagraphStyle(name='ProductTitle', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=22, leading=27, textColor=colors.HexColor(product['accent']), alignment=TA_CENTER, spaceAfter=14)))
    story.append(Paragraph(product['subtitle'], styles['CoverSub']))
    story.append(Spacer(1, 0.25 * inch))
    for paragraph in product['intro']:
        story.append(Paragraph(paragraph, ParagraphStyle(name='IntroCenter', parent=styles['BodyCopy'], alignment=TA_CENTER, spaceAfter=10)))
    story.append(Spacer(1, 0.35 * inch))
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
        page_label = f'Page {canvas_obj.getPageNumber()}'
        canvas_obj.drawRightString(doc.leftMargin + doc.width, 20, page_label)
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

    for section in product['sections']:
        story.append(Paragraph(section['heading'], styles['SectionHeading']))
        for paragraph in section.get('paragraphs', []):
            story.append(Paragraph(paragraph, styles['BodyCopy']))
        if section.get('bullets'):
            story.append(bullets(section['bullets'], styles))
        story.append(Spacer(1, 0.14 * inch))

    story.append(Spacer(1, 0.3 * inch))
    story.append(Paragraph(DISCLAIMER, styles['FooterNote']))
    doc.build(story, onFirstPage=header_footer(product['accent']), onLaterPages=header_footer(product['accent']))


if __name__ == '__main__':
    for product in PRODUCTS:
        build_pdf(product)
    print(f'Generated {len(PRODUCTS)} PDFs in {OUT}')
