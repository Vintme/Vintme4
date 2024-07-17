import * as React from "react";

function App() {
  const navLinks = [
    "Cómo funciona",
    "Bodega",
    "Noticias",
    "Winepaper",
    "About",
  ];

  const handleLoginWithGoogle = () => {
    // Construct Google OAuth URL
    const clientId = "YOUR_CLIENT_ID"; // Replace with your Google OAuth client ID
    const redirectUri = "YOUR_REDIRECT_URI"; // Replace with your redirect URI
    const scope = "email profile openid"; // Specify the scopes your application requires

    // Construct the OAuth URL
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

    // Redirect to Google login page
    window.location.href = authUrl;
  };

  const connectMetaMask = () => {
    if (window.ethereum) {
      // Request MetaMask access
      window.ethereum
        .enable()
        .then((accounts) => {
          // MetaMask is connected and accounts are exposed
          console.log("Connected to MetaMask");
          console.log("Accounts:", accounts);
          // You can perform additional actions here after connection
        })
        .catch((error) => {
          console.error("Error connecting to MetaMask:", error);
          // Handle error connecting to MetaMask
        });
    } else {
      // MetaMask is not installed
      alert("Please install MetaMask to use this feature");
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <figure className="logo-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f166cc8c2964ed7a3bbc1b91eaee5969d85bd5451c9bce02256e46a0754ad65a?apiKey=8ae6cc92657a4a909dc4ca9387cda3e2&"
              alt="Vint primary logo"
              className="logo"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53c5af48ecc62135316093c076a0f5c3f7c16531710e8b4bd9881b0ab7d42d4e?apiKey=8ae6cc92657a4a909dc4ca9387cda3e2&"
              alt="Vint secondary logo"
              className="secondary-logo"
            />
          </figure>
          <nav className="navigation">
            {navLinks.map((link, index) => (
              <a href="#" key={index} className="nav-link">
                {link}
              </a>
            ))}
          </nav>
          <div className="actions">
            <button className="main-action" onClick={handleLoginWithGoogle}>
              Vint!
            </button>
            <button className="secondary-action" onClick={connectMetaMask}>
              Conectar
            </button>
          </div>
        </div>
      </header>
      <section className="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20e3aa5412d43c102ac2d24db2ba7c0587238dad7cb9bb882a1fa0df16fa926c?apiKey=8ae6cc92657a4a909dc4ca9387cda3e2&"
          alt="Descriptive text for image"
          className="responsive-image"
        />
        <section className="hero-section">
          <h1 className="hero-title">Vintvenidos</h1>
          <p className="hero-description">
            Una nueva forma de consumir vinos de colección. Aplicando tecnología
            blockchain para reducir intermediarios entre las bodegas de la
            región y sus clientes.
          </p>
          <button className="cta-button" tabIndex="0" onClick={connectMetaMask}>
            Conectá tu billetera
          </button>
        </section>
      </section>

      <style jsx>{`
        .hero-section {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 20px;
          box-shadow: 0 0 25px 15px rgba(86, 15, 231, 0.7);
          background-color: rgba(0, 0, 0, 0.65);
          display: flex;
          flex-direction: column;
          max-width: 502px;
          font-size: 18px;
          color: #fff;
          font-weight: 500;
          text-align: center;
          padding: 40px;
        }

        @media (max-width: 991px) {
          .hero-section {
            padding: 20px;
          }
        }

        .hero-title {
          font: 700 50px Merriweather, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 40px;
          }
        }

        .hero-description {
          font-family: Onest, sans-serif;
          margin-top: 20px;
        }

        .cta-button {
          font-family: Onest, sans-serif;
          justify-content: center;
          border-radius: 25px;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          background-color: var(--Morado-Vintme, #560fe7);
          align-self: center;
          margin-top: 20px;
          color: var(--Blanco-95, #f2f2f2);
          padding: 12px 24px;
          cursor: pointer;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: calc(100vh - 80px); /* Adjust based on header height */
        }

        .responsive-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .header {
          background-color: #1a1a1a;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 14px 60px;
          box-sizing: border-box;
        }

        @media (max-width: 991px) {
          .header {
            padding: 0 20px;
          }
        }

        .container {
          display: flex;
          width: 100%;
          max-width: 1200px;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .container {
            flex-wrap: wrap;
            max-width: 100%;
          }
        }

        .logo-container {
          display: flex;
          gap: 10px;
          padding: 14px;
        }

        .logo {
          width: 67px;
          object-fit: contain;
        }

        .secondary-logo {
          width: 171px;
          max-width: 100%;
          object-fit: contain;
          margin: auto 0;
        }

        .navigation {
          display: flex;
          gap: 20px;
          font-size: 18px;
          font-weight: 500;
          color: #9b74eb;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
        }

        @media (max-width: 991px) {
          .navigation {
            flex-wrap: wrap;
          }
        }

        .nav-link {
          font-family: Onest, sans-serif;
          text-align: center;
        }

        .actions {
          display: flex;
          gap: 20px;
          font-size: 18px;
          font-weight: 500;
          justify-content: space-between;
          align-items: center;
        }

        .main-action {
          font-family: Onest, sans-serif;
          background-color: #560fe7;
          color: #f2f2f2;
          border-radius: 25px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          padding: 12px 24px;
        }

        .secondary-action {
          font-family: Onest, sans-serif;
          background-color: #f2f2f2;
          color: #560fe7;
          border: 1px solid #560fe7;
          border-radius: 25px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          padding: 12px 24px;
        }

        .construction-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background-image: url("https://i.ibb.co/42NTqZx/fondo1.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          color: #ffffff;
          text-align: center;
        }

        .content {
          max-width: 600px;
          padding: 20px;
        }

        .content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .content img {
          width: 100%;
          height: auto;
          max-width: 600px;
        }

        .nft-card {
          margin: 20px auto;
        }
      `}</style>
    </>
  );
}

export default App;

