import { Question, PlayerProfile } from "../types";

export const mockQuestions: Question[] = [
  {
    id: 1,
    text: "Is the player an Indian national?",
    subtitle: "Considered a domestic player rather than occupying an overseas slot.",
  },
  {
    id: 2,
    text: "Is the player primarily a batsman?",
    subtitle: "Their main role in the starting XI is to score runs.",
  },
  {
    id: 3,
    text: "Has the player ever captained an IPL franchise?",
    subtitle: "Even if only for a single match or partial season.",
  },
  {
    id: 4,
    text: "Is the player currently active in professional cricket?",
    subtitle: "Has not officially announced retirement from all formats.",
  },
  {
    id: 5,
    text: "Has the player ever represented the Chennai Super Kings (CSK)?",
    subtitle: "Played for the franchise in any IPL season.",
  },
  {
    id: 6,
    text: "Is the player a designated wicketkeeper?",
    subtitle: "Frequently stands behind the stumps with gloves.",
  },
  {
    id: 7,
    text: "Does the player primarily bowl spin?",
    subtitle: "Includes off-spin, leg-spin, or unorthodox spin variations.",
  },
  {
    id: 8,
    text: "Has the player ever won an IPL Championship?",
    subtitle: "Was part of a squad that lifted the trophy in the final.",
  },
];

export const mockPredictedProfile: PlayerProfile = {
  name: "Virat Kohli",
  confidence: 98.4,
  country: "India",
  role: "RHB Top Order",
  team: "Royal Challengers Bengaluru",
  matchAccuracy: 96.4,
  careerRuns: "4,008",
  playingStyle: "Aggressive Anchor",
  keyStrength: "Cover Drive",
  eraGeneration: "Modern (2010s-20s)",
  signatureMetric: "Chasing Average > 65",
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEzkdFfJtrpYK-LFVIgKydziIO-rkvDk-yGcsM8eJdtAJByiQLE62iPjXYCKpkPbkLG2U_azQVGH3qE7rwPep5ak6oJbig-PcBxeHHMiuj--3J-ZmEjzkXYIdc3mIbqQ01vR9AKv3Vv6m3R8S6E9g6JTUkRnO4VPpBQ-k2-gndmVRd0HJj-hEVy2knWozWAf5mzFGjOHHONlXaLJst5mC8UXwPYWzpBAG1AOz27U7ZgpYVHAs1_CVoYBO3V-jQS3FbVAztxAT9wq0",
  sessionId: "#0XF9A2B4",
};

export const INITIAL_POOL_SIZE = 450;
export const INITIAL_CONFIDENCE = 12;
