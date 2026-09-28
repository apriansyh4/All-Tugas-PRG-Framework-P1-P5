function konversiSuhu() {
    // 1. Ambil nilai input dari elemen HTML
    const inputSuhu = document.getElementById('inputSuhu').value;
    const tipe = document.getElementById('jenisKonversi').value;
    const displayHasil = document.getElementById('hasil');

    // 2. Validasi apakah input adalah angka
    if (inputSuhu === "") {
        displayHasil.innerHTML = "Masukkan angka terlebih dahulu!";
        displayHasil.style.color = "red";
        return;
    }

    const suhu = parseFloat(inputSuhu);
    let hasil = 0;
    let unit = "";

    // 3. Logika Perhitungan 
    switch (tipe) {
        case "CtoF":
            hasil = (suhu * 9/5) + 32;
            unit = "Fahrenheit";
            break;
        case "CtoR":
            hasil = suhu * 4/5;
            unit = "Reamur";
            break;
        case "FtoC":
            hasil = (suhu - 32) * 5/9;
            unit = "Celsius";
            break;
        case "FtoR":
            hasil = (suhu - 32) * 4/9;
            unit = "Reamur";
            break;
        case "RtoC":
            hasil = suhu * 5/4;
            unit = "Celsius";
            break;
        case "RtoF":
            hasil = (suhu * 9/4) + 32;
            unit = "Fahrenheit";
            break;
    }

    // 4. Tampilkan hasil ke halaman HTML
    displayHasil.style.color = "#212529";
    displayHasil.innerHTML = `Hasil: ${hasil.toFixed(2)} ${unit}`;
}