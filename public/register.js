// document.getElementById('registerForm').addEventListener('submit', async (event) => {
//     event.preventDefault(); // Prevenir la recarga de la página
//     // console.log('Formulario enviado'); // <-- Este mensaje te ayudará a verificar que se captura el evento
  
//     const username = document.getElementById('registerUsername').value;
//     const password = document.getElementById('registerPassword').value;
  
//     console.log('Username:', username); // <-- Verifica los valores ingresados
//     console.log('Password:', password);
  
//     try {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//       });
  
//       const result = await response.json();
//       document.getElementById('registerMessage').textContent = result.message;
  
//       if (response.ok) {
//         document.getElementById('registerForm').reset();
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   });




  document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      document.getElementById('registerMessage').textContent = result.message;
    } catch (error) {
      console.error('Error:', error);
    }
  });
  