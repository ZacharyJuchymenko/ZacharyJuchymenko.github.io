/* =====================================================================
   EDIT YOUR CONTENT HERE. This file is shared by index.html and project.html.
   - Leave an image field as "" to show the placeholder box.
   - Set it to a path/URL (e.g. "images/pcb.jpg") to show your image.
   - Video works the same way: "videos/demo.mp4", or a YouTube link.
   - Every project needs a unique `slug` (used in the URL: project.html?slug=...).
   - `links`: each is { label, href, embed }. embed:true auto-embeds YouTube
     or Google Slides/Docs links on the project page; everything else (including
     OneDrive/SharePoint presentations) shows as a normal button that opens in
     a new tab, since those usually can't be embedded without extra setup.
   - Copy a whole { ... } block in `projects`, `experience`, etc. to add more.
   ===================================================================== */
const DATA = {
  name: "Zachary Juchymenko",
  role: "Electrical Engineering | Embedded Systems & Hardware",
  intro: "Electrical Engineering student with hands-on experience in embedded systems, circuit design, microprocessors, and engineering software. Interested in building practical hardware and software systems and solving technical problems through design, testing, and iteration.",
  heroImage: "images/hero.jpg",
  nav: [["Home","home"],["About","about"],["Projects","projects"],["Skills","skills"],["Experience","experience"],["Contact","contact"]],

  about: {
    title: "About",
    paragraphs: [
      "I am a third-year Electrical Engineering student at Dalhousie University with a strong interest in embedded systems and practical engineering design.",
      "My coursework and projects have given me experience working across both hardware and software, from circuit analysis and microprocessors to Arduino-based systems, programming, debugging, and technical documentation."
    ],
    small: [
      "Dalhousie University — Bachelor of Electrical Engineering, expected 2029 (CO-OP)",
      "Interested in embedded systems, FPGA/SystemVerilog, computer hardware, and engineering applications of AI."
    ],
    image: ""
  },

  skills: [
    { title: "Programming", desc: "Programming languages and development experience used across engineering coursework and projects.", items: ["C", "C++", "Python", "MATLAB"] },
    { title: "Hardware / Electronics", desc: "Hands-on experience designing, building, measuring, and debugging electronic systems.", items: ["Circuit Design", "Oscilloscopes", "Soldering", "Breadboarding"] },
    { title: "Embedded Systems", desc: "Experience with microprocessors, Arduino-based systems, and low-level embedded programming.", items: ["Microprocessors", "Arduino", "AVR Assembly", "Embedded Debugging"] },
    { title: "Software / Tools", desc: "Engineering software used for circuit design, digital logic, PCB work, and development.", items: ["KiCad", "LTSpice", "Intel Quartus", "Logisim", "Microchip Studio", "SolidWorks"] },
    { title: "Engineering", desc: "Technical skills developed through engineering projects, laboratories, and coursework.", items: ["Unit Testing", "Uncertainty Analysis", "Technical Documentation"] }
  ],

  projects: [
    {
      slug: "robotic-crane",
      title: "Arduino-Based Robotic Crane",
      type: "Embedded Systems / Robotics",
      event: "",
      short: "Arduino-controlled robotic crane designed to transfer cargo between multiple levels using vertical and rotational movement.",
      image: "", image2: "",
      imageLabel: "Robotic Crane — Project Image",
      image2Label: "Robotic Crane — Testing / Hardware Image",
      tags: ["Arduino", "Embedded Systems", "Electronics", "Robotics"],
      links: [
        { label: "View Presentation", href: "https://dalu-my.sharepoint.com/:p:/g/personal/zc707127_dal_ca/IQCJfAU6gGlGR7Mo_7NNMhZjAVip3l7SJ9CXneCsTY452D8?e=cLeIoh", embed: false }
      ],
      details: {
        "Overview": "A team engineering project involving the design and construction of an Arduino-based robotic crane capable of moving cargo between multiple levels.",
        "Objective": "Design a reliable robotic arm capable of completing the required cargo-transfer task while meeting positional accuracy and reliability requirements.",
        "Implementation": "Built and tested a vertical and rotational electric arm using Arduino-based control and iterative hardware testing.",
        "Technical Details": ["Vertical and rotational arm movement", "Arduino-based control system"],
        "Results": ["At least 95% task success rate", "Approximately ±5 mm positioning accuracy over 20+ test cycles"],
        "My Contribution": "Team project completed as part of a four-person engineering team."
      }
    },
    {
      slug: "breast-cancer-imaging-tool",
      title: "Breast Cancer Imaging Verification Tool",
      type: "Artificial Intelligence / Biomedical Engineering",
      event: "National Canadian Medical Datathon · Vancouver, BC · March 2026",
      short: "A diagnostic verification tool built for the Advanced Section of the National Canadian Medical Datathon, designed to scan breast ultrasound images and assist professional verification.",
      image: "", image2: "",
      imageLabel: "Datathon Project — Project Image",
      image2Label: "Datathon Project — Secondary Image",
      tags: ["AI / Machine Learning", "Python", "HTML", "Biomedical Engineering", "Data Processing"],
      links: [
        { label: "Visit Project Website", href: "https://toppermcginty.github.io/Datathon/index.html", embed: false },
        { label: "View Presentation", href: "https://dalu-my.sharepoint.com/:p:/g/personal/am917299_dal_ca/IQBynUDJbfuWxRY8TYJYzcSvUAUZB7q1plzZucj_Zq3nPJLY?e=dROsxp", embed: false }
      ],
      details: {
        "Overview": "For the Advanced Section of the National Canadian Medical Datathon, I worked as part of a team on a diagnostic verification tool designed to scan breast ultrasound images using a provided dataset.",
        "Objective": "Develop a tool that could assist medical professionals by providing an additional way to verify breast ultrasound findings. The project was designed for professional use rather than patient diagnosis.",
        "Implementation": [
          "Created and trained an AI model using the provided breast ultrasound dataset",
          "Used Python to process the dataset and develop the model logic",
          "Used HTML to build the public-facing interface",
          "Connected dataset variables to the verification process",
          "Created a public website to demonstrate the project"
        ],
        "Technical Details": ["AI/ML model trained on a breast ultrasound dataset", "Python for data processing and model logic", "HTML-based public-facing interface"],
        "Results": ["Built and demonstrated a working verification tool during the competition", "Presented the proposed system and its application to judges and medical professionals"],
        "My Contribution": "[YOUR SPECIFIC ROLE ON THIS PROJECT — completed as part of a team alongside Gabrielle Ouellette. Note what you personally worked on, e.g. the model, the dataset processing, or the interface.]"
      }
    },
    {
      slug: "digital-logic-fpga",
      title: "Digital Logic & FPGA Exploration",
      type: "Digital Systems",
      event: "",
      short: "Digital logic design experience using Boolean logic, Logisim, Quartus, and exploration of FPGA/SystemVerilog-based hardware design.",
      image: "", image2: "",
      imageLabel: "Digital Logic / FPGA — Project Image",
      image2Label: "FPGA Design — Secondary Image",
      tags: ["SystemVerilog", "FPGA", "Quartus", "Logisim", "Boolean Logic"],
      links: [],
      details: {
        "Overview": "Digital systems work involving Boolean logic, digital circuit design, simulation, and FPGA-oriented development.",
        "Objective": "Develop an understanding of digital hardware design and how logical systems can be implemented in programmable hardware.",
        "Implementation": "Used digital logic simulation and FPGA development tools to design and explore hardware-based systems.",
        "Technical Details": ["Boolean logic", "Intel Quartus", "Logisim", "SystemVerilog / FPGA exploration"],
        "Results": ["Developed practical experience translating logic concepts into digital hardware designs"],
        "My Contribution": "Designed and tested digital logic systems and explored FPGA-based hardware development."
      }
    },
    {
      slug: "reaction-time-tester",
      title: "Arduino Reaction Time Tester",
      type: "Embedded Systems / Arduino",
      event: "",
      short: "Arduino-based reaction-time project demonstrating embedded programming, hardware interfacing, and timing measurement.",
      image: "", image2: "videos/reaction-tester.mp4?v=2",
      imageLabel: "Reaction Time Tester — Project Image",
      image2Label: "Reaction Time Tester — Demo Video",
      tags: ["Arduino", "C/C++", "Embedded Systems", "Timing"],
      links: [],
      details: {
        "Overview": "An Arduino-based embedded project designed to measure and display a user's reaction time.",
        "Objective": "Create a responsive hardware system that detects user input, measures the elapsed time, and presents the result.",
        "Implementation": "Developed the embedded control logic and interfaced the required input/output hardware with the Arduino platform.",
        "Technical Details": ["Microcontroller-based timing", "Hardware input/output interfacing"],
        "Results": ["Functional reaction-time measurement system"],
        "My Contribution": "Designed and implemented the embedded project as a hands-on electronics project."
      }
    },
    {
      slug: "avr-microprocessor",
      title: "AVR Microprocessor Project",
      type: "Microprocessors",
      event: "",
      short: "Low-level AVR programming and microcontroller work involving registers, GPIO, timing, assembly, and C.",
      image: "", image2: "",
      imageLabel: "AVR Microprocessor — Project Image",
      image2Label: "Assembly / Hardware Image",
      tags: ["AVR", "Assembly", "C", "Microprocessors", "Arduino Nano"],
      links: [],
      details: {
        "Overview": "Microprocessor coursework and hands-on work using the ATmega328P/Arduino Nano platform.",
        "Objective": "Understand and implement low-level microcontroller functionality using both C and AVR assembly.",
        "Implementation": "Worked with GPIO registers, bit manipulation, timing loops, program flow, and embedded C/assembly code.",
        "Technical Details": ["ATmega328P", "16 MHz Arduino Nano clock", "DDRB and PORTB GPIO registers"],
        "Results": ["Compared C and assembly implementations and compiled program sizes", "Implemented GPIO control and timing routines"],
        "My Contribution": "Implemented, tested, and debugged microprocessor programs while analyzing their low-level operation."
      }
    },
    {
      slug: "circuit-design-analysis",
      title: "Engineering Circuit Design & Analysis",
      type: "Electrical Circuits",
      event: "",
      short: "Hands-on circuit laboratory work involving Kirchhoff's laws, Thévenin/superposition, op-amps, dependent sources, and AC phasor analysis.",
      image: "images/powerlab.jpg", image2: "",
      imageLabel: "Circuit Laboratory — Project Image",
      image2Label: "Circuit Measurement — Secondary Image",
      tags: ["Circuit Analysis", "Oscilloscope", "LTSpice", "AC/Phasors", "Op-Amps"],
      links: [],
      details: {
        "Overview": "A collection of electrical engineering laboratory projects focused on analyzing and experimentally validating circuit behavior.",
        "Objective": "Apply circuit-analysis theory to physical circuits and compare calculated, simulated, and measured results.",
        "Implementation": "Built circuits on breadboards, performed measurements, analyzed uncertainty, and documented experimental results.",
        "Technical Details": ["Kirchhoff's Laws", "Thévenin and Superposition", "Op-amp circuits", "AC/phasor analysis"],
        "Results": ["Measured resistor power and circuit quantities", "Compared theoretical and experimental values"],
        "My Contribution": "Built circuits, performed measurements, analyzed discrepancies, and prepared technical laboratory documentation."
      }
    }
  ],

  /* Leave empty until you add jobs. Format:
     { title:"", company:"", dates:"", desc:"", responsibilities:["",""], accomplishments:["",""] } */
  experience: [],

  education: [
    {
      institution: "Dalhousie University",
      degree: "Bachelor of Electrical Engineering",
      courses: ["Microprocessors", "Signal Analysis", "Electric Circuits I and II", "Electromagnetic Fields"],
      extra: "Electrical and Computer Engineering student with hands-on coursework in embedded systems, circuits, digital logic, and engineering analysis."
    }
  ],

  resume: {
    title: "Resume",
    desc: "View or download my resume for a complete overview of my education, technical skills, projects, and experience.",
    view: "#",
    download: "#"
  },

  contact: {
    title: "Contact",
    intro: "Interested in engineering, embedded systems, hardware, or potential opportunities? Feel free to get in touch!",
    links: [
      ["Email", "Zachary.Juchymenko@dal.ca", "mailto:Zachary.Juchymenko@dal.ca"],
      ["LinkedIn", "linkedin.com/in/zach-juchymenko-022253325", "https://www.linkedin.com/in/zach-juchymenko-022253325"]
    ]
  }
};

