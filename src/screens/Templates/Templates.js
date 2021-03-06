import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollTab from "../../components/Tabs/ScrollTab";

export default function Templates() {
    return (
        <div className="text-center my-5">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning shadow-warning-sm text-warning mb-2 d-90">
                <FontAwesomeIcon
                    icon={['fas', 'lightbulb']}
                    className="d-flex align-self-center font-size-xxl"
                />
            </div>
            <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-warning">
                T E M P L A T E S
                  </h6>
            <p className="text-black-50 font-size-lg mb-0">
                You have pending actions to take care of.
                  </p>

        </div >
    )
}