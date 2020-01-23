import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import TodoDetail from './detail';

import configureStore from '../../store';

const store = configureStore();

describe('todos/TodoDetail', () => {
  let todoId;
  let wrapper;

  beforeEach(() => {
    todoId = 10;
    const match = { params: { todoId: todoId } }
    wrapper = mount(
      <Provider store={store}>
        <TodoDetail match={match} />
      </Provider>
    );
  })

  it('should render without error', () => {
    setTimeout(() => {
      expect(wrapper.text()).toContain('quis ut nam facilis et officia qui')
    }, 2000);
  });
});
