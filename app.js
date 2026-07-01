/* ============================================================
   SANCTUM — prototype logic
   Self-contained: data + router + live search + interactions.
   ============================================================ */

/* ---------------- Therapist data (mock) ---------------- */
const THERAPISTS = [
  { id:1, name:"Daniel Hayes", gender:"Male", city:"London", online:true,
    accred:"BACP", role:"Counsellor & Psychotherapist", years:12, rating:4.9, reviews:87,
    lived:true, price:75,
    fields:["Problem & compulsive gambling","Relapse prevention","Co-occurring anxiety & depression"],
    approaches:["CBT","Motivational Interviewing"],
    blurb:"Practical, judgment-free support from someone who has walked the road back from compulsive gambling.",
    bio:"I've spent twelve years helping people rebuild after gambling took hold — and I've been there myself. My work is calm, direct and practical: we look at the triggers, the money, the shame, and we put real guards in place. You won't be lectured. We'll move at your pace and build something that actually holds." },

  { id:2, name:"Sarah Whitmore", gender:"Female", city:"Manchester", online:true,
    accred:"UKCP", role:"Psychotherapist", years:16, rating:4.8, reviews:54,
    lived:false, price:90,
    fields:["Behavioural addiction","Trauma-informed recovery","Family & relationship impact"],
    approaches:["Psychodynamic","Trauma-informed"],
    blurb:"Depth-focused therapy for the patterns underneath the gambling — not just the behaviour itself.",
    bio:"Gambling rarely stands alone. In sixteen years of practice I've found that lasting change comes from understanding what the behaviour is doing for you. I work gently and thoroughly, with particular care for trauma and the strain gambling puts on relationships and families." },

  { id:3, name:"Marcus Bell", gender:"Male", city:"Online only", online:true,
    accred:"NCS", role:"Addiction Counsellor", years:7, rating:4.7, reviews:41,
    lived:true, price:60,
    fields:["Online & sports betting","Young people & gambling","Relapse prevention"],
    approaches:["CBT","ACT"],
    blurb:"Specialist in app-based and sports betting, and the younger clients most exposed to it.",
    bio:"The new wave of gambling lives on your phone — fast, relentless, designed to hook. I focus on online and sports betting, especially with younger clients. Having come through it myself, I get how it grips you, and how to loosen that grip for good." },

  { id:4, name:"Priya Nair", gender:"Female", city:"Bristol", online:true,
    accred:"BACP", role:"Counselling Psychologist", years:9, rating:4.9, reviews:63,
    lived:false, price:80,
    fields:["Financial therapy & debt stress","Co-occurring anxiety & depression","Problem & compulsive gambling"],
    approaches:["CBT","Financial therapy"],
    blurb:"Where gambling meets money worry — combining therapy with practical financial recovery.",
    bio:"Debt is often the loudest part of gambling harm. I blend psychological therapy with financial-stress work so we tackle both the feelings and the practicalities. You'll leave sessions with a clearer head and concrete next steps." },

  { id:5, name:"James O'Connor", gender:"Male", city:"Sydney", online:true,
    accred:"PACFA", role:"Clinical Counsellor", years:20, rating:4.8, reviews:112,
    lived:true, price:85,
    fields:["Problem & compulsive gambling","Group programs","Relapse prevention"],
    approaches:["Motivational Interviewing","12-step informed"],
    blurb:"Two decades in gambling recovery, with group programs and one-to-one relapse work.",
    bio:"I've worked in gambling recovery for twenty years across one-to-one and group settings. Recovery sticks when you're not doing it alone — I'll help you build structure, accountability and a community around your goals, drawing on lived experience of my own." },

  { id:6, name:"Aisha Rahman", gender:"Female", city:"Online only", online:true,
    accred:"BACP", role:"Psychotherapist", years:11, rating:4.9, reviews:72,
    lived:false, price:88,
    fields:["Trauma-informed recovery","Family & relationship impact","Co-occurring anxiety & depression"],
    approaches:["EMDR","Trauma-informed"],
    blurb:"Trauma-informed therapy for gambling rooted in difficult life experience.",
    bio:"For many people gambling is a way to cope with something older and deeper. I use trauma-focused approaches including EMDR to help you address the root, not just the symptom, in a steady and safe way." },

  { id:7, name:"Tom Fletcher", gender:"Male", city:"Leeds", online:true,
    accred:"NCS", role:"Addiction Therapist", years:5, rating:4.6, reviews:28,
    lived:true, price:55,
    fields:["Online & app-based gambling","Relapse prevention","Young people & gambling"],
    approaches:["CBT","ACT"],
    blurb:"Down-to-earth, affordable support with a focus on breaking the phone-gambling loop.",
    bio:"I keep things real and affordable. My focus is the constant pull of app-based gambling and the relapse cycle it creates. Having been through recovery myself, I offer practical tools and zero judgment." },

  { id:8, name:"Dr. Eleanor Voss", gender:"Female", city:"London", online:true,
    accred:"BPS", role:"Clinical Psychologist", years:18, rating:5.0, reviews:39,
    lived:false, price:110,
    fields:["Co-occurring anxiety & depression","Trauma-informed recovery","Problem & compulsive gambling"],
    approaches:["CBT","Schema therapy"],
    blurb:"Clinical psychologist for complex cases where gambling sits alongside other conditions.",
    bio:"I work with more complex presentations — where gambling coexists with depression, anxiety or longstanding patterns. As a clinical psychologist I bring a rigorous, evidence-based approach, tailored carefully to you." },

  { id:9, name:"Ryan Mitchell", gender:"Non-binary", city:"Online only", online:true,
    accred:"BACP", role:"Counsellor", years:6, rating:4.7, reviews:33,
    lived:true, price:58,
    fields:["Young people & gambling","Online & sports betting","Relapse prevention"],
    approaches:["Person-centred","CBT"],
    blurb:"Affirming, inclusive support — a safe space for everyone, however you identify.",
    bio:"I offer warm, affirming, person-centred counselling with particular experience supporting LGBTQ+ clients and younger people. You'll be met exactly as you are, with no judgment and full confidentiality." },

  { id:10, name:"Grace Adeyemi", gender:"Female", city:"Birmingham", online:true,
    accred:"UKCP", role:"Psychotherapist", years:14, rating:4.8, reviews:49,
    lived:false, price:82,
    fields:["Family & relationship impact","Financial therapy & debt stress","Co-occurring anxiety & depression"],
    approaches:["Systemic / family therapy"],
    blurb:"Support for the whole picture — partners, parents and families affected by gambling.",
    bio:"Gambling harms more than the person doing it. I work systemically with individuals and families to repair trust, communicate again, and recover together. Affected others are welcome here too." },

  { id:11, name:"David Park", gender:"Male", city:"Melbourne", online:true,
    accred:"PACFA", role:"Gambling Counsellor", years:13, rating:4.9, reviews:95,
    lived:true, price:78,
    fields:["Problem & compulsive gambling","Relapse prevention","Group programs"],
    approaches:["Motivational Interviewing","CBT"],
    blurb:"Dedicated gambling counsellor blending one-to-one work with peer group support.",
    bio:"Gambling counselling is all I do. I combine motivational and cognitive approaches with optional peer groups, so you get both personal focus and the strength of others who understand. I've been in recovery myself for over a decade." },

  { id:12, name:"Hannah Cole", gender:"Female", city:"Online only", online:true,
    accred:"NCS", role:"Wellbeing & Addiction Counsellor", years:8, rating:4.8, reviews:44,
    lived:false, price:65,
    fields:["Co-occurring anxiety & depression","Problem & compulsive gambling","Relapse prevention"],
    approaches:["Mindfulness-based","ACT"],
    blurb:"Calm, mindfulness-based therapy for the anxiety and low mood that ride alongside gambling.",
    bio:"My approach is gentle and grounding. Gambling so often travels with anxiety and low mood, and I use mindfulness and acceptance-based methods to help you steady yourself, ease the pressure and find a calmer footing." },
];

