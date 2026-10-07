// =============================================================================
// data.js — All study content for the Medical Terminology app.
// Everything the app shows (word parts, flashcards, quiz, body systems) is
// defined here so content can be edited without touching the app logic.
// =============================================================================

// ----- Word parts ------------------------------------------------------------
// type: "prefix" | "root" | "suffix"
export const wordParts = [
  // Prefixes
  { part: "a-, an-", type: "prefix", meaning: "without, absence of", example: "apnea — absence of breathing" },
  { part: "brady-", type: "prefix", meaning: "slow", example: "bradycardia — slow heart rate" },
  { part: "tachy-", type: "prefix", meaning: "fast, rapid", example: "tachycardia — fast heart rate" },
  { part: "hyper-", type: "prefix", meaning: "excessive, above normal", example: "hypertension — high blood pressure" },
  { part: "hypo-", type: "prefix", meaning: "deficient, below normal", example: "hypoglycemia — low blood sugar" },
  { part: "dys-", type: "prefix", meaning: "difficult, painful, abnormal", example: "dysphagia — difficulty swallowing" },
  { part: "peri-", type: "prefix", meaning: "around, surrounding", example: "pericardium — sac around the heart" },
  { part: "intra-", type: "prefix", meaning: "within, inside", example: "intravenous — within a vein" },
  { part: "inter-", type: "prefix", meaning: "between", example: "intercostal — between the ribs" },
  { part: "sub-", type: "prefix", meaning: "below, under", example: "subcutaneous — below the skin" },
  { part: "epi-", type: "prefix", meaning: "upon, above, over", example: "epidermis — outer layer of skin" },
  { part: "poly-", type: "prefix", meaning: "many, much", example: "polyuria — excessive urination" },
  { part: "anti-", type: "prefix", meaning: "against", example: "antibiotic — against microbial life" },
  { part: "neo-", type: "prefix", meaning: "new", example: "neonate — newborn infant" },

  // Roots (combining forms)
  { part: "cardi/o", type: "root", meaning: "heart", example: "cardiology — study of the heart" },
  { part: "gastr/o", type: "root", meaning: "stomach", example: "gastritis — inflammation of the stomach" },
  { part: "hepat/o", type: "root", meaning: "liver", example: "hepatitis — inflammation of the liver" },
  { part: "nephr/o", type: "root", meaning: "kidney", example: "nephrology — study of the kidneys" },
  { part: "neur/o", type: "root", meaning: "nerve", example: "neurology — study of the nervous system" },
  { part: "oste/o", type: "root", meaning: "bone", example: "osteoporosis — porous, weakened bone" },
  { part: "my/o", type: "root", meaning: "muscle", example: "myalgia — muscle pain" },
  { part: "derm/o, dermat/o", type: "root", meaning: "skin", example: "dermatology — study of the skin" },
  { part: "pulmon/o", type: "root", meaning: "lung", example: "pulmonary — relating to the lungs" },
  { part: "pneum/o", type: "root", meaning: "lung, air", example: "pneumonia — lung infection" },
  { part: "hem/o, hemat/o", type: "root", meaning: "blood", example: "hematology — study of blood" },
  { part: "arthr/o", type: "root", meaning: "joint", example: "arthritis — inflammation of a joint" },
  { part: "enter/o", type: "root", meaning: "intestine", example: "enteritis — inflammation of the intestine" },
  { part: "cerebr/o", type: "root", meaning: "brain, cerebrum", example: "cerebral — relating to the brain" },
  { part: "ophthalm/o", type: "root", meaning: "eye", example: "ophthalmology — study of the eye" },
  { part: "rhin/o", type: "root", meaning: "nose", example: "rhinitis — inflammation of the nose" },

  // Suffixes
  { part: "-itis", type: "suffix", meaning: "inflammation", example: "tonsillitis — inflamed tonsils" },
  { part: "-ectomy", type: "suffix", meaning: "surgical removal, excision", example: "appendectomy — removal of the appendix" },
  { part: "-ology", type: "suffix", meaning: "study of", example: "biology — study of life" },
  { part: "-pathy", type: "suffix", meaning: "disease", example: "neuropathy — nerve disease" },
  { part: "-osis", type: "suffix", meaning: "abnormal condition", example: "cyanosis — bluish discoloration" },
  { part: "-oma", type: "suffix", meaning: "tumor, mass", example: "carcinoma — cancerous tumor" },
  { part: "-megaly", type: "suffix", meaning: "enlargement", example: "cardiomegaly — enlarged heart" },
  { part: "-algia", type: "suffix", meaning: "pain", example: "neuralgia — nerve pain" },
  { part: "-emia", type: "suffix", meaning: "blood condition", example: "anemia — deficiency of red blood cells" },
  { part: "-scopy", type: "suffix", meaning: "visual examination", example: "endoscopy — looking inside the body" },
  { part: "-plasty", type: "suffix", meaning: "surgical repair", example: "rhinoplasty — surgical repair of the nose" },
  { part: "-stomy", type: "suffix", meaning: "surgical opening", example: "colostomy — opening into the colon" },
  { part: "-gram", type: "suffix", meaning: "record, image", example: "electrocardiogram — record of heart activity" },
  { part: "-penia", type: "suffix", meaning: "deficiency", example: "leukopenia — low white blood cell count" },
];

