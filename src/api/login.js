import request from '@/utils/request';

export function login(data) {
  return request({
    method: 'post',
    url: '/api/member/login',
    data,
  });
}
