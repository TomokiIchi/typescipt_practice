import React, { useState } from 'react'

interface Props {
    text: string;
}

const TestComponent: React.FC<Props> = (props) => {
    const [count, setCount] = useState<number | null>(null);
    return (
        <div>
            <h1>{props.text}</h1>
            <h1>{count}</h1>
        </div>
    )
}

export default TestComponent;