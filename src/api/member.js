import request from '@/utils/request';

export function memberData() {
  return request({
    method: 'get',
    url: '/api/member/data',
  });
}

export function memberNameEdit(data) {
  return request({
    method: 'post',
    url: '/api/member/update',
    data,
  });
}
