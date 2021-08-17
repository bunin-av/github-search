import {useEffect, useState} from "react";

const Input = ({searchValue, setSearchValue}: { searchValue: string, setSearchValue: (value: string) => void }) => {
    const [value, setValue] = useState<string>('')

    useEffect(()=> setValue(searchValue),[searchValue])

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={() => setSearchValue(value)}>search</button>
            <button onClick={() => setSearchValue('bunin')}>reset</button>
        </div>
    );
};

export default Input;