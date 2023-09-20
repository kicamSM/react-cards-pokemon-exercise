
import React, { useState } from 'react';

const useFlip = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const flip = () => {
        setState(state => !state) 
    }
    return [state, flip]
}


export default useFlip 