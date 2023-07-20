export interface DashboardDataResponse {
    onlineCount: number | null;
    offlineCount: number | null;
    curQps: number | null;
    tps: number | null;
    qpsCurve : QpsPoint[] | null;
}

export interface QpsPoint {
    time: string;
    qps: number;
}

