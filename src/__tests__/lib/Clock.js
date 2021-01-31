import React from 'react';
import Clock from '../../components/Clock';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'


describe('<Clock> component on DOM', () => {
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

describe('<Clock> component with react-test-renderer', () => {
    let clockRenderer;
    beforeEach(() => {
        clockRenderer = renderer.create(<Clock minutes={10} seconds={20} />)
    })

    it('renders properly', () => {
        expect(clockRenderer.toJSON()).toMatchSnapshot()
    });
    it('renders properly with h2 element', () => {
        expect(clockRenderer.toJSON().type).toEqual('h2')
    });
    it('renders properly with className', () => {
        expect(clockRenderer.toJSON().props).toMatchObject({ "className": expect.stringMatching(/clock/) })
    });
    xit('renders properly with text', () => {
        expect(clockRenderer.toJSON().children).toEqual(['Pozostało ', '00', ':', <span className="clock__min">10</span>, <span className="clock__sepator">:</span>, <span className="clock__sec">20</span>, '.', '000'])
    });
})

