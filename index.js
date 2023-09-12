// Add your code here
function submitData(name, email) {
    const userData = {
      name,
      email
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", config)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        appendUserIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorMessageToDOM(error.message);
      });
  }
  
  function appendUserIdToDOM(userId) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = `User ID: ${userId}`;
    body.appendChild(p);
  }
  
  function appendErrorMessageToDOM(errorMessage) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = `Error: ${errorMessage}`;
    body.appendChild(p);
  }
  
  // Usage
  document.addEventListener('DOMContentLoaded', function() {
    submitData("John Doe", "john@example.com");
  });
  