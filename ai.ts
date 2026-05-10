import { GoogleGenAI } from "@google/genai";
import i18n from '../i18n';

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const getLanguageInstruction = () => `Respond in ${i18n.language || 'English'}. `;

export const getMathModel = () => ai.models.generateContent;

export async function solveMathProblem(problem: string) {
  const result = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `${getLanguageInstruction()}Solve this math problem step-by-step with clear explanations. Use LaTeX for formulas.
    Problem: ${problem}`,
    config: {
      temperature: 0.1,
    }
  });
  return result.text;
}

export async function generatePracticeQuestions(topic: string, difficulty: string) {
  const result = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `${getLanguageInstruction()}Generate 3 math practice questions about "${topic}" with difficulty "${difficulty}". 
    IMPORTANT: Provide the question, options, answer, and explanation in the specified language.
    Format the response as JSON:
    {
      "questions": [
        { "id": 1, "question": "...", "options": ["...", "..."], "answer": "...", "explanation": "..." }
      ]
    }`,
    config: {
      responseMimeType: "application/json",
    }
  });
  return JSON.parse(result.text);
}

export async function generateAcademyContent(topic: string) {
  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `${getLanguageInstruction()}Act as a magic mathematical librarian. Explain "${topic}" in a way that is magical and easy for kids to understand.
    Format the response as JSON:
    {
      "title": "A magical title for the topic",
      "explanation": "A simple, magical explanation of the concept",
      "magicFact": "A mind-blowing fact about this math topic",
      "visualAnalogy": "A description of how to visualize this concept in your mind",
      "relatedTopics": ["Topic 1", "Topic 2", "Topic 3"]
    }`,
    config: {
      responseMimeType: "application/json",
    }
  });
  return JSON.parse(result.text);
}

export async function generateDailyBites() {
  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `${getLanguageInstruction()}Generate a daily math "bite" for kids. This includes one amazing math fact and one small fun puzzle/challenge.
    The puzzle should be solvable with a short string or number.
    Format the response as JSON:
    {
      "fact": "An amazing, bite-sized math fact",
      "challenge": "A fun, short math riddle or word problem",
      "answer": "The correct answer to the challenge (lowercase string or number)"
    }`,
    config: {
      responseMimeType: "application/json",
    }
  });
  return JSON.parse(result.text);
}

export function cleanAIGeneratedCode(code: string) {
  // Remove markdown code blocks if present
  const regex = /```(?:html|javascript|css|svg)?([\s\S]*?)```/i;
  const match = code.match(regex);
  if (match && match[1]) {
    return match[1].trim();
  }
  return code.trim();
}

export async function generateMathVisual(description: string) {
  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `${getLanguageInstruction()}You are a mathematical artist. Create a high-quality visual representation or animation using ONLY mathematical formulas/equations for: "${description}".
    Return a SINGLE self-contained HTML file (including CSS for animations and optionally JS) that renders the visual in a modern, fullscreen way.
    The background should be transparent or white to fit the app.
    Use a minimalist, high-contrast aesthetic.
    Return ONLY the raw HTML/SVG code.`,
  });
  return cleanAIGeneratedCode(result.text);
}
