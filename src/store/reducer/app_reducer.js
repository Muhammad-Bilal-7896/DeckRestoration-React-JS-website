const INITIAL_STATE = {
  SELL: {},
  GET_SELL: [],
  GET_BOOKMARKED:{},
  SET_KEY:"",
  SETCATEGORYBLOG:"",
  SETSEARCHEDDATA:[],
  SETCONDITION:true

}
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SETSELLDATA":
      return ({
        ...state,
        SELL: action.data
      })

    case "GETBLOGDATA":
      return ({
        ...state,
        GET_SELL: action.data
      })
    case "SETCURRENTKEY":
      return ({
        ...state,
        SET_KEY: action.data
      })
    case "GET_BOOKMARKED":
        return ({
          GET_BOOKMARKED: action.data
    })
    case "SETSELECTEDCATEGORY":
        return ({
          ...state,
          SET_CATEGORY: action.data
    })
    case "SETSELECTEDSUBCATEGORY":
        return ({
          ...state,
          SET_SUB_CATEGORY: action.data
    })
    case "SETSEARCHEDDATA":
      return ({
        ...state,
        SETSEARCHEDDATA: action.data
      })
      case "SETCONDITION":
      return ({
        ...state,
        SETCONDITION: action.data
      })
      case "SETCATEGORYBLOG":
        return ({
          ...state,
          SETCATEGORYBLOG: action.data
        })
  }
  return state;
}