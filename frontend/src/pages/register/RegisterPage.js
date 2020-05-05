import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerActions } from '../../actions/register/RegisterActions'

class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;

        return (
            <div>
                <h2>Registration</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="firstname">First name</label>
                        <input type="text" name="firstName" onChange={this.handleChange}/>
                        {submitted && !user.firstName && <div>First name is required</div>}
                    </div>

                    <div>
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" name="lastName" onChange={this.handleChange} />
                        {submitted && !user.lastName && <div>Last name is required</div>}
                    </div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleChange} />
                        {submitted && !user.username && <div>Username is required</div>}
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} />
                        {submitted && !user.password && <div>Password is required</div>}
                    </div>

                    <div>
                        <button>Registration</button>
                        <Link to="/login">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: registerActions.registration
}

const connectedRegisterPage = connect(mapState, actionCreators) (RegistrationPage);
export { connectedRegisterPage as RegistrationPage }