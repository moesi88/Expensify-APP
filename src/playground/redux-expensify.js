import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// add expense
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    amount,
    note,
    createdAt
  }
})

// remove expense

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// edit expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// set text filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
// sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// set start date
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
})
// set end date
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
})
// Expenses reducers
const expensesReducerDefaultState = []
const expensesReducers = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// filter reducers
const filtersReducersDefaultState = {
  text: '',
  sortBy: 'date', /// date or amount ,
  startDate: undefined,
  endDate: undefined
}
const filtersReducers = (state = filtersReducersDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

/// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt >= endDate
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    })
}

/// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filtersReducers
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpense)
})

const expenseOne = store.dispatch(
  addExpense({ description: 'rent', amount: 100, createdAt: -21000 })
)
const expenseTwo = store.dispatch(
  addExpense({ description: 'coffee', amount: 1200, createdAt: -1000 })
)

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter('co'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(-1001))

const demoState = {
  expenses: [
    {
      id: 'apsdqwe',
      description: 'Jan rent',
      note: 'this was the final payment for tht address',
      amount: 54012,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', /// date or amount ,
    startDate: undefined,
    endDate: undefined
  }
}