/* ---------------- helpers ---------------- */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const initials = n => n.replace(/^Dr\.\s*/,'').split(' ').map(w=>w[0]).slice(0,2).join('');
const starsHTML = () => '<svg class="ico"><use href="#i-star"/></svg>';
const locationOf = t => t.online && t.city === "Online only" ? "Online" : t.city;

/* ---------------- router ---------------- */
const VIEWS = ["home","search","profile","how","therapists","support"];
function go(view){
  VIEWS.forEach(v=>{
    const el = $("#view-"+v);
    if(el) el.classList.toggle("view--active", v===view);
  });
  $$(".nav__links a").forEach(a=>a.classList.toggle("is-active", a.dataset.go===view));
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
}

/* ---------------- render therapist cards ---------------- */
function cardHTML(t){
  const tags = t.fields.slice(0,2).map(f=>`<span class="tag">${f}</span>`).join('');
  const lived = t.lived ? `<span class="tag tag--lived">Lived experience</span>` : '';
  return `<article class="tcard" data-id="${t.id}">
    <div class="tcard__top">
      <div class="avatar">${initials(t.name)}</div>
      <div class="tcard__id">
        <div class="tcard__name">${t.name}<span class="verified" title="Accreditation verified"><svg class="ico"><use href="#i-shield"/></svg></span></div>
        <div class="tcard__role">${t.role} · ${t.accred}</div>
        <div class="tcard__meta">
          <span><svg class="ico"><use href="#i-loc"/></svg>${locationOf(t)}</span>
          <span>${t.years} yrs exp</span>
          <span class="stars">${starsHTML()}<b>${t.rating.toFixed(1)}</b> (${t.reviews})</span>
        </div>
      </div>
    </div>
    <div class="tags">${tags}${lived}</div>
    <div class="tcard__foot">
      <span class="price"><b>£${t.price}</b> <span>/ session</span></span>
      <span class="link-arrow">View profile <svg class="ico"><use href="#i-arrow"/></svg></span>
    </div>
  </article>`;
}

