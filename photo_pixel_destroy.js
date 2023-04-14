function loadImage() {
      var img = document.getElementById('image'); 
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d'); 
      canvas.width = img.width; 
      canvas.height = img.height; 
      ctx.drawImage(img, 0, 0, img.width, img.height); 
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); 
      imageData = destroyImagePixels(imageData); 
      ctx.putImageData(imageData, 0, 0); 
    }


function destroyImagePixels(imageData) {
  var pixels = imageData.data;
  var numPixels = pixels.length;

  
  for (var i = 0; i < numPixels; i += 4) {
    var randomNumber = Math.random();
    if (randomNumber < 0.7) {

      pixels[i] = Math.floor(Math.random() * 256); 
      pixels[i + 1] = Math.floor(Math.random() * 256); 
      pixels[i + 2] = Math.floor(Math.random() * 256); 
    }
    else if (randomNumber < 0.2) {

      var color = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3; 
      pixels[i] = color; 
      pixels[i + 1] = color; 
      pixels[i + 2] = color; 
    }
    
    else {
 
    }

    pixels[i + 3] = 255;
  }

  return imageData;
}



    document.getElementById('inputFile').addEventListener('change', function (event) {
      var input = event.target;
      var img = document.getElementById('image');
      img.src = URL.createObjectURL(input.files[0]);
    });


    document.getElementById('image').addEventListener('load', function () {
      loadImage();
    });


    document.getElementById('destroyButton').addEventListener('click', function () {
      var img = document.getElementById('image');
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      imageData = destroyImagePixels(imageData);
      ctx.putImageData(imageData, 0, 0);

      var newWindow = window.open('', '_blank');
      newWindow.document.write('<img src="' + canvas.toDataURL() + '" alt="Destroyed Image"/>');
    });


function destroyImagePixels(imageData) {
  var pixels = imageData.data;
  var numPixels = pixels.length;

 
  for (var i = 0; i < numPixels; i += 4) {
    var randomNumber = Math.random();
    if (randomNumber < 0.7) {

      pixels[i] = Math.floor(Math.random() * 256); 
      pixels[i + 1] = Math.floor(Math.random() * 256); 
      pixels[i + 2] = Math.floor(Math.random() * 256); 
    }
    else if (randomNumber < 0.2) {

      var color = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3; 
      pixels[i] = color; 
      pixels[i + 1] = color;
      pixels[i + 2] = color; 
    }
    
    else {

    }

    pixels[i + 3] = 255;
  }

  return imageData;
}