import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <AppBar
                    position="fixed"
                    style={{
                    backgroundColor: '#ffd174',
                    boxShadow: 'none',
                    padding: '10px 0px',
                    }}
                >
                    <Toolbar style={{display:'flex'}}>                    
                        <Link to='/'>
                            <Button color='inherit' className='header_logo_nav'>Home</Button>
                        </Link>
                        <Link to='/register'>
                            <Button color='inherit' className='header_logo_nav'>Register</Button>
                        </Link>
                        <Link to='/login'>
                            <Button color='inherit' className='header_logo_nav'>Login</Button>
                        </Link>
                    </Toolbar>    
                </AppBar>                
            </header>
        );
    }
}

export default Header;