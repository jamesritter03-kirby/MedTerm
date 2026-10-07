// =============================================================================
// data.js — All study content for the Medical Terminology app.
// Covers the scope of a college / pre-med medical terminology course:
// word parts, flashcards, body systems, and a large quiz bank.
// Edit the arrays below to add or change content — the app updates automatically.
// =============================================================================

// ----- Word parts ------------------------------------------------------------
// type: "prefix" | "root" | "suffix"
export const wordParts = [
  // ---- Prefixes: negation, size, number, position, direction, state -------
  { part: "a-, an-", type: "prefix", meaning: "without, absence of", example: "apnea — absence of breathing" },
  { part: "ab-", type: "prefix", meaning: "away from", example: "abduction — movement away from the midline" },
  { part: "ad-", type: "prefix", meaning: "toward, near", example: "adduction — movement toward the midline" },
  { part: "ante-", type: "prefix", meaning: "before, forward", example: "antepartum — before birth" },
  { part: "anti-", type: "prefix", meaning: "against", example: "antibiotic — against microbial life" },
  { part: "auto-", type: "prefix", meaning: "self", example: "autoimmune — immunity against self" },
  { part: "bi-", type: "prefix", meaning: "two, both", example: "bilateral — on both sides" },
  { part: "brady-", type: "prefix", meaning: "slow", example: "bradycardia — slow heart rate" },
  { part: "circum-", type: "prefix", meaning: "around", example: "circumcision — cutting around" },
  { part: "contra-", type: "prefix", meaning: "against, opposite", example: "contralateral — on the opposite side" },
  { part: "de-", type: "prefix", meaning: "down, from, removal", example: "dehydration — removal of water" },
  { part: "dia-", type: "prefix", meaning: "through, complete", example: "diarrhea — flowing through" },
  { part: "dys-", type: "prefix", meaning: "difficult, painful, abnormal", example: "dysphagia — difficulty swallowing" },
  { part: "ecto-, exo-", type: "prefix", meaning: "outside, outer", example: "ectopic — outside the normal place" },
  { part: "endo-", type: "prefix", meaning: "within, inner", example: "endoscopy — viewing within" },
  { part: "epi-", type: "prefix", meaning: "upon, above, over", example: "epidermis — upon the skin" },
  { part: "eu-", type: "prefix", meaning: "good, normal", example: "eupnea — normal breathing" },
  { part: "extra-", type: "prefix", meaning: "outside, beyond", example: "extracellular — outside the cell" },
  { part: "hemi-", type: "prefix", meaning: "half", example: "hemiplegia — paralysis of half the body" },
  { part: "hyper-", type: "prefix", meaning: "excessive, above normal", example: "hypertension — high blood pressure" },
  { part: "hypo-", type: "prefix", meaning: "deficient, below normal", example: "hypoglycemia — low blood sugar" },
  { part: "infra-", type: "prefix", meaning: "below, beneath", example: "infraorbital — below the eye socket" },
  { part: "inter-", type: "prefix", meaning: "between", example: "intercostal — between the ribs" },
  { part: "intra-", type: "prefix", meaning: "within, inside", example: "intravenous — within a vein" },
  { part: "iso-", type: "prefix", meaning: "equal, same", example: "isotonic — equal tone/pressure" },
  { part: "macro-", type: "prefix", meaning: "large", example: "macrocyte — abnormally large cell" },
  { part: "mal-", type: "prefix", meaning: "bad, poor", example: "malabsorption — poor absorption" },
  { part: "meta-", type: "prefix", meaning: "change, beyond", example: "metastasis — spread beyond origin" },
  { part: "micro-", type: "prefix", meaning: "small", example: "microscope — instrument to view small things" },
  { part: "mono-", type: "prefix", meaning: "one, single", example: "mononucleosis — one (large) nucleus" },
  { part: "multi-", type: "prefix", meaning: "many", example: "multipara — woman with many births" },
  { part: "neo-", type: "prefix", meaning: "new", example: "neonate — newborn infant" },
  { part: "pan-", type: "prefix", meaning: "all", example: "pandemic — affecting all (people)" },
  { part: "para-", type: "prefix", meaning: "beside, near, abnormal", example: "paranasal — beside the nose" },
  { part: "per-", type: "prefix", meaning: "through", example: "percutaneous — through the skin" },
  { part: "peri-", type: "prefix", meaning: "around, surrounding", example: "pericardium — sac around the heart" },
  { part: "poly-", type: "prefix", meaning: "many, much", example: "polyuria — excessive urination" },
  { part: "post-", type: "prefix", meaning: "after, behind", example: "postpartum — after childbirth" },
  { part: "pre-, pro-", type: "prefix", meaning: "before, in front of", example: "prenatal — before birth" },
  { part: "quadri-", type: "prefix", meaning: "four", example: "quadriplegia — paralysis of four limbs" },
  { part: "retro-", type: "prefix", meaning: "behind, backward", example: "retroperitoneal — behind the peritoneum" },
  { part: "semi-", type: "prefix", meaning: "half, partial", example: "semiconscious — partially conscious" },
  { part: "sub-", type: "prefix", meaning: "below, under", example: "subcutaneous — below the skin" },
  { part: "supra-", type: "prefix", meaning: "above, upper", example: "suprarenal — above the kidney" },
  { part: "sym-, syn-", type: "prefix", meaning: "together, joined", example: "symphysis — a growing together" },
  { part: "tachy-", type: "prefix", meaning: "fast, rapid", example: "tachycardia — fast heart rate" },
  { part: "trans-", type: "prefix", meaning: "across, through", example: "transdermal — across the skin" },
  { part: "tri-", type: "prefix", meaning: "three", example: "triceps — muscle with three heads" },
  { part: "uni-", type: "prefix", meaning: "one", example: "unilateral — on one side" },

  // ---- Combining forms: cardiovascular / blood ----------------------------
  { part: "cardi/o", type: "root", meaning: "heart", example: "cardiology — study of the heart" },
  { part: "angi/o", type: "root", meaning: "vessel", example: "angiography — imaging of vessels" },
  { part: "vas/o", type: "root", meaning: "vessel, duct", example: "vasodilation — widening of vessels" },
  { part: "arteri/o", type: "root", meaning: "artery", example: "arteriosclerosis — hardening of arteries" },
  { part: "phleb/o, ven/o", type: "root", meaning: "vein", example: "phlebitis — inflammation of a vein" },
  { part: "aort/o", type: "root", meaning: "aorta", example: "aortic — relating to the aorta" },
  { part: "hem/o, hemat/o", type: "root", meaning: "blood", example: "hematology — study of blood" },
  { part: "thromb/o", type: "root", meaning: "clot", example: "thrombosis — formation of a clot" },
  { part: "ather/o", type: "root", meaning: "fatty plaque", example: "atherosclerosis — plaque in arteries" },

  // ---- Respiratory --------------------------------------------------------
  { part: "pulmon/o", type: "root", meaning: "lung", example: "pulmonary — relating to the lungs" },
  { part: "pneum/o, pneumon/o", type: "root", meaning: "lung, air", example: "pneumonia — lung infection" },
  { part: "bronch/o", type: "root", meaning: "bronchus", example: "bronchitis — inflammation of the bronchi" },
  { part: "trache/o", type: "root", meaning: "trachea, windpipe", example: "tracheostomy — opening into the trachea" },
  { part: "laryng/o", type: "root", meaning: "larynx, voice box", example: "laryngitis — inflammation of the larynx" },
  { part: "pharyng/o", type: "root", meaning: "pharynx, throat", example: "pharyngitis — sore throat" },
  { part: "rhin/o, nas/o", type: "root", meaning: "nose", example: "rhinorrhea — runny nose" },
  { part: "thorac/o", type: "root", meaning: "chest", example: "thoracic — relating to the chest" },
  { part: "pleur/o", type: "root", meaning: "pleura", example: "pleurisy — inflammation of the pleura" },
  { part: "spir/o", type: "root", meaning: "breathing", example: "spirometer — measures breathing" },
  { part: "ox/o, ox/i", type: "root", meaning: "oxygen", example: "hypoxia — low oxygen" },

  // ---- Digestive ----------------------------------------------------------
  { part: "gastr/o", type: "root", meaning: "stomach", example: "gastritis — inflammation of the stomach" },
  { part: "enter/o", type: "root", meaning: "intestine (small)", example: "enteritis — inflammation of the intestine" },
  { part: "col/o, colon/o", type: "root", meaning: "colon, large intestine", example: "colonoscopy — viewing the colon" },
  { part: "hepat/o", type: "root", meaning: "liver", example: "hepatitis — inflammation of the liver" },
  { part: "chol/e, chol/o", type: "root", meaning: "bile, gall", example: "cholelithiasis — gallstones" },
  { part: "cholecyst/o", type: "root", meaning: "gallbladder", example: "cholecystectomy — gallbladder removal" },
  { part: "pancreat/o", type: "root", meaning: "pancreas", example: "pancreatitis — inflammation of the pancreas" },
  { part: "or/o, stomat/o", type: "root", meaning: "mouth", example: "stomatitis — inflammation of the mouth" },
  { part: "gloss/o, lingu/o", type: "root", meaning: "tongue", example: "glossitis — inflammation of the tongue" },
  { part: "dent/o, odont/o", type: "root", meaning: "tooth", example: "orthodontist — straightens teeth" },
  { part: "esophag/o", type: "root", meaning: "esophagus", example: "esophagitis — inflamed esophagus" },
  { part: "proct/o", type: "root", meaning: "rectum, anus", example: "proctologist — rectum specialist" },
  { part: "abdomin/o, lapar/o", type: "root", meaning: "abdomen", example: "laparoscopy — viewing the abdomen" },
  { part: "chol/angi/o", type: "root", meaning: "bile duct", example: "cholangiography — imaging bile ducts" },

  // ---- Urinary ------------------------------------------------------------
  { part: "nephr/o, ren/o", type: "root", meaning: "kidney", example: "nephrology — study of the kidneys" },
  { part: "cyst/o", type: "root", meaning: "bladder, sac", example: "cystitis — inflammation of the bladder" },
  { part: "ur/o, urin/o", type: "root", meaning: "urine, urinary tract", example: "urology — study of the urinary tract" },
  { part: "ureter/o", type: "root", meaning: "ureter", example: "ureteral — relating to the ureter" },
  { part: "urethr/o", type: "root", meaning: "urethra", example: "urethritis — inflamed urethra" },
  { part: "pyel/o", type: "root", meaning: "renal pelvis", example: "pyelonephritis — kidney/renal pelvis infection" },

  // ---- Nervous ------------------------------------------------------------
  { part: "neur/o", type: "root", meaning: "nerve", example: "neurology — study of the nervous system" },
  { part: "cerebr/o", type: "root", meaning: "cerebrum, brain", example: "cerebral — relating to the brain" },
  { part: "encephal/o", type: "root", meaning: "brain", example: "encephalitis — inflammation of the brain" },
  { part: "myel/o", type: "root", meaning: "spinal cord, bone marrow", example: "myelogram — image of the spinal cord" },
  { part: "mening/o", type: "root", meaning: "meninges", example: "meningitis — inflammation of the meninges" },
  { part: "psych/o", type: "root", meaning: "mind", example: "psychology — study of the mind" },
  { part: "cephal/o", type: "root", meaning: "head", example: "cephalalgia — headache" },
  { part: "crani/o", type: "root", meaning: "skull", example: "craniotomy — incision into the skull" },

  // ---- Musculoskeletal ----------------------------------------------------
  { part: "oste/o", type: "root", meaning: "bone", example: "osteoporosis — porous, weakened bone" },
  { part: "arthr/o", type: "root", meaning: "joint", example: "arthritis — inflammation of a joint" },
  { part: "chondr/o", type: "root", meaning: "cartilage", example: "chondromalacia — softening of cartilage" },
  { part: "my/o, myos/o", type: "root", meaning: "muscle", example: "myalgia — muscle pain" },
  { part: "ten/o, tendin/o", type: "root", meaning: "tendon", example: "tendinitis — inflammation of a tendon" },
  { part: "spondyl/o, vertebr/o", type: "root", meaning: "vertebra, spine", example: "spondylosis — degeneration of the spine" },
  { part: "cost/o", type: "root", meaning: "rib", example: "intercostal — between the ribs" },
  { part: "burs/o", type: "root", meaning: "bursa", example: "bursitis — inflammation of a bursa" },
  { part: "kinesi/o", type: "root", meaning: "movement", example: "kinesiology — study of movement" },

  // ---- Integumentary ------------------------------------------------------
  { part: "derm/o, dermat/o", type: "root", meaning: "skin", example: "dermatology — study of the skin" },
  { part: "cutane/o", type: "root", meaning: "skin", example: "subcutaneous — below the skin" },
  { part: "onych/o", type: "root", meaning: "nail", example: "onychomycosis — fungal nail infection" },
  { part: "trich/o", type: "root", meaning: "hair", example: "trichomycosis — fungal hair infection" },
  { part: "seb/o", type: "root", meaning: "sebum, oil", example: "seborrhea — excess oil discharge" },
  { part: "hidr/o", type: "root", meaning: "sweat", example: "hyperhidrosis — excessive sweating" },

  // ---- Senses -------------------------------------------------------------
  { part: "ophthalm/o, ocul/o", type: "root", meaning: "eye", example: "ophthalmology — study of the eye" },
  { part: "opt/o, optic/o", type: "root", meaning: "vision, eye", example: "optometry — measurement of vision" },
  { part: "retin/o", type: "root", meaning: "retina", example: "retinopathy — disease of the retina" },
  { part: "ot/o", type: "root", meaning: "ear", example: "otitis — inflammation of the ear" },
  { part: "audi/o, acous/o", type: "root", meaning: "hearing", example: "audiometry — measurement of hearing" },

  // ---- Endocrine / reproductive -------------------------------------------
  { part: "thyr/o, thyroid/o", type: "root", meaning: "thyroid gland", example: "hyperthyroidism — overactive thyroid" },
  { part: "adren/o", type: "root", meaning: "adrenal gland", example: "adrenaline — adrenal hormone" },
  { part: "gluc/o, glyc/o", type: "root", meaning: "sugar, glucose", example: "glycosuria — sugar in the urine" },
  { part: "gynec/o", type: "root", meaning: "woman, female", example: "gynecology — study of female health" },
  { part: "mast/o, mamm/o", type: "root", meaning: "breast", example: "mammogram — breast image" },
  { part: "hyster/o, metr/o, uter/o", type: "root", meaning: "uterus", example: "hysterectomy — removal of the uterus" },
  { part: "oophor/o, ovari/o", type: "root", meaning: "ovary", example: "oophorectomy — removal of an ovary" },
  { part: "orchid/o, orchi/o", type: "root", meaning: "testis", example: "orchiectomy — removal of a testis" },
  { part: "prostat/o", type: "root", meaning: "prostate gland", example: "prostatitis — inflamed prostate" },

  // ---- General / cellular / colors ----------------------------------------
  { part: "cyt/o", type: "root", meaning: "cell", example: "cytology — study of cells" },
  { part: "hist/o", type: "root", meaning: "tissue", example: "histology — study of tissues" },
  { part: "aden/o", type: "root", meaning: "gland", example: "adenoma — glandular tumor" },
  { part: "carcin/o", type: "root", meaning: "cancer, cancerous", example: "carcinoma — cancerous tumor" },
  { part: "onc/o", type: "root", meaning: "tumor, mass", example: "oncology — study of tumors" },
  { part: "path/o", type: "root", meaning: "disease", example: "pathology — study of disease" },
  { part: "lip/o, adip/o", type: "root", meaning: "fat", example: "liposuction — removal of fat" },
  { part: "sarc/o", type: "root", meaning: "flesh, connective tissue", example: "sarcoma — connective-tissue tumor" },
  { part: "necr/o", type: "root", meaning: "death (of tissue)", example: "necrosis — tissue death" },
  { part: "lith/o", type: "root", meaning: "stone, calculus", example: "lithotripsy — crushing of stones" },
  { part: "py/o", type: "root", meaning: "pus", example: "pyuria — pus in the urine" },
  { part: "cyan/o", type: "root", meaning: "blue", example: "cyanosis — bluish discoloration" },
  { part: "erythr/o", type: "root", meaning: "red", example: "erythrocyte — red blood cell" },
  { part: "leuk/o", type: "root", meaning: "white", example: "leukocyte — white blood cell" },
  { part: "melan/o", type: "root", meaning: "black, dark", example: "melanoma — dark-pigmented tumor" },
  { part: "xanth/o", type: "root", meaning: "yellow", example: "xanthoma — yellow fatty deposit" },
  { part: "pyr/o, pyret/o", type: "root", meaning: "fever, fire", example: "antipyretic — reduces fever" },
  { part: "therm/o", type: "root", meaning: "heat", example: "hypothermia — low body heat" },
  { part: "cry/o", type: "root", meaning: "cold", example: "cryotherapy — cold treatment" },

  // ---- Suffixes: conditions & symptoms ------------------------------------
  { part: "-algia, -dynia", type: "suffix", meaning: "pain", example: "neuralgia — nerve pain" },
  { part: "-cele", type: "suffix", meaning: "hernia, protrusion", example: "cystocele — herniated bladder" },
  { part: "-ectasis", type: "suffix", meaning: "dilation, expansion", example: "bronchiectasis — dilated bronchi" },
  { part: "-emia", type: "suffix", meaning: "blood condition", example: "anemia — deficiency of red blood cells" },
  { part: "-emesis", type: "suffix", meaning: "vomiting", example: "hematemesis — vomiting blood" },
  { part: "-iasis", type: "suffix", meaning: "abnormal condition", example: "lithiasis — formation of stones" },
  { part: "-itis", type: "suffix", meaning: "inflammation", example: "tonsillitis — inflamed tonsils" },
  { part: "-malacia", type: "suffix", meaning: "softening", example: "osteomalacia — softening of bone" },
  { part: "-megaly", type: "suffix", meaning: "enlargement", example: "cardiomegaly — enlarged heart" },
  { part: "-oma", type: "suffix", meaning: "tumor, mass", example: "carcinoma — cancerous tumor" },
  { part: "-osis", type: "suffix", meaning: "abnormal condition", example: "cyanosis — bluish discoloration" },
  { part: "-pathy", type: "suffix", meaning: "disease", example: "neuropathy — nerve disease" },
  { part: "-penia", type: "suffix", meaning: "deficiency, decrease", example: "leukopenia — low white blood cells" },
  { part: "-phobia", type: "suffix", meaning: "abnormal fear", example: "claustrophobia — fear of enclosed spaces" },
  { part: "-plegia", type: "suffix", meaning: "paralysis", example: "paraplegia — paralysis of lower body" },
  { part: "-ptosis", type: "suffix", meaning: "drooping, sagging", example: "blepharoptosis — drooping eyelid" },
  { part: "-rrhage, -rrhagia", type: "suffix", meaning: "bursting forth, bleeding", example: "hemorrhage — bursting forth of blood" },
  { part: "-rrhea", type: "suffix", meaning: "flow, discharge", example: "diarrhea — flowing through" },
  { part: "-rrhexis", type: "suffix", meaning: "rupture", example: "angiorrhexis — rupture of a vessel" },
  { part: "-sclerosis", type: "suffix", meaning: "hardening", example: "arteriosclerosis — hardening of arteries" },
  { part: "-spasm", type: "suffix", meaning: "sudden involuntary contraction", example: "bronchospasm — airway contraction" },
  { part: "-stenosis", type: "suffix", meaning: "narrowing, stricture", example: "aortic stenosis — narrowed aortic valve" },
  { part: "-uria", type: "suffix", meaning: "urine condition", example: "hematuria — blood in the urine" },

  // ---- Suffixes: procedures & specialties ---------------------------------
  { part: "-centesis", type: "suffix", meaning: "surgical puncture to remove fluid", example: "thoracentesis — puncture of the chest" },
  { part: "-ectomy", type: "suffix", meaning: "surgical removal, excision", example: "appendectomy — removal of the appendix" },
  { part: "-gram", type: "suffix", meaning: "record, image", example: "electrocardiogram — record of heart activity" },
  { part: "-graphy", type: "suffix", meaning: "process of recording", example: "angiography — imaging of vessels" },
  { part: "-lysis", type: "suffix", meaning: "breakdown, separation", example: "hemolysis — breakdown of blood cells" },
  { part: "-pexy", type: "suffix", meaning: "surgical fixation", example: "nephropexy — fixation of a kidney" },
  { part: "-plasty", type: "suffix", meaning: "surgical repair", example: "rhinoplasty — repair of the nose" },
  { part: "-rrhaphy", type: "suffix", meaning: "suture, surgical stitching", example: "herniorrhaphy — suturing of a hernia" },
  { part: "-scopy", type: "suffix", meaning: "visual examination", example: "endoscopy — looking inside the body" },
  { part: "-stomy", type: "suffix", meaning: "surgical (new) opening", example: "colostomy — opening into the colon" },
  { part: "-tomy", type: "suffix", meaning: "incision, cutting into", example: "laparotomy — incision into the abdomen" },
  { part: "-tripsy", type: "suffix", meaning: "crushing", example: "lithotripsy — crushing of stones" },
  { part: "-logy", type: "suffix", meaning: "study of", example: "biology — study of life" },
  { part: "-logist", type: "suffix", meaning: "specialist in the study of", example: "cardiologist — heart specialist" },

  // ---- Suffixes: states, formation, misc ----------------------------------
  { part: "-blast", type: "suffix", meaning: "immature, embryonic cell", example: "osteoblast — bone-forming cell" },
  { part: "-cyte", type: "suffix", meaning: "cell", example: "erythrocyte — red blood cell" },
  { part: "-genesis", type: "suffix", meaning: "production, formation", example: "pathogenesis — development of disease" },
  { part: "-genic", type: "suffix", meaning: "producing, originating", example: "iatrogenic — caused by treatment" },
  { part: "-oid", type: "suffix", meaning: "resembling", example: "lipoid — resembling fat" },
  { part: "-osis", type: "suffix", meaning: "abnormal condition, increase", example: "leukocytosis — increase in white cells" },
  { part: "-phagia", type: "suffix", meaning: "eating, swallowing", example: "dysphagia — difficulty swallowing" },
  { part: "-phasia", type: "suffix", meaning: "speech", example: "aphasia — loss of speech" },
  { part: "-plasia", type: "suffix", meaning: "formation, development", example: "hyperplasia — excessive development" },
  { part: "-pnea", type: "suffix", meaning: "breathing", example: "dyspnea — difficult breathing" },
  { part: "-poiesis", type: "suffix", meaning: "formation", example: "hematopoiesis — formation of blood cells" },
  { part: "-stasis", type: "suffix", meaning: "stopping, controlling", example: "hemostasis — stopping of bleeding" },
  { part: "-trophy", type: "suffix", meaning: "development, nourishment", example: "hypertrophy — excessive growth" },
];

