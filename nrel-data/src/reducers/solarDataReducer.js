import { fetchSolarData } from '../actions'

const initialState = {
    inProgress: false,
    severError: {},
    solarData: {},
}

export const solarDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case fetchSolarData.pending.toString():
            return {
                ...state,
                inProgress: true,
            }
        case fetchSolarData.fulfilled.toString():
            return {
                ...state,
                solarData: payload,
                inProgress: false,
            }
        case fetchSolarData.rejected.toString():
            return {
                ...state,
                serverError: payload,
                inProgress: false,
            }

        default: 
            return state
    }
}