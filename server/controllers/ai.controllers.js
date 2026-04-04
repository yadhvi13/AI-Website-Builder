import { GoogleGenAI } from '@google/genai';

export const generateWebsite = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).json({ message: "Prompt is required" });

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-screen flex items-center justify-center p-8">
    <div class="max-w-2xl text-center bg-red-500/10 border border-red-500/50 p-12 rounded-3xl">
        <h1 class="text-3xl font-bold text-red-400 mb-4">Missing API Key!</h1>
        <p class="text-slate-300">The Gemini integration is ready, but you need to add your <strong>GEMINI_API_KEY</strong> to the server's <code>.env</code> file to actually generate Websites.</p>
    </div>
</body>
</html>` 
            });
        }

        const ai = new GoogleGenAI(); // Automatically picks up process.env.GEMINI_API_KEY

        const systemInstruction = `
You are an expert Frontend Developer and UI/UX Designer.
Your task is to generate a complete, working HTML website based strictly on the user's prompt.
You MUST output ONLY valid, raw HTML code. Do NOT output markdown wrappers like \`\`\`html.
Requirements:
1. Provide a single complete HTML file (<!DOCTYPE html>, <html>, <head>, <body>).
2. Use Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>.
3. Include high-quality UI elements, glassmorphism if applicable, hover states, and transitions.
4. Use placeholder images via services like Unsplash (https://source.unsplash.com/random/800x600?...).
5. The output must be immediately renderable in an iframe preview.
Do not add any conversational text.
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                 systemInstruction,
                 temperature: 0.7,
            }
        });

        let generatedCode = response.text;
        
        // Failsafe: Remove markdown artifacts if the model accidentally returns them.
        if (generatedCode.startsWith("\`\`\`")) {
           generatedCode = generatedCode.replace(/^\`\`\`(?:html)?\s*/i, '').replace(/\s*\`\`\`$/i, '').trim();
        }

        res.status(200).json({ code: generatedCode });
    } catch (error) {
        console.error("Generative AI API Error:", error);
        res.status(500).json({ message: "GenAI processing error: " + error.message });
    }
}
