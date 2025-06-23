// script.js

document.getElementById('waForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const phoneInput = document.getElementById('phone');
  const errorMsg = document.getElementById('errorMsg');
  let phone = phoneInput.value.trim();

  // Hapus karakter selain angka
  phone = phone.replace(/\D/g, '');

  // Validasi nomor (minimal 10 digit, maksimal 15 digit, harus mulai dengan 62 atau 08)
  if (!/^((62)|(08))[0-9]{8,13}$/.test(phone)) {
    errorMsg.textContent = 'Nomor tidak valid. Gunakan format 628xxx atau 08xxx.';
    errorMsg.classList.remove('hidden');
    phoneInput.classList.add('border-red-400');
    return;
  }

  // Ubah 08xxx menjadi 628xxx
  if (phone.startsWith('08')) {
    phone = '62' + phone.slice(1);
  }

  errorMsg.classList.add('hidden');
  phoneInput.classList.remove('border-red-400');

  // Redirect ke WhatsApp
  const waUrl = `https://wa.me/${phone}`;
  window.open(waUrl, '_blank');
}); 