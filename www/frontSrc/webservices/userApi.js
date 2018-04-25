import axios from 'axios'
import {
  requestUser,
  requestUserSuccess,
  requestUserFail,
  requestEnabledNotif,
  requestEnabledNotifSuccess,
  requestEnabledNotifFail,
  requestDisabledNotif,
  requestDisabledNotifSuccess,
  requestDisabledNotifFail,
  requestAutologin,
  requestAutologinSuccess,
  requestAutologinFail,

} from '../Header/Actions/userActions'

const userUrl = './api/internal.php?object=centreon_topcounter&action=user'
const enableNotifUrl = './include/monitoring/status/Notifications/notifications_action.php?action=start'
const disableNotifUrl = './include/monitoring/status/Notifications/notifications_action.php?action=stop'
const autoLoginUrl = './index.php?p=1&autologin=1'

export function getUser() {
  return (dispatch) => {
    dispatch(requestUser())

    return axios.get(
      userUrl
    )
      .then(
        res => {
          dispatch(requestUserSuccess(res))
        }
      )
      .catch(
        err => {
          dispatch(requestUserFail(err))
        }
      )
  }
}

export function getEnabledSoundNotif() {
  return (dispatch) => {
    dispatch(requestEnabledNotif())

    return axios.get(
      enableNotifUrl
    )
      .then(
        res => {
          dispatch(requestEnabledNotifSuccess(res))
        }
      )
      .catch(
        err => {
          dispatch(requestEnabledNotifFail(err))
        }
      )
  }
}

export function getDisabledSoundNotif() {
  return (dispatch) => {
    dispatch(requestDisabledNotif())

    return axios.get(
      disableNotifUrl
    )
      .then(
        res => {
          dispatch(requestDisabledNotifSuccess(res))
        }
      )
      .catch(
        err => {
          dispatch(requestDisabledNotifFail(err))
        }
      )
  }
}

export function getaAutologin(username, token) {
  console.log(autoLoginUrl + '&useralias=' + username + '&token=' + token)
  return (dispatch) => {
    dispatch(requestAutologin())

    return axios.get(
      autoLoginUrl + '&useralias=' + username + '&token=' + token
    )
      .then(
        res => {
          dispatch(requestAutologinSuccess(res))
        }
      )
      .catch(
        err => {
          dispatch(requestAutologinFail(err))
        }
      )
  }
}