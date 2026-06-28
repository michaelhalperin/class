// BASE_PRICE is const because the base price is fixed and should not change during the program.
// totalRevenue is let because it accumulates — it increases every time a ticket is sold.

// --- Part 1: Variables ---
const BASE_PRICE = 45;
const AGE_LIMIT_12 = 12;
const AGE_LIMIT_18 = 18;
const MAX_SEATS = 4;

let totalTicketsSold = 0;
let totalRevenue = 0;

// --- Part 2: Customer list ---
const customers = [
  { name: "Dana", age: 17, movieRating: "12+", isStudent: true },
  { name: "Yossi", age: 25, movieRating: "18+", isStudent: false },
  { name: "Michal", age: 10, movieRating: "12+", isStudent: false },
  { name: "Ron", age: 16, movieRating: "18+", isStudent: true },
  { name: "Liat", age: 30, movieRating: "All Ages", isStudent: false },
  { name: "Avi", age: 8, movieRating: "All Ages", isStudent: false },
];

// --- Part 5: Opening the register (while loop) ---
let cashInRegister = 0;
const MINIMUM_CASH = 200;

while (cashInRegister < MINIMUM_CASH) {
  cashInRegister += 50;
  console.log("Added 50 NIS to the register. Total in register: " + cashInRegister);
}

console.log("Register is ready with " + cashInRegister + " NIS");
console.log("--- Starting ticket sales ---");

// --- Part 3 + 4: Selling tickets (for loop) ---
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];

  // Part 4: if the hall is full — stop selling
  if (totalTicketsSold === MAX_SEATS) {
    console.log("The hall is full! Stopping ticket sales.");
    break;
  }

  // Part 3a: age eligibility check
  if (customer.movieRating === "18+" && customer.age < AGE_LIMIT_18) {
    console.log(
      customer.name +
        " (" +
        customer.age +
        ") — does not meet the age requirement for an 18+ movie"
    );
    continue;
  }

  if (customer.movieRating === "12+" && customer.age < AGE_LIMIT_12) {
    console.log(
      customer.name +
        " (" +
        customer.age +
        ") — does not meet the age requirement for a 12+ movie"
    );
    continue;
  }

  // Part 3b: calculate base price by movie rating
  let price = BASE_PRICE;

  switch (customer.movieRating) {
    case "18+":
      price = BASE_PRICE + 10;
      break;
    case "12+":
      price = BASE_PRICE + 5;
      break;
    case "All Ages":
      price = BASE_PRICE;
      break;
    default:
      price = BASE_PRICE;
  }

  // Part 3c: discounts — apply only the higher discount
  const studentDiscount = customer.isStudent === true ? 0.15 : 0;
  const seniorDiscount = customer.age > 65 ? 0.2 : 0;
  const discountRate =
    studentDiscount > seniorDiscount ? studentDiscount : seniorDiscount;

  if (discountRate > 0) {
    price = price * (1 - discountRate);
  }

  // Part 3d: update totals
  totalTicketsSold++;
  totalRevenue += price;

  // Part 3e: print customer summary
  let summary =
    customer.name +
    " (" +
    customer.age +
    ") — ticket for " +
    customer.movieRating;

  if (customer.isStudent === true) {
    summary += " — student";
  }

  summary += " — price: " + price.toFixed(2) + " NIS";

  if (discountRate === 0.15) {
    summary += " (15% discount)";
  } else if (discountRate === 0.2) {
    summary += " (20% discount)";
  }

  console.log(summary);
}

// --- Part 6: Summary ---
console.log("====================");
console.log("Total tickets sold: " + totalTicketsSold);
console.log("Total revenue: " + totalRevenue.toFixed(2) + " NIS");

const average = totalTicketsSold > 0 ? totalRevenue / totalTicketsSold : 0;
console.log("Average price per ticket: " + average.toFixed(2) + " NIS");
