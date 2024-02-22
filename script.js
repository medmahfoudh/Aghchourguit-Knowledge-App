document.addEventListener("DOMContentLoaded", function() {
    const imageInput = document.getElementById("imageInput");
    const resultCanvas = document.getElementById("resultCanvas");
    const resultContext = resultCanvas.getContext("2d");

    imageInput.addEventListener("change", handleImageUpload);

    function handleImageUpload() {
        const inputImage = imageInput.files[0];
        
        if (inputImage) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const image = new Image();
                image.src = e.target.result;

                image.onload = function() {
                    standardizeImage(image);
                };
            };

            reader.readAsDataURL(inputImage);
        }
    }

    function standardizeImage(image) {
        const size = Math.max(image.width, image.height);
        resultCanvas.width = size;
        resultCanvas.height = size;

        resultContext.filter = "blur(70%)";
        resultContext.drawImage(image, 0, 0, size, size);

        // Display the processed image in the result container
        const resultContainer = document.getElementById("resultContainer");
        resultContainer.style.display = "block";
    }
});
