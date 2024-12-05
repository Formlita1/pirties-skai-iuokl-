// Pridėti įvykio klausymą mygtukui
document.getElementById('calculate').addEventListener('click', function() {
  let total = 0; // Bendros kainos pradinė reikšmė

  // Surasti visus dropdown pasirinkimus
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    // Gauti pasirinktą variantą
    const selectedOption = dropdown.options[dropdown.selectedIndex];

    // Ištraukti kainą iš "data-price" atributo
    const price = parseInt(selectedOption.getAttribute('data-price'));

    // Jei kaina teisinga, pridėti ją prie bendros sumos
    if (!isNaN(price)) {
      total += price;
    }
  });

  // Atvaizduoti bendrą sumą
  document.getElementById('total').innerText = total.toFixed(2);
});
