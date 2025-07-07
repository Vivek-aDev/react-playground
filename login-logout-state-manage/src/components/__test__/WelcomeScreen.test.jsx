import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, expect, vi } from 'vitest';
import WelcomeScreen from '../WelcomeScreen';
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { login, logout } from '../../features/auth/authSlice';

describe('WelcomeScreen', () => {
  it('shows username and dispatches logout', () => {
    // Create test store
    const testStore = configureStore({
      reducer: {
        auth: authReducer,
      },
    });

    // Simulate login state
    testStore.dispatch(login('vivek'));

    const spy = vi.spyOn(testStore, 'dispatch');

    render(
      <Provider store={testStore}>
        <WelcomeScreen />
      </Provider>
    );

    // Check if username is shown
    expect(screen.getByText(/Welcome, vivek/i)).toBeInTheDocument();

    // Click logout
    fireEvent.click(screen.getByText(/Logout 🔓/));
    expect(spy).toHaveBeenCalledWith(logout());
  });
});
