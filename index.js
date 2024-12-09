function copyToClipboard() {
    const text = document.getElementById('textToCopy').innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('It will be only avalible after the launch!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }