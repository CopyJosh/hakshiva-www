/* -------------------------------------------------------------
   HAKSHIVA WEBSITE REDESIGN - INTERACTIVE CORE LOGIC
   Featuring dynamic English/Hebrew localization, intersection observer
   stat count-up animations, lightbox video controls, and interactive tabs.
   ------------------------------------------------------------- */

// LOCALIZATION DICTIONARY
const translations = {
    en: {
        dir: 'ltr',
        navHome: 'Home',
        navAbout: 'About Us',
        navWhatWeDo: 'What We Do',
        navTeam: 'Our Team',
        navNews: 'News',
        navContact: 'Contact',
        navDonate: 'Donate Now',
        
        heroTagline: 'Caring for our community',
        heroTitle: 'Compassionate Care for <span class="text-gradient">Every Family Struggle</span>',
        heroDesc: 'Whether your family is facing mental health, emotional, or life challenges—our dedicated specialists are here to walk with you.',
        heroBtnContact: 'Get Support',
        
        statsYearsVal: '20+',
        statsYearsLbl: 'Years of Support',
        statsYearsDesc: 'Empowering Beit Shemesh youth since 2005.',
        statsFamiliesVal: '5000+',
        statsFamiliesLbl: 'Families Helped',
        statsFamiliesDesc: 'Rebuilding bonds and creating healthier futures.',
        statsMentorsVal: '500+',
        statsMentorsLbl: 'Active cases handled at any time',
        statsMentorsDesc: 'Providing continuous professional care and support.',
        statsYouthVal: '6',
        statsYouthLbl: 'Days a Week',
        statsYouthDesc: 'Teen Drop-In Center Outreach',

        supportTag: 'Our Focus',
        supportTitle: 'At the heart of our care',
        supportDesc: 'At Hakshiva, our services are tailored to each individual, reflecting the unique cultural and linguistic backgrounds of our community.',
        supportKidsTitle: 'Children',
        supportKidsDesc: 'Therapy, mentoring, social skills, and academic guidance to set children up for healthy, happy lives.',
        supportTeensTitle: 'Teens',
        supportTeensDesc: 'Outreach programs, emotional support, and a drop-in center providing a judgment-free space.',
        supportOlimTitle: 'Olim (Immigrants)',
        supportOlimDesc: 'Specialized integration support to help families adjust emotionally and socially to their new homes.',
        supportParentsTitle: 'Parents & Couples',
        supportParentsDesc: 'Parenting workshops and relationship therapy to build strong, supportive family foundations.',
        supportLearnMore: 'Learn more',

        serviceTag: 'Professional Care',
        serviceTitle: 'Our Specialized Programs',
        serviceDesc: 'Discover the specialized services we offer to help youth and families heal, grow, and achieve their full potential.',
        
        srvTabClinic: 'Therapy clinic',
        srvTabChildParentClinic: 'Child-Parent Clinic (Ages 6-12)',
        srvTabTeensTherapy: 'Teen Therapy',
        srvTabAdhd: 'ADHD Center',
        srvTabMentoring: 'Mentoring',
        srvTabTeens: 'The Teen Space',
        srvTabEducation: 'Educational Services',
        srvTabEducationMySpace: 'My Space Afternoon Program',
        srvTabEducationHotline: 'Educational Guidance Hotline',
        srvTabFamily: 'Family & Couples Support',
        srvTabOlim: 'Olim Services',

        srvClinicDesc: 'We provide professional, highly sensitive psychological care in a warm, welcoming environment. Our licensed, bilingual (English and Hebrew) social workers and psychologists are dedicated to supporting your emotional well-being and healing.',
        srvClinicHighlightTitle: 'Our Core Specialized Services:',
        srvClinicHighlight1: 'Personalized one-on-one therapy',
        srvClinicHighlight2: 'Dedicated treatment for anxiety, depression, trauma etc.',
        srvClinicHighlight3: 'Experienced, Bilingual, culturally sensitive, observant therapists.',
        
        srvAdhdDesc: 'Attention difficulties can affect academic, social, and emotional life. Our center provides specialized therapeutic diagnostics, training, and tools to help kids and young adults thrive.',
        srvAdhdHighlightTitle: 'Our ADHD Methodology:',
        srvAdhdHighlight1: 'Cog-Fun (Cognitive-Functional) Therapy',
        srvAdhdHighlight2: 'Executive Function Skill Building',
        srvAdhdHighlight3: 'Parenting ADHD Coaching',
        srvAdhdHighlight4: 'Tailored Teen Focus Programs',
        
        srvMentoringDesc: 'As one of our longest-running initiatives, this program provides vital support for youth navigating social or emotional challenges. We connect kids and teens with dedicated, thoroughly trained adult mentors who serve as positive role models, trusted confidants, and steady guides.',
        srvMentoringHighlightTitle: 'Mentoring Options:',
        srvMentoringHighlight1: 'In-School Mentoring (Boosting Confidence)',
        srvMentoringHighlight2: 'Community-Based Afterschool Support',
        srvMentoringHighlight3: 'Goal-Oriented Personal Guidance',
        srvMentoringHighlight4: 'Long-Term Positive Relationship Building',
        
        srvTeensDesc: 'Our dedicated drop-in centers offer Beit Shemesh youth a safe, warm, and informal environment to connect. Teens can engage in recreational activities, meet peers, and speak with professional outreach counselors in a comfortable setting.',
        srvTeensHighlightTitle: 'What We Offer:',
        srvTeensHighlight1: 'A secure space designed for socializing and relaxation.',
        srvTeensHighlight2: 'Access to professional Outreach staff',
        srvTeensHighlight3: 'Interactive workshops focused on developing practical life skills.',
        srvTeensHighlight4: 'Crisis intervention and referral Services',
        
        srvEducationDesc: 'We help youth overcome learning roadblocks and navigate their academic journeys with confidence. Our team offers active learning support in school and through our homework center, and coordinates specialized educational resources.',
        srvEducationHighlightTitle: '',
        srvEducationHighlight1: 'In school educational programs',
        srvEducationHighlight2: 'Homework and enrichment center (MySpace)',
        srvEducationHighlight3: 'Remedial educational support',
        srvEducationHighlight4: 'Parent workshops and programs',
        
        srvFamilyDesc: 'Part of our therapy services include parenting and marriage counseling, and workshops to help couples communicate effectively, resolve family challenges, and create a nurturing home for their children',
        srvFamilyHighlightTitle: 'Family Support Focus:',
        srvFamilyHighlight1: 'Couples & Marriage Therapy',
        srvFamilyHighlight2: 'Empowering Parenting Workshops',
        srvFamilyHighlight3: 'Blended Family Integration Counseling',
        srvFamilyHighlight4: 'Crisis Intervention & Family Guidance',

        srvClinicTitle: 'Affordable, Professional Therapy Clinic',
        srvClinicPara1: 'We provide professional therapy in a warm, affordable and supportive setting. Our clinic is staffed by licensed, English and Hebrew-speaking social workers and psychologists who are culturally sensitive to the observant community.',
        srvClinicPara2: 'We offer personalized treatment for low self-esteem, anxiety, depression, social issues, anger outbursts, and family conflicts. Modalities include cognitive-behavioral therapy (CBT), art/play therapy, and family counseling to build emotional resilience.',
        srvClinicBtn: 'Schedule Intake',
        
        srvTeensTherapyCategory: 'Affordable, Professional Therapy Clinic',
        srvTeensTherapyTitle: 'Adolescents',
        srvTeensTherapyDescParagraph: 'Adolescence brings rapid changes and boundary-testing, often causing tensions between teens and parents. Teens may also struggle with issues like anxiety, depression, low self-esteem, or social challenges that they hesitate to share at home. Our clinic offers professional, affordable counseling by observant, bilingual (English/Hebrew) therapists. We help teens navigate emotional and mental struggles and build resilience in a safe, objective environment.',
        srvTeensTherapyIntro: 'Hakshiva’s in-house clinic offers professional, affordable counseling tailored to the unique heartbeat of the Beit Shemesh community.',
        srvTeensTherapyBullet1Title: 'Culturally Attuned',
        srvTeensTherapyBullet1Desc: "Our observant, English- and Hebrew-speaking therapists understand your family's lifestyle and values.",
        srvTeensTherapyBullet2Title: 'Wide-Range Treatment',
        srvTeensTherapyBullet2Desc: 'We treat issues such as low self-esteem, anxiety, depression, social difficulties, interpersonal conflicts, anger outbursts, and family conflicts.',
        srvTeensTherapyBullet3Title: 'Tailored Approaches',
        srvTeensTherapyBullet3Desc: 'We use a variety of modalities such as insight-oriented therapy, CBT, and family therapy.',
        srvTeensTherapyBullet4Title: 'Community Impact',
        srvTeensTherapyBullet4Desc: 'Our dedicated team of over 12 fully supervised therapists proudly supports more than 150 local youth and families.',
        srvTeensTherapyConclusion: 'We have over 12 therapists servicing over 150 youth and their families at any one time. This activity is overseen and professionally supervised by our clinical director and clinical supervisor.',
        srvTeensTherapyAvailableTitle: 'Support is Available',
        srvTeensTherapyAvailableDesc: 'Taking the first step can feel daunting, but families do not have to navigate this alone. Contact the clinic today and find the right support.',

        srvClinicChildTitle: 'Therapy for Children Ages 6–12',
        srvClinicChildDesc1: 'The years between ages 6 and 12 are a time of profound transition. As children face rising academic expectations, shifting peer relationships, and growing independence, they frequently encounter emotional and social hurdles that affect their wellbeing at home and in school.',
        srvClinicChildDesc2: 'At the Hakshiva Child Parent Clinic, we look at these challenges through a broad lens. We believe lasting progress happens when parents are actively supported and integrated into their child’s therapeutic journey.',
        srvChildTitle: 'Children Ages 6-12',
        srvChildPara: 'The years between ages 6 and 12 are a time of profound transition. As children face rising academic expectations, shifting peer relationships, and growing independence, they frequently encounter emotional and social hurdles that affect their wellbeing at home and in school. At the Hakshiva Child Parent Clinic, we look at these challenges through a broad lens. We believe lasting progress happens when parents are actively supported and integrated into their child’s therapeutic journey.',
        srvClinicChildApproachTitle: 'Our Approach',
        srvClinicChildApproach1: 'Our clinic provides a holistic, family-centered model that looks beyond immediate symptoms to address the deeper emotional and developmental roots of a child\'s difficulties.',
        srvClinicChildApproach2: '<strong>Parental Empowerment:</strong> We view parents as a child\'s primary resource, providing you with the tools to sustain positive growth at home.',
        srvClinicChildApproach3: '<strong>Relational Healing:</strong> Our therapeutic work prioritizes attachment and family bonds to create a secure foundation for healthy development.',
        srvClinicChildWorksTitle: 'How the Program Works',
        srvClinicChildWorks1: '<strong>Comprehensive Intake:</strong> Every family starts with a thorough evaluation led by a managing social worker to assess family dynamics, strengths, and goals.',
        srvClinicChildWorks2: '<strong>Custom Treatment Plans:</strong> Together with parents, we map out a personalized strategy tailored specifically to your child’s emotional needs.',
        srvClinicChildWorks3: '<strong>Coordinated Care:</strong> When necessary, we seamlessly integrate specialized therapeutic disciplines and professionals to build a comprehensive, multi-service plan.',
        srvClinicChildServicesTitle: 'Therapeutic Services',
        srvClinicChildServicesIntro: 'Our tailored, multi-disciplinary plans combine specific modalities to best support your family:',
        srvClinicChildServParentingTitle: 'Parenting Therapy',
        srvClinicChildServParentingDesc: 'An attachment-focused approach that empowers parents to understand their child\'s needs, navigate challenges, and lead family change with confidence.',
        srvClinicChildServDyadicTitle: 'Parent-Child (Dyadic) Therapy',
        srvClinicChildServDyadicDesc: 'Joint sessions for parents and children designed to strengthen relationships, improve communication, and build secure attachments.',
        srvClinicChildServCreativeTitle: 'Creative & Expressive Therapies',
        srvClinicChildServCreativeDesc: 'Safe environments for self-discovery and emotional expression using a child\'s natural language, including:',
        srvClinicChildServCreativeArt: 'Art Therapy',
        srvClinicChildServCreativeMusic: 'Music Therapy',
        srvClinicChildServCreativeDrama: 'Psychodrama',
        srvClinicChildServCreativePlay: 'Play Therapy',
        srvClinicChildCommTitle: 'Community Education & Support',
        teamAshiraName: 'Ashira Ofier',
        teamAshiraRole: 'Director & Clinical Team Manager of the Child-Parent Clinic',

        srvAdolescentsTitle: 'Adolescents',
        srvAdolescentsPara: 'Adolescence brings rapid changes and boundary-testing, often causing tensions between teens and parents. Teens may also struggle with issues like anxiety, depression, low self-esteem, or social challenges that they hesitate to share at home. Our clinic offers professional, affordable counseling by observant, bilingual (English/Hebrew) therapists. Using modalities like CBT, art/play therapy, and family counseling, we help teens navigate emotional struggles and build resilience in a safe, objective environment.',
        srvCouplesTitle: 'Couples & Parenting Guidance',
        srvCouplesPara: 'A healthy home starts with a strong partnership between parents. As families grow, marriage relationships can face increased stress, communication breakdowns, and recurring arguments. We offer professional couples therapy and parenting guidance to help spouses rebuild closeness, resolve conflicts, and acquire the practical communication skills needed to foster a peaceful, supportive household.',
        srvAdhdIncludesTitle: "Hakshiva's ADHD Support Services Include:",
        srvAdhdInc1Title: 'Intake & Personalized Plan',
        srvAdhdInc1Desc: 'A tailored management plan created by a Hakshiva expert after a thorough intake review.',
        srvAdhdInc2Title: 'Ongoing Support',
        srvAdhdInc2Desc: 'Continuous guidance, consistent communication, and professional advice throughout the process.',
        srvAdhdInc3Title: 'Cog-Fun Therapy',
        srvAdhdInc3Desc: 'Cognitive-Functional coaching to build executive functions, self-regulation, and perseverance.',
        srvAdhdInc4Title: 'Emotional Therapy',
        srvAdhdInc4Desc: 'Focused therapy to address emotional difficulties arising from attention and learning challenges.',
        srvAdhdInc5Title: 'Social Skills Development',
        srvAdhdInc5Desc: 'Social coaching to help children build healthy connections, self-regulate, and achieve social goals.',
        srvAdhdInc6Title: 'Learning & Homework Center',
        srvAdhdInc6Desc: 'Academic support to help students manage school tasks while developing key organizational skills.',
        srvAdhdInc7Title: 'School Collaboration',
        srvAdhdInc7Desc: 'Partnering with educational staff to ensure a positive and smooth school integration.',
        srvAdhdInc8Title: 'Staff Training & Workshops',
        srvAdhdInc8Desc: 'Professional workshops for teachers on classroom management and ADHD strategies.',
        srvAdhdInc9Title: 'Parent Workshops',
        srvAdhdInc9Desc: 'Focused parent workshops providing mutual support, guidance, and practical home strategies.',

        srvAdhdTitle: 'Comprehensive ADHD Support Center',
        srvAdhdPara1: 'ADHD affects learning, emotional regulation, and social connections. Our center views ADHD holistically, providing detailed intake planning, diagnostic referrals, and evidence-based Cognitive-Functional (Cog-Fun) therapy.',
        srvAdhdPara2: 'We guide children to build executive functions like perseverance and inhibition, provide parent coaching, and run tailored teen social coaching groups to help kids self-regulate and thrive.',
        srvAdhdBtn: 'Schedule Intake',

        srvTabSocialSkillsMentoring: 'Social Skills & Mentoring',
        srvSocialSkillsMentoringTitle: 'Social Skills & Mentoring',
        srvSocialSkillsMentoringSubtitle: 'Empowering every child to succeed.',
        srvSocialSkillsMentoringIntro: 'At Hakshiva, we believe healthy social relationships are the foundation for a productive, fulfilling life. Our Social Skills Coaching equips children with the essential tools to thrive socially, improve communication, and reach their full potential.',
        srvSocialSkillsMentoringCardDesc: 'We support children and teens facing social or emotional challenges by matching them with dedicated mentors and providing personalized one-on-one social skills coaching.',
        srvSocialSkillsMentoringCardHighlightsTitle: 'Program Offerings:',
        srvSocialSkillsMentoringCardHighlight1: 'One-on-One Mentoring (Emotional Support)',
        srvSocialSkillsMentoringCardHighlight2: 'In-School Mentoring (Academic Confidence)',
        srvSocialSkillsMentoringCardHighlight3: 'Social Thinking & Group Navigation Coaching',
        srvSocialSkillsMentoringCardHighlight4: 'Tailor-Made Social Skills Development Plans',

        srvMentoringTitle: 'The Power of Mentoring',
        srvMentoringIntro1: 'Adolescence can be challenging. Social pressures, academic demands, and sudden changes in emotions often leave children feeling overwhelmed—especially those facing additional challenges such as Aliyah, learning difficulties, or family instability.',
        srvMentoringIntro2: 'At Hakshiva, we believe no child should face these struggles alone. A caring mentor provides guidance, encouragement, and consistent support, helping children build confidence, strengthen relationships, and succeed both emotionally and academically.',
        srvMentoringProgTitle: 'Our Programs',
        srvMentoringOneTitle: 'One-on-One Mentoring',
        srvMentoringOneDesc: 'Focused on emotional well-being, this program pairs children with mentors for twice-weekly sessions built around the child’s interests. Whether through music, art, playing games or simply hanging out, children gain a safe and supportive space to grow.',
        srvMentoringOneSupportTitle: 'Personalized Support:',
        srvMentoringOneSupportDesc: 'Each match begins with an intake process with the parents to understand the child’s needs and goals.',
        srvMentoringOneSupervisionTitle: 'Professional Supervision:',
        srvMentoringOneSupervisionDesc: 'All mentoring relationships are guided by experienced program staff to ensure meaningful, positive growth.',
        srvMentoringSchoolTitle: 'In-School Mentoring',
        srvMentoringSchoolDesc: 'Our school-based mentors provide academic and emotional support directly within the school setting, helping students build confidence and succeed in the classroom.',
        srvMentoringSchoolCollabTitle: 'Collaborative Approach:',
        srvMentoringSchoolCollabDesc: 'We work closely with teachers and school counselors to create individualized support plans.',
        srvMentoringSchoolConfidenceTitle: 'Building Confidence Through Success:',
        srvMentoringSchoolConfidenceDesc: 'By strengthening academic skills and self-belief, we help students thrive academically, socially and emotionally.',
        srvMentoringAboutTitle: 'About Hakshiva',
        srvMentoringAboutDesc: 'At Hakshiva, we believe every child deserves a champion. Our mission is to provide the emotional and academic support children need to grow into confident, capable young adults. Through meaningful mentoring relationships, we help turn challenging years into a foundation for lifelong success.',
        srvMentoringMalkyName: 'Malky Meyers',
        srvMentoringMalkyRole: 'Program Director',
        srvMentoringMalkyDesc: 'Supervises the mentoring program services, coordinates matching processes, and oversees supervisor meetings to ensure high-quality mentoring relationships for local youth.',
        teamMalkyMeyersName: 'Malky Meyers',
        srvMentoringBtn: 'Schedule Intake',

        srvTeensTitle: 'Supporting Teens in Transition',
        srvTeensPara1: 'Adolescence is a time of immense change. While every teen faces academic and social pressure, many also navigate complex challenges like Aliyah, learning disabilities, or family instability.',
        srvTeensPara2: 'Hakshiva provides proactive intervention, offering the mentorship and stability needed during these pivotal years, and rehabilitates teens whose future is at risk.',
        srvTeensBtn: 'Schedule Intake',

        srvEducationTitle: 'Educational Services Department',
        srvEducationSubtitle: 'Every Child Deserves the Opportunity to Succeed',
        srvEducationBtn: 'Schedule Intake',

        srvMySpaceTitle: 'My Space – Afternoon Wrap-Around Program',
        srvHotlineTitle: 'The Educational Guidance Hotline',

        srvFamilyTitle: 'Family & Couples Relationship Support',
        srvFamilyIntro: 'Even strong, loving relationships encounter tough seasons. Whether you are navigating communication hurdles, striving to enrich your marriage, or looking to build a deeper connection with your children, Hakshiva is here to support you. We help couples and families break through obstacles to create collaborative, healthy, and thriving dynamics.',
        srvFamilyBtn: 'Schedule Intake',

        // Couples Therapy Section
        srvFamilyCouplesTitle: 'Couple’s Therapy',
        srvFamilyCouplesIntro: 'In our dynamic couples therapy sessions, you and your partner will work together to break through communication barriers and rebuild and deepen your connection.',
        srvFamilyCouplesB1Title: 'Break Negative Cycles',
        srvFamilyCouplesB1Desc: 'Unpack the recurring arguments and behavioral patterns holding your relationship back. Replace reactive habits with understanding.',
        srvFamilyCouplesB2Title: 'Enhance Intimacy',
        srvFamilyCouplesB2Desc: 'Create a safe, non-judgmental space to heal emotional distance and regain trust and affection.',
        srvFamilyCouplesB3Title: 'Communicate with Purpose',
        srvFamilyCouplesB3Desc: 'Learn practical tools to resolve conflict constructively and build a stronger, happier partnership.',

        // Parenting Section
        srvFamilyParentingTitle: 'Parenting Guidance & Therapy',
        srvFamilyParentingIntro: "Parenting doesn’t come with a manual, but you don't have to figure it out alone. We provide parents with practical strategies and compassionate support to navigate behavioral challenges and create a calmer, more connected home.",
        srvFamilyParentingB1Title: 'Break Stressful Patterns',
        srvFamilyParentingB1Desc: 'Shift away from daily power struggles and reactivity toward calm, confident parenting.',
        srvFamilyParentingB2Title: 'Understand Your Child',
        srvFamilyParentingB2Desc: 'Gain insight into your child’s emotional and behavioral needs so you can respond with clarity instead of frustration.',
        srvFamilyParentingB3Title: 'Unite Your Parenting Team',
        srvFamilyParentingB3Desc: 'Align on discipline, boundaries, and daily routines so both parents are on the same page.',

        // Why Choose Section
        srvFamilyWhyTitle: 'Why Choose Hakshiva?',
        srvFamilyWhyIntro: 'Our team provides professional care uniquely tailored to your lifestyle and values.',
        srvFamilyWhyB1Title: 'Qualified Experts',
        srvFamilyWhyB1Desc: 'Licensed, skilled, and experienced therapists utilizing a wide variety of effective treatment methods.',
        srvFamilyWhyB2Title: 'Cultural & Halachic Sensitivity',
        srvFamilyWhyB2Desc: 'Deep community understanding with specialized knowledge of halachic issues and religious backgrounds.',
        srvFamilyWhyB3Title: 'Strict Confidentiality',
        srvFamilyWhyB3Desc: 'Uncompromising commitment to protecting your privacy and maintaining total discretion.',

        srvOlimTitle: 'A Warm Home & Academic Support for New Olim Students',
        srvOlimIntro1: 'Making Aliya to Israel can bring significant upheaval and changes for children. The language, curriculum, cultural mentality, and study habits are vastly different from their country of origin.',
        srvOlimIntro2: 'Recognizing the very real challenges faced during the initial years of Aliyah, Hakshiva has served as an anchor and a safe haven for Olim students in schools since 2018.',
        srvOlimPillar1Title: 'Individualized Accompaniment',
        srvOlimPillar1Desc: 'Around 50 students enjoy two hours of weekly, one-on-one learning within school, led by a remedial teacher who serves as both an emotional and academic anchor.',
        srvOlimPillar2Title: 'Emotional Support System',
        srvOlimPillar2Desc: 'Dedicated gatherings for the students and their families, providing a containing, embracing, and tailored response to the challenges of Aliyah.',
        srvOlimPillar3Title: 'Our Goal',
        srvOlimPillar3Desc: 'A smooth and optimal integration of the students into the education system, while creating a stable and secure foundation for the entire family.',
        srvOlimBtn: 'Schedule Intake',

        principlesTag: 'Our Pillars',
        principlesTitle: 'Our Guiding Principles',
        principlesDesc: 'At Hakshiva, we believe in a holistic, warm, and highly professional approach. These principles guide our work with every child, teen, and family.',
        principle1Title: 'Empathy & Understanding',
        principle1Desc: 'Healing begins with being truly heard. We build a safe, non-judgmental relationship with every client.',
        principle2Title: 'Collaborative Guidance',
        principle2Desc: 'We work together with you and your family to create a personalized support plan, mapping out clear and manageable steps.',
        principle3Title: 'Outcome-Focused Progress',
        principle3Desc: 'We focus on real-world positive changes, ensuring our therapies make a meaningful difference in daily life.',
        principle4Title: 'Compassionate Expertise',
        principle4Desc: 'Our licensed therapists and coaches bring both clinical excellence and deep personal care to support your journey.',
        principle5Title: 'Individualized Care',
        principle5Desc: 'Every person is unique. We customize our clinical treatments for all our programs to fit individual needs.',
        principle6Title: 'Community Integration',
        principle6Desc: 'We collaborate with schools, parents, and community resources to surround each individual with a complete network of care.',

        replayTag: 'Updates & News',
        replayDesc: 'Stay up to date with our community work, awards, and upcoming professional programs.',
        replaySidebarTitle: 'Latest Announcements',
        story1Date: 'December 18, 2025',
        story1Title: 'My Space',
        story1Desc: 'A unique program designed for adolescent girls, helping them with their homework and engaging after-school activities in a warm, supportive environment.',
        story2Date: 'December 14, 2025',
        story2Title: 'ADHD parenting workshop',
        story2Desc: 'Empowering parents with practical tools, strategies, and clinical insights to support children facing attention and executive function challenges.',
        story3Date: 'December 9, 2025',
        story3Title: 'Cog Fun',
        story3Desc: 'Our next cohort for Cognitive-Functional training is open, helping children build executive functions and self-regulation skills.',
        storyLink: 'Read article',

        contactTag: 'Get in Touch',
        contactTitle: 'We Are Here to Listen',
        contactDesc: 'Have questions? Want to schedule an intake or learn more about volunteering? Reach out to our compassionate team today.',
        contactAddressTitle: 'Our Clinic Location',
        contactAddressDetail: 'Nachal Sorek 14<br>Ramat Beit Shemesh Alef<br>Israel',
        contactPhoneTitle: 'Call Our Office',
        contactPhoneDetail: '02-992-5152<br>(Intake / General Enquiries)',
        contactEmailTitle: 'Email Enquiries',
        contactEmailDetail: 'office@hakshiva.org',
        contactFormTitle: 'Send a Message',
        formName: 'Full Name',
        formEmail: 'Email Address',
        formPhone: 'Phone Number',
        formSubject: 'How Can We Help You?',
        formSubjectOpt1: 'Therapy Intake Request',
        formSubjectOpt2: 'ADHD Support Center',
        formSubjectOpt3: 'Mentoring Inquiry',
        formSubjectOpt4: 'General Enquiry / Donation Question',
        formSubjectOpt5: 'Olim Integration Support',
        formMsg: 'Your Message',
        formSubmit: 'Send Request',

        donateTag: 'Make a Difference',
        donateTitle: 'Support the Future of Our Children',
        donateDesc: 'Your Tax-deductible donation directly supports our ability to bring the best of care throughout our programs! Help us build a resilient community.',
        donateTaxBadge1: 'US (501c3) Tax Exempt',
        donateTaxBadge2: 'UK Tax Exempt',
        donateTaxBadge3: 'Israel (Section 46) Exempt',
        tier1Amt: '$36',
        tier1Impact: 'Provides 1 hour of warm drop-in teen center meals',
        tier2Amt: '$100',
        tier2Impact: 'Funds a mentor-student activity kit and materials',
        tier3Amt: '$250',
        tier3Impact: 'Subsidizes 2 professional therapy clinic sessions',
        tier4Amt: '$500',
        tier4Impact: 'Supports a child\'s complete ADHD Cog-Fun program',
        tierBtn: 'Donate',

        donatePageTitle: 'Support the Future of Our Children',
        donatePageDesc: 'As a registered non-profit organization, Hakshiva is dependent on the generosity of our community. Your donation allows us to continue our work with children and families in crisis.',
        donateTabUsa: 'USA',
        donateTabUk: 'UK',
        donateTabIsrael: 'Israel',
        donateLinkUsa: 'US Donations',
        donateLinkEnglish: 'UK Donations',
        donateLinkIsrael: 'Israel Donations',
        aboutHeroCategory: 'Who We Are',
        aboutHeroTitle: 'About Hakshiva',
        aboutHeroDesc: 'Hakshiva is a dedicated support center in Beit Shemesh committed to helping youth and their families thrive. We believe that every child deserves a path forward, which is why we provide professional guidance, academic assistance, and emotional resources to help youth overcome life’s challenges. Recognizing that a child\'s success is deeply rooted in the home, we wrap our care around the entire family—equipping both children and parents with the tools to build strong foundations. Together, we are working toward a community where every child is empowered, every family is supported, and no youth is left behind.<br><br>Strengthening our Families - Offering compassionate, expert, and comprehensive support to enable every family member to thrive academically, socially, and emotionally.',
        aboutHeroBtn: 'Get Support Today',
        aboutBgTitle: 'Organizational Background',
        aboutBgPara1: 'Hakshiva is an Israeli NGO dedicated to developing and implementing comprehensive, holistic support services for youth and families. Our unique, integrative approach bridges the gap between community members, educators, and mental health professionals to facilitate systemic healing and personal growth for both parents and children.',
        aboutBgPara2: 'Currently embracing over 700 families and struggling youth in Ramat Beit Shemesh, Hakshiva provides targeted interventions in teen services, therapeutic solutions, mentoring/social skills, and educational assistance',
        aboutNeedTitle: 'Vision Statement',
        aboutNeedPara1: 'A community where every child is empowered, every family is supported, and no youth is left behind',
        aboutNeedPara2: '',
        aboutMissionTitle: 'Mission Statement',
        aboutMissionPara1: 'Hakshiva empowers youth and their families to overcome academic, social, and emotional challenges. Through professional guidance, therapy, and compassionate support, we provide children and parents with the resources needed to build strong foundations and realize their full potential',
        aboutMissionPara2: '',
        aboutScopeTitle: 'Scope of Programming',
        aboutScopeDesc: 'To discover more about our services, click <a href="index.html#services" style="color: var(--accent-orange); text-decoration: underline;">here</a>.',
        aboutCardMentoringTitle: 'Mentoring',
        aboutCardMentoringDesc: 'Mentors are trained, monitored role models matched to each child\'s specific needs, providing in-school and after-school support twice a week.',
        aboutCardEduTitle: 'Educational Services',
        aboutCardEduDesc: 'Academic success and emotional well-being are linked. We feature a homework center with special-education teachers supporting homework help, tutoring, and Hebrew language integration.',
        aboutCardTeensTitle: 'Teen Center',
        aboutCardTeensDesc: 'A safe, non-judgmental drop-in center for over 200 at-risk teens. Under professional guidance, teens set personal goals, build self-confidence, and reconnect with their families and community.',
        aboutCardClinicTitle: 'Therapy Clinic',
        aboutCardClinicDesc: 'Our clinical team includes 10 social workers and psychologists. We provide over 1,000 individual therapy sessions annually in Hebrew and English, heavily involving parents in the process.',
        aboutLearnMore: 'Learn More &rarr;',
        donateUsaTitle: 'US Dollar Donations',
        donateUsaTax: 'Donations to Hakshiva are tax deductible in the USA under 501(c)(3).',
        donateCheckPayable: 'To donate by check, make payable to:',
        donateOnlineBtn: 'Donate Online (USD)',
        donateUkTitle: 'UK Donations',
        donateUkTax: 'Donations to Hakshiva are tax-deductible in the UK. Support us securely using Stripe.',
        donateIlTitle: 'Israeli Shekel Donations',
        donateIlTax: 'Donations to Hakshiva are tax deductible in Israel under Section 46 (סעיף 46).',
        donateBankTitle: 'Bank Transfer Details:',
        donateBankName: 'Bank: Bank Pagi (בנק פאג"י)',
        donateBankBranch: 'Branch: 179',
        donateBankAcct: 'Account: 525383',
        donateBankPayee: 'Pay payee: Hakshiva Leyaldei Yisrael',
        donateCheckTitle: 'Check Donations (ILS):',
        donateCheckPayableILS: 'Make payable to: Hakshiva Leyaldei Yisrael',
        donateCheckAddress: 'Mail to: Nachal Sorek 14, Ramat Beit Shemesh',
        donateCcBtn: 'Donate by Credit Card (Nedarim Plus)',
        donateOtherCurrencies: 'To donate in other currencies, please call the office at 02-992-5152 or email office@hakshiva.org',

        footerBrandDesc: 'Our Vision: A community where every child is empowered, every family is supported, and no youth is left behind.',
        footerColLinks: 'Quick Links',
        footerColSrv: 'Our Services',
        footerLinkAbout: 'About Us',
        footerCopyright: '© 2026 Hakshiva. All rights reserved. Registered non-profit organization.',
        footerAddress: 'Nachal Sorek 14<span class="desktop-comma">, </span><br class="mobile-only-br">Ramat Beit Shemesh A<span class="desktop-comma">, </span><br class="mobile-only-br">Israel 9909118',
        footerPhone: '02-992-5152',
        footerWhatsapp: 'WhatsApp Chat',
        
        teamTag: 'COMPASSIONATE CARE',
        teamTitle: 'Meet Our Professional Team',
        teamDesc: 'Our dedicated staff of licensed therapists, educators, and counselors are here to help children, teens, and families navigate emotional and academic challenges.',
        teamCeoName: 'Rabbi Amatsia Spigler',
        teamCeoRole: 'CEO',
        teamEdName: 'Rabbi Dovid Sipper',
        teamEdRole: 'Executive Director',
        teamTeenName: 'Yossi Wachtel',
        teamTeenRole: 'Deputy CEO and Director of Teen Services',
        teamJoyName: 'Joy Epstein',
        teamJoyRole: 'Director of Couples & Family Therapy',
        teamCarolineName: 'Dr. Caroline Peyser',
        teamCarolineRole: 'Clinical Supervisor',
        teamAdiName: 'Adi Kahn',
        teamAdiRole: 'Head Director of Hakshiva Therapy Services',

        teamRivkaName: 'Rivka Gross',
        teamRivkaRole: 'Office Manager & Case Manager',
        teamMalkyName: 'Malky Cohn',
        teamMalkyRole: 'Finance Manager',
        boardTitle: 'Board of Directors',
        boardMembers: 'Yosef Jason (Chairman) | Rabbi Avraham Wellins | Dr. Fred Naider | Nesanel Goode | Baruch Dvinsky',
        rabbinicTitle: 'Rabbinic Advisor',
        rabbinicMembers: 'Rabbi Elimelech Kornfeld',
        
        srvTabSocialSkills: 'Social Skills Program',
        srvSocialSkillsDesc: 'We equip children and adolescents with the practical tools they need to build healthy connections, communicate effectively with peers, and thrive in group settings. Our supportive environment helps young people unlock their full social potential and build lasting self-confidence.',
        srvSocialSkillsHighlightTitle: 'Key Areas of Support:',
        srvSocialSkillsHighlight1: 'Tailored one-on-one guidance for your child\'s unique needs.',
        srvSocialSkillsHighlight2: 'Teaching the cognitive concepts behind interactions.',
        srvSocialSkillsHighlight3: 'Developing practical tools to make and keep friends.',
        srvSocialSkillsHighlight4: 'Navigating classrooms and group settings comfortably.',
        srvSocialSkillsTitle: 'Social Skills Programs',
        srvSocialSkillsSubtitle: 'Empowering every child to succeed.',
        srvSocialSkillsIntro: 'At Hakshiva, we believe healthy social relationships are the foundation for a productive, fulfilling life. Our Social Skills Coaching equips children with the essential tools to thrive socially, improve communication, and reach their full potential.',
        srvSocialSkillsApproachTitle: 'Our Approach: Social Thinking',
        srvSocialSkillsApproachDesc1: 'Our framework goes beyond surface-level actions to teach the “why” behind social behaviour. By focusing on Social Thinking, we help children understand the connection between thoughts, feelings, and actions. Our coaches translate abstract social concepts into concrete, actionable skills, helping kids navigate group settings, build lasting friendships, and manage complex peer dynamics.',
        srvSocialSkillsApproachDesc2: 'Each program begins with a comprehensive assessment—including parent/teacher consultations and social observations—to create a tailor-made treatment plan. Supervised by clinical experts and backed by overwhelmingly positive feedback, our goal is to facilitate lasting social success.',
        srvSocialSkillsOutcomesTitle: 'Through personalized one-on-one coaching for boys and girls ages 5+, we empower them to:',
        srvSocialSkillsOutcome1Title: 'Build',
        srvSocialSkillsOutcome1Desc: 'Build healthy, lasting friendships.',
        srvSocialSkillsOutcome2Title: 'Navigate',
        srvSocialSkillsOutcome2Desc: 'Navigate group settings with confidence.',
        srvSocialSkillsOutcome3Title: 'Understand',
        srvSocialSkillsOutcome3Desc: 'Understand the connection between thoughts, feelings, and actions.',
        srvSocialSkillsOutcome4Title: 'Develop',
        srvSocialSkillsOutcome4Desc: 'Develop a tailor-made plan for long-term success.',
        teamMalkyMeyersRole: 'Mentoring & Social Skills Program Director',
        srvClinicCoreTitle: 'Our Core Specialized Services:',
        srvClinicCore1: 'Personalized one-on-one therapy',
        srvClinicCore2: 'Dedicated treatment for anxiety, depression, trauma, and other conditions',
        srvClinicCore3: 'Experienced, culturally sensitive, observant therapists.',
        srvSocialSkillsCoreTitle: 'Key Areas of Support:',
        srvSocialSkillsCore1: 'Tailored One-on-one guidance for your child\'s unique needs.',
        srvSocialSkillsCore2: 'Teaching the underlying cognitive concepts behind social interactions.',
        srvSocialSkillsCore3: 'Developing practical skills to form and maintain lasting peer connections.',
        srvSocialSkillsCore4: 'Building the confidence to comfortably navigate classrooms and social/group settings.',
        srvTeensOfferTitle: 'Our Teen Drop-In Centers',
        srvTeensOffer1: 'Safe Social Spaces: Language-accessible (English/Hebrew) and gender-separate environments featuring recreation rooms and lounge areas.',
        srvTeensOffer2: 'Active Mentorship: Trained madrichim serve as positive role models, offering both casual support and structured, goal-oriented guidance.',
        srvTeensOffer3: 'Community Advocacy: We act as professional and often vital liaisons between teens and their families, schools, and municipal authorities (Welfare, Police, and Education).',
        srvTeensOffer4: 'Clinical Oversight: All staff and participants are supported by a dedicated social worker from our therapy clinic.',
        srvEducationList1: 'In school educational programs',
        srvEducationList2: 'Homework and enrichment center (MySpace)',
        srvEducationList3: 'Remedial educational support',
        srvEducationList4: 'Parent workshops and programs',
        srvTeensOfferSubtitle: 'Located in Ramat Bet Shemesh, our centers serve as a safe, supervised "third space" for teens to decompress and connect.',
        srvFamilyPara3: 'Couple’s therapy is a method of therapy with the intention to help couples improve and deepen their relationship. It is dynamic and includes both partners in the therapeutic process. Couples seek therapy for many reasons including feeling stuck in behavioral patterns that are dysfunctional for their relationship, negative views of the relationship or partner, emotional or intimacy avoidance, and communication challenges. Therapy encourages the couple to work collaboratively towards a healthier and happier marriage.',
        srvFamilyPara4: 'Relationships can be challenging, even when both partners are fully committed and have the best of intentions. If you and your partner are going through a phase with increased problems or struggles, or even if you just want to strengthen your relationship with one another, or build that all-important relationship with your children, you may benefit from couples counselling and / or parent.',
        srvHotlinePoint1: 'Resolves dilemmas in the "Golden Triangle" between parents, teachers, and children.',
        srvHotlinePoint2: 'Assists parents feeling unsure about classroom integration or overwhelmed by school meetings.',
        srvHotlinePoint3: 'Offers free consultation calls to guide you on the support your child needs.',
        srvHotlineContactBtn: 'Contact Us',
        srvMySpaceSubtitle: 'Built upon two core pillars:',
        srvMySpacePillar1Title: '<span style="color: var(--accent-orange);">1.</span> Academic Success',
        srvMySpacePillar1Desc: 'One hour of dedicated support for homework completion, test preparation, and academic strengthening.',
        srvMySpacePillar2Title: '<span style="color: var(--accent-orange);">2.</span> Personal & Emotional Growth',
        srvMySpacePillar2Desc: 'One hour of experiential workshops focusing on emotional development, social skills, and building vital life resilience.',
        srvOlimPoint1: '<strong>The Challenge:</strong> Aliyah brings upheaval for children navigating differences in language, curriculum, culture, and study habits.',
        srvOlimPoint2: '<strong>The Anchor:</strong> For over 8 years, Hakshiva has provided a safe haven in schools to ease this transition.',
        srvOlimPoint3: '<strong>Individualized Accompaniment:</strong> Around 50 students receive two hours of weekly, one-on-one in-school learning with a remedial teacher for academic and emotional support.',
        srvOlimPoint4: '<strong>Emotional Support:</strong> Dedicated gatherings for students and families offer tailored responses to immigration challenges.',
        srvOlimPoint5: '<strong>Our Goal:</strong> Smooth integration into the education system while building a stable foundation for the entire family.',
        srvWorkshopsTitle: 'Parents\' Workshops and Lectures',
        srvWorkshopsPoint1: '<strong>Our Belief:</strong> Parents are the primary influencers on a child’s life and education.',
        srvWorkshopsPoint2: '<strong>Our Service:</strong> We offer practical online webinars to give parents actionable tools for guiding their families.',
        srvWorkshopsPoint3: '<strong>Next Steps:</strong> Follow our publications to register for upcoming webinars packed with practical knowledge.',
        srvClinicChildCommDesc: 'Outreach programs, workshops, and seminars for parents and educators to raise mental health awareness and reduce stigma.',
        srvClinicAshiraBio: '<strong>Ashira Ofier</strong>, a B.A. in Psychology and Interdisciplinary Studies in the Humanities and Social Sciences and a M.S.W. (Master of Social Work), specializing in Child and Family Therapy, is our Clinical Team Manager. She conducts intake assessments for incoming families, ensures precise therapist placement, and manages clinical coordination. She leads staff meetings and provides clinical supervision to maintain high-quality care across the clinic.',
        srvSocialSkillsMalkyBio: 'Malky Meyers, our program director, dedicates her career to empowering youth and families through compassionate guidance and impactful development programs. She designs and oversees key initiatives, including youth mentoring, social skills training, and one-on-one tutoring. Drawing on years of educational experience and a master\'s degree in curriculum development, Mrs. Meyers equips families with practical strategies to achieve long-term growth and thrive.',
        srvTeensYossiBio: '<strong>Yossi Wachtel</strong>, our senior director, dedicates his career to community growth and structured development through a mission-driven approach. Over nearly two decades at Hakshiva, he has combined strategic management with deep, hands-on expertise in supporting teens and families. Drawing on a B.Ed. in Special Education and an MBA, Yossi ensures our initiatives achieve impactful, long-term success.',
        srvFamilyJoyBio: '<strong>Joy Epstein, MSW</strong>, Clinical Director of the Couples and Parenting Unit. Bringing over 40 years of clinical psychotherapeutic experience across Israel’s public and private sectors, Joy Epstein dedicates her career to helping individuals, couples, and families heal and transform their relationships. Holding a Master’s in Social Work (MSW) and advanced specialized training in Couples and Family Therapy, her work stems from the fundamental belief that everyone has the capacity for deep personal growth. As Clinical Director at Hakshiva, Joy oversees initial intake assessments to precisely match couples with the ideal therapist while providing weekly clinical supervision to ensure the highest standard of compassionate care.',
        srvTeensAdiBio: '<strong>Adi Kahn, LCSW</strong>, Executive Director of the Hakshiva Therapy Center & Individual Therapist. Driven by a deep passion for community care since making Aliyah over two decades ago, Adi Kahn focuses on meeting the evolving mental health needs of the community. Recognizing a critical gap in local services before mental health awareness was widespread, she founded the clinic and has built it into a gold-standard facility. Adi is dedicated to maintaining the highest level of professionalism while preserving the deep heart and compassion that sparked the organization, considering it a true privilege to live in and serve her community. Adi is also the director of all therapy services at Hakshiva.',
        srvOlimNechamaBio: '<strong>Nechama Pessi Jarmisch, B.Ed.</strong>, Director of Educational and Olim Services. Bringing over a decade of leadership in educational development and student advocacy, Nechama Pessi Jarmisch specializes in creating tailored solutions for children, teenagers, and families. She holds a Bachelor’s degree in Education and Special Education, with extensive expertise in supporting immigrant students (Olim), as well as individuals navigating ADHD and learning disabilities. Nechama leads the development of educational programs based on a holistic approach, championing collaboration between families, schools, and professionals to foster growth and success.',
    },
    he: {
        dir: 'rtl',
        navHome: 'בית',
        navAbout: 'אודותינו',
        navWhatWeDo: 'הפעילויות שלנו',
        navTeam: 'הצוות שלנו',
        navNews: 'חדשות',
        navContact: 'צור קשר',
        navDonate: 'תרומה עכשיו',
        
        heroTagline: 'דואגים לקהילה שלנו',
        heroTitle: 'מענה טיפולי ומסור <span class="text-gradient">לכל קושי ומשבר</span>',
        heroDesc: 'בין אם משפחתכם מתמודדת עם קשיים נפשיים, רגשיים או אתגרי חיים – המומחים המסורים שלנו כאן כדי ללוות אתכם.',
        heroBtnContact: 'לקבלת תמיכה',
        
        statsYearsVal: '20+',
        statsYearsLbl: 'שנות פעילות',
        statsYearsDesc: 'מעצימים את נוער בית שמש משנת 2005.',
        statsFamiliesVal: '5000+',
        statsFamiliesLbl: 'משפחות שנעזרו',
        statsFamiliesDesc: 'משקמים קשרים ובונים עתיד בריא ויציב יותר.',
        statsMentorsVal: '500+',
        statsMentorsLbl: 'מקרים פעילים בטיפול בכל זמן נתון',
        statsMentorsDesc: 'מעניקים ליווי ומענה מקצועי רציף.',
        statsYouthVal: '6',
        statsYouthLbl: 'ימים בשבוע',
        statsYouthDesc: 'מרכז נוער פתוח',

        supportTag: 'מוקדי המענה שלנו',
        supportTitle: 'בלב הדאגה והטיפול שלנו',
        supportDesc: 'בהקשיבה, השירותים שלנו מותאמים אישית לכל אחד ואחת, תוך התחשבות ברקע התרבותי והלשוני הייחודי של הקהילה שלנו.',
        supportKidsTitle: 'ילדים',
        supportKidsDesc: 'טיפול רגשי, חונכות, קבוצות מיומנויות חברתיות וליווי לימודי המעניקים לילדים בסיס איתן לחיים מאושרים.',
        supportTeensTitle: 'מתבגרים',
        supportTeensDesc: 'מרכזי נוער, תמיכה רגשית וחלל פתוח המהווה מרחב מוגן ונטול שיפוטיות עבור הנוער.',
        supportOlimTitle: 'עולים חדשים',
        supportOlimDesc: 'תמיכת שילוב ייעודית המסייעת למשפחות עולים להסתגל חברתית ורגשית למקום מגוריהם החדש.',
        supportParentsTitle: 'הורים וזוגות',
        supportParentsDesc: 'סדנאות הדרכת הורים וטיפול זוגי לבניית יסודות משפחתיים חזקים, בריאים ותומכים.',
        supportLearnMore: 'למידע נוסף',

        serviceTag: 'טיפול מקצועי',
        serviceTitle: 'התוכניות הייחודיות שלנו',
        serviceDesc: 'הכירו את מגוון השירותים המקצועיים שאנו מעמידים לרשות הילדים והמשפחות כדי לסייע להם לצמוח ולהצליח.',
        
        srvTabClinic: 'קליניקה טיפולית',
        srvTabChildParentClinic: 'מרפאת הורים וילדים (גילאי 6-12)',
        srvTabTeensTherapy: 'טיפול במתבגרים',
        srvTabAdhd: 'מרכז קשב וריכוז',
        srvTabMentoring: 'חונכות וליווי',
        srvTabTeens: 'מרכז הנוער',
        srvTabEducation: 'שירותי חינוך',
        srvTabEducationMySpace: "מועדונית 'המקום שלי'",
        srvTabEducationHotline: "קו חם לייעוץ והכוון",
        srvTabFamily: 'תמיכה זוגית והדרכה משפחתית',
        srvTabOlim: 'שירותי קליטת עלייה',

        srvClinicDesc: 'אנו מספקים מענה טיפולי פסיכולוגי מקצועי ורגיש ביותר בסביבה חמה ומזמינה. העובדים הסוציאליים והפסיכולוגים המוסמכים שלנו, הדוברים עברית ואנגלית כאחד, מסורים לתמיכה ברווחתכם הרגשית ובתהליך הריפוי וההחלמה שלכם.',
        srvClinicHighlightTitle: 'שירותי הליבה המומחים שלנו:',
        srvClinicHighlight1: 'טיפול פרטני ומותאם אישית (אחד-על-אחד)',
        srvClinicHighlight2: 'מענה ייעודי בחרדה, דיכאון, טראומה וכדומה',
        srvClinicHighlight3: 'מטפלים מנוסים, דו-לשוניים, רגישים תרבותית ושומרי מצוות.',
        
        srvAdhdDesc: 'קשיי קשב וריכוז עלולים להשפיע על החיים הלימודיים, החברתיים והרגשיים. המרכז שלנו מספק אבחון טיפולי, הדרכה וכלים מותאמים כדי לעזור לילדים ובני נוער לפרוח.',
        srvAdhdHighlightTitle: 'מתודולוגיית ה-ADHD שלנו:',
        srvAdhdHighlight1: 'אימון קוגניטיבי-תפקודי (Cog-Fun)',
        srvAdhdHighlight2: 'בניית תפקודים ניהוליים ומיומנויות למידה',
        srvAdhdHighlight3: 'אימון והדרכת הורים לילדי קשב וריכוז',
        srvAdhdHighlight4: 'תוכניות ליווי ממוקדות לבני נוער',
        
        srvMentoringDesc: 'כאחת היוזמות הוותיקות ביותר שלנו, תוכנית זו מעניקה תמיכה חיונית לבני נוער המתמודדים עם אתגרים חברתיים או רגשיים. אנו מחברים ילדים ובני נוער עם חונכים בוגרים ומסורים, שעברו הכשרה מקיפה, המשמשים כמודל חיובי לחיקוי, כאוזן קשבת וכמדריכים יציבים לדרך.',
        srvMentoringHighlightTitle: 'אפשרויות חונכות:',
        srvMentoringHighlight1: 'חונכות בתוך כותלי בית הספר (לחיזוק הביטחון)',
        srvMentoringHighlight2: 'ליווי ותמיכה בקהילה לאחר שעות הלימודים',
        srvMentoringHighlight3: 'הכוון אישי ומכוון מטרות',
        srvMentoringHighlight4: 'בניית קשרים חיוביים ארוכי טווח',
        
        srvTeensDesc: 'מרכזי הנוער הייעודיים שלנו מציעים לנוער בבית שמש סביבה בטוחה, חמה ובלתי פורמלית להתחברות. בני הנוער יכולים לעסוק בפעילויות פנאי, לפגוש חברים ולשוחח עם יועצי רחוב ונוער מקצועיים באווירה נינוחה ומקבלת.',
        srvTeensHighlightTitle: 'מה שאנו מציעים:',
        srvTeensHighlight1: 'מרחב מוגן ובטוח המיועד למפגש חברתי, פנאי ורגיעה.',
        srvTeensHighlight2: 'גישה ומענה רציף מצד צוות מדריכי רחוב ונוער מקצועי.',
        srvTeensHighlight3: 'סדנאות אינטראקטיביות הממוקדות בפיתוח כישורי חיים מעשיים.',
        srvTeensHighlight4: 'התערבות במצבי משבר ושירותי הפניה לגורמי טיפול מוסמכים.',
        
        srvEducationDesc: 'אנו מסייעים לבני נוער להתגבר על מחסומים לימודיים ולנווט במסעם האקדמי בביטחון. הצוות שלנו מציע תמיכה לימודית פעילה בבתי הספר ובאמצעות מרכז הלמידה שלנו, ומקדם מענה חינוכי מותאם.',
        srvEducationHighlightTitle: '',
        srvEducationHighlight1: 'תוכניות חינוכיות בתוך בתי הספר',
        srvEducationHighlight2: 'מרכז למידה והעשרה (מועדונית "המקום שלי")',
        srvEducationHighlight3: 'תמיכה וליווי בחינוך מיוחד ומקדם',
        srvEducationHighlight4: 'סדנאות ותוכניות להורים',
        
        srvFamilyDesc: 'אנו מציעים טיפול ייעודי להדרכת הורים, ייעוץ נישואין וסדנאות כדי לסייע לזוגות לתקשר בצורה יעילה, לפתור אתגרי משפחה וליצור בית חם ומטפח עבור ילדיהם.',
        srvFamilyHighlightTitle: 'תחומי תמיכה במשפחה:',
        srvFamilyHighlight1: 'טיפול זוגי ומשפחתי',
        srvFamilyHighlight2: 'סדנאות הורים מעצימות',
        srvFamilyHighlight3: 'ייעוץ וליווי לשילוב במשפחות מורכבות',
        srvFamilyHighlight4: 'התערבות במשברים והכוון משפחתי',

        srvClinicTitle: 'קליניקה טיפולית נגישה ומקצועית',
        srvClinicPara1: 'אנו מעניקים טיפול רגשי מקצועי בסביבה חמה, תומכת ונגישה. הקליניקה שלנו מאוישת על ידי פסיכולוגים ועובדים סוציאליים מוסמכים, דוברי עברית ואנגלית, בעלי רגישות תרבותית עמוקה לציבור הדתי והחרדי.',
        srvClinicPara2: 'אנו מציעים טיפול מותאם אישית לקשיים כגון דימוי עצמי נמוך, חרדה, דיכאון, קשיים חברתיים, התפרצויות כעס ומשברים משפחתיים, תוך שימוש בשיטות מגוונות כגון CBT, טיפול באמנות/משחק וייעוץ משפחתי לבניית חוסן רגשי.',
        srvClinicBtn: 'תיאום שיחת פגישה',

        srvTeensTherapyCategory: 'קליניקה טיפולית מקצועית ונגישה',
        srvTeensTherapyTitle: 'מתבגרים',
        srvTeensTherapyDescParagraph: 'גיל ההתבגרות מביא עמו שינויים מהירים ובחינת גבולות, שלעיתים קרובות גורמים למתחים בין בני הנוער להוריהם. מתבגרים עשויים להתמודד גם עם קשיים כגון חרדה, דיכאון, דימוי עצמי נמוך או אתגרים חברתיים שהם מהססים לשתף בבית. הקליניקה שלנו מציעה ייעוץ מקצועי ונגיש על ידי מטפלים שומרי מצוות, דו-לשוניים (אנגלית/עברית). אנו עוזרים לבני נוער לנווט במאבקים רגשיים ונפשיים ולבנות חוסן בסביבה בטוחה ואובייקטיבית.',
        srvTeensTherapyIntro: 'הקליניקה הביתית של הקשיבה מציעה ייעוץ מקצועי ונגיש המותאם לפעימות הלב הייחודיות של קהילת בית שמש.',
        srvTeensTherapyBullet1Title: 'התאמה תרבותית',
        srvTeensTherapyBullet1Desc: 'המטפלים שלנו, שומרי מצוות ודוברי עברית ואנגלית, מבינים את אורח החיים והערכים של משפחתכם.',
        srvTeensTherapyBullet2Title: 'מגוון רחב של טיפולים',
        srvTeensTherapyBullet2Desc: 'אנו מטפלים בקשיים כגון דימוי עצמי נמוך, חרדה, דיכאון, קשיים חברתיים, קונפליקטים בין-אישיים, התפרצויות כעס וקשיים משפחתיים.',
        srvTeensTherapyBullet3Title: 'גישות מותאמות אישית',
        srvTeensTherapyBullet3Desc: 'אנו משתמשים במגוון שיטות טיפול כגון טיפול דינמי, CBT וטיפול משפחתי.',
        srvTeensTherapyBullet4Title: 'אימפקט קהילתי',
        srvTeensTherapyBullet4Desc: 'הצוות המסור שלנו המונה למעלה מ-12 מטפלים מודרכים באופן מלא תומך בגאווה בלמעלה מ-150 בני נוער ומשפחות מקומיות.',
        srvTeensTherapyConclusion: 'יש לנו למעלה מ-12 מטפלים המעניקים שירות ליותר מ-150 בני נוער ומשפחותיהם בכל זמן נתון. פעילות זו מלווה ומודרכת מקצועית על ידי המנהל הקליני והמדריך הקליני שלנו.',
        srvTeensTherapyAvailableTitle: 'התמיכה זמינה עבורכם',
        srvTeensTherapyAvailableDesc: 'הצעד הראשון עשוי להיראות מרתיע, אך משפחות אינן חייבות לעבור את התקופה הזו לבד. צרו קשר עם הקליניקה עוד היום ומצאו את התמיכה המתאימה.',

        srvClinicChildTitle: 'טיפול בילדים בגילאי 6–12',
        srvClinicChildDesc1: 'השנים שבין גיל 6 ל-12 הן תקופה של מעבר עמוק. כאשר ילדים מתמודדים עם דרישות לימודיות גוברות, קשרים חברתיים משתנים ועצמאות גדלה, הם נתקלים לעיתים קרובות במכשולים רגשיים וחברתיים המשפיעים על רווחתם בבית ובבית הספר.',
        srvClinicChildDesc2: 'בקליניקת הורים-ילדים של הקשיבה, אנו מתבוננים באתגרים הללו דרך עדשה רחבה. אנו מאמינים שהתקדמות בר-קיימא מתרחשת כאשר ההורים נתמכים באופן פעיל ומשולבים בתוך המסע הטיפולי של ילדם.',
        srvChildTitle: 'ילדים בגילאי 6–12',
        srvChildPara: 'השנים שבין גיל 6 ל-12 הן תקופה של מעבר עמוק. כאשר ילדים מתמודדים עם דרישות לימודיות גוברות, קשרים חברתיים משתנים ועצמאות גדלה, הם נתקלים לעיתים קרובות במכשולים רגשיים וחברתיים המשפיעים על רווחתם בבית ובבית הספר. בקליניקת הורים-ילדים של הקשיבה, אנו מתבוננים באתגרים הללו דרך עדשה רחבה. אנו מאמינים שהתקדמות בר-קיימא מתרחשת כאשר ההורים נתמכים באופן פעיל ומשולבים בתוך המסע הטיפולי של ילדם.',
        srvClinicChildApproachTitle: 'הגישה שלנו',
        srvClinicChildApproach1: 'הקליניקה שלנו מציעה מודל הוליסטי וממוקד משפחה, המביט מעבר לסימפטומים המיידיים כדי לטפל בשורשים הרגשיים וההתפתחותיים העמוקים של קשיי הילד.',
        srvClinicChildApproach2: '<strong>העצמת הורים:</strong> אנו רואים בהורים את המשאב המרכזי של הילד, ומעניקים לכם את הכלים לשמירה על צמיחה חיובית בבית.',
        srvClinicChildApproach3: '<strong>ריפוי יחסי:</strong> העבודה הטיפולית שלנו שמה בעדיפות ראשונה את ההיקשרות והקשרים המשפחתיים כדי ליצור בסיס בטוח להתפתחות בריאה.',
        srvClinicChildWorksTitle: 'כיצד התוכנית עובדת',
        srvClinicChildWorks1: '<strong>אינטייק מקיף:</strong> כל משפחה מתחילה בהערכה מעמיקה המובלת על ידי עובד סוציאלי מנהל, כדי לבחון את הדינמיקה המשפחתית, החוזקות והמטרות.',
        srvClinicChildWorks2: '<strong>תוכניות טיפול מותאמות אישית:</strong> יחד עם ההורים, אנו בונים אסטרטגיה מותאמת אישית שנבנתה במיוחד עבור הצרכים הרגשיים של ילדכם.',
        srvClinicChildWorks3: '<strong>טיפול מתואם:</strong> בעת הצורך, אנו משלבים בצורה חלקה תחומי טיפול ואנשי מקצוע מתמחים שונים כדי לבנות תוכנית מקיפה ורב-שירותית.',
        srvClinicChildServicesTitle: 'שירותים טיפוליים',
        srvClinicChildServicesIntro: 'התוכניות המותאמות והרב-תחומיות שלנו משלבות שיטות טיפול ספציפיות כדי לתמוך בצורה הטובה ביותר במשפחתכם:',
        srvClinicChildServParentingTitle: 'טיפול והדרכת הורים',
        srvClinicChildServParentingDesc: 'גישה מבוססת היקשרות המעצימה הורים להבין את צרכי ילדם, לנווט באתגרים ולהוביל שינוי משפחתי בביטחון.',
        srvClinicChildServDyadicTitle: 'טיפול דיאדי (הורה-ילד)',
        srvClinicChildServDyadicDesc: 'מפגשים משותפים להורים וילדים שנועדו לחזק מערכות יחסים, לשפר את התקשורת ולבנות היקשרות בטוחה.',
        srvClinicChildServCreativeTitle: 'טיפולים בהבעה ויצירה',
        srvClinicChildServCreativeDesc: 'סביבה בטוחה לגילוי עצמי ולביטוי רגשי תוך שימוש בשפתו הטבעית של הילד, כולל:',
        srvClinicChildServCreativeArt: 'טיפול באמנות',
        srvClinicChildServCreativeMusic: 'טיפול במוזיקה',
        srvClinicChildServCreativeDrama: 'פסיכודרמה',
        srvClinicChildServCreativePlay: 'טיפול במשחק',
        srvClinicChildCommTitle: 'חינוך ותמיכה קהילתית',
        teamAshiraName: 'אשירה אופיר',
        teamAshiraRole: 'מנהלת ומנהלת הצוות הקליני של קליניקת הורים-ילדים',

        srvAdolescentsTitle: 'מתבגרים',
        srvAdolescentsPara: 'גיל ההתבגרות מביא איתו שינויים מהירים ובחינת גבולות, שלעיתים קרובות יוצרים מתחים בין מתבגרים להוריהם. בני נוער עלולים להתמודד עם קשיים כגון חרדה, דיכאון, דימוי עצמי נמוך או אתגרים חברתיים שהם מהססים לשתף בבית. הקליניקה שלנו מציעה ייעוץ מקצועי ונגיש על ידי מטפלים דוברי עברית ואנגלית המבינים את צרכי הקהילה. באמצעות שיטות מגוונות כמו CBT, טיפול באמנות/משחק וייעוץ משפחתי, אנו מסייעים למתבגרים להתגבר על אתגרים רגשיים ולפתח חוסן נפשי.',
        srvCouplesTitle: 'טיפול זוגי והדרכת הורים',
        srvCouplesPara: 'בית בריא ותפקודי מתחיל בשותפות חזקה בין ההורים. עם גדילת המשפחה, מערכת היחסים הזוגית עלולה לעמוד בפני לחצים מוגברים, קשיי תקשורת ומריבות חוזרות ונשנות. אנו מציעים טיפול זוגי מקצועי והדרכת הורים כדי לסייע לבני הזוג לשקם את הקרבה, לפתור קונפליקטים ולרכוש כלים מעשיים לתקשורת בריאה המקדמת בית רגוע ותומך.',
        srvAdhdIncludesTitle: "שירותי התמיכה של הקשיבה לקשיי קשב וריכוז כוללים:",
        srvAdhdInc1Title: 'אינטייק ותוכנית אישית',
        srvAdhdInc1Desc: 'מפגש עם מומחה הקשיבה לבניית תוכנית טיפול והתערבות המותאמת אישית לצרכי הילד.',
        srvAdhdInc2Title: 'תמיכה וליווי שוטף',
        srvAdhdInc2Desc: 'ליווי מקצועי רציף וקשר הדוק לאורך כל התהליך.',
        srvAdhdInc3Title: 'טיפול קוגניטיבי-תפקודי (Cog-Fun)',
        srvAdhdInc3Desc: 'אימון Cog-Fun לשיפור תפקודים ניהוליים, ויסות עצמי והתמדה.',
        srvAdhdInc4Title: 'טיפול רגשי ממוקד',
        srvAdhdInc4Desc: 'טיפול רגשי לילדים ולהורים להתמודדות עם ההשלכות הרגשיות של קשיי קשב.',
        srvAdhdInc5Title: 'פיתוח מיומנויות חברתיות',
        srvAdhdInc5Desc: 'סדנאות ואימון חברתי לרכישת חברים, ויסות עצמי והשגת מטרות חברתיות.',
        srvAdhdInc6Title: 'מרכז למידה ועזרה בלימודים',
        srvAdhdInc6Desc: 'עזרה בשיעורי בית וסיוע לימודי תוך הקניית הרגלי למידה וארגון.',
        srvAdhdInc7Title: 'שיתוף פעולה עם בית הספר',
        srvAdhdInc7Desc: 'מפגשים וקשר שוטף עם צוותי החינוך לשילוב מוצלח של הילד במסגרת.',
        srvAdhdInc8Title: 'סדנאות והדרכות לצוותי חינוך',
        srvAdhdInc8Desc: 'השתלמויות מקצועיות למורים על ניהול כיתה ואסטרטגיות התמודדות עם הפרעות קשב.',
        srvAdhdInc9Title: 'סדנאות הורים',
        srvAdhdInc9Desc: 'סדנאות הדרכה להורים המעניקות ידע, כלים מעשיים ותמיכה משפחתית.',

        srvAdhdTitle: 'מרכז מומחים לתמיכה בקשב וריכוז (ADHD)',
        srvAdhdPara1: 'הפרעת קשב וריכוז משפיעה על הלמידה, הוויסות הרגשי והקשרים החברתיים. המרכז שלנו בוחן את ה-ADHD בצורה הוליסטית, ומציע תכנון אינטייק מפורט, הפניות לאבחונים וטיפול קוגניטיבי-תפקודי (Cog-Fun) מבוסס מחקר.',
        srvAdhdPara2: 'אנו מלווים ילדים בפיתוח תפקודים ניהוליים כמו התמדה ועכבה, מעניקים הדרכת הורים ומפעילים קבוצות אימון חברתי למתבגרים במטרה לסייע להם לווסת את עצמם ולהצליח.',
        srvAdhdBtn: 'תיאום שיחת פגישה',

        srvTabSocialSkillsMentoring: 'מיומנויות חברתיות וחונכות',
        srvSocialSkillsMentoringTitle: 'מיומנויות חברתיות וחונכות',
        srvSocialSkillsMentoringSubtitle: 'להעצים כל ילד להצליח.',
        srvSocialSkillsMentoringIntro: 'בהקשיבה, אנו מאמינים כי קשרים חברתיים בריאים הם הבסיס לחיים פרודוקטיביים ומספקים. אימון המיומנויות החברתיות שלנו מעניק לילדים את הכלים החיוניים לשגשג חברתית, לשפר את התקשורת ולממש את מלוא הפוטנציאל שלהם.',
        srvSocialSkillsMentoringCardDesc: 'אנו תומכים בילדים ובני נוער המתמודדים עם קשיים חברתיים או רגשיים על ידי התאמת חונכים מסורים ומתן אימון אישי מותאם במיומנויות חברתיות.',
        srvSocialSkillsMentoringCardHighlightsTitle: 'התכניות שלנו כוללות:',
        srvSocialSkillsMentoringCardHighlight1: 'חונכות אישית (תמיכה רגשית וליווי)',
        srvSocialSkillsMentoringCardHighlight2: 'חונכות בתוך בית הספר (ביטחון לימודי)',
        srvSocialSkillsMentoringCardHighlight3: 'אימון חשיבה חברתית והשתלבות בקבוצה',
        srvSocialSkillsMentoringCardHighlight4: 'תוכניות עבודה אישיות ומעקב מקצועי',

        srvMentoringTitle: 'כוחה של חונכות',
        srvMentoringIntro1: 'גיל ההתבגרות יכול להיות מאתגר. לחצים חברתיים, דרישות לימודיות ושינויים רגשיים פתאומיים מותירים לעיתים קרובות את הילדים מוצפים – במיוחד אלו המתמודדים עם אתגרים נוספים כגון עלייה, קשיי למידה או חוסר יציבות משפחתית.',
        srvMentoringIntro2: 'בהקשיבה, אנו מאמינים כי אף ילד אינו צריך להתמודד עם קשיים אלו לבדו. חונך מסור ומלווה מעניק הכוונה, עידוד ותמיכה עקבית, ומסייע לילדים לבנות ביטחון עצמי, לחזק קשרים חברתיים ולהצליח הן מבחינה רגשית והן מבחינה לימודית.',
        srvMentoringProgTitle: 'התוכניות שלנו',
        srvMentoringOneTitle: 'חונכות אישית (אחד על אחד)',
        srvMentoringOneDesc: 'תוכנית זו מתמקדת ברווחה הרגשית של הילד, ומצמידה לו חונך למפגשים דו-שבועיים המבוססים על תחומי העניין שלו. בין אם באמצעות מוזיקה, אמנות, משחקים או פשוט בילוי משותף, הילדים זוכים למרחב בטוח ותומך לצמוח בו.',
        srvMentoringOneSupportTitle: 'תמיכה מותאמת אישית:',
        srvMentoringOneSupportDesc: 'כל התאמה מתחילה בתהליך אינטייק עם ההורים להבנת הצרכים והמטרות של הילד.',
        srvMentoringOneSupervisionTitle: 'ליווי מקצועי:',
        srvMentoringOneSupervisionDesc: 'כל קשרי החונכות מונחים ומפוקחים על ידי צוות מקצועי ומנוסה של התוכנית כדי להבטיח צמיחה חיובית ומשמעותית.',
        srvMentoringSchoolTitle: 'חונכות בתוך בתי הספר',
        srvMentoringSchoolDesc: 'החונכים שלנו בבתי הספר מעניקים תמיכה לימודית ורגשית ישירות בתוך כותלי בית הספר, ובכך מסייעים לתלמידים לבנות ביטחון עצמי ולהצליח בכיתה.',
        srvMentoringSchoolCollabTitle: 'גישה שיתופית:',
        srvMentoringSchoolCollabDesc: 'אנו עובדים בשיתוף פעולה הדוק עם המורים ויועצי בית הספר כדי ליצור תוכניות תמיכה אישיות.',
        srvMentoringSchoolConfidenceTitle: 'בניית ביטחון דרך הצלחה:',
        srvMentoringSchoolConfidenceDesc: 'על ידי חיזוק מיומנויות לימודיות ואמונה עצמית, אנו מסייעים לתלמידים לשגשג בלימודים, בחברה וברגש.',
        srvMentoringAboutTitle: 'על הקשיבה',
        srvMentoringAboutDesc: 'בהקשיבה אנו מאמינים שלכל ילד מגיע מישהו שיילחם עבורו. המשימה שלנו היא להעניק את התמיכה הרגשית והלימודית שילדים זקוקים לה כדי לצמוח למבוגרים צעירים בעלי ביטחון עצמי ויכולת. באמצעות קשרי חונכות משמעותיים, אנו מסייעים להפוך שנים מאתגרות לבסיס להצלחה לאורך החיים.',
        srvMentoringMalkyName: 'מלכי מאיירס',
        srvMentoringMalkyRole: 'מנהלת תוכנית החונכות',
        srvMentoringMalkyDesc: 'מפקחת על שירותי תוכנית החונכות, מרכזת את תהליכי ההתאמה ומנהלת ישיבות צוות להבטחת קשרי חונכות איכותיים עבור בני נוער מקומיים.',
        teamMalkyMeyersName: 'מלכי מאיירס',
        srvMentoringBtn: 'תיאום שיחת פגישה',

        srvTeensTitle: 'תמיכה במתבגרים בשלבי מעבר',
        srvTeensPara1: 'גיל ההתבגרות הוא תקופה של שינויים עצומים. בעוד שכל מתבגר מתמודד עם לחצים לימודיים וחברתיים, רבים מנווטים גם מול אתגרים מורכבים כמו עלייה, לקויות למידה או חוסר יציבות משפחתית.',
        srvTeensPara2: 'הקשיבה מעניקה התערבות יזומה, ומספקת את החונכות והיציבות הדרושות במהלך שנים מרכזיות אלו, ומשקמת בני נוער שעתידם נמצא בסיכון.',
        srvTeensBtn: 'תיאום שיחת פגישה',

        srvEducationTitle: 'האגף לשירותים חינוכיים',
        srvEducationSubtitle: 'לכל ילד מגיעה ההזדמנות להצליח',
        srvEducationBtn: 'תיאום שיחת פגישה',

        srvMySpaceTitle: 'המקום שלי – תכנית מעטפת לשעות אחר הצהריים',
        srvHotlineTitle: 'הקו החם לייעוץ והכוון לימודי',

        srvFamilyTitle: 'תמיכה זוגית והדרכה משפחתית',
        srvFamilyIntro: 'גם מערכות יחסים חזקות ואוהבות חוות תקופות מאתגרות. בין אם אתם מתמודדים עם מכשולי תקשורת, שואפים להעשיר את הנישואין שלכם, או מעוניינים לבנות קשר עמוק יותר עם ילדיכם, עמותת הקשיבה כאן כדי לתמוך בכם. אנו עוזרים לזוגות ולמשפחות לפרוץ דרך מכשולים כדי ליצור דינמיקה משותפת, בריאה ומשגשגת.',
        srvFamilyBtn: 'תיאום שיחת פגישה',

        // Couples Therapy Section
        srvFamilyCouplesTitle: 'טיפול זוגי',
        srvFamilyCouplesIntro: 'במפגשי הטיפול הזוגי הדינמיים שלנו, אתם ובני זוגכם תעבדו יחד כדי לפרוץ מחסומי תקשורת ולבנות מחדש ולהעמיק את הקשר שלכם.',
        srvFamilyCouplesB1Title: 'פריצת דפוסים שליליים',
        srvFamilyCouplesB1Desc: 'נפתח וננתח את הוויכוחים החוזרים ודפוסי ההתנהגות המעכבים את מערכת היחסים שלכם. נחליף הרגלים תגובתיים בהבנה והכלה.',
        srvFamilyCouplesB2Title: 'חיזוק האינטימיות',
        srvFamilyCouplesB2Desc: 'יצירת מרחב בטוח ולא שיפוטי לריפוי המרחק הרגשי והחזרת האמון והקרבה.',
        srvFamilyCouplesB3Title: 'תקשורת מכוונת מטרה',
        srvFamilyCouplesB3Desc: 'למידת כלים מעשיים לפתרון קונפליקטים בצורה בונה ולבניית שותפות חזקה ומאושרת יותר.',

        // Parenting Section
        srvFamilyParentingTitle: 'הדרכת הורים וטיפול משפחתי',
        srvFamilyParentingIntro: 'הורות אינה מגיעה עם ספר הוראות, אך אינכם חייבים להתמודד עם זה לבד. אנו מספקים להורים אסטרטגיות מעשיות ותמיכה מלאת חמלה כדי לנווט אתגרי התנהגות וליצור בית רגוע ומחובר יותר.',
        srvFamilyParentingB1Title: 'שבירת דפוסים לחוצים',
        srvFamilyParentingB1Desc: 'מעבר ממאבקי כוח יומיומיים ותגובתיות להורות רגועה ובטוחה בעצמה.',
        srvFamilyParentingB2Title: 'הבנת הילד שלכם',
        srvFamilyParentingB2Desc: 'קבלת תובנות לגבי הצרכים הרגשיים וההתנהגותיים של ילדכם כדי שתוכלו להגיב בבהירות במקום בתסכול.',
        srvFamilyParentingB3Title: 'ביסוס חזית הורית אחידה',
        srvFamilyParentingB3Desc: 'תיאום וסנכרון לגבי משמעת, גבולות ושגרת יומיום כדי ששני ההורים יהיו מתואמים.',

        // Why Choose Section
        srvFamilyWhyTitle: 'למה לבחור בהקשיבה?',
        srvFamilyWhyIntro: 'הצוות שלנו מעניק טיפול מקצועי המותאם באופן ייחודי לאורח החיים ולערכים שלכם.',
        srvFamilyWhyB1Title: 'מומחים מוסמכים',
        srvFamilyWhyB1Desc: 'מטפלים ומטפלות מורשים, מיומנים ומנוסים המשתמשים במגוון רחב של שיטות טיפול יעילות.',
        srvFamilyWhyB2Title: 'רגישות תרבותית והלכתית',
        srvFamilyWhyB2Desc: 'הבנה קהילתית עמוקה בעלת היכרות מיוחדת עם סוגיות הלכתיות ורקע דתי.',
        srvFamilyWhyB3Title: 'סודיות מוחלטת',
        srvFamilyWhyB3Desc: 'מחויבות בלתי מתפשרת להגנה על הפרטיות שלכם ושמירה על דיסקרטיות מלאה.',

        srvOlimTitle: 'בית חם ותמיכה לימודית לתלמידים עולים חדשים',
        srvOlimIntro1: 'עלייה לישראל עלולה להביא עמה תהפוכות ושינויים משמעותיים עבור ילדים. השפה, תוכנית הלימודים, המנטליות התרבותית והרגלי הלמידה שונים לחלוטין מארץ מוצאם.',
        srvOlimIntro2: 'מתוך הכרה באתגרים האמיתיים איתם מתמודדים בשנים הראשונות לעלייה, עמותת הקשיבה משמשת כעוגן ומפלט בטוח לתלמידים עולים בבתי הספר מאז שנת 2018.',
        srvOlimPillar1Title: 'ליווי אישי ומותאם',
        srvOlimPillar1Desc: 'כ-50 תלמידים נהנים משעתיים שבועיות של למידה פרטנית (אחד על אחד) בבתי הספר, בהנחיית מורה לחינוך מיוחד המשמש כעוגן רגשי ולימודי כאחד.',
        srvOlimPillar2Title: 'מערך תמיכה רגשי',
        srvOlimPillar2Desc: 'מפגשים ייעודיים לתלמידים ולמשפחותיהם, המעניקים מענה מכיל, מחבק ומותאם לקשיי העלייה וההסתגלות.',
        srvOlimPillar3Title: 'המטרה שלנו',
        srvOlimPillar3Desc: 'שילוב חלק ואופטימלי של התלמידים במערכת החינוך, תוך יצירת בסיס יציב ובטוח למשפחה כולה.',
        srvOlimBtn: 'תיאום שיחת פגישה',

        principlesTag: 'עקרונות היסוד',
        principlesTitle: 'העקרונות המנחים שלנו',
        principlesDesc: 'בהקשיבה, אנו מאמינים בגישה הוליסטית, חמה ומקצועית ביותר. עקרונות אלו מנחים את העבודה שלנו עם כל ילד, נער ומשפחה.',
        principle1Title: 'אמפתיה והבנה עמוקה',
        principle1Desc: 'תהליך השינוי והריפוי מתחיל בהקשבה אמיתית. אנו מייצרים מרחב בטוח ומכיל לכל אחד.',
        principle2Title: 'ליווי והכוון משותף',
        principle2Desc: 'אנו עובדים יחד איתכם לבניית תוכנית תמיכה אישית, המתווה צעדים ברורים וישימים.',
        principle3Title: 'התקדמות ממוקדת תוצאות',
        principle3Desc: 'אנו שמים דגש על שינוי חיובי וממשי בחיי היום-יום של הילד והמשפחה.',
        principle4Title: 'מומחיות מתוך רגישות',
        principle4Desc: 'צוות המטפלים המוסמכים שלנו משלב מקצועיות קלינית מעולה עם אכפתיות ודאגה אישית.',
        principle5Title: 'מענה מותאם אישית',
        principle5Desc: 'כל אדם הוא עולם ומלואו. אנו מתאימים אישית את הטיפולים הקליניים בכל התוכניות והמענים שלנו כדי שיתאימו לצרכים האישיים של כל אחד ואחת.',
        principle6Title: 'שילוב ומעטפת קהילתית',
        principle6Desc: 'אנו משתפים פעולה עם מוסדות החינוך והקהילה כדי להעניק מעטפת תמיכה שלמה והרמונית.',

        replayTag: 'עדכונים וחדשות',
        replayDesc: 'התעדכנו בפעילות הקהילתית שלנו, בפרסים ובתכניות המקצועיות הקרובות.',
        replaySidebarTitle: 'הודעות ועדכונים אחרונים',
        story1Date: '18 בדצמבר 2025',
        story1Title: 'המקום שלי',
        story1Desc: 'תכנית ייחודית המיועדת לנערות, המסייעת להן בהכנת שיעורי הבית ומציעה פעילויות לאחר שעות הלימודים בסביבה חמה ותומכת.',
        story2Date: '14 בדצמבר 2025',
        story2Title: 'סדנת הורים לקשב וריכוז (ADHD)',
        story2Desc: 'סדנת הורים לילדים עם הפרעות קשב וריכוז (ADHD) המעניקה כלים מעשיים, אסטרטגיות ותובנות קליניות לתמיכה בילדים.',
        story3Date: '9 בדצמבר 2025',
        story3Title: 'קוג פאן (Cog-Fun)',
        story3Desc: 'נפתח המחזור הבא של אימון קוגניטיבי-תפקודי (Cog-Fun) המסייע לילדים לפתח תפקודים ניהוליים ומיומנויות ויסות עצמי.',
        storyLink: 'לקריאת הכתבה',

        contactTag: 'צור קשר',
        contactTitle: 'אנחנו כאן כדי להקשיב',
        contactDesc: 'יש לכם שאלות? מעוניינים לתאם טיפול או להתעניין בהתנדבות? פנו לצוות המסור שלנו עוד היום.',
        contactAddressTitle: 'מיקום הקליניקה שלנו',
        contactAddressDetail: 'נחל שורק 14<br>רמת בית שמש א\' הישנה<br>ישראל',
        contactPhoneTitle: 'התקשרו למשרדנו',
        contactPhoneDetail: '02-992-5152<br>(פניות לטיפול ומידע כללי)',
        contactEmailTitle: 'פניות בדוא"ל',
        contactEmailDetail: 'office@hakshiva.org',
        contactFormTitle: 'שליחת הודעה לצוות',
        formName: 'שם מלא',
        formEmail: 'כתובת אימייל',
        formPhone: 'מספר טלפון',
        formSubject: 'במה נוכל לעזור?',
        formSubjectOpt1: 'בקשת פנייה לטיפול רגשי',
        formSubjectOpt2: 'מרכז קשב וריכוז (ADHD)',
        formSubjectOpt3: 'התעניינות בתוכנית חונכות',
        formSubjectOpt4: 'מידע כללי / שאלות בנושא תרומות',
        formSubjectOpt5: 'שילוב וקליטת עולים',
        formMsg: 'ההודעה שלך',
        formSubmit: 'שליחת בקשה',

        donateTag: 'יוצרים שינוי יחד',
        donateTitle: 'תומכים בעתיד של הילדים שלנו',
        donateDesc: 'התרומה שלך, המוכרת לצרכי מס, תומכת ישירות ביכולת שלנו להעניק את הטיפול והמענה הטובים ביותר בכל התוכניות והפעילויות שלנו! עזרו לנו לבנות קהילה חזקה ויציבה.',
        donateTaxBadge1: 'פטור ממס בארה"ב (501c3)',
        donateTaxBadge2: 'פטור ממס בבריטניה',
        donateTaxBadge3: 'מוכר לתרומות בישראל (סעיף 46)',
        tier1Amt: '₪120',
        tier1Impact: 'מממן ארוחות חמות וכיבוד שבועי במועדון הנוער',
        tier2Amt: '₪350',
        tier2Impact: 'מממן ערכת פעילות וחומרי יצירה לחונך ותלמיד לשנה',
        tier3Amt: '₪850',
        tier3Impact: 'מסבסד 2 מפגשים טיפוליים מקצועיים בקליניקה',
        tier4Amt: '₪1,800',
        tier4Impact: 'מממן תוכנית Cog-Fun מלאה לילד עם קשיי קשב',
        tierBtn: 'לתרומה',

        donatePageTitle: 'תומכים בעתיד של הילדים שלנו',
        donatePageDesc: 'כתרומה מוכרת לצרכי מס, הקשיבה תלויה בנדיבות הלב של הקהילה שלנו. התרומה שלך מאפשרת לנו להמשיך בפעילותנו החיונית עם ילדים ומשפחות במשבר.',
        donateTabUsa: 'ארה"ב (USA)',
        donateTabUk: 'בריטניה (UK)',
        donateTabIsrael: 'ישראל',
        donateLinkUsa: 'תרומות מארה"ב',
        donateLinkEnglish: 'תרומות בבריטניה',
        donateLinkIsrael: 'תרומות מישראל',
        aboutHeroCategory: 'מי אנחנו',
        aboutHeroTitle: 'אודות הקשיבה',
        aboutHeroDesc: 'הקשיבה היא מרכז תמיכה ייעודי בבית שמש המחויב לסייע לבני נוער ולמשפחותיהם לשגשג. אנו מאמינים כי לכל ילד מגיע נתיב קדימה, ולכן אנו מספקים הכוונה מקצועית, סיוע לימודי ומשאבים רגשיים כדי לסייע לבני נוער להתגבר על אתגרי החיים. מתוך הכרה בכך שהצלחתו של הילד מושרשת עמוק בבית, אנו עוטפים את המשפחה כולה במעטפת טיפולית – ומעניקים לילדים ולהורים כאחד את הכלים לבניית יסודות חזקים. יחד, אנו פועלים למען קהילה שבה כל ילד מועצם, כל משפחה נתמכת, ואף נער אינו נשאר מאחור.<br><br>חיזוק המשפחות שלנו - מתן תמיכה רגישה, מקצועית ומקיפה המאפשרת לכל בן משפחה לשגשג מבחינה לימודית, חברתית ורגשית.',
        aboutHeroBtn: 'קבלו תמיכה היום',
        aboutBgTitle: 'רקע ארגוני',
        aboutBgPara1: 'הקשיבה היא עמותה ישראלית המוקדשת לפיתוח והטמעה של שירותי תמיכה מקיפים והוליסטיים לבני נוער ומשפחות. הגישה הייחודית והאינטגרטיבית שלנו מגשרת על הפער בין חברי הקהילה, אנשי החינוך ואנשי המקצוע בתחום בריאות הנפש כדי לאפשר ריפוי מערכתי וצמיחה אישית הן להורים והן לילדים.',
        aboutBgPara2: 'הקשיבה מלווה כיום למעלה מ-700 בני נוער ומשפחות ברמת בית שמש, ומעניקה התערבויות ממוקדות בשירותי נוער, פתרונות טיפוליים, חונכות וסיוע לימודי.',
        aboutNeedTitle: 'הצהרת החזון',
        aboutNeedPara1: 'קהילה שבה כל ילד מועצם, כל משפחה נתמכת, ואף נער אינו נשאר מאחור.',
        aboutNeedPara2: '',
        aboutMissionTitle: 'הצהרת המשימה',
        aboutMissionPara1: 'הקשיבה מעצימה בני נוער ומשפחות בבית שמש להתגבר על אתגרים לימודיים, חברתיים ורגשיים. באמצעות הכוונה מקצועית ותמיכה רגישה, אנו מספקים לילדים ולהורים את המשאבים הדרושים לבניית יסודות חזקים ומימוש מלוא הפוטנציאל שלהם.',
        aboutMissionPara2: '',
        aboutScopeTitle: 'היקף התוכניות שלנו',
        aboutScopeDesc: 'כדי לגלות עוד על השירותים שלנו, לחצו <a href="index.html#services" style="color: var(--accent-orange); text-decoration: underline;">כאן</a>.',
        aboutCardMentoringTitle: 'חונכות וליווי',
        aboutCardMentoringDesc: 'החונכים הם מודל לחיקוי בעלי הכשרה המותאמים אישית לצרכי כל ילד, ומעניקים תמיכה בתוך בתי הספר ומחוצה להם פעמיים בשבוע.',
        aboutCardEduTitle: 'שירותי חינוך',
        aboutCardEduDesc: 'הצלחה לימודית ורווחה רגשית קשורות זו בזו. אנו מפעילים מרכז למידה עם מורים לחינוך מיוחד המסייעים בהכנת שיעורי בית, שיעורים פרטיים ושילוב השפה העברית.',
        aboutCardTeensTitle: 'מרכז הנוער',
        aboutCardTeensDesc: 'מרכז חם, פתוח וללא שיפוטיות עבור למעלה מ-200 בני נוער בסיכון. תחת הכוונה מקצועי, בני הנוער מציבים מטרות אישיות, בונים ביטחון עצמי ומתחברים מחדש למשפחותיהם ולקהילה.',
        aboutCardClinicTitle: 'הקליניקה הטיפולית',
        aboutCardClinicDesc: 'הצווף הקליני שלנו כולל 10 עובדים סוציאליים ופסיכולוגים. אנו מעניקים למעלה מ-1,000 מפגשי טיפול פרטניים מדי שנה בעברית ובאנגלית, תוך מעורבות רבה של ההורים בתהליך.',
        aboutLearnMore: 'למידע נוסף &larr;',
        donateUsaTitle: 'תרומות בדולר ארה"ב (USD)',
        donateUsaTax: 'תרומות להקשיבה מוכרות לצרכי מס בארה"ב תחת סעיף 501(c)(3).',
        donateCheckPayable: 'לתרומה באמצעות צ׳ק, יש לפרוע לטובת:',
        donateOnlineBtn: 'תרומה מקוונת (USD)',
        donateUkTitle: 'תרומות בסטרלינג (UK)',
        donateUkTax: 'תרומות להקשיבה מוכרות לצרכי מס בבריטניה. ניתן לתרום בצורה מאובטחת באמצעות כרטיס אשראי.',
        donateIlTitle: 'תרומות בשקלים חדשים (ILS)',
        donateIlTax: 'תרומות להקשיבה מוכרות לצרכי מס בישראל לפי סעיף 46.',
        donateBankTitle: 'פרטי העברה בנקאית בשקלים:',
        donateBankName: 'בנק: בנק פאג"י',
        donateBankBranch: 'סניף: 179',
        donateBankAcct: 'מספר חשבון: 525383',
        donateBankPayee: 'שם המוטב: הקשיבה לילדי ישראל',
        donateCheckTitle: 'תרומה בצ׳ק שקלי (ILS):',
        donateCheckPayableILS: 'יש לפרוע לטובת: הקשיבה לילדי ישראל',
        donateCheckAddress: 'כתובת למשלוח: נחל שורק 14, רמת בית שמש א\'',
        donateCcBtn: 'תרומה באשראי (נדרים פלוס)',
        donateOtherCurrencies: 'לתרומה במטבעות אחרים, אנא פנו למשרד בטלפון 02-992-5152 או במייל office@hakshiva.org',

        footerBrandDesc: 'החזון שלנו: קהילה שבה כל ילד מועצם, כל משפחה נתמכת, ואף נער אינו נשאר מאחור.',
        footerColLinks: 'ניווט מהיר',
        footerColSrv: 'השירותים שלנו',
        footerLinkAbout: 'אודותינו',
        footerCopyright: '© 2026 הקשיבה. כל הזכויות שמורות. עמותה רשומה.',
        footerAddress: 'נחל שורק 14<span class="desktop-comma">, </span><br class="mobile-only-br">רמת בית שמש א\'<span class="desktop-comma">, </span><br class="mobile-only-br">ישראל 9909118',
        footerPhone: '02-992-5152',
        footerWhatsapp: 'צ׳אט WhatsApp',
        
        teamTag: 'טיפול מסור',
        teamTitle: 'הכירו את הצוות המקצועי שלנו',
        teamDesc: 'הצוות המסור של המטפלים המוסמכים, המחנכים והיועצים שלנו כאן כדי לסייע לילדים, בני נוער ומשפחות להתמודד עם אתגרים רגשיים ולימודיים.',
        teamCeoName: 'הרב אמציה שפיגלר',
        teamCeoRole: 'מנכ"ל',
        teamEdName: 'הרב דוד סיפר',
        teamEdRole: 'מנהל בפועל',
        teamTeenName: 'יוסי וכטל',
        teamTeenRole: 'סמנכ"ל ומנהל תחום נוער',
        teamJoyName: 'ג\'וי אפשטיין',
        teamJoyRole: 'מנהלת תחום טיפול זוגי ומשפחתי',
        teamCarolineName: 'ד"ר קרוליין פייזר',
        teamCarolineRole: 'מפקחת קלינית',
        teamAdiName: 'עדי כהן',
        teamAdiRole: 'מנהלת ראשית של שירותי הטיפול בהקשיבה',

        teamRivkaName: 'רבקה גרוס',
        teamRivkaRole: 'מנהלת משרד ומנהלת טיפול',
        teamMalkyName: 'מלכי כהן',
        teamMalkyRole: 'מנהלת כספים',
        boardTitle: 'חברי הוועד המנהל',
        boardMembers: 'יוסף ג\'ייסון (יו"ר) | הרב אברהם ולינס | ד"ר פרד ניידר | נתנאל גוד | ברוך דבינסקי',
        rabbinicTitle: 'ועדה רוחנית מייעצת',
        rabbinicMembers: 'הרב אלימלך קורנפלד',
        
        srvTabSocialSkills: 'תוכנית מיומנויות חברתיות',
        srvSocialSkillsDesc: 'אנו מעניקם לילדים ולבני נוער כלים מעשיים הדרושים להם כדי לבנות קשרים בריאים, לתקשר ביעילות עם בני גילם ולשגשג במסגרות קבוצתיות. הסביבה התומכת שלנו מסייעת לצעירים לממש את מלוא הפוטנציאל החברתי שלהם ולבנות ביטחון עצמי מתמשך.',
        srvSocialSkillsHighlightTitle: 'תחומי תמיכה מרכזיים:',
        srvSocialSkillsHighlight1: 'ליווי פרטני ומותאם אישית לצרכיו הייחודיים של ילדכם.',
        srvSocialSkillsHighlight2: 'הוראת המושגים הקוגניטיביים שמאחורי אינטראקציות חברתיות.',
        srvSocialSkillsHighlight3: 'פיתוח כלים מעשיים ליצירה ושימור של קשרים וחברויות.',
        srvSocialSkillsHighlight4: 'ניווט והשתלבות נוחה בכיתות ובמסגרות קבוצתיות.',
        srvSocialSkillsTitle: 'תוכניות למיומנויות חברתיות',
        srvSocialSkillsSubtitle: 'להעצים כל ילד להצליח.',
        srvSocialSkillsIntro: 'בהקשיבה, אנו מאמינים שמערכות יחסים חברתיות בריאות הן הבסיס לחיים פרודוקטיביים ומספקים. אימון המיומנויות החברתיות שלנו מעניק לילדים את הכלים החיוניים לשגשג חברתית, לשפר את התקשורת ולממש את מלוא הפוטנציאל שלהם.',
        srvSocialSkillsApproachTitle: 'הגישה שלנו: חשיבה חברתית',
        srvSocialSkillsApproachDesc1: 'המודל הטיפולי שלנו הולך מעבר להתנהגויות שטחיות ומלמד את ה"למה" שמאחורי ההתנהגות החברתית. על ידי התמקדות בחשיבה חברתית, אנו עוזרים לילדים להבין את הקשר בין מחשבות, רגשות ומעשים. המאמנים שלנו מתרגמים מושגים חברתיים מופשטים למיומנויות קונקרטיות ומעשיות, ובכך עוזרים לילדים להתנהל בקבוצה, לבנות חברויות יציבות ולהתמודד עם דינמיקה חברתית מורכבת.',
        srvSocialSkillsApproachDesc2: 'כל תוכנית מתחילה בהערכה מקיפה - הכוללת התייעצויות עם הורים ומורים ותצפיות חברתיות - ליצירת תוכנית טיפול מותאמת אישית. בפיקוח מומחים קליניים ועם משובים חיוביים ביותר, המטרה שלנו היא להוביל להצלחה חברתית מתמשכת.',
        srvSocialSkillsOutcomesTitle: 'באמצעות אימון אישי מותאם (אחד על אחד) לבנים ולבנות מגיל 5 ומעלה, אנו מעצימים אותם:',
        srvSocialSkillsOutcome1Title: 'בנייה',
        srvSocialSkillsOutcome1Desc: 'לבנות חברויות בריאות ויציבות לאורך זמן.',
        srvSocialSkillsOutcome2Title: 'ניווט',
        srvSocialSkillsOutcome2Desc: 'להשתלב ולהתנהל בקבוצות וביטחון עצמי.',
        srvSocialSkillsOutcome3Title: 'הבנה',
        srvSocialSkillsOutcome3Desc: 'להבין את הקשר בין מחשבות, רגשות ומעשים.',
        srvSocialSkillsOutcome4Title: 'פיתוח',
        srvSocialSkillsOutcome4Desc: 'לפתח תוכנית מותאמת אישית להצלחה ארוכת טווח.',
        teamMalkyMeyersRole: 'מנהלת תוכניות חונכות וכישורים חברתיים',
        srvClinicCoreTitle: 'שירותי הליבה הייחודיים שלנו:',
        srvClinicCore1: 'טיפול פרטני ומותאם אישית (אחד-על-אחד)',
        srvClinicCore2: 'מענה ייעודי לחרדה, דיכאון, טראומה וקשיים רגשיים נוספים',
        srvClinicCore3: 'מטפלים מנוסים, בעלי רגישות תרבותית ומודעות לצרכי הקהילה.',
        srvSocialSkillsCoreTitle: 'תחומי תמיכה מרכזיים:',
        srvSocialSkillsCore1: 'הדרכה פרטנית מותאמת אישית לצרכים הייחודיים של ילדכם.',
        srvSocialSkillsCore2: 'הוראת המושגים הקוגניטיביים העומדים מאחורי אינטראקציות חברתיות.',
        srvSocialSkillsCore3: 'פיתוח מיומנויות מעשיות ליצירת קשרים חברתיים יציבים ושימורם.',
        srvSocialSkillsCore4: 'בניית הביטחון העצמי להתנהלות נינוחה בכיתות ובמסגרות חברתיות וקבוצתיות.',
        srvTeensOfferTitle: 'מרכזי הנוער הפתוחים שלנו',
        srvTeensOffer1: 'מרחבים חברתיים בטוחים: סביבות נגישות שפתית (אנגלית/עברית) ומופרדות מגדרית הכוללות חדרי משחקים ואזורי ישיבה ואירוח.',
        srvTeensOffer2: 'חונכות וליווי פעיל: מדריכים ומדריכות (מדרכי רחוב) מיומנים המשמשים כמודל חיובי לחיקוי, ומעניקים תמיכה יומיומית והכוונה מובנית ומכוונת מטרות.',
        srvTeensOffer3: 'סינגור וייצוג קהילתי: אנו פועלים כמקשרים מקצועיים וחיוניים בין בני הנוער לבין משפחותיהם, בתי הספר והרשויות המקומיות (רווחה, משטרה וחינוך).',
        srvTeensOffer4: 'פיקוח קליני הדוק: כל צוותי המדריכים והמשתתפים מלווים ומפוקחים על ידי עובד סוציאלי ייעודי מתוך הקליניקה הטיפולית שלנו.',
        srvEducationList1: 'תוכניות חינוכיות בתוך בתי הספר',
        srvEducationList2: 'מרכז למידה והעשרה (מיי ספייס)',
        srvEducationList3: 'שירותי הוראה מתקנת ותמיכה לימודית',
        srvEducationList4: 'סדנאות ותוכניות להדרכת הורים',
        srvTeensOfferSubtitle: 'המרכזים שלנו, הממוקמים ברמת בית שמש, משמשים כ"מרחב שלישי" בטוח ומפוקח עבור בני נוער לפריקת לחצים ולהתחברות.',
        srvFamilyPara3: 'טיפול זוגי הוא שיטה טיפולית שמטרתה לעזור לבני זוג לשפר ולהעמיק את מערכת היחסים שלהם. מדובר בתהליך דינמי המערב את שני השותפים יחד בתוך התהליך הטיפולי. זוגות פונים לטיפול מסיבות רבות, כולל תחושת תקיעות בדפוסי התנהגות שאינם משרתים את מערכת היחסים שלהם, תפיסות שליליות לגבי הקשר או בן הזוג, הימנעות רגשית או אינטימית, ואתגרי תקשורת. הטיפול מעודד את בני הזוג לעבוד בשיתוף פעולה למען נישואים בריאים ומאושרים יותר.',
        srvFamilyPara4: 'מערכות יחסים יכולות להיות מאתגרות, גם כאשר שני בני הזוג מחויבים לחלוטין ובעלי כוונות טובות. אם אתם ובני זוגכם עוברים תקופה המלווה בקשיים או חיכוכים מוגברים, או אפילו אם אתם רק רוצים לחזק את הקשר הזוגי ביניכם, או לבנות את הקשר החשוב כל כך עם ילדיכם, תוכלו להפיק תועלת רבה מייעוץ זוגי ו/או הדרכת הורים.',
        srvHotlinePoint1: 'פתרון דילמות ב"משולש הזהב" שבין הורים, מורים וילדים.',
        srvHotlinePoint2: 'סיוע להורים החשים חוסר ביטחון לגבי שילוב בכיתה או מוצפים מפגישות בית ספר.',
        srvHotlinePoint3: 'הצעת שיחות ייעוץ ללא עלות להכוונתכם לגבי התמיכה שילדכם זקוק לה.',
        srvHotlineContactBtn: 'צור קשר',
        srvMySpaceSubtitle: 'מבוססת על שני עמודי תווך מרכזיים:',
        srvMySpacePillar1Title: '<span style="color: var(--accent-orange);">1.</span> הצלחה אקדמית',
        srvMySpacePillar1Desc: 'שעה של תמיכה ייעודית להכנת שיעורי בית, הכנה למבחנים וחיזוק לימודי.',
        srvMySpacePillar2Title: '<span style="color: var(--accent-orange);">2.</span> צמיחה אישית ורגשית',
        srvMySpacePillar2Desc: 'שעה של סדנאות חווייתיות המתמקדות בפיתוח רגשי, מיומנויות חברתיות ובניית חוסן חיוני לחיים.',
        srvOlimPoint1: '<strong>האתגר:</strong> העלייה מביאה עמה טלטלה לילדים המתמודדים עם הבדלים בשפה, בתכנית הלימודים, בתרבות ובהרגלי הלמידה.',
        srvOlimPoint2: '<strong>העוגן:</strong> במשך למעלה מ-8 שנים, הקשיבה מספקת רשת ביטחון בתוך בתי הספר כדי להקל על מעבר זה.',
        srvOlimPoint3: '<strong>ליווי פרטני:</strong> כ-50 תלמידים מקבלים שעתיים שבועיות של למידה פרטנית (אחד-על-אחד) בבית הספר עם מורה להוראה מותאמת לתמיכה לימודית ורגשית.',
        srvOlimPoint4: '<strong>תמיכה רגשית:</strong> מפגשים ייעודיים לתלמידים ולמשפחות המציעים מענה מותאם לאתגרי ההגירה והקליטה.',
        srvOlimPoint5: '<strong>המטרה שלנו:</strong> שילוב חלק במערכת החינוך תוך בניית בסיס יציב למשפחה כולה.',
        srvWorkshopsTitle: 'סדנאות והרצאות להורים',
        srvWorkshopsPoint1: '<strong>האמונה שלנו:</strong> ההורים הם המשפיעים העיקריים על חייו וחינוכו של הילד.',
        srvWorkshopsPoint2: '<strong>השירות שלנו:</strong> אנו מציעים סמינרים מקוונים (וובינרים) מעשיים כדי להעניק להורים כלים יישומיים להובלת משפחתם.',
        srvWorkshopsPoint3: '<strong>הצעדים הבאים:</strong> עקבו אחר הפרסומים שלנו כדי להירשם לוובינרים הקרובים הגדושים בידע מעשי.',
        srvClinicChildCommDesc: 'תוכניות הסברה, סדנאות וימי עיון להורים ואנשי חינוך להגברת המודעות לבריאות הנפש והפחתת הסטיגמה.',
        srvClinicAshiraBio: '<strong>אשירה אופיר</strong>, בעלת תואר ראשון בפסיכולוגיה ובלימודים רב-תחומיים במדעי הרוח והחברה ותואר שני בעבודה סוציאלית (M.S.W.), המתמחה בטיפול בילדים ובמשפחה, היא מנהלת הצוות הקליני שלנו. היא עורכת הערכות אינטייק למשפחות חדשות, מבטיחה התאמה מדויקת של מטפלים ומנהלת את התיאום הקליני. היא מובילה ישיבות צוות ומעניקה הדרכה קלינית לשמירה על טיפול באיכות גבוהה בכל הקליניקה.',
        srvSocialSkillsMalkyBio: 'מלכי מייארס, מנהלת התוכנית שלנו, מקדישה את הקריירה שלה להעצמת בני נוער ומשפחות באמצעות ליווי רגיש ותוכניות פיתוח משפיעות. היא מתכננת ומפקחת על יוזמות מפתח, כולל חונכות נוער, אימון מיומנויות חברתיות, ושיעורים פרטיים אחד על אחד. בהתבסס על שנים של ניסיון חינוכי ותואר שני בפיתוח תוכניות לימודים, גב\' מייארס מעניקה למשפחות אסטרטגיות מעשיות להשגת צמיחה ארוכת טווח ולשגשוג.',
        srvTeensYossiBio: '<strong>יוסי וכטל</strong>, המנהל הבכיר שלנו, מקדיש את הקריירה שלו לצמיחה קהילתית ופיתוח מובנה באמצעות גישה מבוססת שליחות. במהלך כמעט שני עשורים בהקשיבה, הוא שילב ניהול אסטרטגי עם מומחיות מעשית עמוקה בתמיכה בבני נוער ובמשפחותיהם. בהתבסס על תואר ראשון בחינוך מיוחד ותואר שני במנהל עסקים (MBA), יוסי מבטיח שהיוזמות שלנו ישיגו הצלחה משפיעה וארוכת טווח.',
        srvFamilyJoyBio: '<strong>ג׳וי אפשטיין, MSW</strong>, מנהלת קלינית של יחידת ההורים והזוגיות. עם למעלה מ-40 שנות ניסיון פסיכותרפי קליני במגזר הציבורי והפרטי בישראל, ג׳וי אפשטיין מקדישה את הקריירה שלה לסיוע ליחידים, זוגות ומשפחות לרפא ולשנות את מערכות היחסים שלהם. בעלת תואר שני בעבודה סוציאלית (MSW) והכשרה מתקדמת מתמחה בטיפול זוגי ומשפחתי, עבודתה נובעת מהאמונה הבסיסית שלכל אחד יש את היכולת לצמיחה אישית עמוקה. כמנהלת קלינית בהקשיבה, ג׳וי מפקחת על הערכות אינטייק ראשוניות כדי להתאים במדויק זוגות למטפל האידיאלי תוך מתן הדרכה קלינית שבועית להבטחת הסטנדרט הגבוה ביותר של טיפול מלא חמלה.',
        srvTeensAdiBio: '<strong>עדי כהן, LCSW</strong>, מנהלת מרכז הטיפול של הקשיבה ומטפלת פרטנית. מונעת מתשוקה עמוקה לטיפול קהילתי מאז עלייתה לארץ לפני למעלה משני עשורים, עדי כהן מתמקדת במתן מענה לצרכים המשתנים של בריאות הנפש בקהילה. מתוך זיהוי פער קריטי בשירותים המקומיים עוד לפני שהמודעות לבריאות הנפש הייתה נפוצה, היא ייסדה את הקליניקה ובנתה אותה למוסד מוביל בסטנדרט הגבוה ביותר. עדי מחויבת לשמירה על רמת המקצועיות הגבוהה ביותר תוך שימור הלב החם והחמלה שהציתו את הארגון, ורואה בכך זכות אמיתית לחיות בקהילתה ולשרת אותה. עדי משמשת גם כמנהלת של כלל שירותי הטיפול בהקשיבה.',
        srvOlimNechamaBio: '<strong>נחמה פסי ירמיש, B.Ed.</strong>, מנהלת שירותי חינוך וקליטת עלייה. עם למעלה מעשור של מנהיגות בפיתוח חינוכי וסינגור תלמידים, נחמה פסי ירמיש מתמחה ביצירת פתרונות מותאמים אישית לילדים, בני נוער ומשפחות. היא בעלת תואר ראשון בחינוך ובחינוך מיוחד, עם מומחיות רחבה בתמיכה בתלמידים עולים (עולים חדשים), כמו גם ביחידים המתמודדים עם קשיי קשב וריכוז (ADHD) ולקויות למידה. נחמה מובילה את פיתוח התוכניות החינוכיות על בסיס גישה הוליסטית, תוך קידום שיתוף פעולה בין משפחות, בתי ספר ואנשי מקצוע לטיפוח צמיחה והצלחה.',
    }
};

