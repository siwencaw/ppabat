import { Select } from '@mantine/core';

export function Years() {
    return (
        <Select style={{ width: 280 }}
            label="Your favorite framework/library"
            placeholder="Pick one"
            searchable
            nothingFound="No options"
            data={['React', 'Angular', 'Svelte', 'Vue']}
        />
    );
}