function formatHTML() {
  let htmlData = {
    title: "D",
    h1: "Dd",
    p: "Dddd",
  };
  let html = `  <html>
  <head>
    <title>${htmlData.title}</title>
  </head>
  <body>
    <h1>${htmlData.h1}</h1>
    <p>${htmlData.p}</p>
  </body>
</html>`;
  return html;
}
console.log(formatHTML());
