// function toggleParagraph(paragraphId) {
//   const paragraph = document.getElementById(paragraphId);
//   const showParagraph = paragraph.style.display;

//   if (showParagraph === 'block') {
//     paragraph.style.display = 'none';
//   } else {
//     paragraph.style.display = 'block';
//   }
// }

function toggleParagraph(paragraphId) {
  const paragraph = document.getElementById(paragraphId);
  const header = document.querySelector(
    `h3[onclick="toggleParagraph('${paragraphId}')"]`,
  );

  // Toggle paragraph display
  paragraph.style.display =
    paragraph.style.display === 'block' ? 'none' : 'block';

  // Toggle the icon image source
  const icon = header.querySelector('.icon');
  icon.src =
    paragraph.style.display === 'block'
      ? './assets/images/icon-minus.svg'
      : './assets/images/icon-plus.svg';
}

function areAnyParagraphsVisible() {
  const paragraphs = document.querySelectorAll('.main-faq-text p');
  return Array.from(paragraphs).some((para) => para.style.display === 'block');
}
