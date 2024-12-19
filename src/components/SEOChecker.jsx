import { useEffect, useState } from "react";

const SEOChecker = () => {
  const [seoIssues, setSeoIssues] = useState([]);

  useEffect(() => {
    const checkSEO = () => {
      const issues = [];

      // Check meta description
      const description = document.querySelector('meta[name="description"]');
      if (!description || description.content.length < 50) {
        issues.push(
          "Meta description is missing or too short (should be 50-160 characters)"
        );
      }

      // Check title
      const title = document.title;
      if (!title || title.length < 10) {
        issues.push("Title is missing or too short");
      }

      // Check image alt tags
      const images = document.getElementsByTagName("img");
      const imagesWithoutAlt = Array.from(images).filter((img) => !img.alt);
      if (imagesWithoutAlt.length > 0) {
        issues.push(`${imagesWithoutAlt.length} images missing alt tags`);
      }

      // Check heading hierarchy
      const h1Tags = document.getElementsByTagName("h1");
      if (h1Tags.length !== 1) {
        issues.push("Page should have exactly one H1 tag");
      }

      // Check for Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      const ogImage = document.querySelector('meta[property="og:image"]');

      if (!ogTitle || !ogDescription || !ogImage) {
        issues.push("Missing Open Graph tags");
      }

      // Check for Schema markup
      const schema = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (!schema) {
        issues.push("Missing Schema markup");
      }

      setSeoIssues(issues);
    };

    checkSEO();
  }, []);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#333",
        color: "#fff",
        padding: "10px",
        zIndex: 9999,
        display: seoIssues.length ? "block" : "none",
      }}
    >
      <h3>SEO Issues Found:</h3>
      <ul>
        {seoIssues.map((issue, index) => (
          <li key={index} style={{ color: "#ff6b6b" }}>
            {issue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SEOChecker;
