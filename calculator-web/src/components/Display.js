import React from 'react';

import { Consumer } from './Context';

const Display = () => (
    <Consumer>
        { ({display}) =>
            <section className="display">{display}</section>
        }
    </Consumer>
);

export default Display;