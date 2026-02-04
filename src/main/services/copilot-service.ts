/**
 * Service for interacting with GitHub Copilot SDK
 * 
 * NOTE: The Copilot SDK integration is stubbed for now.
 * When the SDK becomes available, uncomment the import and implement the client.
 */
// import { CopilotClient, SessionEvent } from '@github/copilot-sdk';

export class CopilotService {
  private systemPrompt: string;

  constructor() {
    this.systemPrompt = `You are a friendly and knowledgeable Campervan AI Assistant. 
Your purpose is to help users with questions about campervans, including:
- Vehicle models and specifications (Sprinter, Transit, Promaster, etc.)
- Maintenance and troubleshooting
- DIY modifications and upgrades
- Travel tips and route planning
- Camping and boondocking advice

Guidelines:
- Be helpful, practical, and safety-conscious
- Provide specific, actionable advice when possible
- Acknowledge when you're uncertain about something
- Recommend professional help for serious mechanical issues
- Don't provide specific legal or financial advice

If provided with context from the local knowledge base, use it to inform your answers.
Always prioritize user safety in your recommendations.`;
  }

  /**
   * Send a chat message and get a response
   * 
   * TODO: Implement actual Copilot SDK integration when available
   */
  async chat(message: string, _context?: string): Promise<string> {
    // For now, use placeholder responses
    // When Copilot SDK is available, uncomment and implement:
    /*
    try {
      const client = await this.getClient();
      const session = await client.createSession({ model: 'gpt-4.1' });

      const prompt = context 
        ? `${context}\n\nUser question: ${message}`
        : message;

      const response = await session.sendAndWait({
        prompt,
        systemMessage: this.systemPrompt,
      });

      await client.stop();

      return response?.data?.content ?? 'I apologize, but I was unable to generate a response. Please try again.';
    } catch (error) {
      console.error('Copilot chat error:', error);
      throw error;
    }
    */
    
    return this.getPlaceholderResponse(message);
  }

  /**
   * Stream a chat response
   * 
   * TODO: Implement actual Copilot SDK streaming when available
   */
  async streamChat(
    message: string,
    _context: string,
    onChunk: (chunk: string, done: boolean) => void
  ): Promise<void> {
    // For now, simulate streaming with placeholder responses
    // When Copilot SDK is available, implement actual streaming
    
    const response = this.getPlaceholderResponse(message);
    const words = response.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      await this.delay(50);
      const chunk = i === 0 ? words[i] : ' ' + words[i];
      onChunk(chunk, false);
    }
    
    onChunk('', true);
  }

  /**
   * Placeholder response for development/testing
   */
  private getPlaceholderResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('sprinter')) {
      return `The Mercedes Sprinter is one of the most popular campervan base vehicles! Here's what you should know:

**Why Sprinter?**
- Excellent build quality and reliability
- Available in multiple lengths (144" and 170" wheelbase)
- Good resale value
- Available with 4x4 for off-road adventures

**Considerations:**
- Higher upfront cost compared to other vans
- Mercedes parts and service can be expensive
- The 170" extended version offers more living space but is harder to park

Would you like more specific information about Sprinter specs, common maintenance items, or conversion ideas?`;
    }
    
    if (lowerMessage.includes('solar') || lowerMessage.includes('electrical')) {
      return `Great question about solar and electrical systems! Here's an overview:

**Basic Solar Setup:**
- 200-400W of solar panels for weekend use
- 400-800W for full-time living
- Pair with lithium batteries (LiFePO4) for best performance

**Key Components:**
1. Solar panels (rigid or flexible)
2. Charge controller (MPPT recommended)
3. Battery bank (lithium or AGM)
4. Inverter (pure sine wave for sensitive electronics)

**Pro Tips:**
- Calculate your daily power usage first
- Oversize your solar by 20-30% for cloudy days
- Consider a DC-DC charger for alternator charging

Need help calculating your power needs or choosing specific components?`;
    }
    
    return `Thanks for your question about campervans! I'm the Campervan AI Assistant, ready to help you with:

🚐 **Vehicle Information** - Sprinter, Transit, Promaster specs and comparisons
🔧 **Maintenance** - Service schedules, troubleshooting, DIY repairs
⚡ **Systems** - Electrical, plumbing, heating, and cooling
🗺️ **Travel** - Route planning, camping spots, tips and tricks

*Note: This is a development placeholder. Connect the GitHub Copilot SDK for full AI-powered responses.*

How can I help you today?`;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Cleanup resources
   */
  async dispose(): Promise<void> {
    // Cleanup when Copilot SDK is integrated
  }
}
