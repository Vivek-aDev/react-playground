import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, expect, vi } from 'vitest';
import LoginForm from '../LoginForm';
import { store } from '../../redux/store';
import * as authSlice from '../../features/auth/authSlice';

describe('LoginForm', () => {
  it('should dispatch login on button click', () => {
    const spy = vi.spyOn(authSlice, 'login');

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Enter username');
    const button = screen.getByText('Login 🔐');

    fireEvent.change(input, { target: { value: 'vivek' } });
    fireEvent.click(button);

    expect(spy).toHaveBeenCalledWith('vivek');
  });
});
