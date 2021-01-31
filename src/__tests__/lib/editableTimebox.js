import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react';
import EditableTimebox from '../../components/EditableTimebox'

describe('<editableTimebox />', () => {
    afterEach(cleanup)
    it('shows Edit button', () => {
        const { debug, getAllByText } = render(<EditableTimebox />)
        debug()
        expect(() => getAllByText('Edytuj')).not.toThrow()
    });
    it('allows editing the timebox', () => {
        const { debug, getByText } = render(<EditableTimebox />)
        fireEvent.click(getByText("Edytuj"))
        fireEvent.click(getByText("Zatwierdź zmiany"))
        debug()
        expect(() => getByText('Edytuj')).not.toThrow()
    });
    it('changes title of timebox', () => {
        const { debug, getByText, getByLabelText } = render(<EditableTimebox />)
        // console.log(render(<EditableTimebox />));
        debug()
        fireEvent.click(getByText("Edytuj"))
        fireEvent.change(getByLabelText(/robisz/), { target: { value: "Zmieniony tytuł" } })

        fireEvent.click(getByText("Zatwierdź zmiany"))
        expect(() => getByText('Zmieniony tytuł')).not.toThrow()
    });
})
