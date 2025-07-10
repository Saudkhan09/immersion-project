 let selectedCar = '';
let selectedPrice = 0;

// This runs AFTER the page content is fully loaded
window.onload = function () {
  // Live update total cost when days input changes
  document.getElementById('days').addEventListener('input', updateCost);

  // Add click listeners to all car elements
  const carElements = document.querySelectorAll('.car');
  carElements.forEach(car => {
    car.addEventListener('click', () => {
      const name = car.querySelector('p strong').innerText;
      const priceText = car.innerText.split("₹")[1];
      const price = parseInt(priceText.split("/")[0]);

      selectedCar = name;
      selectedPrice = price;
      document.getElementById('car-name').value = name;
      updateCost();
    });
  });
};

// Update cost when number of days is entered
function updateCost() {
  const days = parseInt(document.getElementById('days').value);
  
  if (selectedPrice && days > 0) {
    const total = selectedPrice * days;
    document.getElementById('total-cost').innerText = `Total Cost: ₹${total}`;
  } else {
    document.getElementById('total-cost').innerText = '';
  }
}

// Book car (on form submit)
function bookCar() {
  const days = parseInt(document.getElementById('days').value);

  if (!selectedCar) {
    alert("⚠️ Please select a car first.");
    return false;
  }

  if (isNaN(days) || days <= 0) {
    alert("⚠️ Enter a valid number of days.");
    return false;
  }

  const total = selectedPrice * days;
  alert(`✅ Booking Confirmed!\n\nCar: ${selectedCar}\nDays: ${days}\nTotal Cost: ₹${total}`);

  // Reset everything
  selectedCar = '';
  selectedPrice = 0;
  document.getElementById('car-name').value = '';
  document.getElementById('days').value = '';
  document.getElementById('total-cost').innerText = '';

  return false;
}
