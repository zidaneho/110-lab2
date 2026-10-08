const MY_SNACKS: string[] = [
  "Doritos",
  "Rice",
  "Seaweed",
  "French Fries",
  "Popcorn",
];

export function getSnacks() {
  console.log("List of snacks:");
  for (const snack in MY_SNACKS) {
    console.log(snack);
  }
}
