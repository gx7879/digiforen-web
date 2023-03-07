import request from '@/utils/request';

export function activity(id) {
  return request({
    method: 'get',
    url: `api/activity/member/dashboard/${id}`,
  });
}
