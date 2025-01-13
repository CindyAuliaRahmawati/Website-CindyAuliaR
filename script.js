const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const recommendationText = document.getElementById("recommendation");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
  recommendationText.textContent = ""; // Clear recommendation on reset
}

function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

  const heightInMeters = height / 100; // cm -> m
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;
  recommendationText.innerHTML = getDietRecommendation(desc); // Set diet recommendation with HTML
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "healthy";
  } else if (bmi < 30) {
    return "overweight";
  } else {
    return "obesitas";
  }
}

function getDietRecommendation(desc) {
  switch (desc) {
    case "underweight":
      return `
      <strong id="ohNoText" style="font-size: 24px; color: orange;">Oh, no! :(</strong>
      <style>
      /* Animasi kedap-kedip */
      @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
      }
      #ohNoText {
      animation: blink 1s infinite;
      }
      </style>
        <br>Yuk ketahui faktor penyebab dan rekomendasi makan yang tepat untuk kamu dibawah ini!</br>
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: red; margin-right: 5px; vertical-align: middle;"></span>
        <strong style="color: red;">Faktor penyebab underweight:</strong>
          <ul style="list-style-type: none; padding: 0;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Genetik: Seseorang lebih beresiko mengalami underweight jika terdapat keluarga yang memiliki Riwayat kondisi serupa.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Metabolism tinggi: Proses metabolsime yang tinggi dan cepat bisa membuat berat badan tidak bertambah banyak meskipun sudah mengkonsumsi makanan berkalori tinggi.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Sering melakukan aktivitas fisik: Melakukan aktivitas fisik berintensitas tinggi membuat tubuh membakar sebagian besar kalori sehingga bisa menyebabkan berat badan turun. Kondisi ini kerap dialami oleh seseorang yang berprofesi sebagai atlet.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Menderita penyakit tertentu: Beberapa jenis penyakit dapat membuat penderitanya mual, muntah, dan diare kronis sehingga cenderung sulit untuk menaikkan berat badan. Adapun beberapa jenis penyakit yang dapat menyebabkan underweight adalah kanker, diabetes, penyakit tiroid, penyakit crohn, dan lain sebagainya.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Gangguan Kesehatan mental: Beberapa jenis gangguan Kesehatan mental, seperti depresi, anxiety disorder, obsessive compulsive disorder, anoreksia, dan bulimia dapat mempengaruhi kemampuan dan nafsu makan seseorang segingga rentan mengalami underweight.</li>
        </ul><br>
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>
        <strong style="color: green;">Rekomendasi pola makan untuk underweight:</strong>
        <ul style="list-style-type: none; padding: 0;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Menerapkan diet TETP (Tinggi Energi Tinggi Protein). </li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Sumber bahan makanan diet TETP: </li>
              <ul style="list-style-type: none; padding: 0;">
                <li><span style="display: inline-block; width: 5px; height: 5px; border-radius: 5%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>Karbohidrat: nasi, jagung, ubi, singkong, kentang, mie, gula, dsb.</li>
                <img src="img/50.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
                <li><span style="display: inline-block; width: 5px; height: 5px; border-radius: 5%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>Protein hewani: telur, susu, daging ayam, daging sapi, daging kambing, hati sapi, dsb.</li>
                <img src="img/51.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
                <li><span style="display: inline-block; width: 5px; height: 5px; border-radius: 5%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>Protein nabati: kacang hijau, kacang tanah, kacang kedelai, tahu, tempe, dsb.</li>
                <img src="img/52.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
                <li><span style="display: inline-block; width: 5px; height: 5px; border-radius: 5%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>Lemak hewani: daging sapi/kambing, jeroan, kulit ayam, hati, mentega.</li>
                <img src="img/53.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
                <li><span style="display: inline-block; width: 5px; height: 5px; border-radius: 5%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>Lemak nabati: santan kental, minyak kelapa, cokelat, margarin.</li>
                <img src="img/54.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            </ul>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Konsumsi lauk pauk yang tinggi protein. </li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Biasakan sarapan sebelum beraktivitas. </li>
            <img src="img/55.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Konsumsi makanan fortifikasi seperti susu, roti, yoghurt, jus buah, sereal, atau telur. </li>
            <img src="img/56.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Minum air putih yang cukup. </li>
            <img src="img/57.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Konsumsi makanan setiap 3 jam sekali, dan masukkan protein pada setiap porsi makan. </li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Olahraga secara rutin untuk membangun massa otot. </li>
            <img src="img/58.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
        </ul><br><br>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">"Terima kasih sudah melakukan monitoring status gizi!</strong>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">Yuk mulai perbaiki pola makan dan pola hidup mulai dari sekarang agar status gizi kamu tetap optimal. Jangan lupa lakukan monitoring status gizi secara berkala ya! Tetap semangat!"</strong>
          <style>
          /* Animasi kedap-kedip */
          @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
          }
          </style>
        `;      
      case "healthy":
        return `
          <strong id="goodJobText" style="font-size: 24px; color: green;">Good job!</strong>
          <style>
          /* Animasi kedap-kedip */
          @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
          }
          #goodJobText {
          animation: blink 1s infinite;
          }
          </style>
          <br>Terus pertahankan status gizi kamu dengan menerapkan pola makan gizi seimbang dibawah ini ya!</br>
          <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>
          <strong style="color: green;">Pola makan gizi seimbang:</strong>
          <ul style="list-style-type: none; padding: 0;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Dalam Isi Piringku setiap kali makan, 50 persen piring diisi dengan sayur dan buah, sedangkan 50 persen lainnya diisi dengan makanan pokok dan lauk pauk.</li>
              <img src="img/26.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Sumber karbohidrat dan tenaga utama, yang didapat dari beragam bahan makanan pokok. Seperti beras, jagung, sagu dan umbi-umbian (ubi, talas, singkong), kentang, gandum dan produk olahannya, seperti mie, roti dan pasta.</li>
              <img src="img/59.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Lauk hewani kandungan kolesterol dan lemaknya lebih tinggi, namun memiliki kandungan asam amino yang lebih lengkap dan mudah diserap tubuh. Sedangkan lauk nabati kandungan lemak tak jenuh dan isoflavonnya lebih tinggi, namun berisiko kurang higienis dalam proses pengolahannya dari kacang-kacangan.</li>
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Contoh lauk hewani adalah daging merah (sapi, kambing, dll), unggas (ayam, bebek), ikan dan hasil laut, telur, susu dan produk olahannya. Sedangkan lauk nabati antara lain tahu, tempe, kacang-kacangan (kacang tolo, kacang tanah, kacang merah, kacang hijau).</li>
              <img src="img/60.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Buah – buahan merupakan sumber serat, vitamin dan mineral yang memiliki berbagai manfaat diantaranya yaitu sumber antioksidan alami terbesar yang dapat meningkatkan sistem kekebalan tubuh dan mencegah berbagai penyakit kronis, seperti stroke, jantung, hipertensi, kanker, dan kerusakan hati.</li>
              <img src="img/61.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Sayur – sayuran merupakan sumber berbagai nutrisi penting, seperti asam folat, potassium, karoten, zat besi, vitamin A, vitamin C dan vitamin E, dengan kandungan air yang tinggi. Sayuran memiliki banyak manfaat diantaranya yaitu membersihkan racun dalam tubuh (detoksifikasi) dan menjaga berat badan seimbang.</li>
              <img src="img/62.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Beraktivitas fisik, aktivitas fisik berfungsi untuk mengeluarkan energi dari tubuh, lewat gerakan tubuh dan kerja otot rangka. Lakukan minimal 30 menit setiap hari, baik aktivitas ringan, seperti berjalan santai, membaca, menulis, atau latihan peregangan, dan aktivitas sedang, seperti berjalan cepat, berkebun, membersihkan rumah dan mencuci mobil.</li>
              <img src="img/63.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Minum air 8 gelas sehari.</li>
              <img src="img/64.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
              <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Menjaga berat badan ideal, pantau indeks massa tubuh setiap bulan karena jika kelebihan berat badan atau tubuh yang terlalu kurus bisa menjadi indikator penurunan kesehatan, yang membuat lebih rentan terhadap berbagai penyakit.</li>
         </ul><br><br>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">"Terima kasih sudah melakukan monitoring status gizi!</strong>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">Pertahankan status gizi kamu dengan tetap mengkonsumsi makanan dengan gizi seimbang, sesuai dengan pedoman isi piringku! Tetap semangat!"</strong>
          <style>
          /* Animasi kedap-kedip */
          @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
          }
          </style>
        `;      
    case "overweight":
      return ` 
      <strong id="ohNoText" style="font-size: 24px; color: orange;">Oh, no! :(</strong>
      <style>
      /* Animasi kedap-kedip */
      @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
      }
      #ohNoText {
      animation: blink 1s infinite;
      }
      </style>
        <br>Yuk ketahui faktor penyebab dan rekomendasi makan yang tepat untuk kamu dibawah ini!</br>
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: red; margin-right: 5px; vertical-align: middle;"></span>
        <strong style="color: red;">Faktor penyebab overweight:</strong>
        <ul style="list-style-type: none; padding: 0;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Konsumsi makanan tinggi gula dan lemak.</li>
            <img src="img/40.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Konsumsi makanan cepat saji dan olahan.</li>
            <img src="img/41.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Kurangnya ruang bermain atau olahraga.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Sedentary lifestyle, seperti jarang berolahraga.</li>
            <img src="img/42.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Efek samping obat-obatan tertentu, seperti antidepresan, steroid, dan obat diabetes.</li>
            <img src="img/43.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Kebiasaan begadang.</li>
            <img src="img/44.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Stres, depresi, atau trauma tertentu.</li>
            <img src="img/45.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
        </ul><br>
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>
        <strong style="color: green;">Rekomendasi pola makan untuk overweight:</strong>
        <ul style="list-style-type: none; padding: 0;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Pengurangan 500-1000 kkal dari kebutuhan sehari.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Mengurangi konsumsi bahan makanan sumber karbohidrat kompleks seperti nasi, roti, jagung, kentang dan sereal.</li>
            <img src="img/46.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Menghindari konsumsi bahan makanan sumber karbohidrat sederhana seperti gula pasir, gula merah, sirup, kue yang manis dan gurih, madu, selai, dodol, coklat, permen, minuman ringan, dll.</li>
            <img src="img/47.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Mengurangi konsumsi bahan makanan sumber lemak dengan tidak mengolah makanan dengan cara digoreng dan menggunakan santan kental serta mentega dan margarin.</li>
            <img src="img/48.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Mengutamakan konsumsi bahan makanan sumber protein rendah lemak, seperti ikan, putih telur, ayam tanpa kulit, susu dan keju rendah lemak, tempe tahu, dan kacang-kacangan yang diolah</li>
            <img src="img/49.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
        </ul><br><br>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">"Terima kasih sudah melakukan monitoring status gizi!</strong>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">Yuk mulai perbaiki pola makan dan pola hidup mulai dari sekarang agar status gizi kamu tetap optimal. Jangan lupa lakukan monitoring status gizi secara berkala ya! Tetap semangat!"</strong>
          <style>
          /* Animasi kedap-kedip */
          @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
          }
          </style>
        `;      
    case "obesitas":
      return `
        <strong id="ohNoText" style="font-size: 24px; color: red;">Oh, no! :(</strong>
      <style>
      /* Animasi kedap-kedip */
      @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
      }
      #ohNoText {
      animation: blink 1s infinite;
      }
      </style>
        <br>Yuk ketahui faktor penyebab dan rekomendasi makan yang tepat untuk kamu dibawah ini!</br>
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: red; margin-right: 5px; vertical-align: middle;"></span>
        <strong style="color: red;">Faktor penyebab obesitas:</strong>
        <ul style="list-style-type: none; padding: 0;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Banyak mengkonsumsi makanan gorengan, berlemak dan manis.</li>
            <img src="img/28.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Makan dalam jumlah yang banyak dan dalam jangka waktu yang singkat.</li>
            <img src="img/29.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Kurang makan sayur dan buah.</li>
            <img src="img/27.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Makan berlebihan atau dalam porsi yang besar.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Sering ngemil.</li>
            <img src="img/30.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Sedentary lifestyle, seperti jarang berolahraga dan menghabiskan hari tanpa berkegiatan.</li>
            <img src="img/31.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Riwayat keluarga dengan obesitas.</li>  
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: red; margin-right: 10px; vertical-align: left;"></span>Kebiasaan begadang.</li>
            <img src="img/24.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
        </ul><br>
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: green; margin-right: 5px; vertical-align: middle;"></span>
        <strong style="color: green;">Rekomendasi pola makan untuk obesitas:</strong>
        <ul style="list-style-type: none; padding: 0;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Porsi kecil tapi sering (6 – 8 kali) dengan 3 kali makan utama dan 3 kali selingan.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Sarapan pagi sangat penting.</li>
            <img src="img/32.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Kurangi konsumsi karbohidrat kompleks seperti nasi, roti, kentang, jagung, dan sereal.</li>
            <img src="img/33.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Hindari konsumsi karbohidrat sederhana seperti gula pasir, gula merah, sirup, kue manis dan gurih, madu, selai, coklat permen, minuman ringan, dll.</li>
            <img src="img/34.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Menghindari minuman manis seperti soda, juice, sirup, dsb.</li>
            <img src="img/35.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Kurangi konsumsi lemak seperti mengolah makanan dengan digoreng, menggunakan santan kental, dan menggunakan mentega serta margarin.</li>
            <img src="img/36.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Perbanyak makan dengan makanan tinggi serat seperti buah dan sayur.</li>
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Pilih buah – buahan untuk camilan.</li>
            <img src="img/37.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Minum air putih sebelum makan, untuk memenuhi kebutuhan cairan tubuh.</li>
            <img src="img/38.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Olahraga rutin minimal 3 – 5 kali seminggu dengan durasi 40 – 60 menit, dilakukan secara bertahap. Olahraga yang aman dilakukan yaitu seperti jalan kaki, senam, bersepeda, renang, naik turun tangga, dan olahraga ringan lainnya.</li>
            <img src="img/39.jpg" alt="Descriptive text about the image" style="max-width: 100%; height: auto;">
            <li><span style="display: inline-block; width: 10px; height: 10px; border-radius: 10%; background-color: green; margin-right: 10px; vertical-align: left;"></span>Tidur yang cukup.</li>
        </ul><br><br>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">"Terima kasih sudah melakukan monitoring status gizi!</strong>
         <strong id="TerimaKasihText" style="font-size: 24px; color: green;">Yuk mulai perbaiki pola makan dan pola hidup mulai dari sekarang agar status gizi kamu tetap optimal. Jangan lupa lakukan monitoring status gizi secara berkala ya! Tetap semangat!"</strong>
          <style>
          /* Animasi kedap-kedip */
          @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
          }
          </style>
        `;      
    default:
      return "";
  }
}
