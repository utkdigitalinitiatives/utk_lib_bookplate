import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import Bookplate from './Bookplate';

import './scss/styles.scss';

if (document.getElementById('utk-lib-bookplate')) {
    ReactDOM.render(<Bookplate />, document.getElementById('utk-lib-bookplate'));
}