import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import "./styles.css"

const Search = ({value, changeInput}) => 
        <div className="searchBar-wrap">
            <SearchOutlined className='searchBar-icon' />
            <input type="text" placeholder='Search Key' value={value} onChange={changeInput} />
        </div>

export default Search;