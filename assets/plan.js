// Chit maths for the plan calculator. Illustrative only: real dividends depend on each month's auction.
export const MONTHS = 20;
export const COMMISSION = 0.05; // foreman's commission, the most the Chit Funds Act allows

export function plan(pool, month, discount) {
  const full = pool / MONTHS;
  const dividend = Math.max(0, discount - COMMISSION) * pool / MONTHS;
  // The last member to take the pool has no one bidding against them, so only the commission comes off.
  const taken = month === MONTHS ? COMMISSION : discount;
  return { full, monthly: full - dividend, receive: pool * (1 - taken) };
}

// A month-by-month example group. Early auctions close at bigger discounts (members who need money
// early compete for it); the discount shrinks steadily to just the commission in the last month.
// Illustrative only: real discounts come from each month's auction.
export function schedule(pool, maxDiscount = 0.3) {
  return Array.from({ length: MONTHS }, (_, i) => {
    const month = i + 1;
    const discount = COMMISSION + (maxDiscount - COMMISSION) * (MONTHS - month) / (MONTHS - 1);
    const dividend = (discount - COMMISSION) * pool / MONTHS;
    return { month, discount, dividend, instalment: pool / MONTHS - dividend, payout: pool * (1 - discount) };
  });
}

export const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
