import request from '../services/request';
//#region [GOAL]
export function getGoal(params: object) {
  return request({
    url: '/goal/search',
    method: 'get',
    params,
  });
}
export function createGoal(data: object) {
  return request({
    url: '/goal',
    method: 'post',
    data,
  });
}
//#endregion
//#region [GOAL TYPE]
export function FetchTypeGoal(params: object) {
  return request({
    url: '/goal-type/search',
    method: 'get',
    params,
  });
}
//#endregion
