import { createAsyncAction} from 'redux-promise-middleware-actions'

import { getSolarData } from '../api'


export const fetchSolarData = createAsyncAction("FETCH_SOLAR_DATA", getSolarData)