// INITIALIZE SYSTEM STATE
let currentLang = 'en';

// TRANSLATION ENGINE FUNCTION
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    // Persist language selection
    localStorage.setItem('siteLanguage', lang);
    
    // Update URL query parameter without page reload (good for SEO and link tracking)
    try {
        const url = new URL(window.location.href);
        if (lang === 'he') {
            url.searchParams.set('lang', 'he');
        } else {
            url.searchParams.delete('lang');
        }
        window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    } catch (e) {
        console.error('Error updating URL language parameter:', e);
    }
    
    // Toggle active state on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update global document configuration
    const dict = translations[lang];
    document.documentElement.setAttribute('lang', lang === 'he' ? 'he-IL' : 'en-US');
    document.documentElement.setAttribute('dir', dict.dir);

    // Apply translation attributes dynamically
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Dynamic Nedarim Plus iframe language update
    const nedarimIframe = document.getElementById('nedarim-iframe');
    if (nedarimIframe) {
        const langParam = lang === 'he' ? 'he' : 'en';
        nedarimIframe.src = `https://www.matara.pro/nedarimplus/online/?mosad=5775793&NormalDefault=1&groupe=%D7%AA%D7%A8%D7%95%D7%9E%D7%95%D7%AA&Language=${langParam}`;
    }
}


