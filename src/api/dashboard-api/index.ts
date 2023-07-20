import request from '../request';
import {DashboardDataResponse} from './types/monitor-info';

/**
 * @function get
 * @description 请求测试
 */

export function queryDashBoard() {
    return request<DashboardDataResponse>({
        url: ' /queryDashBoard',
    });
}
