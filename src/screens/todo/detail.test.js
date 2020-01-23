import React from 'react';
import { shallow } from 'enzyme';
import TodoDetail from './detail';

describe('todos/TodoDetail', () => {
  let todo;

  beforeEach(() => {
    todo = {
      id: 10,
      userId: 10,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    };
  })

  it('should render without error', () => {
    const wrapper = shallow(<TodoDetail todo={todo} />);
    expect(wrapper.text()).toContain('quis ut nam facilis et officia qui')
  });

  it('should add completed class when todo is completed', () => {
    const wrapper = shallow(<TodoDetail todo={{ ...todo, completed: true }} />);
    expect(wrapper.find('.completed')).toHaveLength(1);
  })
});
