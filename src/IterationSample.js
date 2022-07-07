import {useState} from 'react';

const IterationSample=()=>{
    const [names, setNames]=useState([
        {id:1, text:'snowman'},
        {id:2, text: 'snow'},
        {id:3, text:'snow'},
        {id:4, text:'wind'}
    ]);
    
    const [inputText, setInputText]=useState('');
    const [nextId, setNextId]=useState(5);

    const onChange=e=>setInputText(e.target.value);

    const namesList=names.map((name, index)=><li key={name.id}>{name.text}</li>);
    return <>
        <input value={inputText} onChange={onChange} />
        <button>add</button>
        <ul>{namesList}</ul>
    </>;
};

export default IterationSample;

