import React, { useState } from 'react'

const useSelect = (initialState, options) => {

    const [state, updateState] = useState(initialState);

    const SelectNews = () => (
        <div className="flex justify-center">
            <div className="div mb-3 w-80 xl:w-96">
                    <select
                        className={`form-select
                    appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none`}
                        value={state}
                        onChange={e => updateState(e.target.value)}
                    >

                        {options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>

            </div></div>
    );

    return [state, SelectNews]

}



export default useSelect;