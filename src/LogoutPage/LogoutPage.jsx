import React from 'react';
import { connect } from 'react-redux';
import { LoginPage } from '../LoginPage';
import { userActions } from '../_actions';

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(userActions.stateLogout()); 
    } 

    render() {
        return <LoginPage />;
    }
}

function mapStateToProps(state) {
    return {
    };
}

const connectedLogoutPage = connect(mapStateToProps)(LogoutPage);
export { connectedLogoutPage as LogoutPage }; 