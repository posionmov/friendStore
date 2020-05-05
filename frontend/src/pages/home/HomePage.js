import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {

    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>Hello {user}</h1>
                <Link to="/login">Logout</Link>
            </div>
        )
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {}

const connectedHomePage = connect(mapState, actionCreators) (HomePage);
export { connectedHomePage as HomePage };