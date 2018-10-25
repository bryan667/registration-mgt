import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer>
            <Fade delay={500}>
                    <div className="font_righteous">The Footer</div>
                    <div className="footer_copyright">
                        Footer 2018. etc. etc.
                    </div>
            </Fade>
      </footer>
    );
};

export default Footer;