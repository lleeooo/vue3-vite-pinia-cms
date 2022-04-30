import instance from '..';
import { Iaccount, IDataType, ILoginResult } from './type';

//我们可以设置返回的数据的类型，方便我们进行使用，所以我们需要修改request的泛型 第二个才是我们需要改动的
export function accoutLogin(account: Iaccount) {
  return instance.request<any, IDataType<ILoginResult>>({
    url: '/login',
    method: 'POST',
    data: account,
  });
}

export function userInfo(id: number) {
  return instance.request<any, IDataType>({
    url: `/users/${id}`,
    method: 'get',
  });
}

export function userMenu(id: number) {
  return instance.request<any, IDataType>({
    url: `/role/${id}/menu`,
    method: 'get',
  });
}