// ----- Flashcards ------------------------------------------------------------
export const flashcards = [
  { term: "Hypertension", definition: "Abnormally high blood pressure.", category: "Cardiovascular" },
  { term: "Bradycardia", definition: "A slower-than-normal heart rate (under 60 bpm).", category: "Cardiovascular" },
  { term: "Tachycardia", definition: "A faster-than-normal heart rate (over 100 bpm).", category: "Cardiovascular" },
  { term: "Myocardial infarction", definition: "Death of heart muscle tissue due to loss of blood supply; a heart attack.", category: "Cardiovascular" },
  { term: "Gastritis", definition: "Inflammation of the lining of the stomach.", category: "Digestive" },
  { term: "Hepatomegaly", definition: "Abnormal enlargement of the liver.", category: "Digestive" },
  { term: "Dysphagia", definition: "Difficulty or discomfort in swallowing.", category: "Digestive" },
  { term: "Nephritis", definition: "Inflammation of the kidneys.", category: "Urinary" },
  { term: "Polyuria", definition: "Excessive production or passage of urine.", category: "Urinary" },
  { term: "Osteoporosis", definition: "A condition of porous, brittle bones that fracture easily.", category: "Skeletal" },
  { term: "Arthritis", definition: "Inflammation of one or more joints causing pain and stiffness.", category: "Skeletal" },
  { term: "Myalgia", definition: "Pain in a muscle or group of muscles.", category: "Muscular" },
  { term: "Neuropathy", definition: "Disease or dysfunction of the peripheral nerves.", category: "Nervous" },
  { term: "Cerebrovascular accident", definition: "A stroke; interruption of blood flow to the brain.", category: "Nervous" },
  { term: "Pneumonia", definition: "Infection that inflames the air sacs in one or both lungs.", category: "Respiratory" },
  { term: "Apnea", definition: "Temporary cessation of breathing.", category: "Respiratory" },
  { term: "Dermatitis", definition: "Inflammation of the skin, often with itching and redness.", category: "Integumentary" },
  { term: "Anemia", definition: "A deficiency of red blood cells or hemoglobin in the blood.", category: "Hematology" },
  { term: "Hyperglycemia", definition: "Abnormally high level of glucose in the blood.", category: "Endocrine" },
  { term: "Cyanosis", definition: "A bluish discoloration of the skin due to poor oxygenation.", category: "Respiratory" },
];

