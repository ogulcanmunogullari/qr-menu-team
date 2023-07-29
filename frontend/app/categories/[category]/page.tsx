import React from 'react';

const Test = ({ params }: { params: { category: string } }) => {
 const { category } = params;
 return <div>{category}</div>;
};

export default Test;
