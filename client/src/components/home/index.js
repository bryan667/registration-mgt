import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {

    state = {
        Users: {}
    }

    componentDidMount() {
        axios.get('/api/user/get_users')
        .then(response => {
            let Awyis = {}

            response.data.forEach((val, i)=> {
                let tempObj = {}
                tempObj['email'] = val.email
                tempObj['name'] = val.name
                tempObj['lastname'] = val.lastname

                Awyis[`User${i}`] = tempObj
            })

            this.setState({
                Users: Awyis
            })            
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    Home Awyis
                </div>
                <div>         
                    {JSON.stringify(this.state.Users, null, 1)}
                </div>
            </div>
        );
    }
}
export default Home