// ----- Flashcards ------------------------------------------------------------
export const flashcards = [
  // Cardiovascular
  { term: "Hypertension", definition: "Abnormally high blood pressure.", category: "Cardiovascular" },
  { term: "Bradycardia", definition: "A slower-than-normal heart rate (under 60 bpm).", category: "Cardiovascular" },
  { term: "Tachycardia", definition: "A faster-than-normal heart rate (over 100 bpm).", category: "Cardiovascular" },
  { term: "Myocardial infarction", definition: "Death of heart muscle from loss of blood supply; a heart attack.", category: "Cardiovascular" },
  { term: "Atherosclerosis", definition: "Buildup of fatty plaque inside artery walls.", category: "Cardiovascular" },
  { term: "Arrhythmia", definition: "An irregular or abnormal heart rhythm.", category: "Cardiovascular" },
  { term: "Angina pectoris", definition: "Chest pain due to reduced blood flow to the heart.", category: "Cardiovascular" },
  { term: "Thrombus", definition: "A stationary blood clot within a vessel.", category: "Cardiovascular" },
  { term: "Embolus", definition: "A clot or mass that travels and lodges in a vessel.", category: "Cardiovascular" },
  { term: "Pericarditis", definition: "Inflammation of the sac surrounding the heart.", category: "Cardiovascular" },

  // Respiratory
  { term: "Pneumonia", definition: "Infection that inflames the air sacs of the lungs.", category: "Respiratory" },
  { term: "Apnea", definition: "Temporary cessation of breathing.", category: "Respiratory" },
  { term: "Dyspnea", definition: "Difficult or labored breathing.", category: "Respiratory" },
  { term: "Hypoxia", definition: "Deficient oxygen reaching the tissues.", category: "Respiratory" },
  { term: "Bronchitis", definition: "Inflammation of the bronchial tubes.", category: "Respiratory" },
  { term: "Pleurisy", definition: "Inflammation of the pleura, causing painful breathing.", category: "Respiratory" },
  { term: "Atelectasis", definition: "Collapse of all or part of a lung.", category: "Respiratory" },
  { term: "Epistaxis", definition: "A nosebleed.", category: "Respiratory" },
  { term: "Cyanosis", definition: "A bluish skin discoloration from poor oxygenation.", category: "Respiratory" },
  { term: "Tachypnea", definition: "Abnormally rapid breathing.", category: "Respiratory" },

  // Digestive
  { term: "Gastritis", definition: "Inflammation of the lining of the stomach.", category: "Digestive" },
  { term: "Hepatomegaly", definition: "Abnormal enlargement of the liver.", category: "Digestive" },
  { term: "Dysphagia", definition: "Difficulty or discomfort in swallowing.", category: "Digestive" },
  { term: "Cholelithiasis", definition: "The presence of gallstones.", category: "Digestive" },
  { term: "Colostomy", definition: "A surgical opening between the colon and the body surface.", category: "Digestive" },
  { term: "Hematemesis", definition: "Vomiting of blood.", category: "Digestive" },
  { term: "Cirrhosis", definition: "Chronic degenerative scarring of the liver.", category: "Digestive" },
  { term: "Gastroenteritis", definition: "Inflammation of the stomach and intestines.", category: "Digestive" },
  { term: "Hepatitis", definition: "Inflammation of the liver.", category: "Digestive" },
  { term: "Appendectomy", definition: "Surgical removal of the appendix.", category: "Digestive" },

  // Urinary
  { term: "Nephritis", definition: "Inflammation of the kidneys.", category: "Urinary" },
  { term: "Polyuria", definition: "Excessive production or passage of urine.", category: "Urinary" },
  { term: "Hematuria", definition: "Blood in the urine.", category: "Urinary" },
  { term: "Dysuria", definition: "Painful or difficult urination.", category: "Urinary" },
  { term: "Cystitis", definition: "Inflammation of the urinary bladder.", category: "Urinary" },
  { term: "Pyelonephritis", definition: "Infection of the kidney and renal pelvis.", category: "Urinary" },
  { term: "Nephrolithiasis", definition: "The presence of kidney stones.", category: "Urinary" },
  { term: "Oliguria", definition: "Abnormally low output of urine.", category: "Urinary" },
  { term: "Uremia", definition: "Excess waste products (urea) in the blood.", category: "Urinary" },

  // Nervous
  { term: "Neuropathy", definition: "Disease or dysfunction of the peripheral nerves.", category: "Nervous" },
  { term: "Cerebrovascular accident", definition: "A stroke; interruption of blood flow to the brain.", category: "Nervous" },
  { term: "Hemiplegia", definition: "Paralysis of one side of the body.", category: "Nervous" },
  { term: "Encephalitis", definition: "Inflammation of the brain.", category: "Nervous" },
  { term: "Meningitis", definition: "Inflammation of the membranes covering the brain and spinal cord.", category: "Nervous" },
  { term: "Aphasia", definition: "Loss or impairment of the ability to speak.", category: "Nervous" },
  { term: "Cephalalgia", definition: "Headache.", category: "Nervous" },
  { term: "Quadriplegia", definition: "Paralysis of all four limbs.", category: "Nervous" },
  { term: "Syncope", definition: "Temporary loss of consciousness; fainting.", category: "Nervous" },

  // Skeletal
  { term: "Osteoporosis", definition: "Porous, brittle bones that fracture easily.", category: "Skeletal" },
  { term: "Arthritis", definition: "Inflammation of one or more joints.", category: "Skeletal" },
  { term: "Osteomyelitis", definition: "Infection of bone and bone marrow.", category: "Skeletal" },
  { term: "Osteoarthritis", definition: "Degenerative joint disease from cartilage wear.", category: "Skeletal" },
  { term: "Kyphosis", definition: "Excessive outward curvature of the thoracic spine.", category: "Skeletal" },
  { term: "Scoliosis", definition: "Abnormal lateral (sideways) curvature of the spine.", category: "Skeletal" },
  { term: "Arthroplasty", definition: "Surgical repair or replacement of a joint.", category: "Skeletal" },
  { term: "Osteotomy", definition: "Surgical cutting of a bone.", category: "Skeletal" },

  // Muscular
  { term: "Myalgia", definition: "Pain in a muscle or group of muscles.", category: "Muscular" },
  { term: "Atrophy", definition: "Wasting away or decrease in size of a muscle.", category: "Muscular" },
  { term: "Hypertrophy", definition: "Increase in the size of muscle tissue.", category: "Muscular" },
  { term: "Fibromyalgia", definition: "Widespread muscle pain and tenderness.", category: "Muscular" },
  { term: "Tendinitis", definition: "Inflammation of a tendon.", category: "Muscular" },
  { term: "Dystrophy", definition: "Progressive weakness and degeneration of muscle.", category: "Muscular" },

  // Integumentary
  { term: "Dermatitis", definition: "Inflammation of the skin with redness and itching.", category: "Integumentary" },
  { term: "Melanoma", definition: "A malignant tumor of pigment-producing skin cells.", category: "Integumentary" },
  { term: "Cellulitis", definition: "A spreading bacterial infection of the skin.", category: "Integumentary" },
  { term: "Onychomycosis", definition: "A fungal infection of the nails.", category: "Integumentary" },
  { term: "Pruritus", definition: "Severe itching of the skin.", category: "Integumentary" },
  { term: "Alopecia", definition: "Partial or complete loss of hair.", category: "Integumentary" },

  // Endocrine
  { term: "Hyperglycemia", definition: "Abnormally high blood glucose level.", category: "Endocrine" },
  { term: "Hypoglycemia", definition: "Abnormally low blood glucose level.", category: "Endocrine" },
  { term: "Hyperthyroidism", definition: "Overactivity of the thyroid gland.", category: "Endocrine" },
  { term: "Hypothyroidism", definition: "Underactivity of the thyroid gland.", category: "Endocrine" },
  { term: "Diabetes mellitus", definition: "Disorder of glucose regulation due to insulin problems.", category: "Endocrine" },
  { term: "Goiter", definition: "Enlargement of the thyroid gland.", category: "Endocrine" },

  // Hematology / Lymphatic / Immune
  { term: "Anemia", definition: "A deficiency of red blood cells or hemoglobin.", category: "Hematology" },
  { term: "Leukemia", definition: "Cancer of blood-forming tissues; excess white cells.", category: "Hematology" },
  { term: "Thrombocytopenia", definition: "An abnormally low platelet count.", category: "Hematology" },
  { term: "Leukocytosis", definition: "An abnormally high white blood cell count.", category: "Hematology" },
  { term: "Lymphadenopathy", definition: "Disease or swelling of the lymph nodes.", category: "Hematology" },
  { term: "Hemostasis", definition: "The stopping of bleeding.", category: "Hematology" },

  // Oncology / General
  { term: "Carcinoma", definition: "A cancer arising from epithelial tissue.", category: "Oncology" },
  { term: "Sarcoma", definition: "A cancer arising from connective tissue.", category: "Oncology" },
  { term: "Metastasis", definition: "Spread of cancer from its origin to distant sites.", category: "Oncology" },
  { term: "Benign", definition: "Non-cancerous; not spreading or invasive.", category: "Oncology" },
  { term: "Malignant", definition: "Cancerous; invasive and able to spread.", category: "Oncology" },
  { term: "Biopsy", definition: "Removal of tissue for microscopic examination.", category: "Oncology" },

  // Sensory
  { term: "Otitis media", definition: "Inflammation of the middle ear.", category: "Sensory" },
  { term: "Conjunctivitis", definition: "Inflammation of the conjunctiva of the eye (pink eye).", category: "Sensory" },
  { term: "Retinopathy", definition: "Disease of the retina, often from diabetes.", category: "Sensory" },
  { term: "Glaucoma", definition: "Increased pressure within the eye that can damage vision.", category: "Sensory" },
  { term: "Tinnitus", definition: "Ringing or noise perceived in the ears.", category: "Sensory" },

  // Reproductive
  { term: "Hysterectomy", definition: "Surgical removal of the uterus.", category: "Reproductive" },
  { term: "Mastectomy", definition: "Surgical removal of a breast.", category: "Reproductive" },
  { term: "Orchiectomy", definition: "Surgical removal of one or both testes.", category: "Reproductive" },
  { term: "Prostatitis", definition: "Inflammation of the prostate gland.", category: "Reproductive" },
  { term: "Endometriosis", definition: "Uterine-lining tissue growing outside the uterus.", category: "Reproductive" },
];

