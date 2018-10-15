import React,{Component} from 'react';
import { Redirect,Link  } from 'react-router-dom';
import './loginPage.css';

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggiedIn:false,
            submitted:false
        };

    }
    handleChange =(event)=> {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event)=> {
        event.preventDefault();

        this.setState({ submitted: true });

        const { username, password } = this.state;

        if (username && password) {
            
            //localStorage.setItem('user', username);
            this.setState({ isLoggiedIn: true});
            this.props.history.push({
                pathname: '/store',
                state: {isLoggedIn:true,username:username }
              })
        } else {
            // else return error
            this.setState({
                isLoggiedIn:false
            })
        }

    }
    render(){
        const { username, password, isLoggiedIn,submitted } = this.state;
        
        const redirect = isLoggiedIn? <Redirect to={{
            pathname:"/store",
            state:{isLoggedIn:isLoggiedIn,username:username}
        }}  />:null;

        return (
            <div className="col-xs-12 LoginContainer">
                {redirect}
                
                <div className="LoginWrapper">
                <div className="Title">Welcome</div>
                        
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input  type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input  type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
export default LoginPage;