// ----- Body systems ----------------------------------------------------------
// `model` maps to a built-in procedural builder in anatomy3d.js (the fallback).
// `file` is an optional path to a realistic .glb/.gltf model (e.g.
// "models/heart.glb"). When set and the file loads, it replaces the procedural
// shape; if it's null or fails to load, the procedural model is shown instead.
export const bodySystems = [
  {
    id: "skeletal",
    name: "Skeletal System",
    model: "skeletal",
    file: null,
    summary: "Provides structure, protects organs, stores minerals, and produces blood cells.",
    terms: [
      { term: "oste/o", meaning: "bone" },
      { term: "arthr/o", meaning: "joint" },
      { term: "chondr/o", meaning: "cartilage" },
      { term: "-porosis", meaning: "porous condition" },
    ],
  },
  {
    id: "muscular",
    name: "Muscular System",
    model: "muscular",
    file: null,
    summary: "Enables movement, maintains posture, and generates body heat.",
    terms: [
      { term: "my/o", meaning: "muscle" },
      { term: "-algia", meaning: "pain" },
      { term: "ten/o", meaning: "tendon" },
      { term: "fasci/o", meaning: "fascia" },
    ],
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular System",
    model: "cardiovascular",
    file: null,
    summary: "Pumps and circulates blood, delivering oxygen and nutrients throughout the body.",
    terms: [
      { term: "cardi/o", meaning: "heart" },
      { term: "angi/o", meaning: "vessel" },
      { term: "hem/o", meaning: "blood" },
      { term: "-emia", meaning: "blood condition" },
    ],
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    model: "respiratory",
    file: null,
    summary: "Exchanges oxygen and carbon dioxide between the blood and the environment.",
    terms: [
      { term: "pulmon/o", meaning: "lung" },
      { term: "pneum/o", meaning: "lung, air" },
      { term: "bronch/o", meaning: "bronchus" },
      { term: "-pnea", meaning: "breathing" },
    ],
  },
  {
    id: "nervous",
    name: "Nervous System",
    model: "nervous",
    file: null,
    summary: "Controls and coordinates body functions through electrical and chemical signals.",
    terms: [
      { term: "neur/o", meaning: "nerve" },
      { term: "cerebr/o", meaning: "brain" },
      { term: "encephal/o", meaning: "brain" },
      { term: "-pathy", meaning: "disease" },
    ],
  },
  {
    id: "digestive",
    name: "Digestive System",
    model: "digestive",
    file: null,
    summary: "Breaks down food, absorbs nutrients, and eliminates waste.",
    terms: [
      { term: "gastr/o", meaning: "stomach" },
      { term: "enter/o", meaning: "intestine" },
      { term: "hepat/o", meaning: "liver" },
      { term: "-itis", meaning: "inflammation" },
    ],
  },
];

// ----- Quiz questions --------------------------------------------------------
// Auto-generated from word parts plus a few applied questions.
function buildQuizFromWordParts() {
  const meanings = wordParts.map((w) => w.meaning);
  return wordParts.map((w) => {
    // Three wrong answers drawn from other meanings.
    const distractors = meanings
      .filter((m) => m !== w.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = [w.meaning, ...distractors].sort(() => Math.random() - 0.5);
    return {
      question: `What does the word part "${w.part}" mean?`,
      options,
      answer: w.meaning,
    };
  });
}

export const quizBank = [
  ...buildQuizFromWordParts(),
  {
    question: "A patient with 'bradycardia' has a heart rate that is…",
    options: ["too fast", "too slow", "irregular", "normal"],
    answer: "too slow",
  },
  {
    question: "'Hepatomegaly' refers to enlargement of which organ?",
    options: ["kidney", "liver", "heart", "spleen"],
    answer: "liver",
  },
  {
    question: "Which term means 'inflammation of a joint'?",
    options: ["arthritis", "arthralgia", "osteitis", "myositis"],
    answer: "arthritis",
  },
  {
    question: "The suffix '-ectomy' indicates what kind of procedure?",
    options: ["visual exam", "surgical removal", "surgical repair", "recording"],
    answer: "surgical removal",
  },
];