function readFilters(){
  return {
    q: $("#fSearch").value.trim().toLowerCase(),
    loc: $("#fLocation").value,
    field: $("#fField").value,
    accred: $("#fAccred").value,
    exp: +$("#fExp").value,
    rating: +$("#fRating").value,
    gender: $("#fGender").value,
    lived: $("#fLived").checked,
    sort: $("#fSort").value,
  };
}

function applyFilters(){
  const f = readFilters();
  let list = THERAPISTS.filter(t=>{
    if(f.q && !(t.name.toLowerCase().includes(f.q) || t.fields.join(' ').toLowerCase().includes(f.q) || t.approaches.join(' ').toLowerCase().includes(f.q))) return false;
    if(f.loc === "Online" && !t.online) return false;
    if(f.loc && f.loc !== "Online" && t.city !== f.loc) return false;
    if(f.field && !t.fields.includes(f.field)) return false;
    if(f.accred && t.accred !== f.accred) return false;
    if(f.exp && t.years < f.exp) return false;
    if(f.rating && t.rating < f.rating) return false;
    if(f.gender && t.gender !== f.gender) return false;
    if(f.lived && !t.lived) return false;
    return true;
  });

  const sorters = {
    recommended:(a,b)=> (b.rating*10 + b.reviews/40) - (a.rating*10 + a.reviews/40),
    rating:(a,b)=> b.rating - a.rating || b.reviews - a.reviews,
    experience:(a,b)=> b.years - a.years,
    priceLow:(a,b)=> a.price - b.price,
  };
  list.sort(sorters[f.sort] || sorters.recommended);

  const grid = $("#therapistGrid");
  const empty = $("#emptyState");
  grid.innerHTML = list.map(cardHTML).join('');
  empty.hidden = list.length > 0;
  $("#resultCount").innerHTML = `<b>${list.length}</b> therapist${list.length===1?'':'s'} found`;
}