/* ============================ SHARED HELPERS ============================ */
const list = a => `<ul>${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
const tagsHtml = a => `<ul class="tags">${a.map(t => `<li class="tag">${t}</li>`).join("")}</ul>`;
const sh = t => `<div class="sh rv"><h2>${t}</h2></div>`;

function ytId(src) {
  const m = src.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}
function isEmbeddable(href) {
  return /youtu\.?be/.test(href) || /docs\.google\.com\/presentation/.test(href);
}
function embedUrl(href) {
  const yid = ytId(href);
  if (yid) return `https://www.youtube.com/embed/${yid}`;
  if (/docs\.google\.com\/presentation/.test(href)) return href.replace(/\/edit.*$|\/pub.*$/, "/embed");
  return href;
}
// Renders an image/video/YouTube placeholder box. `opts.controls=false` makes a silent preview loop (for cards).
function media(src, label, ratio, opts) {
  opts = opts || {};
  let m;
  if (!src) m = `<span>${label}</span>`;
  else if (/youtu\.?be/.test(src)) {
    m = `<iframe src="${embedUrl(src)}" title="${label}" allowfullscreen loading="lazy"></iframe>`;
  } else if (/\.(mp4|webm|mov)(\?|$)/i.test(src)) {
    const ext = (src.match(/\.(mp4|webm|mov)(\?|$)/i) || [,"mp4"])[1].toLowerCase();
    const mime = ext === "webm" ? "video/webm" : "video/mp4";
    const attrs = opts.controls === false ? "muted loop autoplay playsinline" : "controls playsinline";
    m = `<video ${attrs} preload="metadata"><source src="${src}" type="${mime}">Your browser can't play this video. <a href="${src}">Download it instead</a>.</video>`;
  } else {
    m = `<img src="${src}" alt="${label}" loading="lazy">`;
  }
  return `<div class="ph" style="--r:${ratio}">${m}</div>`;
}
