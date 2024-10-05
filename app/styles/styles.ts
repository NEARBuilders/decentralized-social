export const css = `
:root {
  --purple: #4a22a5;
  --orange: #eca228;
}

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    &:hover {
      text-decoration: none;
    }
  }
}

.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--orange) 0%, var(--purple) 100%);
  z-index: -1;
}

.container {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.toggle-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.toggle-button {
  background-color: #f0f0f0;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.toggle-button.active {
  background-color: var(--purple);
  color: white;
}

.input-container {
  text-align: left;
}

.input-container label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input-container input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.balance {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
}

.container-footer {
  margin-top: auto;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.cta {
  display: inline-block;
  background-color: var(--purple);
  color: white;
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease, filter 0.3s ease; // Added filter transition
  flex: 1 1 auto;
  text-align: center;
  border: none;
  cursor: pointer;
}

.cta:hover {
  background-color: var(--purple); 
  filter: brightness(0.9); 
}

.cta.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.cta.disabled:hover {
  background-color: #ccc;
  filter: none;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 3rem;
  margin-bottom: 1.5rem;
  text-align: left;
  max-width: 400px
}

.features div {
  font-size: 1.1rem;
  color: #444;
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.container-footer {
  min-width: 400px;
}

footer {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #888;
}

footer a {
  color: var(--purple);
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

.layout-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.back-button {
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
}

.back-button:hover {
  text-decoration: underline;
}

.join-container {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
}

.document-container {
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding-right: 1rem;
}

.sign-button {
  align-self: right;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .join-container {
    max-width: 100%;
  }
}

.stake-container {
  text-align: left;
  max-width: 600px; 
  width: 100%; 
}

.toggle-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.toggle-button {
  background-color: #f0f0f0;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button.active {
  background-color: var(--purple);
  color: white;
}

.input-container {
  margin-bottom: 1.5rem;
}

.input-container label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input-container input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.balance {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
}

.stake-container .button-container {
  display: flex;
  justify-content: space-between;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.cta {
  display: inline-block;
  background-color: var(--purple);
  color: white;
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease, filter 0.3s ease; // Added filter transition
  flex: 1 1 auto;
  text-align: center;
  border: none;
  cursor: pointer;
}

.cta:hover {
  background-color: var(--purple); // Keep the original color
  filter: brightness(0.9); // Darken the button slightly on hover
}

.cta.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.cta.disabled:hover {
  background-color: #ccc;
  filter: none; // No darkening effect for disabled buttons
}
`;