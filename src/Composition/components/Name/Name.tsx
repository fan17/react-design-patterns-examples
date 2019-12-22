import React from 'react';

type Props = {
    children: string
}

const Name: React.FC<Props> = ({ children }) => {
    return (
        <div className="name">{children}</div>
    );
};

export default Name;
