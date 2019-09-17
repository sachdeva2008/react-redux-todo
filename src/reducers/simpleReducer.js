/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'DATA_SET':        
      return { ...state, dataset: action.payload};
    default:
      return state
  }
}
