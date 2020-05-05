import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { loginActions } from '../../actions/login/LoginActions'


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.logout();

        this.state = {
            userName: '',
            password: '',
            submitted: false // признак отправленности данных
        }

        // Вешаем обработчик изменений на весь компонент
        this.handleChange = this.handleChange.bind(this);

        // Вешаем обработчик отправки формы на весь компонент
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Обработчик изменений
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    // Обработчик формы отправки
    handleSubmit(event) {
        // Отключаем дефолтный обработчик (кнопки сабмита)
        event.preventDefault();

        // Обновляем стейты обьекта
        this.setState({ submitted: true })

        // Берем данные из текущего стейта как константы
        const { username, password } = this.state;

        // Если введены логин и пароль - вызываем метод из пропов на авторизацию
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        // Берем признак авторизации из пропов
        // const { loggedIn } = this.props;

        // Берем значения полей из стейтов
        const { username, password, submitted } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="username" />
                        <input type="text" name="username" value={username} onChange={this.handleChange}/>
                        { submitted && !username && <div>Username is required</div> }
                    </div>

                    <div>
                        <label htmlFor="password" />
                        <input type="password" name="password" value={password} onChange={this.handleChange} />
                        { submitted && !password && <div>Password is required</div> }
                    </div>

                    <div>
                        <button>Login</button>
                        <Link to="/register">Registration</Link>
                    </div>
                </form>
            </div>
        )
    }
}

function mapState(state) {
    // const { loggedIn } = state.authentication;
    // return { loggedIn };
}

const actionsCreator = {
    login: loginActions.loginUser,
    logout: loginActions.logoutUser
}

const connectedLoginPage = connect(mapState, actionsCreator) (LoginPage);
export { connectedLoginPage as LoginPage };