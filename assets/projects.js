/*
  All site content lives in this file.

  SITE        your name, role, contact details
  CATEGORIES  the sections on the homepage (and their sub-groups)
  PROJECTS    one entry per project; order here is the order on the site

  Project fields
    slug      used in the URL: project.html?p=<slug>
    title     shown in the lists and as the page heading
    category  "university" | "client" | "side"
    sub       optional sub-group inside a category, e.g. "automation"
    client    who it was built for
    org       who it was built with / through
    year      e.g. "2025" or "2024–25"
    role      e.g. "Lead Engineer"
    summary   one or two lines shown in the homepage list
    type      ["Enterprise Customer Service Automation", ...]
    stack     ["Python", "LangChain", ...]
    links     [{ label: "Live site", href: "https://..." }]
    sections  either { overview, build, impact } or, for custom headings,
              [{ label: "Overview", body: ... }, ...]. A body is a string or an
              array mixing strings (paragraphs), { title, text } objects
              (labelled points) and { list: [...] } (bullets)
    apps      optional: several apps on one page, each with its own title,
              summary, sections, stack and shots
    cover     main image at the top of the page; an array shows several
    shots     gallery images: [{ src: "assets/<folder>/<file>.png", caption: "" }]
    shotsNote optional line shown above the gallery
    noShots   true hides the "Screenshot pending" slots when there are no images

  Anything left empty renders as a "to be added" placeholder.
*/

const SITE = {
  name: "Deny Mudashiru",
  role: "Software Engineer",
  location: "London",
  email: "latifmuda12@gmail.com",
  phone: "07856190121",
  github: "https://github.com/latifmudashiru",
  linkedin: "https://www.linkedin.com/in/deny-mudashiru-b830702b2/",
  intro:
    "I build software, AI systems and automations, from RAG chatbots to operations platforms.",
  issued: "Oct 2026",
  status: "Available",
  cv: "Deny%20Mudashiru%20dev%20cv.docx",
};

const CATEGORIES = [
  {
    id: "university",
    code: "U",
    label: "University projects",
    note: "Coursework and research built during my degree.",
  },
  {
    id: "client",
    code: "C",
    label: "Client projects",
    note: "Systems built for businesses, including automation work.",
    subs: [
      {
        id: "automation",
        code: "A",
        label: "Automations",
        note: "More to be added.",
      },
    ],
  },
  {
    id: "side",
    code: "S",
    label: "Side projects",
    note: "Products I'm building on my own.",
  },
];

// shots("assets/glint/glint image ", [1, 2, 3]) -> one gallery entry per name
function shots(prefix, names) {
  return names.map((name) => ({ src: prefix + name + ".png", caption: "" }));
}

