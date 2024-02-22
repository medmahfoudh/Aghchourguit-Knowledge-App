document.addEventListener("DOMContentLoaded", function() {
    const backgroundImage = document.getElementById('background-image');
    const logo = document.getElementById('logo');
    const date = document.getElementById('date');
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
  
    generateBtn.addEventListener('click', function() {
      // Generate image with text
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      // Set canvas size to match background image
      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
  
      // Draw background image
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  
      // Apply blur effect to the background
      ctx.filter = 'blur(5px)';
      ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
      ctx.filter = 'none';
  
      // Draw logo
      ctx.drawImage(logo, canvas.width - 230, 1);
  
      // Draw date
      const today = new Date();
      ctx.fillText(today.toDateString(), 10, 10);
  
      // Get input text
      const text = textInput.value;
  
      // Set initial font size and max width
      let fontSize = 60;
      const maxWidth = canvas.width - 40; // Padding
  
      // Split text into multiple lines
    //   let words = text.split(' ');
    //   let lines = [];
    //   let currentLine = '';
  
    //   for (let word of words) {
    //     let width = ctx.measureText(currentLine + ' ' + word).width;
    //     if (width < maxWidth) {
    //       currentLine += (currentLine === '' ? '' : ' ') + word;
    //     } else {
    //       lines.push(currentLine);
    //       currentLine = word;
    //     }
    //   }
    //   lines.push(currentLine);
  
      // Calculate font size for multiline text
    //   while (fontSize > 10) {
    //     ctx.font = `${fontSize}px Arial`;
    //     let totalHeight = lines.length * (fontSize * 1.2); // Adjust line height as needed
    //     if (totalHeight < canvas.height - 40) { // Padding
    //       break;
    //     }
    //     fontSize--;
    //   }
  
    //   // Draw multiline text
    //   ctx.textAlign = 'center';
    //   ctx.fillStyle = '#ffffff';
    //   let y = (canvas.height - lines.length * (fontSize * 1.2)) / 2 + fontSize; // Vertical alignment
    //   lines.forEach(function(line) {
    //     ctx.fillText(line, canvas.width / 2, y);
    //     y += fontSize * 1.2; // Adjust line height as needed
    //   });
  
      // Convert canvas to image and download
      canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated-image.png';
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/png', 0.7); // Adjust quality as needed
    });
  });
  