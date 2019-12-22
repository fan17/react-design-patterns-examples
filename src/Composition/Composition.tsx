import React from 'react';
import Amazon from "./Companies/Amazon/Amazon";
import Facebook from "./Companies/Facebook/Facebook";
import Google from "./Companies/Google/Google";

const Composition: React.FC = () => {
    return (
        <>
            <h1>Composition</h1>
            <div className="partner">
                <Amazon />
            </div>
            <div className="partner">
                <Facebook />
            </div>
            <div className="partner">
                <Google />
            </div>
        </>
    );
};

export default Composition;
