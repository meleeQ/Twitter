import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header'
import Adapter from 'enzyme-adapter-react-16';

// a simple test for header , no time to further test component connected with store
Enzyme.configure({ adapter: new Adapter()});
it ('Header inclues a SearchForm ',()=>{
    const wrapper = shallow(
                <Header />
    );
    const searchFormElement = wrapper.find("[data-test='searchForm']");
    expect(searchFormElement).toEqual({}); 
});

