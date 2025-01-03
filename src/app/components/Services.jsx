// components/Services.js
export default function Services() {
    return (
      <section className="section-wrapper white-bg reduced-margin-bottom">
        <div id="services" className="content-wrapper vertical">
          <h2 className="heading2 black-text">Here's what I can <br/>do to help:</h2>
          <div className="columns-wrapper">
            <ServiceItem
              title="Motion Graphics."
              description="From small teasers, to explainers, to full storytelling experiences, I will help you move ideas around."
            />
            <ServiceItem
              title="Animated Interactions."
              description="UX is only complete with engaging animations. These are great for showcase or to guide a dev team."
            />
            <ServiceItem
              title="Webflow Development."
              description="Bringing visual design, animation and development together to uplift your digital presence."
            />
            <ServiceItem
              title="Education."
              description="If you have a team ready to dive into the world of Motion Graphics, I would be delighted to help."
            />
          </div>
        </div>
      </section>
    );
  }
  
  function ServiceItem({ title, description }) {
    return (
      <div className="_50-width align-left padding-right margin-bottom">
        <h3 className="heading3 pink-text">{title}</h3>
        <p className="paragraph black-text">{description}</p>
      </div>
    );
  }
  