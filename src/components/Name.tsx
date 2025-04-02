import { FC } from 'react';

interface NameProps {
    id?: string;
    value: string;
    updateValue: (newValue: string) => void;
}

export const Name: FC<NameProps> = ({ id, value, updateValue }: NameProps) => {

    return (
        <div id="#/properties/user/properties/a08" className="">
            <span>
                Name
            </span>
            <input
                type="text"
                value={value}
                onChange={(e) => updateValue(e.target.value)}
            />
        </div>
    );
};