// STATS COUNT-UP ANIMATION INTERSECTION OBSERVER
function initStatsCounter() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                
                document.querySelectorAll('.stat-number').forEach(item => {
                    const key = item.getAttribute('data-i18n');
                    let targetString = item.getAttribute('data-target');
                    if (key && translations[currentLang] && translations[currentLang][key]) {
                        targetString = translations[currentLang][key];
                    }
                    const targetNum = parseInt(targetString.replace(/[^\d]/g, ''), 10);
                    
                    if (isNaN(targetNum)) {
                        item.innerHTML = targetString;
                        return;
                    }
                    
                    const suffix = targetString.replace(/[\d]/g, ''); // Extract + or /24/7 details

                    let count = 0;
                    const duration = 2000; // 2 seconds animation
                    const startTime = performance.now();

                    function updateCount(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Ease-out cubic formula
                        const easeProgress = 1 - Math.pow(1 - progress, 3);
                        count = Math.floor(easeProgress * targetNum);
                        
                        if (targetString.includes('/') && targetString.includes('7')) {
                            // Specialized handler for 24/7 text detail
                            item.innerHTML = '24/7';
                        } else {
                            item.innerHTML = count + suffix;
                        }

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            item.innerHTML = targetString;
                        }
                    }

                    requestAnimationFrame(updateCount);
                });
            }
        });
    }, { threshold: 0.25 });

    observer.observe(statsSection);
}


