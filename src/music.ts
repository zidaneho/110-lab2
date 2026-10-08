const songs: string[] = ["Payphone", "See You Again"];

export function printSongs(): void {
  for (const song of songs) {
    console.log(song);
  }
}

printSongs();
