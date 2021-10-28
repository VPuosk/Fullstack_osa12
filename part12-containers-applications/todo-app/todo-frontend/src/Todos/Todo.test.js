import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import '@testing-library/jest-dom/extend-expect'

const falseTodo = {
  text: "testi A",
  done: false
}

const trueTodo = {
  text: "testi B",
  done: true
}

describe('Todo component tests', () => {
  it('component works', () => {
    const a = jest.fn()
    const b = jest.fn()
    const component = render(<Todo todo={trueTodo} deleteTodo={a} completeTodo={b}/>)
    
    const testField = component.container.querySelector('#testField')
    expect(testField).toHaveTextContent('testi B')
  })
  
  it('delete button works', () => {
    const onDelete = jest.fn()
    const onComplete = jest.fn()

    //todo={todo} deleteTodo={onClickDelete} completeTodo={onClickComplete}
    const component = render(<Todo todo={falseTodo} deleteTodo={onDelete} completeTodo={onComplete}/>)
    
    const deleteButton = component.container.querySelector('#testDeleteNotDone')

    fireEvent.click(deleteButton)

    expect(onComplete.mock.calls).toHaveLength(1)
    expect(onDelete.mock.calls).toHaveLength(2)
    
  })
})