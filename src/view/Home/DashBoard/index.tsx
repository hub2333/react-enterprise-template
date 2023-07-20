import React, {useEffect, useState} from 'react';
import './index.less';
import axios from 'axios';
import { DashboardDataResponse } from '@/api/dashboard-api/types/monitor-info';
// 需要引入mock文件，才可以实现Mock
import '@/mock/api'

import {Card} from '@/components';

const Dashboard = () => {


    const [data, setData] = useState<DashboardDataResponse>();

    useEffect(() => {
        axios.get('/mock/queryDashBoard')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return (
        <div className='home-one-root'>
            <div className='fix-card'>
                <Card>
                    <span>{data?.onlineCount} </span>
                </Card>
                <Card>
                    {data?.offlineCount}
                </Card>
                <Card>
                    {data?.curQps}
                </Card>
                <Card>
                    {data?.tps}
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
