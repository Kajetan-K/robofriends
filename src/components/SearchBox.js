import React from 'react'

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input 
                className='pa 3 ba b--green bg-lightest-blue f3'
                type = 'search' 
                placeholder='search robots'
                onChange = {searchChange}
            />
        </div>
        
    );
}

export default SearchBox;