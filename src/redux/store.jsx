import {configureStore, combineReducers} from 'redux'
import reducerAddBooks from './reducers/reducerAddBooks'


const rootreducer = combineReducers({
    library: reducerAddBooks
})

const store = configureStore()

export default store