// INTERACTIVE DOM EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    
    // Setup Language switch buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.currentTarget.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // Scrolled Header Behavior
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        // Dynamically add a mobile-only Donate button if not already present
        if (!navMenu.querySelector('.mobile-only-donate')) {
            const donateItem = document.createElement('li');
            donateItem.className = 'nav-item mobile-only-donate';
            donateItem.style.marginTop = '20px';
            donateItem.innerHTML = `
                <a href="#donate" class="btn btn-primary" style="width: 100%; max-width: 280px; margin: 0 auto; display: flex; justify-content: center;" data-i18n="navDonate">Donate Now</a>
            `;
            navMenu.appendChild(donateItem);
        }

        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Close menu on link clicks
        document.querySelectorAll('.nav-link, .dropdown-link, .mobile-only-donate a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // CONTACT FORM HANDLER
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // There is no backend behind this form yet. Until there is, hand the
        // message to the visitor's own mail client instead of claiming it was
        // sent: the previous handler showed "Message Sent Successfully!" and
        // discarded everything, so intake requests were lost in silence.
        // The clinic's phone number, address and email sit beside this form.
        const CONTACT_EMAIL = 'office@hakshiva.org';

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.contact-btn');
            const originalText = submitBtn.innerHTML;
            const val = (id) => (document.getElementById(id)?.value || '').trim();

            const subjectEl = document.getElementById('clientSubject');
            const subjectText = subjectEl?.options[subjectEl.selectedIndex]?.text
                || (currentLang === 'he' ? 'פנייה מהאתר' : 'Website enquiry');

            const labels = currentLang === 'he'
                ? { name: 'שם', email: 'אימייל', phone: 'טלפון', msg: 'הודעה' }
                : { name: 'Name', email: 'Email', phone: 'Phone', msg: 'Message' };

            const body = [
                `${labels.name}: ${val('clientName')}`,
                `${labels.email}: ${val('clientEmail')}`,
                `${labels.phone}: ${val('clientPhone')}`,
                '',
                `${labels.msg}:`,
                val('clientMsg')
            ].join('\n');

            const href = `mailto:${CONTACT_EMAIL}`
                + `?subject=${encodeURIComponent(subjectText)}`
                + `&body=${encodeURIComponent(body)}`;

            submitBtn.innerHTML = currentLang === 'he'
                ? 'פותח את תוכנת הדוא"ל שלך...'
                : 'Opening your email app...';

            window.location.href = href;

            // Do NOT reset the form. If no mail client opens, the visitor still
            // has what they typed and can phone or email instead.
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
            }, 4000);
        });
    }

    // Setup Donate page tabs
    document.querySelectorAll('.donate-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetTab = e.currentTarget.dataset.tab;
            
            // Toggle active state on buttons
            document.querySelectorAll('.donate-tab-btn').forEach(b => {
                b.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
            
            // Toggle active state on panels
            document.querySelectorAll('.donate-tab-panel').forEach(panel => {
                if (panel.id === `donate-panel-${targetTab}`) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // Start Stats Counter
    initStatsCounter();

    // Setup Service CTA buttons to pre-select dropdown options
    document.querySelectorAll('.service-cta-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const service = e.currentTarget.dataset.service;
            const subjectSelect = document.getElementById('clientSubject');
            if (subjectSelect && service) {
                subjectSelect.value = service;
            }
        });
    });

    let isInitialLoad = true;
    let isTransitioning = false;

    // Hash Routing Handler with smooth fade transitions
    function handleRouting() {
        if (isTransitioning) return;
        
        const hash = window.location.hash || '#home';
        
        const subpageViews = {
            '#contact': 'view-contact',
            '#clinic': 'view-clinic',
            '#child-parent-clinic': 'view-child-parent-clinic',
            '#clinic-6-12': 'view-child-parent-clinic',
            '#teens-therapy': 'view-teens-therapy',
            '#mentoring': 'view-mentoring',
            '#social-skills': 'view-social-skills',
            '#social-skills-mentoring': 'view-social-skills',
            '#teens': 'view-teens',
            '#education': 'view-education',
            '#family': 'view-family',
            '#olim': 'view-olim',
            '#news': 'view-news',
            '#donate': 'view-donate',
            '#donate-usa': 'view-donate',
            '#donate-uk': 'view-donate',
            '#donate-israel': 'view-donate'
        };

        let targetViewId = 'view-home';
        let targetSectionId = null;

        if (subpageViews[hash]) {
            targetViewId = subpageViews[hash];
        } else {
            targetViewId = 'view-home';
            if (hash !== '#home' && hash.startsWith('#')) {
                targetSectionId = hash.substring(1);
            }
        }

        const currentActiveView = document.querySelector('.page-view.active-view');

        // Save scroll position when leaving the home page
        if (currentActiveView && currentActiveView.id === 'view-home' && targetViewId !== 'view-home') {
            sessionStorage.setItem('homeScrollPosition', window.scrollY);
        }

        // Update active class on nav links.
        // script.js is shared with about.html and team.html, which have no hash
        // to match, so match those on the file name instead. Without this the
        // reset below clears their active link and never restores it.
        const currentPage = (window.location.pathname.split('/').pop() || 'index.html')
            .replace(/\.html$/, '') || 'index';
        const isStandalonePage = currentPage !== 'index';

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const linkHash = link.getAttribute('href');
            if (isStandalonePage) {
                const linkPage = linkHash.split('#')[0].replace(/\.html$/, '');
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            } else if (linkHash === hash || (hash === '#home' && linkHash === '#home')) {
                link.classList.add('active');
            } else if (targetViewId === 'view-home' && linkHash === hash) {
                link.classList.add('active');
            }
        });

        function showTargetView() {
            document.querySelectorAll('.page-view').forEach(view => {
                if (view.id === targetViewId) {
                    view.classList.add('active-view');
                    // Force a reflow
                    void view.offsetHeight;
                    view.classList.add('fade-in');
                } else {
                    view.classList.remove('active-view');
                    view.classList.remove('fade-in');
                }
            });

            // Reset scroll position or scroll to section
            if (targetViewId !== 'view-home') {
                window.scrollTo({ top: 0, behavior: 'auto' });
                
                // Switch tabs on the Donate subpage if hash matches
                if (targetViewId === 'view-donate') {
                    let activeTab = 'usa';
                    if (hash === '#donate-uk') activeTab = 'uk';
                    else if (hash === '#donate-israel') activeTab = 'israel';
                    
                    document.querySelectorAll('.donate-tab-btn').forEach(b => {
                        if (b.dataset.tab === activeTab) {
                            b.classList.add('active');
                        } else {
                            b.classList.remove('active');
                        }
                    });
                    
                    document.querySelectorAll('.donate-tab-panel').forEach(panel => {
                        if (panel.id === `donate-panel-${activeTab}`) {
                            panel.classList.add('active');
                        } else {
                            panel.classList.remove('active');
                        }
                    });
                }
            } else {
                if (targetSectionId) {
                    const sectionEl = document.getElementById(targetSectionId);
                    if (sectionEl) {
                        setTimeout(() => {
                            sectionEl.scrollIntoView({ behavior: 'auto' });
                        }, 50);
                    }
                } else {
                    const savedScroll = sessionStorage.getItem('homeScrollPosition');
                    if (savedScroll && currentActiveView && currentActiveView.id !== 'view-home') {
                        window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'auto' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'auto' });
                    }
                }
            }
            isTransitioning = false;
        }

        // If switching pages, fade out first
        if (currentActiveView && currentActiveView.id !== targetViewId) {
            isTransitioning = true;
            currentActiveView.classList.remove('fade-in');
            
            setTimeout(() => {
                showTargetView();
            }, 300);
        } else {
            showTargetView();
        }

        if (isInitialLoad) {
            setTimeout(() => {
                isInitialLoad = false;
            }, 150);
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Initial routing trigger
    handleRouting();

    // Pre-select service from URL query parameter for standalone contact page
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
        const subjectSelect = document.getElementById('clientSubject');
        if (subjectSelect) {
            subjectSelect.value = serviceParam;
        }
    }

    // Load language: query parameter -> localStorage -> default ('en')
    const urlLang = urlParams.get('lang');
    let savedLang = 'en';
    if (urlLang && (urlLang === 'en' || urlLang === 'he')) {
        savedLang = urlLang;
    } else {
        savedLang = localStorage.getItem('siteLanguage') || 'en';
    }
    setLanguage(savedLang);
});
