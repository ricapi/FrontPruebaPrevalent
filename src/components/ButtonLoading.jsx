import React from 'react';
import ReactLoading from 'react-loading';

const ButtonLoading = ({ disabled, loading, text, onClick = () => { } }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type='submit'
            className='bg-purple-800 text-white font-bold text-lg py-3 px-6  rounded-xl hover:bg-purple-500 shadow-md m-2 disabled:opacity-50 disabled:bg-gray-700'
        >
            {loading ? <ReactLoading type='spin' height={30} width={30} /> : text}
        </button>
    );
};

export default ButtonLoading;