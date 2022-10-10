import React from 'react'
import { useContext } from 'react';
import {context, Provider} from './Context'

const Class7 = () => {
    const user = useContext(context);
  return (
    <Provider>
            {user}
    </Provider>
  )
}

export default Class7