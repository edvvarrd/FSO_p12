import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from '../Todo'

describe('Todo element', () => {
	const mockComplete = jest.fn()
	const mockDelete = jest.fn()

	test('is rendered', () => {
		render(<Todo todo={{ _id: '1', text: 'Write code', done: true }} completeTodo={mockComplete} deleteTodo={mockDelete} />)
		const todoElement = screen.getByText('Write code')
		expect(todoElement).toBeInTheDocument()
	})

	test(' function completeTodo is called with the correct argument', () => {
		render(<Todo todo={{ _id: '1', text: 'Write code', done: false }} completeTodo={mockComplete} deleteTodo={mockDelete} />)
		const completeButton = screen.getByText('Set as done')
		fireEvent.click(completeButton)
	})

	test(' function deleteTodo is called with the correct argument', () => {
		render(<Todo todo={{ _id: '1', text: 'Write code', done: true }} completeTodo={mockComplete} deleteTodo={mockDelete} />)
		const deleteButton = screen.getByText('Delete')
		fireEvent.click(deleteButton)
	})
})
