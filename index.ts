import inquirer from "inquirer";

// Function to count words in a paragraph
function countWords(paragraph: string): number {
  const words = paragraph.trim().split(/\s+/);
  return words.length;
}

// Function to count characters in a paragraph (excluding spaces)
function countCharacters(paragraph: string): number {
  const characters = paragraph.replace(/\s/g, "");
  return characters.length;
}

async function main() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "paragraph",
      message: "Enter a paragraph:",
    },
  ]);

  const paragraph = answer.paragraph;
  const wordCount = countWords(paragraph);
  const charCount = countCharacters(paragraph);

  console.log(`Word Count: ${wordCount}`);
  console.log(`Character Count (excluding spaces): ${charCount}`);
}

main();
