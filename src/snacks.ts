import { animate } from "./animation";
const MY_SNACKS: string[] = [
  "Doritos",
  "Rice",
  "Seaweed",
  "French Fries",
  "Popcorn",
  "Pockys",
  "Strawberry Pockys",
  "Goldfish",
  "Apples"
];

export function getSnacks() {
    animate("Snacks");
  console.log("List of snacks:");
  for (const snack of MY_SNACKS) {
    console.log(snack);
  }
}
