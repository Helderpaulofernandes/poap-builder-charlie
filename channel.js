// Which version this is, and what the start screen says about the other one.
// The only file that differs between the branches: main = "stable", team-beta = "beta", charlie = "charlie" (this one).
window.POAP_CHANNEL = {
  channel: "charlie",
  stableUrl: "https://helderpaulofernandes.github.io/poap-builder/",
  betaUrl: "https://helderpaulofernandes.github.io/poap-builder-charlie/",
  title: "Summary style",
  notes: [
    "A summary that tells the story of the job, not a copy of the P6 Gantt: each area is one bold umbrella bar with its stages chained underneath.",
    "Possessions first: a SCAS lane at the top, and possession works shown as coloured tiles on each row with a caption.",
    "Key dates as full-height gate lines, a phase band (e.g. Station open / closed / open), and zones with large labels for T&C, assurance, contingency and completion.",
    "The P6 importer becomes a summary designer with a live preview of the sheet, and remembers your choices for the next XER.",
  ],
};
