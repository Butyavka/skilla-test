
enum CALL_STATUS {
    SUCCESS = 'Дозвонился',
    FAIL = 'Не дозвонился'
}

type callStatus = CALL_STATUS.FAIL | CALL_STATUS.SUCCESS

interface Call {
    id: string;
    type: boolean;
    status: callStatus;
    dateAndTime: string;
    date: string;
    partnerPhone: string;
    toNumber: string;
    contactName?: string;
    contactCompany?: string;
    personAvatar: string;
    recordId: string;
    fromSite: boolean;
    source?: string;
    recordTime: string;
    time: string;
    partnershipId: string;
    formattedPhone: string;
}

export type {
    Call
}

export {
    CALL_STATUS
}