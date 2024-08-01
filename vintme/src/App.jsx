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
     <section className="hero-section">
            <div
      className={`[background:linear-gradient(180deg,rgb(63,66,221)_0%,rgb(44,7,119)_100%)] inline-flex flex-col items-center gap-[21px] shadow-shadow-cards p-6 rounded-2xl relative ${className}`}
    >
      <div className="inline-flex items-start gap-[21px] flex-[0_0_auto] justify-center relative">
        <ElefanteWines className="!relative !w-[60px] !h-[60px]" />
        <div className="w-[243px] mr-[-4.00px] h-[62px] relative">
          <div className="[font-family:'Onest-SemiBold',Helvetica] w-[239px] left-0 tracking-[0] text-[25px] top-0 text-blanco-95 absolute h-[31px] font-semibold leading-[normal]">
            {nombreBodega}
          </div>
          <div className="font-text2-desktop w-[239px] left-0 tracking-[var(--text2-desktop-letter-spacing)] [font-style:var(--text2-desktop-font-style)] text-[length:var(--text2-desktop-font-size)] top-[31px] text-blanco-95 absolute h-[31px] font-[number:var(--text2-desktop-font-weight)] leading-[var(--text2-desktop-line-height)]">
            {colecciN}
          </div>
        </div>
      </div>
      <img
        className="w-full self-stretch mr-[-15.00px] ml-[-15.00px] h-[270px] relative"
        alt="Group"
        src={estadoNft === "ltimas-unidades" ? "image.png" : estadoNft === "sold-out" ? "group-1233-2.png" : group}
      />
      <div className="w-full flex self-stretch flex-col items-center gap-2 flex-[0_0_auto] px-1 py-0 relative">
        <div className="[font-family:'Onest-SemiBold',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-xl text-blanco-95 relative font-semibold leading-[normal]">
          {nombre}
        </div>
        <div className="[font-family:'Onest-SemiBold',Helvetica] self-stretch tracking-[0] text-lg text-blanco-95 relative font-semibold leading-[normal]">
          {categorA}
        </div>
        <div className="[font-family:'Onest-Regular',Helvetica] self-stretch tracking-[0] text-lg text-blanco-95 relative font-normal leading-[normal]">
          {varietal}
        </div>
        <div className="[font-family:'Onest-Regular',Helvetica] self-stretch tracking-[0] text-lg text-blanco-95 relative font-normal leading-[normal]">
          {regiN}
        </div>
      </div>
      {estadoNft === "stock-disponible" && (
        <DesktmobileNftCard className="!self-stretch !flex-[0_0_auto] !flex !w-full" estado="enable" texto="VINT" />
      )}

      {["ltimas-unidades", "sold-out"].includes(estadoNft) && (
        <div
          className={`w-full flex self-stretch items-center gap-2 flex-[0_0_auto] px-3.5 py-1.5 rounded-[25px] justify-center relative ${
            estadoNft === "ltimas-unidades" ? "shadow-shadow-button" : ""
          } ${estadoNft === "sold-out" ? "bg-collection-1-morado-pastel-02" : "bg-morado-pastel"}`}
        >
          <div className="border border-solid border-morado-vintme w-6 h-6 rounded-xl bg-blanco-95 relative">
            <div
              className={`w-[17px] left-[3px] top-[3px] h-[17px] rounded-[8.4px] relative ${
                estadoNft === "sold-out" ? "bg-error" : "bg-advertencia"
              }`}
            />
          </div>
          <div
            className={`font-text3-desktop w-fit tracking-[var(--text3-desktop-letter-spacing)] [font-style:var(--text3-desktop-font-style)] text-[length:var(--text3-desktop-font-size)] font-[number:var(--text3-desktop-font-weight)] text-center leading-[var(--text3-desktop-line-height)] relative ${
              estadoNft === "sold-out" ? "text-violeta-noche" : "text-blanco-95"
            }`}
          >
            {estadoNft === "ltimas-unidades" && <>VINT</>}

            {estadoNft === "sold-out" && <>SOLD OUT</>}
          </div>
        </div>
      )}
    </div>
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

