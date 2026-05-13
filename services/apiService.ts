import { AnswerType, Question, ReasoningLog, PlayerProfile, AnswerResponse } from "../types";
import { mockQuestions, mockPredictedProfile, INITIAL_POOL_SIZE, INITIAL_CONFIDENCE } from "../data/mockData";

/**
 * Decoupled integration adapter handling simulated asynchronous interactions.
 * Fully structured to support simple replacement with active REST endpoints or Gemini AI streams.
 */
export class ApiService {
  /**
   * Internal helper simulating network transport latency.
   */
  private async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Initializes session metrics and retrieves the opening deduction constraints.
   */
  public async getInitialGame(): Promise<{ firstQuestion: Question; totalQuestions: number; initialPool: number; initialConfidence: number }> {
    await this.delay(200);
    return {
      firstQuestion: mockQuestions[0],
      totalQuestions: mockQuestions.length,
      initialPool: INITIAL_POOL_SIZE,
      initialConfidence: INITIAL_CONFIDENCE,
    };
  }

  /**
   * Processes user selections to dynamically compute updated candidate dataset sizes and model certainty weights.
   */
  public async submitAnswer(
    currentIndex: number,
    answer: AnswerType,
    currentConfidence: number,
    currentPool: number
  ): Promise<AnswerResponse> {
    // Stage 1 delay (simulate calculation evaluation overhead)
    await this.delay(700);

    const isLastQuestion = currentIndex >= mockQuestions.length - 1;
    const nextQuestion = isLastQuestion ? null : mockQuestions[currentIndex + 1];

    // Calculate new metrics statefully
    const boost = Math.floor(Math.random() * 8) + 8;
    const newConfidence = Math.min(98, currentConfidence + boost);

    const factor = answer === "MAYBE" ? 0.8 : (0.4 + Math.random() * 0.2);
    const newPool = Math.max(1, Math.floor(currentPool * factor));
    const poolReduction = `Pool reduced to ${newPool}`;

    const currentQ = mockQuestions[currentIndex];
    let filterText = `Filtered based on: ${currentQ.text.split(" ").slice(0, 4).join(" ")}...`;
    if (answer === "NO") filterText = `Excluded players matching: ${currentQ.text.split(" ").slice(0, 3).join(" ")}...`;
    if (answer === "MAYBE") filterText = `Applied soft weighting to: ${currentQ.text.split(" ").slice(0, 3).join(" ")}...`;

    const newLog: ReasoningLog = {
      filter: filterText,
      reduction: poolReduction,
      type: answer === "YES" ? "check_circle" : answer === "NO" ? "cancel" : "help",
    };

    // Stage 2 delay (simulate completion of payload transmission)
    await this.delay(800);

    return {
      nextQuestion,
      confidence: newConfidence,
      remainingPool: newPool,
      logs: [newLog],
      isComplete: isLastQuestion,
    };
  }

  /**
   * Simulates retrieval of the ultimate matched target payload profile.
   */
  public async getPredictionResult(_sessionId?: string): Promise<PlayerProfile> {
    await this.delay(400); // Simulate database payload retrieval
    return mockPredictedProfile;
  }
}

export const apiService = new ApiService();
