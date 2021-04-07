function getOutfit() {
  var temperature = parseInt(document.getElementsByTagName('input')[0].value);
  
  var outfit = '';
  if (temperature <= 32) {
    outfit = 'Winter Coat';
  }
  
  if (temperature === 50) {
    outfit = 'Light Jacket';
  }
  
  if (temperature > 60 && temperature < 70) {
    outfit = 'Hoodie';
  }
  
  if (temperature >= 85) {
    outfit = 'T-shirt';
  }
  
  document.getElementsByTagName('p')[0].innerHTML = outfit;
}
