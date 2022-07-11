import axios from "axios";
import mock from "./mock.json"

const url = "http://localhost:5000"

export async function getDiserts(query) {
    // return mock;
    try {
        const res = await axios.get(url, { params: { q: query, keyFilter: true } });

        const data = JSON.parse(res.data);
        if (!data.length) {
            let isConfirmed = window.confirm('Результат не найден. Проверь на сайте и повтори поиск!');
            if (isConfirmed) {
                var win = window.open('https://www.dissercat.com/search', '_blank');
                // win.focus();
            }
        }
        return data;
    } catch (error) {
        console.log(error)
    }

    return [];
}