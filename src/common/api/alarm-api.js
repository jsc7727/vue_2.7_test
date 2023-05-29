import axios from '../plugins/axios';

export default {
  loadAlarmList(parameter) {
    const url = process.env.VUE_APP_OFFICE_ALARM_URL + `/notifications`;

    return axios.get(url, parameter);
  },

};
