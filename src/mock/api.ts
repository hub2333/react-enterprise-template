import Mock from 'mockjs'
import RandomUtil from '@/utils/Util';

export default Mock.mock('/mock/queryDashBoard', (Option) => {

    console.log("enter mock, " + Option.url)
    const curve : Number[] = [];

    for(let i = 0 ; i < 100 ; i++){
        curve.push(RandomUtil.range(600, 1000))    
    }

    return Mock.mock({
        onlineCount : RandomUtil.range(50, 100),
        offlineCount : RandomUtil.range(5, 20),
        curQps : RandomUtil.range(600, 1000),
        tps : RandomUtil.range(200, 400),
        qpsCurve : curve
        
    })

});

 