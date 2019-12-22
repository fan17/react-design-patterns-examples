import React from 'react';

type Props = {
    children: string
}

const Description: React.FC<Props> = ({ children }) => {
    return (
        <div className="description">{children}</div>
    );
};

export default Description;
