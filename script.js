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
      ctx.drawImage(logo, 10, 10);
  
      // Draw date
      const today = new Date();
      ctx.fillText(today.toDateString(), canvas.width - 150, 20);
  
      // Draw text in the middle with larger font size
      const text = textInput.value;
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
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
  