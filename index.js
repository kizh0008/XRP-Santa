function copyToClipboard() {
    const text = document.getElementById('textToCopy').innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('CA copied sucessfully!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }