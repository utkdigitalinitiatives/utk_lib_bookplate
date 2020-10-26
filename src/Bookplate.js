import React, {Component} from 'react';

/* header component */
class Bookplate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            render: false
        };
    };

    render() {
        return <React.Fragment>this</React.Fragment>;
    }
}

export default Bookplate;
