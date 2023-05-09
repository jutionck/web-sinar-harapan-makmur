import React, {Component} from 'react';
import StepCredits from '../../assets/step-credits.svg'

class WhyUs extends Component {
  state = {
    show: false,
    faqs: [
      {
        id: 1,
        title: 'Non consectetur a erat nam at lectus urna duis?',
        description: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
        isCollapsed: true,
      },
      {
        id: 2,
        title: 'Feugiat scelerisque varius morbi enim nunc?',
        description: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
        isCollapsed: false,
      },
      {
        id: 3,
        title: 'Dolor sit amet consectetur adipiscing elit?',
        description: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar\n' +
          'elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus\n' +
          'pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at\n' +
          'elementum eu facilisis sed odio morbi quis',
        isCollapsed: false,
      }
    ]
  }

  handleCollapse = (id) => {
    this.setState(prevState => ({
      faqs: prevState.faqs.map(faq => faq.id === id ? { ...faq, isCollapsed: !faq.isCollapsed } : faq)
    }))
  }

  render() {
    const whyUsStyle = {
      backgroundImage: `url(${StepCredits})`,
    }
    return (
      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
              <div className="content">
                <h3>Alur <strong>Pengajuan Credit</strong> Mobil Baru atau Bekas </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed quo id consequuntur cumque facilis
                  sit velit, rerum, eligendi beatae veritatis culpa error minus! Fugit sint molestias unde facere
                  accusamus?
                </p>
              </div>
              <div className="accordion-list">
                <ul>
                  {this.state.faqs.map((faq) => (
                    <li key={faq.id}>
                      <a data-bs-toggle="collapse" className="collapse" onClick={() => this.handleCollapse(faq.id)} data-bs-target={`#accordion-list-${faq.id}`}>
                        <span>0{faq.id}</span> {faq.title} <i className={`bx ${faq.isCollapsed ? 'bx-chevron-down icon-show' : 'bx-chevron-up icon-close'}`}></i>
                      </a>
                      <div id={`accordion-list-${faq.id}`} className={`collapse ${ faq.isCollapsed ? `show` : ''}`} data-bs-parent=".accordion-list">
                        <p>{faq.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                 style={whyUsStyle}></div>
          </div>

        </div>
      </section>
    );
  }
}

export default WhyUs;