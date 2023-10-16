// Mengambil angka dari html (input)
const takeNumber = document.getElementById('inputNumber');
// Mengambil fungsi 
const validateButton = document.getElementById('checkNumbers');

// Membuat fungsi untuk validasi angka
function validatingNumber() {
    // Memastikan inputan merupakan angka
    const input = parseInt(takeNumber.value);
    // Mengambil komponen dari html untuk menampung dan menampilkan hasil di index.html
    const resultElement = document.getElementById('resultNumber');

    // Jika inputan merupakan is Not a Number maka mereturn hasil dibawah
    if (isNaN(input)) {
        resultElement.innerHTML = "Silahkan Masukan Angka";
    } else {
        // JIka angka dapat dibagi dengan 2 maka hasil tersebut adalah genap
        if (input % 2 === 0) {
            resultElement.innerHTML = "Ini adalah angka genap";
        } else {
            // Jika inputan tidak dari 2 maka hasil tersebut adalah ganjil
            resultElement.innerHTML = "Ini adalah angka ganjil";
        }
    }
}

// Jika variabel dari validateButton di click maka sama dengan fungsi validatingNumber
validateButton.onclick = validatingNumber;