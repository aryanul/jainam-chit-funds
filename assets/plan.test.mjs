import assert from 'node:assert/strict';
import { plan, inr, schedule } from './plan.js';

const s = schedule(1500000, 0.3);
assert.equal(s.length, 20);
assert.equal(Math.round(s[0].discount * 100), 30);     // month 1: deepest discount
assert.equal(Math.round(s[0].dividend), 18750);        // (30% - 5%) of 15L / 20
assert.equal(Math.round(s[0].instalment), 56250);
assert.equal(Math.round(s[0].payout), 1050000);
assert.equal(Math.round(s[19].discount * 100), 5);     // month 20: commission only
assert.equal(Math.round(s[19].instalment), 75000);     // no dividend left
assert.equal(Math.round(s[19].payout), 1425000);
assert.ok(s.every((m, i) => i === 0 || m.instalment >= s[i - 1].instalment)); // instalments rise as discounts shrink

// The plans table on the pro pages prints these ranges; keep them in step with the schedule.
for (const [pool, lo, hi, p1, p20] of [[500000, 18750, 25000, 350000, 475000], [1000000, 37500, 50000, 700000, 950000],
  [1500000, 56250, 75000, 1050000, 1425000], [2500000, 93750, 125000, 1750000, 2375000], [5000000, 187500, 250000, 3500000, 4750000]]) {
  const g = schedule(pool, 0.3);
  assert.deepEqual([g[0].instalment, g[19].instalment, g[0].payout, g[19].payout].map(Math.round), [lo, hi, p1, p20]);
}

const p = plan(1500000, 6, 0.15);
assert.equal(p.full, 75000);
assert.equal(p.monthly, 67500);   // (15% - 5%) of 15L / 20 = 7,500 dividend
assert.equal(p.receive, 1275000);
assert.equal(plan(1500000, 20, 0.15).receive, 1425000); // last month: commission only
assert.equal(plan(500000, 3, 0.04).monthly, 25000);     // bid below commission: no dividend
assert.equal(inr(1500000), '₹15,00,000');
console.log('plan ok');
