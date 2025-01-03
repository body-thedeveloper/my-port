// components/Clients.js
export default function Clients() {
    const clients = [
      { name: 'a-to-be', logo: '/images/a-to-be.png' },
      { name: 'unit9', logo: '/images/unit9.png' },
      { name: 'cash analytics', logo: '/images/cashanalytics.png' },
      { name: 'celfocus', logo: '/images/celfocus.png' },
    ];
  
    return (
      <section className="section-wrapper white-bg">
        <div id="clients" className="content-wrapper vertical margin-bottom">
          <h2 className="heading2 black-text">Friends I've made <br/>along the way.</h2>
          <div className="client-logos-wrapper">
            {clients.map((client, index) => (
              <div key={index} className="client-logo-item">
                <img src={client.logo} alt={`logo ${client.name}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  