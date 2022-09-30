import React from 'react'
import {Box, Slider} from '@mui/material';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number] ) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    function valuetext(value: number) {
        return `${value}°C`;
    }

    // сделать смому, можно подключать библиотеки
    const [rangeValue, setRangeValue] = React.useState(value);

    const handleChange = (event: Event, newValue: any) => {
        setRangeValue(newValue);
        if (onChangeRange) {
            onChangeRange(newValue)
        }
    };

    return (
        <>

                <Slider
                    style={{ width: 130, }}
                    size={'small'}
                    value={rangeValue}
                    onChange={handleChange}
                />

        </>
    )
}

export default SuperDoubleRange
