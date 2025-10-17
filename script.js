  // Get today's date
  const today = new Date();

  // Format it as YYYY-MM-DD (ISO style, like in your original code)
  const formatted = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');

  // Update the <time> element
  const timeEl = document.getElementById('dateModified');
  timeEl.textContent = formatted;
  timeEl.setAttribute('datetime', formatted);