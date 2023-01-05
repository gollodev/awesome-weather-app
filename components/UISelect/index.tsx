import { Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { ICities } from "../../common/interfaces";

interface UISelectProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    value: string,
    placeholder: string,
    cities: ICities[]
}

export default function UISelect({ onChange, value, placeholder, cities }: UISelectProps): JSX.Element {
    return (
        <Select placeholder={placeholder} onChange={onChange} value={value}>
            {cities.length > 0 ? (cities.map(city => <option key={city.key} value={city.value}>{city.label}</option>)) : (<option value='no-data'>No data</option>)}
        </Select>
    )
}