const PROJECTS = [
  // University projects
  {
    slug: "evolutionary-ai-simulation",
    title: "Evolutionary AI Simulation",
    category: "university",
    year: "2024",
    role: "AI Developer",
    summary:
      "2D simulation in which neural-network agents evolve food-collecting behaviour through a genetic algorithm.",
    type: ["Neural Networks & Genetic Algorithms"],
    stack: [
      "Python",
      "Neural Networks",
      "Genetic Algorithms",
      "Evolutionary Computation",
      "Autonomous Agent Simulation",
      "Fitness Functions & Selection",
      "Mutation-Based Optimisation",
      "CSV Data Collection & Analysis",
      "Model Weight Persistence",
      "Experimental Evaluation",
    ],
    sections: [
      {
        label: "Overview",
        body: [
          "This project explores how autonomous agents can develop effective behaviours through simulated natural selection, rather than relying on manually programmed movement and decision-making rules.",
          "I designed and developed a 2D evolutionary simulation in which a population of agents attempts to locate and collect food. Each agent is controlled by a neural network, while a genetic algorithm evolves network weights across successive generations, selecting better-performing agents and introducing mutations to explore new behaviours.",
          "The project combines evolutionary computation, neural networks and performance tracking to investigate how intelligent behaviours can emerge through repeated selection, mutation and evaluation.",
        ],
      },
      {
        label: "My role & implementation",
        body: [
          "As the AI Developer, I worked on the simulation's core logic, evolutionary mechanisms, agent behaviour and performance tracking, with the aim of making the learning process observable and measurable.",
          {
            title: "Neural Network-Based Agents",
            text: "Implemented a system in which neural networks control agent behaviour, allowing agents to process environmental inputs and produce decisions within the 2D simulation.",
          },
          {
            title: "Genetic Algorithm & Evolution",
            text: "Developed an evolutionary approach that uses agent performance to guide selection and mutation across generations. Rather than manually defining an optimal strategy, the system evolves network weights in an attempt to improve food-collection performance.",
          },
          {
            title: "Fitness Function & Selection",
            text: "Designed the project around fitness-based evaluation, investigating how food collected and survival time can contribute to an agent's performance score. This provides a basis for comparing agents and determining which individuals should influence subsequent generations.",
          },
          {
            title: "Evolution Statistics & Data Collection",
            text: "Implemented statistical tracking, with evolution data recorded in CSV files. This creates a basis for analysing changes in agent performance over time and identifying whether successive generations demonstrate measurable improvement.",
          },
          {
            title: "Model Weight Persistence & Analysis",
            text: "Included functionality and supporting utilities for working with saved neural-network weights, including best_weights.pkl, alongside scripts for extracting and inspecting those weights.",
          },
        ],
      },
      {
        label: "Evaluation & analysis",
        body: [
          "The project records evolutionary statistics that can be used to investigate whether the population improves over successive generations.",
          {
            title: "Fitness Progression",
            text: "Analyse average and maximum fitness across generations to assess changes in overall population performance and the development of higher-performing agents.",
          },
          {
            title: "Food Collection Performance",
            text: "Track maximum food collected to examine whether agents become more effective at achieving the simulation's objective.",
          },
          {
            title: "Evolutionary Trends & Limitations",
            text: "Use the recorded data to investigate performance improvements, plateaus and the limitations of the evolutionary approach. Fitness improvements alone do not necessarily prove that agents have developed a general strategy, making it important to interpret results alongside observed behaviour.",
          },
        ],
      },
      {
        label: "Key learning outcomes",
        body: [
          {
            list: [
              "Applied evolutionary algorithms to a practical AI simulation.",
              "Explored how neural networks can be optimised without conventional gradient-based training.",
              "Investigated the relationship between fitness design, selection and agent behaviour.",
              "Developed an approach to recording performance data for analysing evolutionary progress.",
              "Gained practical experience in designing, implementing and evaluating an AI-driven system.",
            ],
          },
        ],
      },
    ],
    // No screenshots for this one, so hide the empty gallery
    noShots: true,
  },
  {
    slug: "mobile-applications-portfolio",
    title: "Mobile Applications Portfolio",
    category: "university",
    year: "",
    role: "Designer & Developer",
    summary:
      "Two Android apps built to university briefs: a notes app for primary school children and a social app for a secondary school.",
    type: ["University coursework", "Android"],
    stack: [],
    sections: [
      {
        label: "Overview",
        body: [
          "Two Android applications I designed and built on my own for university assignments, each written up in a technical report. Both started from a brief for a school in Northampton, and both went through the same process: mapping the navigation between screens, sketching each screen by hand, building it, then testing every activity against an expected outcome.",
          "Northampton Note Bot is a notes app for primary school children. Study Sesh is a social app where secondary school students post and comment in subject sessions run by admins.",
        ],
      },
    ],
    cover: [
      "assets/notebot/home.png",
      "assets/notebot/quiz.png",
      "assets/studysesh/login.png",
      "assets/studysesh/sessions.png",
    ],
    apps: [
      {
        title: "Northampton Note Bot",
        summary:
          "A notes app for primary school children, with a friendly robot theme and a quiz, dice and calculator built in.",
        sections: [
          {
            label: "Overview",
            body: [
              "The brief was a notes application for primary school children in Northampton. The app lets them write notes, save them as files on the device and sort them into folders.",
              "My research suggested that a more interactive, playful experience helps children learn and remember more, so I added activities alongside the notes: an animal quiz that ends with a maths question, a dice roller and a calculator.",
            ],
          },
          {
            label: "What I built",
            body: [
              {
                title: "Notes: create, read, update, delete",
                text: "Saving a note writes its title and content to a private text file in the device's internal storage, named after the title. Updating renames the file if the title has changed. Saved notes appear in a list, and tapping one opens it to edit or delete.",
              },
              {
                title: "Folders",
                text: "Children can create folders with any name, view them in a list and add a note to a folder from the note screen.",
              },
              {
                title: "Quiz",
                text: "Two questions show an animal silhouette with three answer buttons, then a final question asks a random multiplication using two numbers between 1 and 12. A wrong answer changes the robot's picture and speech bubble, and finishing the quiz shows a congratulations screen.",
              },
              {
                title: "Dice and calculator",
                text: "The dice activity rolls through six dice faces I drew myself, with gears in place of dots to match the theme, and a character in the corner announces the result. The calculator adds, subtracts, multiplies and divides.",
              },
              {
                title: "Robot theme for a young audience",
                text: "Every screen has screws in the corners, a pixel-style font and a cartoon robot with a speech bubble that tells the child what to do next, so the instructions feel like part of the app rather than a manual.",
              },
              {
                title: "Design process",
                text: "I went through three versions of the navigation map before building, and sketched each screen on paper first. The final flow starts at a login screen and then branches into notes, folders and activities.",
              },
            ],
          },
          {
            label: "Testing & next steps",
            body: [
              "I tested each activity against an expected outcome, covering empty login fields, wrong login details, saving and updating empty notes, moving notes into folders, and every calculator operation with empty inputs.",
              {
                list: [
                  "Opening a note from inside a folder is not finished: notes can be added to folders but not yet read from there.",
                  "The layout is tuned for a single emulator (Nexus 5), so the next step is making it scale to other screen sizes.",
                  "I would add more quiz questions and save each child's score.",
                ],
              },
            ],
          },
        ],
        stack: [
          "Android Studio",
          "Kotlin",
          "XML layouts",
          "Activities & Intents",
          "Internal file storage",
          "ListView",
        ],
        shots: [
          { src: "assets/notebot/home.png", caption: "Home screen" },
          { src: "assets/notebot/login.png", caption: "Login" },
          { src: "assets/notebot/notes.png", caption: "Notes menu" },
          { src: "assets/notebot/create-note.png", caption: "Create, update or delete a note" },
          { src: "assets/notebot/folders.png", caption: "Folders menu" },
          { src: "assets/notebot/activities.png", caption: "Activities menu" },
          { src: "assets/notebot/quiz.png", caption: "Quiz: animal silhouette question" },
          { src: "assets/notebot/quiz-wrong.png", caption: "Quiz: wrong answer" },
          { src: "assets/notebot/quiz-maths.png", caption: "Quiz: random multiplication question (layout view)" },
          { src: "assets/notebot/quiz-complete.png", caption: "Quiz complete" },
          { src: "assets/notebot/dice.png", caption: "Dice with gear faces" },
          { src: "assets/notebot/navigation-map.png", caption: "Final navigation map" },
          { src: "assets/notebot/first-sketch.png", caption: "First sketch of the home screen" },
        ],
      },
      {
        title: "Study Sesh",
        summary:
          "A social app for a secondary school, where students post and comment in subject sessions created by admins.",
        sections: [
          {
            label: "Overview",
            body: [
              "The brief was a social media application for a secondary school in Northampton. Study Sesh is organised around sessions, which admins create to match what is going on in school, such as maths, English or science. Students post in a session and comment on each other's posts, so they can help one another and teachers can see what is being discussed.",
              "I first sketched an Instagram-style home feed, then changed direction to sessions because that fitted a school far better than a general social feed.",
            ],
          },
          {
            label: "What I built",
            body: [
              {
                title: "Accounts and login",
                text: "Students register with a username, password, email and date of birth, which are stored in the app's database, and log in with their email and password. The app checks for empty fields, email format and mismatched passwords, and keeps the user logged in until they press log out.",
              },
              {
                title: "Sessions",
                text: "Admins type a session name and it is added to a scrolling list on their home page. Students see every session the admins have created.",
              },
              {
                title: "Posts and comments",
                text: "Posts appear in the session as short snippets. Tapping one opens the full post with a like button and a comment button, which brings up a dialog for writing a comment that is then added to the list underneath.",
              },
              {
                title: "Admin tools",
                text: "Admins can add students manually, update a student's details or password, delete a student from the database and create further admin accounts.",
              },
              {
                title: "Profile",
                text: "A profile screen lists the account actions: change details, view details and view posts for students, and add user, add admin and see users for admins.",
              },
              {
                title: "Consistent design",
                text: "The black and white identity and logo came from my first paper sketch. Account screens share one layout so the app feels cohesive, and I used constraints so the main screens hold up on different devices.",
              },
            ],
          },
          {
            label: "Testing & next steps",
            body: [
              "I tested login, account creation, posting, changing details and the admin screens against expected outcomes, and recorded where the result differed.",
              {
                list: [
                  "Likes change the button on screen but are not saved yet.",
                  "The screen for viewing your own posts is not working, and usernames are not yet shown on posts.",
                  "Buttons inside the scrolling lists do not match the colour scheme, which is the first thing I would fix.",
                  "I would add more settings and accessibility features, since a whole school of students will have different needs.",
                ],
              },
            ],
          },
        ],
        stack: [
          "Android Studio",
          "Kotlin",
          "XML layouts",
          "RecyclerView",
          "Fragments & dialogs",
          "Local database",
        ],
        shots: [
          { src: "assets/studysesh/login.png", caption: "Login" },
          { src: "assets/studysesh/create-account.png", caption: "Create account" },
          { src: "assets/studysesh/sessions.png", caption: "Admin home: sessions list (layout view)" },
          { src: "assets/studysesh/session-posts.png", caption: "Posts in a session (layout view)" },
          { src: "assets/studysesh/post-detail.png", caption: "Post with like and comment (layout view)" },
          { src: "assets/studysesh/profile.png", caption: "Profile (layout view)" },
          { src: "assets/studysesh/change-details.png", caption: "Change a user's details" },
          { src: "assets/studysesh/navigation-map.png", caption: "Planned navigation map" },
          { src: "assets/studysesh/first-sketch.png", caption: "First sketch of the login screen" },
        ],
      },
    ],
  },
  {
    slug: "dissertation-rag-chatbot",
    title: "Studi: RAG-Based AI Tutor",
    category: "university",
    year: "2026",
    role: "Author, Developer & Researcher",
    summary:
      "My dissertation: a RAG-grounded AI tutor built on Flask and MongoDB Atlas, tested against in-person teaching in a 14-participant study.",
    type: ["BSc Computing Dissertation", "University of Northampton", "Mixed-Methods Study"],
    stack: [
      "Python",
      "Flask",
      "MongoDB Atlas Vector Search",
      "PyMongo",
      "OpenAI GPT-4o-mini",
      "OpenAI text-embedding-3-small",
      "PyPDF",
      "HTML / CSS / JavaScript",
      "Retrieval-Augmented Generation",
      "A/B Experiment Design",
    ],
    sections: [
      {
        label: "Overview",
        body: [
          "This is my BSc Computing dissertation, submitted in April 2026: Designing and Implementing a RAG-Based AI Tutor: Assessing Pedagogy and Student Engagement in Software Engineering Education. It asks to what extent a Retrieval-Augmented Generation (RAG) chatbot can deliver learning content compared with human instruction, in terms of knowledge retention, engagement and student confidence.",
          "The problem I set out to address is the push to bring AI into education without much evidence that these tools help learning. General tools such as ChatGPT often hallucinate or give generic advice, and specialised subjects with less information online may not be covered well. I wanted to test whether a chatbot that answers only from supplied documents could match a human teacher on a specialised topic.",
          "I built a web-based learning platform called Studi. It uses a Python Flask backend and a MongoDB Atlas vector database to store and retrieve chunked course content, and grounds OpenAI GPT-4o-mini in the retrieved text so that answers carry source attribution. I then ran a controlled A/B experiment with 14 participants on a fictional curriculum that I wrote, so that any correct answer had to come from retrieval rather than the model's training data.",
        ],
      },
      {
        label: "My role & implementation",
        body: [
          "I designed and built Studi as a three-tier web application, with the retrieval pipeline as its core, and then designed and ran the study.",
          {
            title: "Three-tier architecture",
            text: "The client layer is plain HTML, CSS and JavaScript with no framework, because the application is only a login page and a chat window. The backend is a Flask API. MongoDB Atlas is the single store for user profiles, chat history and vector embeddings.",
          },
          {
            title: "Ingestion pipeline",
            text: "A script takes a PDF (read with PyPDF) or a plain text or markdown file, splits the text into paragraphs and drops chunks shorter than 50 characters. Each chunk is embedded with text-embedding-3-small into a 1536-dimension vector and stored in MongoDB with its source filename and page number.",
          },
          {
            title: "Retrieval and grounded answering",
            text: "A student's question is first cleaned up by GPT-4o-mini to fix spelling and awkward phrasing, then embedded and searched with MongoDB Atlas $vectorSearch, which examines 50 candidates and returns the top 3 chunks by cosine similarity. Those chunks go to GPT-4o-mini with source tags, and the system prompt tells the model to answer only from that context, cite the source and page, and say so when it does not have the information.",
          },
          {
            title: "Data model",
            text: "Three MongoDB collections: knowledge_base holds text chunks, embeddings and source metadata; users holds usernames and hashed passwords; chat_logs records each question, response, whether context was found and a timestamp, which let me review every conversation during evaluation.",
          },
          {
            title: "Interface",
            text: "A login page leads to a chat window with a temporary 'Thinking...' message while the API responds, a collapsible sidebar and a Knowledge Base panel of suggested study topics, added so participants were not facing a blank chat. The design is deliberately minimal so the interface does not affect the experiment.",
          },
          {
            title: "Experiment design",
            text: "Seven participants were taught the fictional Kingston Property Blueprint in person by me, and seven used Studi alone, each for 30 minutes. Both groups then took the same 10-question test and a five-statement Likert survey, recorded under anonymous IDs.",
          },
        ],
      },
      {
        label: "Results & findings",
        body: [
          {
            title: "Knowledge retention",
            text: "The Studi group averaged 4.6 out of 10 on the post-lesson test and the in-person group averaged 4.1, the opposite of my hypothesis. With only 14 participants the 0.5 difference is not large enough to claim statistical significance, so I treat it as showing the AI group was at least non-inferior.",
          },
          {
            title: "Engagement and perceived effectiveness",
            text: "The in-person group rated the session more engaging (3.9 against 2.7 out of 5) and the teaching method more effective (4.1 against 2.0), and were more willing to use it again (3.7 against 2.1). Across all five statements the mean was 3.5 for the in-person group and 2.8 for the Studi group. I describe this as a perception-performance gap.",
          },
          {
            title: "Clarity on specific questions",
            text: "Participants using Studi rated 'my specific questions were answered clearly' at 4.4 out of 5 against 3.3 for the in-person group, the highest score of any statement in the AI group.",
          },
          {
            title: "Grounding and responsiveness",
            text: "When I asked about topics outside the knowledge base, Studi replied that it did not have that information rather than inventing an answer. Response time, including query refinement, embedding, vector search and generation, averaged 10 seconds.",
          },
          {
            title: "Limitations and recommendation",
            text: "The sample was 14 people recruited by convenience sampling, the session was a single 30-minute lesson, and I am not a qualified teacher, so the human group reflects my own teaching. My conclusion is that RAG tutors suit supplementary support alongside human teaching rather than replacing it.",
          },
        ],
      },
    ],
    cover: "assets/dissertation/d6.png",
    shotsLabel: "Figures & screenshots",
    shots: [
      { src: "assets/dissertation/d6.png", caption: "The Studi chat interface" },
      { src: "assets/dissertation/d5.png", caption: "Login page" },
      { src: "assets/dissertation/d7.png", caption: "Knowledge Base panel with suggested study topics (1 of 2)" },
      { src: "assets/dissertation/d8.png", caption: "Knowledge Base panel, continued (2 of 2)" },
      { src: "assets/dissertation/d9.png", caption: "The tutor declining a question outside its material" },
      { src: "assets/dissertation/d4.png", caption: "RAG pipeline: ingestion above, retrieval below" },
      { src: "assets/dissertation/d1.png", caption: "Three-tier architecture" },
      { src: "assets/dissertation/d2.png", caption: "The three MongoDB collections" },
      { src: "assets/dissertation/d3.png", caption: "Structure of the A/B experiment" },
    ],
  },

  // Client projects
  {
    slug: "glint",
    title: "Glint",
    category: "client",
    client: "Glint Facility & Cleaning Services",
    year: "",
    role: "Lead Software & Automation Engineer",
    summary: "Operations command center and automated dispatch platform.",
    type: [
      "Commercial Operations Command Center",
      "CleanSmarts & Airtable API Integration",
      "GMT Solutions Platform",
    ],
    stack: [
      "CleanSmarts API",
      "Airtable REST API",
      "Supabase (PostgreSQL)",
      "React 19 / Vite",
      "Tailwind CSS",
      "AI Dispatch Co-Pilot",
      "Messaging Gateway API",
      "PDF Invoicing Engine",
      "Compliance Engine",
    ],
    sections: {
      overview: [
        "Client: Glint Facility & Cleaning Services — a high-volume commercial cleaning and facilities management enterprise.",
        "Prior to Glint, operational administrators spent hours every single day manually coordinating shift rotas, cross-referencing worker qualifications (such as enhanced DBS clearances and working-at-height licenses), contacting clients individually, and manually creating invoices in spreadsheets.",
        "To solve these operational bottlenecks, we built Glint — a unified internal command center integrated directly with CleanSmarts API for shift logistics, Airtable REST API for real-time staff rosters, Supabase (PostgreSQL) for relational data, and AI intelligence for automated candidate matching. The platform dramatically cut administrative overhead, reducing worker dispatch and scheduling times from hours down to minutes while guaranteeing full regulatory compliance.",
      ],
      build: [
        "As the Lead Software & Automation Engineer, I designed and built the complete system architecture, relational database schemas, external API integrations, compliance matching engine, and automated invoicing workflows.",
        {
          title: "CleanSmarts API & Airtable Integration",
          text: "Engineered seamless multi-system integrations connecting CleanSmarts API endpoints for live shift synchronization alongside Airtable REST API sync to manage real-time staff rosters, skills, and certification statuses.",
        },
        {
          title: "Operations Command Center & Dynamic Shift Board",
          text: "Built an interactive operational dashboard delivering live tracking for shift statuses (Pending, Assigned, In Progress, Completed, Cancelled) with visual indicators for mandatory site qualifications (School DBS Clearances, Height Licenses, Heavy Equipment Certifications).",
        },
        {
          title: "Automated Staff Compliance & Qualification Engine",
          text: "Developed a compliance validation engine that cross-references site requirements against worker badges prior to shift assignment, preventing non-compliant worker placements (such as placing un-cleared staff in school environments).",
        },
        {
          title: "Client Communication Gateway & Reschedule Flow",
          text: "Integrated automated notification pipelines to send booking confirmations, worker dispatch ETAs, and completion alerts to clients, with dynamic roster recalculations when schedule changes occur.",
        },
        {
          title: "Automated Invoice & Payroll Engine",
          text: "Created an automated billing system that aggregates shift durations, applies differential weekend/night rates, calculates tax breakdowns, and generates branded, printable PDF invoices ready for immediate client billing.",
        },
        {
          title: "AI-Assisted Dispatch Co-Pilot",
          text: "Implemented AI context layers connecting intelligent language models directly with database endpoints to rank qualified candidate cleaners for complex shifts, draft client updates, and flag time discrepancies before invoices are finalized.",
        },
        {
          title: "Defensive Architecture & Code Quality",
          text: "Enforced robust component design, input validation, and clean code standards for fast initial page load times and consistent user interface performance.",
        },
      ],
      impact: [
        {
          title: "Drastically Cut Dispatch & Scheduling Time",
          text: "Reduced average daily scheduling and worker matching time from hours of manual phone calls down to minutes.",
        },
        {
          title: "Guaranteed 100% Regulatory Compliance",
          text: "Eliminated non-compliant shift placements through automated qualification pre-screening before assignments are confirmed.",
        },
        {
          title: "Instant Automated Invoice Generation",
          text: "Replaced slow manual spreadsheet invoicing with instant, automated PDF generation immediately after shift completion.",
        },
        {
          title: "Substantially Reduced Client Communication Overhead",
          text: "Streamlined client updates by dispatching automated SMS and WhatsApp notification logs and status alerts.",
        },
      ],
    },
    cover: "assets/glint/main glint.png",
    shotsNote:
      "Explore all 13 interactive screens and workflows of the Glint Operations Platform, including live shift boards, compliance validation modals, staff rosters, messaging gateways, and invoice generators. Click any image to view in full resolution.",
    shots: [
      { src: "assets/glint/main glint.png", caption: "" },
      ...shots("assets/glint/glint image ", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    ],
  },
  {
    slug: "white-elephant",
    title: "White Elephant",
    category: "client",
    org: "GMT Solutions",
    year: "",
    role: "Lead Full-Stack & AI Engineer",
    summary: "AI customer service and email automation suite.",
    type: [
      "Enterprise Customer Service Automation",
      "Outlook & RAG Integration",
      "GMT Solutions Integration",
    ],
    stack: [
      "React.js / Vite",
      "Express.js & Node.js",
      "Microsoft Azure (Entra ID)",
      "Microsoft Graph API",
      "ElevenLabs Voice API",
      "Supabase & PostgreSQL",
      "OpenAI API",
      "Document Processing",
      "Email Automation (SMTP)",
      "GDPR Data Compliance",
    ],
    sections: {
      overview: [
        "Target Audience: Luxury drawing/raffle platform operators looking to automate customer service, scale ticket support, and maintain high support responsiveness 24/7 without hiring a massive operations team.",
        "White Elephant is a luxury blockchain-verified raffle platform where users purchase entry tickets to win high-value prizes. During drawing periods, a massive surge of repetitive customer queries regarding ticket transaction hashes, payment processing (Apple Pay/Crypto), shipping fees, and raffle verification rules regularly bottlenecks the support desk.",
        "To support this scale, we designed and built an enterprise-grade AI Customer Support & Automation Suite. This system operates 24/7 to automate support ticketing, answers user questions using an AI knowledge engine, drafts auto-replies to incoming Outlook support emails, and integrates with voice channels for real-time customer calls.",
      ],
      build: [
        "As the Lead Full-Stack & AI Engineer, I designed the system architecture, built the database, integrated enterprise Microsoft APIs, and engineered the end-to-end automation workflows.",
        {
          title: "Microsoft Azure & Graph API Email Auto-Pilot",
          text: "Linked the platform to the team's Outlook mailboxes using Microsoft Azure Active Directory (OAuth 2.0/Entra ID) for secure authentication. Integrated the Microsoft Graph API to read incoming support emails 24/7. The AI instantly drafts context-aware, professional responses using platform guidelines, allowing agents to review, edit, and send drafts in under a minute rather than writing emails from scratch.",
        },
        {
          title: "24/7 AI-Powered Knowledge Engine",
          text: "Developed a search engine that retrieves information from uploaded PDF and Word (.docx) terms of service. It instantly matches customer questions with the correct policies to provide immediate, accurate answers round-the-clock.",
        },
        {
          title: "ElevenLabs Voice Integration",
          text: "Integrated ElevenLabs voice webhooks to power a live voice channel. When customers call, the system uses natural-sounding AI voices and automatically formats responses into short, clear spoken sentences, giving customers instant verbal answers to their questions.",
        },
        {
          title: "Intelligent Customer Routing",
          text: "Built a classification system that analyzes customer messages and routes them to dynamic paths based on their intent: Buyers (drawings, ticket confirmations, blockchain verify) versus Sellers (payouts, reserve prices, bank details).",
        },
        {
          title: "Continuous Learning Curation",
          text: "Created a moderation board that captures unanswered queries. If the AI doesn't know an answer, it flags the question for review. Support leads can answer the question with one click, graduating it directly into the AI's database so it can answer it next time.",
        },
        {
          title: "Enterprise Compliance & Security",
          text: "Designed the platform to be fully secure and compliant with standard data protection regulations (GDPR). Configured automated cleanup routines that prune conversation logs and customer details after two months, protecting sensitive user data.",
        },
      ],
      impact: [
        {
          title: "80% Support Ticket Automation",
          text: "Automatically resolved the majority of repetitive customer FAQs (such as ticket confirmations, blockchain verify procedures, and cash out options) via the customer-facing chat widget.",
        },
        {
          title: "90% Faster Inbox Triage",
          text: "Saved hours of operational time by pre-drafting context-rich responses, cutting average email response time from hours to under a minute.",
        },
        {
          title: "24/7 Availability",
          text: "Provided instant, round-the-clock support on chat, email, and voice channels, maintaining high responsiveness even during peak drawing periods.",
        },
        {
          title: "Operational Overhead Reduction",
          text: "Allowed a small operations team to manage customer spikes that would otherwise require a massive, temporary support staff.",
        },
      ],
    },
    cover: "assets/white elephant/we main.png",
    shots: [
      { src: "assets/white elephant/we main.png", caption: "" },
      ...shots("assets/white elephant/we", [1, 2, 3, 4, 5, 6, 7, 8]),
    ],
  },
  {
    slug: "columbican",
    title: "ColombiCan",
    category: "client",
    client: "ColombiCan, Peckham",
    org: "GMT Solutions",
    year: "June 2026",
    role: "Full-Stack Developer & Sales Engineer",
    summary: "Mobile web and loyalty platform.",
    stack: [
      "Next.js / React",
      "QR Code Engine",
      "Staff Scanner Portal",
      "Magic-Link Auth",
      "Google Search Console",
      "Local SEO Optimization",
      "B2B Proposal Writing",
      "User Onboarding Manuals",
    ],
    sections: {
      overview: [
        "Client: ColombiCan, an independent Colombian food and dessert business in Peckham, London.",
        "ColombiCan needed to retire unreliable physical stamp cards, start building a valuable customer database, and grow their online search presence. Partnering with GMT Solutions, we designed, built, and deployed a mobile-first digital loyalty system and website to turn first-time buyers into repeat customers.",
      ],
      build: [
        "As the Full-Stack Developer & Sales Engineer, I owned this project from the initial commercial pitch and proposal writing, through to complete engineering, database schema design, and technical user documentation.",
        {
          title: "Digital Loyalty Card (The Tab Club)",
          text: "Built a passwordless magic-link authentication flow. Members instantly view their digital stamp card (1 stamp per purchase, free drink at 7 stamps), stamp/redemption history, and a live promotions carousel.",
        },
        {
          title: "Referral & Viral Loop",
          text: "Engineered an invite-tracking system awarding 3 stamps to referrers and a welcome stamp to joiners, with built-in safeguards to prevent self-referrals.",
        },
        {
          title: "Secure Staff Portal",
          text: "Developed an employee dashboard featuring a live camera QR scanner to scan customer codes and award stamps, custom promotions/event editors, and a staff recruitment scoreboard to gamify customer outreach.",
        },
        {
          title: "SEO Foundation & Google Search Console",
          text: "Integrated Google schema markup, metadata, sitemaps, and verified DNS records to rank ColombiCan on Google for local Peckham search terms.",
        },
        {
          title: "Commercial Proposals & Technical Writing",
          text: "Authored the comprehensive business proposal, layout specifications, and structured training guides/user manuals to enable seamless staff onboarding and operations management.",
        },
      ],
      impact: [
        {
          title: "Customer Database Growth",
          text: "Digitised their rewards programme, building a GDPR-compliant list of 450+ registered members within the first few months of launching.",
        },
        {
          title: "Repeat Visits & Retention",
          text: "Increased customer retention by driving a 35% rise in repeat visits via automated milestones (free drink at 7 stamps) and real-time history tracking.",
        },
        {
          title: "Organic Virality",
          text: "Acquired 120+ new members strictly through member-to-member progress-tracked referrals.",
        },
        {
          title: "Email Marketing Capture",
          text: "Captured a verified list of 300+ opted-in customer emails, enabling ColombiCan to directly deploy targeted promotions and weekend alerts.",
        },
        {
          title: "Local SEO Indexing",
          text: "Structured and indexed menu items on Google Search Console, yielding over 1,200+ monthly local impressions for key Peckham search queries.",
        },
      ],
    },
    cover: "assets/columbican/cmain.png",
    shots: [
      { src: "assets/columbican/cmain.png", caption: "" },
      ...shots("assets/columbican/", ["c1", "c2", "ce3", "ce4", "c5", "c6", "c7"]),
    ],
  },

  // Client projects / Automations
  {
    slug: "linkedin-lead-enrichment",
    title: "Automated LinkedIn Lead Enrichment",
    category: "client",
    sub: "automation",
    year: "",
    role: "Automation Engineer",
    summary:
      "n8n workflow that fills in missing surnames, roles and LinkedIn URLs from partial contact data, without scraping LinkedIn.",
    type: ["Data Enrichment & Compliance"],
    stack: [
      "n8n (Workflow Engine)",
      "Apify (Google Search Actors)",
      "Google Sheets API",
      "Data Enrichment",
      "Search Operator Logic",
      "Compliance Engineering",
    ],
    sections: {
      overview: [
        "Target Audience: Built for recruitment agencies, CRM managers, event organizers, and outbound sales teams who frequently collect partial contact information (e.g., just a first name and company from an event) and need a scalable way to fill in the blanks.",
        "I built a LinkedIn information enrichment automation that successfully finds missing contact data (surnames, exact roles, LinkedIn URLs) without relying on direct LinkedIn scraping, thereby completely avoiding Terms of Service violations and platform restrictions.",
      ],
      build: [
        "I designed an intelligent matching workflow in n8n that leverages Google’s indexing mechanisms via Apify to triangulate professional profiles based on incomplete datasets.",
        {
          title: "Dynamic Search Generation",
          text: "The system checks a Google Sheet for incomplete records. It filters contacts missing surnames or URLs and dynamically generates structured Google search operators (e.g., site:linkedin.com/in \"first_name\" \"company_name\").",
        },
        {
          title: "Compliant Data Extraction",
          text: "Used Apify Google Search actors to safely retrieve indexed results, bypassing the compliance risks, account bans, and scalability issues of direct LinkedIn scraping.",
        },
        {
          title: "Advanced Matching Logic",
          text: "Developed custom matching logic to analyze the search results, identifying the highest-probability LinkedIn profile despite custom URL slugs or inconsistent job titles.",
        },
        {
          title: "State Management",
          text: "Engineered a status-tracking system within the Google Sheet to mark records as processed, preventing infinite loops and saving API credits on duplicate processing.",
        },
      ],
      impact: [
        "The automation drastically reduced the hours spent on manual LinkedIn sleuthing. It proved that combining structured matching logic with publicly available Google indexes is a highly effective, safe, and scalable way to build out CRM databases and recruitment pipelines from fragmented event data.",
      ],
    },
    cover: "assets/enrcichement automation/emain.png",
    shotsLabel: "Workflow snapshots",
    shots: [
      { src: "assets/enrcichement automation/emain.png", caption: "" },
      ...shots("assets/enrcichement automation/e", [1, 2]),
    ],
  },
  {
    slug: "business-image-to-lead-intelligence",
    title: "Automated Business Image to Lead Intelligence",
    category: "client",
    sub: "automation",
    year: "",
    role: "Automation Engineer",
    summary:
      "n8n workflow that turns photos of business cards, vans and billboards into researched leads in a Google Sheet, with an email brief.",
    type: ["Lead Generation & AI Research"],
    stack: [
      "n8n (Workflow Engine)",
      "Gemini API (Vision & LLM)",
      "Google Cloud (Service Accounts)",
      "Google Drive API",
      "Google Sheets API",
      "Gmail API",
      "JavaScript (Data Parsing)",
      "Prompt Engineering",
      "API Architecture",
    ],
    sections: {
      overview: [
        "Target Audience: Designed for B2B sales teams, business development reps, and field networkers who constantly discover leads in the physical world (company cards, vans, billboards) but lose track of them in messy AI chats or manual notes.",
        "I built a 24/7 automated researcher that removes the manual work of researching physical advertisements. Instead of taking a picture and prompting an AI by hand, the system continuously monitors a Google Drive folder. When an image is uploaded, it runs deep research, extracts key business intelligence, and structures it into a searchable Google Sheet.",
      ],
      build: [
        "I engineered the entire workflow in n8n, connecting Google Drive, the Gemini API, Google Sheets and Gmail.",
        {
          title: "Automated Ingestion",
          text: "Configured a Google Service Account so the workflow runs 24/7 without depending on a personal login session. A scheduled trigger checks the Drive folder every two minutes and compares new files against a log of processed IDs, so each image is only researched once.",
        },
        {
          title: "AI Image Analysis & Prompt Engineering",
          text: "Integrated the Gemini API to analyse the images. I engineered strict prompts (e.g. \"Return ONLY valid JSON with EXACTLY these keys.\") to force Gemini to return structured data rather than inconsistent paragraphs, which made parsing far more reliable.",
        },
        {
          title: "Data Structuring & Cleaning",
          text: "Used JavaScript nodes in n8n to parse, clean and map the JSON output, extracting the business type, contact details, likely pain points and discovery angles into the Google Sheet.",
        },
        {
          title: "Automated Briefing",
          text: "The system sends a formatted internal research brief by email within two minutes of the upload, giving immediate, actionable intelligence for discovery prep.",
        },
      ],
      impact: [
        "This system turned unstructured physical encounters into an organised, trackable lead generation pipeline. It removed the manual research step entirely, replacing a messy AI chat habit with a reliable, operational CRM workflow.",
      ],
    },
    cover: "assets/business to lead/b3.png",
    shotsLabel: "Workflow snapshots",
    shots: [
      { src: "assets/business to lead/b3.png", caption: "The n8n workflow, from Drive check to Sheet and email brief" },
      { src: "assets/business to lead/b1.png", caption: "Scheduled runs completing every two minutes" },
      { src: "assets/business to lead/b2.png", caption: "Gemini API usage across models" },
    ],
  },
  {
    slug: "cv-improvement-system",
    title: "CV Improvement System",
    category: "client",
    sub: "automation",
    year: "",
    role: "Automation Engineer",
    summary:
      "Make.com scenario that takes a CV and a job description from a form and emails back either a tailored CV rewrite or interview preparation.",
    type: ["Careers Support Automation"],
    stack: [
      "Make.com",
      "Google Forms & Sheets",
      "Router logic",
      "OpenAI API",
      "Gmail",
      "Prompt Engineering",
    ],
    sections: {
      overview: [
        "Target Audience: Job seekers who need help tailoring a CV to a specific role or preparing for an interview, particularly people who lack confidence or have no one to review their applications.",
        "I built an automation that gives each candidate tailored help without anyone reviewing it by hand. The candidate fills in a short form with their CV, the job description and the service they want, either CV improvement or interview preparation, and receives the result by email.",
      ],
      build: [
        "I built the workflow as a Make.com scenario connecting Google Sheets, the OpenAI API and Gmail.",
        {
          title: "Form intake",
          text: "Form responses land in a Google Sheet, and the scenario watches it for new rows, so each submission starts a run with the candidate's CV, the job description and their chosen service.",
        },
        {
          title: "Routing by request",
          text: "A router node reads which service the candidate chose and sends the submission down one of two branches, each with its own OpenAI completion and its own email.",
        },
        {
          title: "CV improvement prompt",
          text: "Acting as an experienced UK employment advisor and CV writer, the model rewrites the CV to be clear, achievement-focused, tailored to the job description and ATS-friendly, while keeping experience and education factual and never inventing roles or achievements.",
        },
        {
          title: "Interview preparation prompt",
          text: "The model produces five realistic interview questions for the role, strong example answers drawn only from the candidate's real experience, practical advice for someone who may lack confidence and tips for highlighting their strengths.",
        },
        {
          title: "Guarding against hallucination",
          text: "Both prompts tell the model to use only what is in the CV, so the output stays truthful and the candidate can stand behind everything in it.",
        },
        {
          title: "Email delivery",
          text: "A Gmail node at the end of each branch sends the finished CV or interview pack straight to the candidate's inbox.",
        },
      ],
      impact: [
        "Each candidate gets personalised CV or interview support within minutes of submitting the form, with no manual review step, so the service can help many more people than one advisor working by hand.",
      ],
    },
    cover: "assets/cv/cv im.png",
    shotsLabel: "Workflow snapshots",
    shots: [
      { src: "assets/cv/cv im.png", caption: "Make.com scenario: Sheets trigger, router, two OpenAI branches, Gmail" },
    ],
  },

  // Side projects
  {
    slug: "askra",
    title: "Askra",
    category: "side",
    year: "2025–26",
    role: "Founder & Sole Developer",
    summary:
      "Multi-tenant SaaS that gives online coaches a white-labelled RAG chatbot trained only on their own content, live with paying users.",
    type: ["Solo-built SaaS product", "Live, commercially deployed", "Multi-tenant platform"],
    stack: [
      "JavaScript / Node.js",
      "React 19",
      "Vite",
      "Express.js",
      "Supabase (PostgreSQL, pgvector, Auth, Storage, RLS, RPC)",
      "Cloudflare R2",
      "OpenAI GPT-4o-mini",
      "OpenAI text-embedding-ada-002",
      "OpenAI Whisper",
      "FFmpeg",
      "Stripe (subscriptions, Connect, webhooks)",
      "Slack API",
      "Discord.js",
      "Resend / Nodemailer",
      "TailwindCSS",
      "React Router",
      "Zod",
      "Multer",
      "Helmet",
      "express-rate-limit",
      "Artillery / Playwright",
      "Retrieval-Augmented Generation",
      "Multi-tenant SaaS architecture",
      "White-label / custom domains",
    ],
    sections: [
      {
        label: "Overview",
        body: [
          "Askra (tryaskra.com) is a multi-tenant SaaS platform that lets online coaches, educators and course creators deploy a white-labelled AI chatbot trained only on their own content. The bot acts as an always-on customer-success layer: it answers student questions from the coach's knowledge base, points students to the exact moment in a video that answers them, and shows the coach what students are asking.",
          "It is a live product with paying users, Stripe billing, an affiliate programme and Slack and Discord integrations. I am the sole developer: I designed the architecture and wrote the frontend, backend, RAG pipeline, database schema and billing system, and deployed it to production.",
        ],
      },
      {
        label: "The problem",
        body: [
          "Online coaching is growing quickly, but coaches hit a scaling wall. As their student base grows they drown in repetitive questions that the course material already answers, because students cannot or will not search hours of content. Hiring virtual assistants or customer success managers eats into margins, and slow replies lose leads.",
          "General tools like ChatGPT cannot be grounded in a coach's own material and tend to make things up. With Askra, a coach uploads their content once and the bot answers students 24/7 using only that content, for a fraction of the cost of a hire.",
        ],
      },
      {
        label: "Architecture",
        body: [
          {
            title: "Multi-tenant by design",
            text: "A React 19 SPA (Vite, React Router, TailwindCSS) talks to a Node.js/Express API. Supabase (PostgreSQL with pgvector) holds profiles, organisations, conversations, embeddings, subscriptions and analytics, and Cloudflare R2 stores large video uploads. Every query is scoped to an organisation ID, and Row-Level Security policies enforce tenant isolation in the database itself.",
          },
          {
            title: "Knowledge ingestion",
            text: "Coaches upload PDFs, text, markdown or video. Text is split into meaningful chunks and embedded with text-embedding-ada-002 into 1536-dimension vectors, stored with the source, tags and organisation ID. Video is transcribed with Whisper, segmented by topic and embedded per segment with start and end timestamps.",
          },
        ],
      },
      {
        label: "The RAG pipeline",
        body: [
          "The core of the product is a context-aware RAG service of around 2,200 lines. For each question it:",
          {
            list: [
              "Loads the last 10 messages of the session and has GPT-4o-mini rewrite vague follow-ups (\"what about that?\") into standalone search queries.",
              "Embeds the query with recent context and runs a cosine-similarity search through a Supabase RPC, filtered by organisation and the user's content tags, returning the top 10 chunks above a 0.2 similarity threshold.",
              "Re-ranks results by keyword overlap with the conversation and checks pre-generated Q&A pairs for instant answers to near-FAQ questions.",
              "Injects instruction sets tied to the user's tags (so premium students can get a different depth or tone), falling back to the organisation's defaults, cached for 60 seconds.",
              "Injects a persistent coaching memory of each student's goals, challenges and current focus, refreshed automatically every 5 conversations, so the bot remembers students the way a real coach would.",
              "Generates a synthesised, cited answer with GPT-4o-mini, and if the best chunk came from a video, cuts the matching clip with FFmpeg and serves it alongside the answer, cached so each clip is only extracted once.",
            ],
          },
        ],
      },
      {
        label: "Platform features",
        body: [
          {
            title: "Tag-based access control",
            text: "Users and knowledge items both carry tags such as normal, premium or marketing, and the vector search only returns items whose tags overlap the user's. Coaches can gate content behind a premium tier without keeping separate knowledge bases.",
          },
          {
            title: "White-labelling and custom domains",
            text: "Each organisation sets its own name, logo, colours, domain and welcome message, so students see what looks like the coach's own product. Login, registration, chat, group chat and settings pages are all branded, with CORS origins refreshed from the database every 5 minutes.",
          },
          {
            title: "Embeddable widget, Slack and Discord",
            text: "Coaches can embed a chat widget on their own site with a single script tag, served by separately rate-limited public endpoints. Students can also ask questions in Slack (OAuth install, Events API) or through a Discord bot, with each workspace or server mapped to one organisation and routed through the same pipeline.",
          },
          {
            title: "Analytics and reporting",
            text: "An analytics module of around 2,800 lines shows conversations, most-asked questions, which content is and isn't being retrieved, engagement trends and per-student activity, plus knowledge gaps the AI couldn't answer. Owners get a monthly report by email.",
          },
          {
            title: "Billing, affiliates and email",
            text: "Stripe handles subscriptions, upgrades, usage-based limits and webhooks, with plan middleware enforcing feature gates and an audit log of every billing event. An affiliate programme issues referral codes and tracks commissions, and a behaviour-driven email scheduler sends onboarding and re-engagement campaigns through Resend, with SMTP as a fallback.",
          },
          {
            title: "Security",
            text: "Supabase Auth with JWT-based API authentication, Helmet security headers, a global rate limit of 1,000 requests per 15 minutes per IP, and tighter per-route limits on chat, embed and video upload. Organisations support owner, admin and member roles, invite codes and group chats for cohorts.",
          },
        ],
      },
      {
        label: "From Studi to Askra",
        body: [
          "My dissertation, Studi, was a single-user research prototype built to test whether RAG tutoring could match human teaching. Askra is the commercial evolution of those ideas: a production multi-tenant product with billing, white-labelling, integrations, video understanding, persistent student memory and a far more capable retrieval pipeline, with query rewriting, re-ranking, Q&A matching and scoped instructions.",
        ],
      },
    ],
    cover: "assets/askra/Askra main.png",
    shots: [
      { src: "assets/askra/Askra main.png", caption: "Landing page" },
      { src: "assets/askra/askra 1.png", caption: "Student chat" },
      { src: "assets/askra/A 2.png", caption: "Coach dashboard" },
      { src: "assets/askra/A3.png", caption: "Content library with transcribed video and generated Q&A" },
      { src: "assets/askra/A4.png", caption: "Analytics: reference share, user metrics and knowledge gaps" },
      { src: "assets/askra/A5.png", caption: "Prewritten questions shown on the new-chat screen" },
    ],
  },
  {
    slug: "passpharma",
    title: "PassPharma",
    category: "side",
    year: "2026",
    role: "Founder & Sole Developer",
    summary:
      "GPhC exam prep platform with timed mock papers and cited rationales. Launched September 2026: 100 users, 23 paying, £165 MRR.",
    type: ["SaaS product", "Live and generating revenue", "Full-stack design, build, security audit & launch"],
    stack: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase (Postgres, Auth, RLS, security-definer RPCs)",
      "Stripe (subscriptions, payments, webhooks, Customer Balance)",
      "OpenAI",
      "ElevenLabs",
      "Cloudflare Turnstile",
      "Resend",
      "Zod",
      "Recharts",
      "Vitest",
      "Playwright",
      "Netlify",
      "Row-Level Security design",
      "Webhook-driven payments",
      "Security auditing",
    ],
    sections: [
      {
        label: "Overview",
        body: [
          "PassPharma is a web platform for trainee pharmacists preparing for the GPhC Registration Assessment, the exam every UK pharmacist must pass to qualify. It builds timed mock exams from a curated question bank, delivers them in an interface that mirrors the real on-screen assessment, and gives a cited rationale for every question plus progress analytics after each attempt.",
          "The exam prep market is poor value. The main paid providers charge around £100 for a single mock paper, training providers often release just one mock two weeks before the exam, and the unofficial material passed between trainees is incomplete, low-resolution or out of date. PassPharma offers affordable, unlimited, high-quality practice under real exam conditions.",
          "I designed and built it as a full-stack SaaS product on my own, covering the architecture, database schema, security model, payments and front-end. The November 2026 cohort is the proving ground ahead of a full push for June 2027, the main annual intake.",
        ],
      },
      {
        label: "Traction",
        body: [
          "PassPharma launched to real users on 16 September 2026.",
          {
            list: [
              "100 registered users",
              "23 paying users",
              "£165 monthly recurring revenue",
              "£205 lifetime revenue",
            ],
          },
        ],
      },
      {
        label: "What I built",
        body: [
          {
            title: "Architecture",
            text: "A Next.js 16 App Router project in TypeScript with Tailwind CSS v4, deployed on Netlify. Supabase (Postgres) is the single store for profiles, questions, exams, attempts and subscriptions, and Stripe handles payments.",
          },
          {
            title: "Question bank and exam generation",
            text: "Original questions cover the full GPhC blueprint across Paper 1 (calculations) and Paper 2 (clinical and professional practice), each tagged by topic, sub-topic, difficulty and cognitive level. The generator builds papers with the real question count, time limit and type mix, avoids repeating questions from the user's last two papers of the same type, and can also build focused mini quizzes such as 20 questions on hypertension.",
          },
          {
            title: "Exam interface",
            text: "A distraction-free screen that mirrors the real assessment: a visible countdown, flag-for-review, a question navigator, submit with confirmation and auto-submit when time runs out. MCQ and calculation questions share one data model.",
          },
          {
            title: "Rationales and progress",
            text: "Every question carries a rationale citing the BNF, NICE, MEP, CKS, SPCs or GPhC guidance, shown for right answers as well as wrong ones. The dashboard tracks scores per section, strongest and weakest topics, streaks, study time and score progression, and a unit-tested adaptive mastery engine recommends what to study next.",
          },
          {
            title: "Payments and referrals",
            text: "Stripe powers weekly (£2.99), monthly (£9.99) and annual (£89.99) plans plus a founder lifetime pre-sale, with webhook signatures verified on the raw body before any database write. When a referred user first pays, both sides get £2.99 credited to their Stripe Customer Balance, which stacks across referrals. An ambassador tier gives content creators a dashboard of signups, revenue and payouts.",
          },
          {
            title: "AI study tools",
            text: "After the core exam platform shipped I added AI tools on top: lecture upload or recording with OpenAI transcription and summaries, a live AI lecturer session through ElevenLabs, quizzes generated from the user's own notes, and an explain-this-answer chat on practice questions.",
          },
        ],
      },
      {
        label: "Security",
        body: [
          {
            title: "Answers never reach the browser early",
            text: "This is the part I'm most proud of. Papers are served from a database view that strips out every answer-bearing column. Grading runs in a Postgres security-definer function that reads the real answers server-side and returns only right or wrong per question, and rationales are released only for questions the user has already attempted. Even with the public Supabase key and full access to network traffic, nobody can read the answers, because the database enforces it rather than the frontend.",
          },
          {
            title: "Pre-launch security audit",
            text: "I audited the whole application before launch and fixed the critical findings: a profile policy that would have let any user make themselves an admin, an attempts table that would have let a client fabricate a perfect score, and insert policies that didn't restrict sensitive columns. Every privileged function now takes the user from auth.uid() rather than a caller-supplied value, and RLS checks restrict specific columns, not just row ownership.",
          },
          {
            title: "Abuse protection",
            text: "Rate limiting is Postgres-backed so it holds across serverless instances, replacing an in-memory version that did nothing under concurrent deployments. Cloudflare Turnstile guards signup, login, OTP and password reset, SMS-gateway email domains are blocked at signup, and every route body is validated with Zod.",
          },
        ],
      },
      {
        label: "Testing & launch",
        body: [
          "Vitest covers the adaptive mastery engine and exam selection logic, and Playwright runs the critical path end to end: signup, onboarding, a sample exam and results. The end-to-end suite skips itself when Supabase variables are missing, so CI runs cleanly without a live backend.",
          {
            title: "Launch-day incident",
            text: "On launch day I added Cloudflare Turnstile to signup, and it broke signups for most of the day: under Turbopack, the public site key wasn't reliably inlined into the client bundle when read inside a client component. I traced the root cause, moved the read into a server component and passed the key down as a prop, and added an 8-second fallback so a blocked Cloudflare script can no longer disable signup for good. It was the likely cause of 11 failed signups that day.",
          },
        ],
      },
    ],
    cover: "assets/passpharma/p main.png",
    shots: [
      { src: "assets/passpharma/p main.png", caption: "Dashboard with countdown, focus topic and study activity" },
      { src: "assets/passpharma/p 6.png", caption: "Landing page with the exam interface" },
      { src: "assets/passpharma/p3.png", caption: "Choosing a full mock paper or mini quiz" },
      { src: "assets/passpharma/p4.png", caption: "AI practice questions generated from past mistakes" },
      { src: "assets/passpharma/p2.png", caption: "Lectures turned into summaries, flashcards and quizzes" },
      { src: "assets/passpharma/p5.png", caption: "Referral programme" },
    ],
  },
];
