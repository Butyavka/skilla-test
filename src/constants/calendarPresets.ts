import moment from "moment";
import {FORMATS} from "./dateFormats";

interface DatePresets {
    id: number;
    title: string;
    date: {
        dateEnd: string;
        dateStart: string;
    }
}

const DEFAULT_DATE_PRESETS: DatePresets[] = [
    {
        id: 0,
        title: '3 дня',
        date: {
            dateEnd: moment().format(FORMATS.YYYY_MM_DD),
            dateStart: moment().subtract(3, 'days').format(FORMATS.YYYY_MM_DD)
        },
    },
    {
        id: 1,
        title: 'Неделя',
        date: {
            dateEnd: moment().format(FORMATS.YYYY_MM_DD),
            dateStart: moment().subtract(7, 'days').format(FORMATS.YYYY_MM_DD)
        }
    },
    {
        id: 2,
        title: 'Месяц',
        date: {
            dateEnd: moment().format(FORMATS.YYYY_MM_DD),
            dateStart: moment().subtract(1, 'month').format(FORMATS.YYYY_MM_DD)
        }
    },
    {
        id: 3,
        title: 'Год',
        date: {
            dateEnd: moment().format(FORMATS.YYYY_MM_DD),
            dateStart: moment().subtract(1, 'year').format(FORMATS.YYYY_MM_DD)
        }
    }
]

export {
    DEFAULT_DATE_PRESETS
}

export type {
    DatePresets
}