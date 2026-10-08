import { animate } from "./animation";

const songs: string[] = ["Payphone", "See You Again", "Takedown"];

export function printSongs(): void {
  animate("Music");
  console.log(songs.join(", "));
}

printSongs();