// ----- Body systems ----------------------------------------------------------
// `model` maps to a built-in procedural builder in anatomy3d.js (the fallback).
// `file` is an optional path to a realistic .glb/.gltf/.stl model. When set and
// the file loads, it replaces the procedural shape; otherwise the procedural
// model is shown. `color` sets the material for .stl files; `rotation` ([x,y,z]
// radians) can orient a model upright.
export const bodySystems = [
  {
    id: "skeletal",
    name: "Skeletal System",
    model: "skeletal",
    // Realistic model: "The Open 3D Man" skeleton, © anatomists of Leiden UMC
    // et al., licensed CC BY-SA 4.0 (https://anatomytool.org/open3dmodel).
    file: "models/skeleton.glb",
    summary: "Provides structure, protects organs, stores minerals, and produces blood cells.",
    terms: [
      { term: "oste/o", meaning: "bone" },
      { term: "arthr/o", meaning: "joint" },
      { term: "chondr/o", meaning: "cartilage" },
      { term: "-porosis", meaning: "porous condition" },
    ],
  },
  {
    id: "skull",
    name: "Skull (Cranium)",
    model: "skull",
    // Realistic model: "Coloured skull" from The Open 3D Man, © Leiden UMC et
    // al., licensed CC BY-SA 4.0 (https://anatomytool.org/open3dmodel).
    file: "models/skull.glb",
    summary: "Bones of the head that protect the brain and form the face; each bone is shown in a different color.",
    terms: [
      { term: "crani/o", meaning: "skull" },
      { term: "cephal/o", meaning: "head" },
      { term: "maxill/o", meaning: "upper jaw" },
      { term: "mandibul/o", meaning: "lower jaw" },
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
// The bank combines auto-generated word-part questions with applied clinical
// questions. Each quiz session draws a random subset (see quiz.js).
function buildQuizFromWordParts() {
  const meanings = [...new Set(wordParts.map((w) => w.meaning))];
  return wordParts.map((w) => {
    const distractors = meanings
      .filter((m) => m !== w.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = [w.meaning, ...distractors].sort(() => Math.random() - 0.5);
    return {
      question: `What does the word part "${w.part}" mean?`,
      options,
      answer: w.meaning,
      topic: "Word parts",
    };
  });
}

const appliedQuestions = [
  { question: "A patient with 'bradycardia' has a heart rate that is…", options: ["too fast", "too slow", "irregular", "normal"], answer: "too slow", topic: "Cardiovascular" },
  { question: "'Hepatomegaly' refers to enlargement of which organ?", options: ["kidney", "liver", "heart", "spleen"], answer: "liver", topic: "Digestive" },
  { question: "Which term means 'inflammation of a joint'?", options: ["arthritis", "arthralgia", "osteitis", "myositis"], answer: "arthritis", topic: "Skeletal" },
  { question: "The suffix '-ectomy' indicates what kind of procedure?", options: ["visual exam", "surgical removal", "surgical repair", "recording"], answer: "surgical removal", topic: "Procedures" },
  { question: "'Tachypnea' describes breathing that is…", options: ["absent", "slow", "rapid", "painful"], answer: "rapid", topic: "Respiratory" },
  { question: "Which word means 'blood in the urine'?", options: ["hematuria", "pyuria", "dysuria", "polyuria"], answer: "hematuria", topic: "Urinary" },
  { question: "'Leukocyte' is another name for a…", options: ["red blood cell", "white blood cell", "platelet", "plasma cell"], answer: "white blood cell", topic: "Hematology" },
  { question: "A 'cholecystectomy' removes the…", options: ["colon", "gallbladder", "common bile duct", "liver"], answer: "gallbladder", topic: "Digestive" },
  { question: "The combining form 'nephr/o' refers to the…", options: ["bladder", "kidney", "ureter", "urethra"], answer: "kidney", topic: "Urinary" },
  { question: "'Dyspnea' means…", options: ["no breathing", "difficult breathing", "fast breathing", "normal breathing"], answer: "difficult breathing", topic: "Respiratory" },
  { question: "Which suffix means 'surgical fixation'?", options: ["-pexy", "-plasty", "-stomy", "-tomy"], answer: "-pexy", topic: "Procedures" },
  { question: "'Osteomalacia' is a…", options: ["hardening of bone", "softening of bone", "inflammation of bone", "tumor of bone"], answer: "softening of bone", topic: "Skeletal" },
  { question: "A stroke is clinically known as a…", options: ["myocardial infarction", "cerebrovascular accident", "transient ischemic attack", "aneurysm"], answer: "cerebrovascular accident", topic: "Nervous" },
  { question: "'Erythrocyte' uses a color root meaning…", options: ["white", "blue", "red", "black"], answer: "red", topic: "Hematology" },
  { question: "The prefix 'peri-' means…", options: ["around", "within", "below", "through"], answer: "around", topic: "Word parts" },
  { question: "'-rrhea' as in 'diarrhea' means…", options: ["rupture", "flow or discharge", "bursting forth", "suture"], answer: "flow or discharge", topic: "Word parts" },
  { question: "A 'colonoscopy' is a visual exam of the…", options: ["stomach", "small intestine", "colon", "esophagus"], answer: "colon", topic: "Digestive" },
  { question: "'Cyanosis' indicates the skin appears…", options: ["red", "yellow", "blue", "pale"], answer: "blue", topic: "Respiratory" },
  { question: "Which term means 'paralysis of the lower half of the body'?", options: ["hemiplegia", "paraplegia", "quadriplegia", "diplegia"], answer: "paraplegia", topic: "Nervous" },
  { question: "'Hyperglycemia' is an excess of ____ in the blood.", options: ["calcium", "glucose", "potassium", "oxygen"], answer: "glucose", topic: "Endocrine" },
  { question: "The root 'pneum/o' refers to…", options: ["blood", "lung or air", "chest wall", "heart"], answer: "lung or air", topic: "Respiratory" },
  { question: "A 'mammogram' is an image of the…", options: ["uterus", "ovary", "breast", "bladder"], answer: "breast", topic: "Reproductive" },
  { question: "'Arthroplasty' is the surgical ____ of a joint.", options: ["removal", "repair/replacement", "fixation", "fusion"], answer: "repair/replacement", topic: "Procedures" },
  { question: "Which suffix means 'abnormal softening'?", options: ["-sclerosis", "-malacia", "-stenosis", "-ectasis"], answer: "-malacia", topic: "Word parts" },
  { question: "'Thrombocytopenia' is a deficiency of…", options: ["red cells", "white cells", "platelets", "plasma"], answer: "platelets", topic: "Hematology" },
  { question: "The prefix 'anti-' means…", options: ["before", "against", "together", "beyond"], answer: "against", topic: "Word parts" },
  { question: "'Otitis media' is inflammation of the…", options: ["outer ear", "middle ear", "inner ear", "eardrum"], answer: "middle ear", topic: "Sensory" },
  { question: "A 'tracheostomy' creates an opening into the…", options: ["esophagus", "larynx", "trachea", "bronchus"], answer: "trachea", topic: "Respiratory" },
  { question: "'Melanoma' is a tumor associated with the color…", options: ["red", "black/dark", "white", "yellow"], answer: "black/dark", topic: "Oncology" },
  { question: "Which term means 'enlargement of the heart'?", options: ["cardiomyopathy", "cardiomegaly", "cardiomalacia", "carditis"], answer: "cardiomegaly", topic: "Cardiovascular" },
  { question: "'Dysphagia' refers to difficulty…", options: ["breathing", "speaking", "swallowing", "urinating"], answer: "swallowing", topic: "Digestive" },
  { question: "The suffix '-emia' refers to a condition of the…", options: ["urine", "blood", "lungs", "lymph"], answer: "blood", topic: "Word parts" },
  { question: "'Subcutaneous' means located…", options: ["above the skin", "below the skin", "within the skin", "around the skin"], answer: "below the skin", topic: "Integumentary" },
  { question: "A 'nephrolith' is a…", options: ["kidney tumor", "kidney stone", "kidney infection", "kidney cyst"], answer: "kidney stone", topic: "Urinary" },
  { question: "'Aphasia' is the loss of the ability to…", options: ["see", "hear", "speak", "move"], answer: "speak", topic: "Nervous" },
  { question: "The root 'oste/o' means…", options: ["joint", "bone", "muscle", "cartilage"], answer: "bone", topic: "Skeletal" },
  { question: "'Hemostasis' means the ____ of bleeding.", options: ["starting", "stopping", "thinning", "thickening"], answer: "stopping", topic: "Hematology" },
  { question: "Which prefix means 'excessive or above normal'?", options: ["hypo-", "hyper-", "hemi-", "hetero-"], answer: "hyper-", topic: "Word parts" },
  { question: "'Rhinoplasty' is surgical repair of the…", options: ["ear", "nose", "throat", "eye"], answer: "nose", topic: "Procedures" },
  { question: "A 'biopsy' involves removing ____ for examination.", options: ["blood", "tissue", "urine", "fluid"], answer: "tissue", topic: "Oncology" },
  { question: "'Polyuria' means ____ urine production.", options: ["painful", "scant", "excessive", "bloody"], answer: "excessive", topic: "Urinary" },
  { question: "The combining form 'encephal/o' refers to the…", options: ["spinal cord", "brain", "skull", "nerve"], answer: "brain", topic: "Nervous" },
  { question: "'Hyperthyroidism' means the thyroid gland is…", options: ["underactive", "overactive", "enlarged", "inflamed"], answer: "overactive", topic: "Endocrine" },
  { question: "Which term means 'inflammation of the liver'?", options: ["hepatitis", "hepatoma", "hepatomegaly", "hepatosis"], answer: "hepatitis", topic: "Digestive" },
  { question: "The suffix '-scopy' means…", options: ["recording", "visual examination", "measurement", "cutting"], answer: "visual examination", topic: "Word parts" },
];

export const quizBank = [...buildQuizFromWordParts(), ...appliedQuestions];
