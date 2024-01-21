function toggleParagraph(paragraphId) {
  const paragraph = document.getElementById(paragraphId);
  const showParagraph = paragraph.style.display;

  if (showParagraph === 'block') {
    paragraph.style.display = 'none';
  } else {
    paragraph.style.display = 'block';
  }
}
