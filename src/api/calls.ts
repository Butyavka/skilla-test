import axios from "axios";

const config = axios.create({
    baseURL: 'https://api.skilla.ru/mango',
    headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'application/json',
    }
})

const getList = (dateStart: string | null = null, dateEnd: string | null = null) => (
    config.post('getList', {}, {
        params: {
            date_start: dateStart,
            date_end: dateEnd
        }
    })
)

const getRecord = (record: string, partnershipId: string) => (
    config.post('getRecord', {}, {
        headers: {
            'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3'
        },
        responseType: 'arraybuffer',
        params: {
            record,
            partnership_id: partnershipId
        }} )
)

export {
    getRecord,
    getList
}