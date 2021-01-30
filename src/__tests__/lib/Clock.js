import React from 'react';
import Clock from '../../components/Clock';
import ReactDOM from 'react-dom';


describe('<Clock> component', () => {
    let root;
    beforeEach(() => {
        root = document.createElement("div");
        ReactDOM.render(<Clock minutes={10} seconds={20} />, root)
    })

    it('renders properly H2 element', () => {
        expect(root.childNodes[0].nodeName).toEqual("H2")
    });
    it('renders properly with className', () => {
        expect(root.childNodes[0].className).toEqual("clock")
    });
    it('renders properly with text', () => {
        expect(root.childNodes[0].textContent).toEqual("Pozostało 00:10:20.000")
    });
    it('sets ', () => {
        expect(<Clock />).toEqual(<Clock hours={0} miliseconds={0} minutes={20} seconds={0} />);
    });
})