/* ---------------- profile ---------------- */
function openProfile(id){
  const t = THERAPISTS.find(x=>x.id===id);
  if(!t) return;
  const fieldTags = t.fields.map(f=>`<span class="tag">${f}</span>`).join('');
  const apprTags  = t.approaches.map(a=>`<span class="tag">${a}</span>`).join('');
  const lived = t.lived
    ? `<span class="tag tag--lived">Lived experience of recovery</span>` : '';
  const mockReviews = [
    {s:5, txt:"Completely changed how I see my gambling. Never once felt judged.", by:"Anonymous client"},
    {s:5, txt:"Practical and kind. The treatment plan gave me something to hold onto.", by:"Anonymous client"},
    {s:4, txt:"Really understood the money side, not just the habit. Highly recommend.", by:"Anonymous client"},
  ];
  $("#profileBody").innerHTML = `
    <div>
      <div class="profile__head">
        <div class="avatar avatar--lg">${initials(t.name)}</div>
        <div>
          <h1 class="profile__name">${t.name}<span class="verified"><svg class="ico ico--lg"><use href="#i-shield"/></svg></span></h1>
          <div class="profile__role">${t.role} · ${t.accred} accredited</div>
          <div class="profile__meta">
            <span><svg class="ico"><use href="#i-loc"/></svg>${locationOf(t)}${t.online?' · Online available':''}</span>
            <span class="stars">${starsHTML()}<b>${t.rating.toFixed(1)}</b> (${t.reviews} reviews)</span>
            <span>${t.years} years' experience</span>
            <span>${t.gender}</span>
          </div>
          <div class="profile__tags" style="margin-top:14px">${lived}</div>
        </div>
      </div>

      <h3>About ${t.name.split(' ')[0]}</h3>
      <p>${t.bio}</p>

      <h3>Specialisms</h3>
      <div class="profile__tags">${fieldTags}</div>

      <h3>Approach</h3>
      <div class="profile__tags">${apprTags}</div>

      <h3>What clients say</h3>
      <div class="reviews">
        ${mockReviews.map(r=>`<div class="review">
          <div class="review__stars">${starsHTML().repeat(r.s)}</div>
          <p>“${r.txt}”</p><small>${r.by}</small>
        </div>`).join('')}
      </div>
    </div>

    <aside>
      <div class="aside-card">
        <div class="aside-card__price">£${t.price} <span>/ 50-min session</span></div>
        <ul class="aside-card__list">
          <li><span>Format</span><b>${t.online?'Online & in person':'In person'}</b></li>
          <li><span>Next available</span><b>This week</b></li>
          <li><span>First step</span><b>Free 15-min intro</b></li>
          <li><span>Anonymity</span><b>Fully protected</b></li>
        </ul>
        <button class="btn btn--primary btn--block" data-connect="${t.name}"><svg class="ico"><use href="#i-lock"/></svg> Request a session</button>
        <p class="fineprint" style="text-align:center;margin-top:14px">You keep your anonymity. ${t.name.split(' ')[0]} keeps their full fee.</p>
      </div>
    </aside>`;
  go("profile");
}

/* ---------------- pricing toggle ---------------- */
function setBilling(mode){
  $$(".billtoggle__btn").forEach(b=>b.classList.toggle("is-active", b.dataset.bill===mode));
  $$(".pricecard .amount").forEach(a=>{
    a.textContent = "£" + (mode==="annual" ? a.dataset.a : a.dataset.m);
  });
  $$(".pricecard .per").forEach(p=>p.textContent = mode==="annual" ? "/ mo, billed yearly" : "/ month");
}

/* ---------------- crisis / chat / modals ---------------- */
function openModal(id){ const m=$("#"+id); if(m){ m.hidden=false; document.body.style.overflow="hidden"; } }
function closeModals(){ $$(".modal").forEach(m=>m.hidden=true); document.body.style.overflow=""; }
function openChat(){ $("#chat").hidden=false; $("#fab").style.display="none"; $("#chatInput").focus(); }
function closeChat(){ $("#chat").hidden=true; $("#fab").style.display=""; }

