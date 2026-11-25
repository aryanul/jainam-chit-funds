import { schedule, inr, MONTHS } from '../plan.js';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const WA = document.body.dataset.wa;
const GREETING = document.body.dataset.greeting;
const wa = text => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const lakh = n => `₹${n / 100000} lakh`;
const pad = n => String(n).padStart(2, '0');

/* ---------- Hero: an example ₹15 lakh group, month by month ---------- */
const group = $('[data-group]');
if (group) {
  const POOL = 1500000;
  const months = schedule(POOL, 0.3);
  const chips = $('.members', group);
  chips.innerHTML = Array.from({ length: MONTHS }, (_, i) => `<span>${pad(i + 1)}</span>`).join('');
  const dots = [...chips.children];
  const slider = $('input[type=range]', group);
  const play = $('[data-play]', group);
  const set = (k, v) => ($(`[data-g="${k}"]`, group).textContent = v);
  let month = 6, timer;

  function show(m) {
    month = m;
    const s = months[m - 1];
    dots.forEach((d, i) => d.className = i + 1 < m ? 'got' : i + 1 === m ? 'now' : '');
    set('month', `Month ${pad(m)} of 20`);
    set('member', `Member ${pad(m)} receives`);
    set('payout', inr(s.payout));
    set('discount', `${inr(POOL * s.discount)} (${Math.round(s.discount * 100)}%)`);
    set('dividend', inr(s.dividend));
    $('[data-g="instalment"]', group).innerHTML = s.dividend > 0 ? `${inr(s.instalment)}<s>${inr(POOL / MONTHS)}</s>` : inr(s.instalment);
    slider.value = m;
    slider.setAttribute('aria-valuetext', `Month ${m} of 20`);
  }
  function setPlaying(on) {
    play.setAttribute('aria-pressed', on);
    play.setAttribute('aria-label', on ? 'Pause the example' : 'Play the example');
    clearInterval(timer);
    if (on) timer = setInterval(() => show(month % MONTHS + 1), 2400);
  }
  play.addEventListener('click', () => setPlaying(play.getAttribute('aria-pressed') !== 'true'));
  slider.addEventListener('input', () => { setPlaying(false); show(+slider.value); });
  show(month);
  setPlaying(!still);
}

/* ---------- Plans table: each Enquire names its plan ---------- */
$$('[data-enquire]').forEach(a => {
  a.href = wa(`${GREETING} I'm interested in the ${lakh(+a.dataset.enquire)} chit plan. When does the next group start?`);
});

/* ---------- Calculator: the whole 20 months for your choices ---------- */
const form = $('[data-calc]');
const state = { goal: 'Business', pool: 1000000, month: 6, maxDiscount: 0.3 };
const out = k => $(`[data-out="${k}"]`);

function render() {
  const s = schedule(state.pool, state.maxDiscount);
  const total = s.reduce((t, m) => t + m.instalment, 0);
  const mine = s[state.month - 1];
  out('receive').textContent = inr(mine.payout);
  out('take').textContent = `Month ${state.month}`;
  out('total').textContent = inr(total);
  out('avg').textContent = inr(total / MONTHS);
  out('full').textContent = inr(state.pool / MONTHS);
  // The number a trader decides on: what you get against what you put in.
  const diff = mine.payout - total;
  out('net').innerHTML = diff < 0
    ? `You receive <b>${inr(mine.payout)}</b> and pay <b>${inr(total)}</b> in all. Cost of having the money early: <b>${inr(-diff)}</b>.`
    : `You receive <b>${inr(mine.payout)}</b> and pay <b>${inr(total)}</b> in all. You get back <b>${inr(diff)}</b> more than you paid.`;
  out('month').textContent = `Month ${state.month}`;
  out('discount').textContent = Math.round(state.maxDiscount * 100) + '%';
  // Scale bars across the real range (cheapest to dearest month) so the rise is visible.
  const lo = s[0].instalment, hi = s[MONTHS - 1].instalment;
  out('chart').innerHTML = s.map(m =>
    `<i class="${m.month < state.month ? 'paid' : m.month === state.month ? 'take' : ''}" style="height:${Math.round(28 + 72 * (m.instalment - lo) / (hi - lo || 1))}%" title="Month ${m.month}: ${inr(m.instalment)}"></i>`).join('');
  const name = $('[name=name]', form).value.trim();
  $('[data-send]').href = wa(`${GREETING} ${name ? `I'm ${name}. ` : ''}I'd like a ${lakh(state.pool)} chit for ${state.goal.toLowerCase()}, and I may need the money around month ${state.month}. Which group would suit me?`);
}
form.addEventListener('input', e => {
  const t = e.target;
  if (t.name === 'goal') state.goal = t.value;
  if (t.name === 'pool') state.pool = +t.value;
  if (t.name === 'month') state.month = +t.value;
  if (t.name === 'discount') state.maxDiscount = t.value / 100;
  render();
});
render();

/* Goal photo cards choose the goal in the calculator, then take you there. */
$$('[data-goal]').forEach(a => a.addEventListener('click', () => {
  const r = $(`[name=goal][value="${a.dataset.goal}"]`, form);
  r.checked = true;
  r.dispatchEvent(new Event('input', { bubbles: true }));
}));

/* ---------- Small parts ---------- */
const dock = $('.dock');
new IntersectionObserver(([e]) => dock.classList.toggle('show', !e.isIntersecting)).observe($('.hero .actions'));

$$('.menu a').forEach(a => a.addEventListener('click', () => a.closest('details').removeAttribute('open')));
document.addEventListener('keydown', e => { if (e.key === 'Escape') $$('.menu[open]').forEach(d => d.removeAttribute('open')); });
