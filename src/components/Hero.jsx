import { motion } from "framer-motion";
import { useState } from "react";
import cv from "../assets/RESUME_ZUBAIR_RAHMAN.pdf";
import { styles } from "../styles";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("zubair.rahman89@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `class FrontendDeveloper {
  constructor() {
    this.name = "Zubair Rahman";
    this.title = "Frontend Developer";
    this.location = "Bangladesh";
  }

  getSkills() {
    return {
      frontend: ["React", "TailwindCSS", "JavaScript"],
      tools: ["Git", "VS Code", "Figma"],
      currentlyLearning: "Three.js"
    };
  }
}`;

  // Syntax highlighting components
  const Keyword = ({ children }) => (
    <span className="text-[#C678DD]">{children}</span>
  );
  const String = ({ children }) => (
    <span className="text-[#98C379]">{children}</span>
  );
  const Property = ({ children }) => (
    <span className="text-[#E06C75]">{children}</span>
  );
  const Function = ({ children }) => (
    <span className="text-[#61AFEF]">{children}</span>
  );
  const Variable = ({ children }) => (
    <span className="text-[#D19A66]">{children}</span>
  );

  const renderCodeLine = (line, lineNumber) => {
    const parts = [];
    let currentPart = "";

    // Helper to add colored parts
    const addPart = (text, type) => {
      if (type === "keyword")
        parts.push(<Keyword key={parts.length}>{text}</Keyword>);
      else if (type === "string")
        parts.push(<String key={parts.length}>{text}</String>);
      else if (type === "property")
        parts.push(<Property key={parts.length}>{text}</Property>);
      else if (type === "function")
        parts.push(<Function key={parts.length}>{text}</Function>);
      else if (type === "variable")
        parts.push(<Variable key={parts.length}>{text}</Variable>);
      else parts.push(text);
    };

    // Process the line character by character
    const words = line.split(/(\s+|\{|\}|\[|\]|\(|\)|"|,|:)/);
    words.forEach((word) => {
      if (["class", "constructor", "return", "this"].includes(word)) {
        addPart(word, "keyword");
      } else if (word.startsWith('"') && word.endsWith('"')) {
        addPart(word, "string");
      } else if (["frontend", "tools", "currentlyLearning"].includes(word)) {
        addPart(word, "property");
      } else if (["FrontendDeveloper", "getSkills"].includes(word)) {
        addPart(word, "function");
      } else {
        parts.push(word);
      }
    });

    return (
      <div key={lineNumber} className="flex">
        <span className="w-8 text-right pr-4 text-[#4B5263] select-none">
          {lineNumber}
        </span>
        <span className="text-[#ABB2BF]">{parts}</span>
      </div>
    );
  };

  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden`}>
      {/* Main two-column layout */}
      <div className="pt-[60px] md:pt-[120px] max-w-[1440px] mx-auto px-4 md:px-6 pb-24 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full pt-10 md:pt-20">
          {/* Left Column */}
          <div className="z-10 space-y-4 md:space-y-8">
            <div>
              <h1
                className={`${styles.heroHeadText} text-white text-[32px] md:text-[40px] lg:text-[50px]`}
              >
                Hi, I'm <span className="text-[#915EFF]">Zubair Rahman</span>
              </h1>
              <p className="text-white text-base md:text-lg mt-3 md:mt-6 leading-relaxed max-w-[600px]">
                Professional frontend developer specializing in building
                exceptional digital experiences. Passionate about creating
                responsive and user-friendly web applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <motion.a
                href={cv}
                download
                className="bg-[#915EFF] hover:bg-[#915EFF]/90 text-white px-4 md:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download CV</span>
                <span>📄</span>
              </motion.a>

              <motion.button
                onClick={copyEmail}
                className="border border-[#915EFF] text-white px-4 md:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#915EFF]/10 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {copied ? (
                  <span className="flex items-center gap-2">Copied! ✓</span>
                ) : (
                  <span className="flex items-center gap-2">Copy Email 📧</span>
                )}
              </motion.button>
            </div>
          </div>

          {/* Right Column - Code Editor */}
          <motion.div
            className="relative rounded-lg bg-[#282C34]/70 backdrop-blur-sm border border-[#915EFF]/30 shadow-xl h-[300px] md:h-[400px] overflow-hidden mt-4 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* VS Code-like title bar */}
            <div className="bg-[#21252B]/80 backdrop-blur-sm px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[#6B717D] text-xs">FrontendDeveloper.js</div>
            </div>

            {/* Code content with custom scrollbar */}
            <div
              className="p-4 font-mono text-sm leading-6 overflow-auto h-[calc(100%-2.5rem)] 
              scrollbar-thin scrollbar-thumb-[#915EFF]/20 scrollbar-track-transparent hover:scrollbar-thumb-[#915EFF]/40
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-track]:transparent
              relative z-10"
            >
              {codeSnippet
                .split("\n")
                .map((line, index) => renderCodeLine(line, index + 1))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll button with adjusted positioning */}
      <div className="absolute bottom-4 md:bottom-8 w-full flex justify-center items-center pointer-events-none md:pointer-events-auto">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[30px] h-[50px] md:w-[35px] md:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
