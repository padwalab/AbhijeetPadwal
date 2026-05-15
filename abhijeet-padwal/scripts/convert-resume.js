import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Enhanced LaTeX to HTML converter for resumes
function convertLatexToHtml(latexContent) {
  let html = latexContent;

  // Remove preamble and document tags
  html = html.replace(/\\documentclass\[.*?\]\{.*?\}[\s\S]*?\\begin\{document\}/i, '');
  html = html.replace(/\\end\{document\}/i, '');

  // Remove comments
  html = html.replace(/%.*$/gm, '');

  // Convert sections
  html = html.replace(/\\section\{([^}]+)\}/g, '<h2>$1</h2>');

  // Handle resumeItem command
  html = html.replace(/\\resumeItem\{([^}]+)\}/g, '<li>$1</li>');

  // Remove tabular* environments and extract content more intelligently
  html = html.replace(/\\begin\{tabular\*\}\{[^}]+\}\[t\]\{[^}]+\}([\s\S]*?)\\end\{tabular\*\}/g, (match, content) => {
    // Extract the parts separated by & and \\
    const rows = content.split('\\\\');
    return rows.map(row => {
      const cells = row.split('&');
      return '<div class="resume-row">' + 
             '<div class="left">' + cells[0].trim() + '</div>' +
             '<div class="right">' + (cells[1] ? cells[1].trim() : '') + '</div>' +
             '</div>';
    }).join('');
  });

  // Handle minipages
  html = html.replace(/\\begin\{minipage\}\[t\]\{[^}]+\}([\s\S]*?)\\end\{minipage\}/g, '<div class="minipage">$1</div>');

  // Text formatting
  html = html.replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>');
  html = html.replace(/\\textit\{([^}]+)\}/g, '<em>$1</em>');
  html = html.replace(/\\small\{?([^}]*)\}?/g, '<small>$1</small>');

  // Lists
  html = html.replace(/\\begin\{itemize\}\[.*?\]/g, '<ul>');
  html = html.replace(/\\begin\{itemize\}/g, '<ul>');
  html = html.replace(/\\end\{itemize\}/g, '</ul>');
  html = html.replace(/\\item\s+/g, '<li>');

  // Fix list items
  html = html.split('\n').map(line => {
    if (line.includes('<li>') && !line.includes('</li>')) {
      const match = line.match(/^(\s*)<li>(.*)$/);
      if (match) return match[1] + '<li>' + match[2] + '</li>';
    }
    return line;
  }).join('\n');

  // Links
  html = html.replace(/\\href\{([^}]+)\}\{([^}]+)\}/g, '<a href="$1">$2</a>');

  // Spacing and alignment commands
  html = html.replace(/\\vspace\{[^}]+\}/g, '');
  html = html.replace(/\\noindent\s*/g, '');
  html = html.replace(/\\flushleft\s*/g, '');
  html = html.replace(/\\flushright\s*/g, '');
  html = html.replace(/\\centering\s*/g, '');

  // Line breaks
  html = html.replace(/\\\\\s*/g, '<br />');

  // Math symbols
  html = html.replace(/\$\\sim\$/g, '~');
  html = html.replace(/\$\\cdot\$/g, ' · ');
  html = html.replace(/\$([^$]+)\$/g, '$1'); // Remove dollar signs

  // Remove remaining LaTeX commands
  html = html.replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, '');
  html = html.replace(/[\{}]/g, '');

  // Clean up multiple spaces and newlines
  html = html.replace(/\s\s+/g, ' ');
  html = html.replace(/\n\s*\n/g, '\n');
  html = html.trim();

  return html;
}

// Read LaTeX file and convert
const latexPath = path.join(__dirname, '..', 'public', 'resume.tex');
const outputPath = path.join(__dirname, '..', 'src', 'resume-content.html');

try {
  const latexContent = fs.readFileSync(latexPath, 'utf-8');
  const htmlContent = convertLatexToHtml(latexContent);
  fs.writeFileSync(outputPath, htmlContent, 'utf-8');
  console.log('✅ Resume converted successfully!');
  console.log(`📄 Output: ${outputPath}`);
} catch (error) {
  console.error('❌ Error converting resume:', error.message);
  process.exit(1);
}
