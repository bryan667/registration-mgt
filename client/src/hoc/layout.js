import React, { Component } from 'react';
import Header from '../components/header_footer/header/index'
import Footer from '../components/header_footer/footer/index'


class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;