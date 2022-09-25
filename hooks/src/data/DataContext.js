import { createContext } from 'react'

export const data = {
    number: 123,
    text: 'Context API...'
}

const DataContext = createContext()
export default DataContext