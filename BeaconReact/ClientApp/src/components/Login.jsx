import React, { Component } from 'react';
export class Login extends Component {
    render() {
        return (
            <form action="/action_page.php" method="get">
                First name: <input type="text" name="fname"/>
                Last name: <input type="text" name="lname"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    };
}