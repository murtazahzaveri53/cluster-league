import { MATCHES_FETCH_SUCCESS, TEAMS_FETCH_SUCCESS,STATS_FETCH_SUCCESS } from '../actions/actions';
const initialState = {
    matches: [],
    teams: [],
    stats:[]
  };
  
  const handlers = {
  
    [MATCHES_FETCH_SUCCESS]: (state, action) => ({
      matches: action.matches
    }),
    [TEAMS_FETCH_SUCCESS]: (state, action) => ({
        teams: action.teams
    }),
    [STATS_FETCH_SUCCESS]: (state, action) => ({
        stats: action.stats
    })
  };
  
  export default function indexReducer (state = initialState, action) {
    let handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
  }