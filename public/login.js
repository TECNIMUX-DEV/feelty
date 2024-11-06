document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      document.getElementById('loginMessage').textContent = result.message;
  
      if (response.ok) {
        localStorage.setItem('token', result.token); // Guarda el token
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  