function botReply(text){
  const t = text.toLowerCase();
  if(/(kill|suicide|die|hurt|end it|harm)/.test(t))
    return "I'm really glad you reached out. If you're in danger right now, please call your local emergency number or the Samaritans on 116 123 — they're there 24/7. You don't have to carry this alone.";
  if(/(debt|money|broke|owe|afford)/.test(t))
    return "Money worry is one of the heaviest parts of this — and it's something our therapists work with directly. Would it help to look at specialists in financial therapy and debt stress?";
  if(/(relapse|slipped|lost again|gambled)/.test(t))
    return "A slip isn't a failure — it's information. Many of our therapists focus specifically on relapse prevention. Want me to point you to a few?";
  return "Thank you for sharing that. Whenever you're ready, you can browse our gambling specialists anonymously — no details needed. Is there something specific you're hoping to find support with?";
}

function addBubble(text, who){
  const log = $("#chatLog");
  const b = document.createElement("div");
  b.className = "bubble bubble--" + who;
  b.textContent = text;
  log.appendChild(b);
  log.scrollTop = log.scrollHeight;
}

/* ---------------- wire up ---------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  applyFilters();
  setBilling("monthly");

  // routing via data-go
  document.addEventListener("click", e=>{
    const goEl = e.target.closest("[data-go]");
    if(goEl){ e.preventDefault(); go(goEl.dataset.go); return; }

    const card = e.target.closest(".tcard");
    if(card){ openProfile(+card.dataset.id); return; }

    const connect = e.target.closest("[data-connect]");
    if(connect){ $("#connectTitle").textContent = "Request a session with " + connect.dataset.connect.split(' ')[0]; openModal("connectModal"); return; }

    if(e.target.closest("[data-crisis]")){ e.preventDefault(); openModal("crisisModal"); return; }
    if(e.target.closest("[data-close]")){ closeModals(); return; }
    if(e.target.closest("[data-reset]")){ resetFilters(); return; }
    if(e.target.closest("[data-join]")){ openModal("connectModal"); $("#connectTitle").textContent="Join Sanctum as a therapist"; return; }

    const scroll = e.target.closest("[data-scroll]");
    if(scroll){ e.preventDefault(); $("#"+scroll.dataset.scroll)?.scrollIntoView({behavior:"smooth"}); return; }

    const bill = e.target.closest("[data-bill]");
    if(bill){ setBilling(bill.dataset.bill); return; }
  });

  // filters
  ["fSearch","fLocation","fField","fAccred","fExp","fRating","fGender","fLived","fSort"]
    .forEach(id=>{
      const el = $("#"+id);
      el.addEventListener(el.tagName==="SELECT"||el.type==="checkbox" ? "change":"input", applyFilters);
    });
  $("#resetFilters").addEventListener("click", resetFilters);

  // crisis / chat
  $("#fab").addEventListener("click", openChat);
  $("#chat").querySelector("[data-chat-close]").addEventListener("click", closeChat);
  $("#openChatFromCrisis").addEventListener("click", ()=>{ closeModals(); openChat(); });
  $("#chatForm").addEventListener("submit", e=>{
    e.preventDefault();
    const val = $("#chatInput").value.trim();
    if(!val) return;
    addBubble(val,"me");
    $("#chatInput").value="";
    setTimeout(()=>addBubble(botReply(val),"bot"), 600);
  });

  // esc closes
  document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeModals(); } });

  // entrance gate
  const gate = $("#gate");
  if(gate){
    document.body.style.overflow = "hidden";
    const enterSite = ()=>{
      if(gate.classList.contains("is-open")) return;
      gate.classList.add("is-open");
      document.body.style.overflow = "";
      setTimeout(()=>{ gate.hidden = true; }, 1100);
    };
    $("#gateCrest").addEventListener("click", enterSite);
    document.addEventListener("keydown", e=>{
      if(!gate.hidden && !gate.classList.contains("is-open") && (e.key==="Enter" || e.key===" ")){
        e.preventDefault(); enterSite();
      }
    });
  }
});

function resetFilters(){
  ["fSearch","fLocation","fField","fAccred","fGender"].forEach(id=>$("#"+id).value="");
  $("#fExp").value="0"; $("#fRating").value="0"; $("#fSort").value="recommended";
  $("#fLived").checked=false;
  applyFilters();
}
