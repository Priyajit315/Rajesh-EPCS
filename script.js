
    // Popup logic
    function openPopup() {
      document.getElementById('popup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }

    function submitForm() {
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;

      if (!name || !phone) {
        alert('Please fill in all details.');
        return;
      }

      alert(`Thank you, ${name}! We’ll contact you soon at ${phone}.`);
      closePopup();
    }
  