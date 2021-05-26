const expect = require("chai").expect;

const titleCase = title => {
  const words = title.split(" ");
  const titleCasedWords = words.map(
    word => word[0].toUpperCase() + word.substring(1)
  );

  return titleCasedWords.join(" ");
};

expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");
expect(titleCase("the great mouse detective")).to.equal(
  "The Great Mouse Detective"
);
