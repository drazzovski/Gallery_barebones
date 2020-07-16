import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputAdornment, TextField } from '@material-ui/core';



export default function SearchBar() {

    const [searchStatus1, setSearchStatus1] = useState(false);
    const toggleSearch1 = () => setSearchStatus1(!searchStatus1);

    return (
        <>

            <div className={clsx("search-wrapper", { 'is-active': searchStatus1 })}>
                <TextField
                    variant="outlined"
                    size="small"
                    className="w-100"
                    id="input-with-icon-textfield22-3"
                    onFocus={toggleSearch1} onBlur={toggleSearch1}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchOutlinedIcon />
                                <MicOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

        </>
    );
}