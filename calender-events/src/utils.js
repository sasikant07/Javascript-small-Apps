import { DAYS } from "./consts";

export const range = (end) => {
    const {result} = Array.from({length: end}).reduce(({result, current}) => ({
        result: [...result, current],
        current: current + 1
    }), {result: [], current: 1});

    return result;
}

export const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
}

// export const getDaysInMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// }

export const sortDays = (date) => {
    const dayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const sortedDays = [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
    return sortedDays;
}

export const getSortedDays = (month, year) => {
    const dayIndex = new Date(year, month, 1).getDay();
    return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
}

export const getDateObj = (day, month, year) => {
    return new Date(year, month, day);
}

export const areDatesTheSame = (first, second) => {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    )
}

export const getMonthYear = (date) => {
    const d = date.toDateString().split(" ");
    return `${d[1]} ${d[3]}`; 
}

export const nextMonth = (date, cb) => {
    const month = date.getMonth();
    if (month < 11) {
        date.setMonth(month + 1);
    } else {
        date.setMonth(0);
        date.setFullYear(date.getFullYear() + 1);
    }

    cb(new Date(date));
}

export const prevMonth = (date, cb) => {
    const month = date.getMonth();
    if (month > 0) {
        date.setMonth(month - 1);
    } else {
        date.setMonth(11);
        date.setFullYear(date.getFullYear() - 1);
    }

    cb(new Date(date));
}

export const getRandomDarkColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}

// export const getSortedDay = (date) => {
//     const daysInMonth = range(getDaysInMonth(date));
//     const index = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

//     return [...Array(index === 0 ? 6 : index - 1), ...daysInMonth]
// }